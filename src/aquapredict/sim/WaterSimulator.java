package aquapredict.sim;

import aquapredict.model.WaterReading;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class WaterSimulator {
    private final String waterBodyName;
    private final Random random;

    public WaterSimulator(String waterBodyName) {
        this.waterBodyName = waterBodyName;
        this.random = new Random(waterBodyName.hashCode());
    }

    public List<WaterReading> generateRecentReadings(int days) {
        List<WaterReading> readings = new ArrayList<>();
        LocalDate today = LocalDate.now();

        double pH = 7.0 + (random.nextDouble() - 0.5) * 0.6; // center ~7
        double doMgL = 8.0 + (random.nextDouble() - 0.5) * 2.0; // center ~8
        double turbNTU = 6.0 + (random.nextDouble() - 0.5) * 6.0; // center ~6

        double pHDrift = (random.nextDouble() - 0.5) * 0.06;
        double doDrift = (random.nextDouble() - 0.5) * 0.3;
        double turbDrift = (random.nextDouble() - 0.5) * 0.6;

        for (int i = days - 1; i >= 0; i--) {
            LocalDate date = today.minusDays(i);

            pH += pHDrift + (random.nextDouble() - 0.5) * 0.05;
            doMgL += doDrift + (random.nextDouble() - 0.5) * 0.2;
            turbNTU += turbDrift + (random.nextDouble() - 0.5) * 0.5;

            double clampedPH = Math.max(5.5, Math.min(8.8, pH));
            double clampedDO = Math.max(2.0, Math.min(12.0, doMgL));
            double clampedTurb = Math.max(0.5, Math.min(80.0, turbNTU));

            readings.add(new WaterReading(waterBodyName, date, round1(clampedPH), round1(clampedDO), round1(clampedTurb)));
        }

        return readings;
    }

    private static double round1(double v) {
        return Math.round(v * 10.0) / 10.0;
    }
}


