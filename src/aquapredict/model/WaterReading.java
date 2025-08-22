package aquapredict.model;

import java.time.LocalDate;

public class WaterReading {
    private final String waterBodyName;
    private final LocalDate date;
    private final double pH;
    private final double dissolvedOxygenMgL;
    private final double turbidityNTU;

    public WaterReading(String waterBodyName, LocalDate date, double pH, double dissolvedOxygenMgL, double turbidityNTU) {
        this.waterBodyName = waterBodyName;
        this.date = date;
        this.pH = pH;
        this.dissolvedOxygenMgL = dissolvedOxygenMgL;
        this.turbidityNTU = turbidityNTU;
    }

    public String getWaterBodyName() { return waterBodyName; }
    public LocalDate getDate() { return date; }
    public double getPH() { return pH; }
    public double getDissolvedOxygenMgL() { return dissolvedOxygenMgL; }
    public double getTurbidityNTU() { return turbidityNTU; }
}


