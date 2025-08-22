package aquapredict.analysis;

import aquapredict.model.TrendSummary;
import aquapredict.model.WaterReading;

import java.util.List;

public class TrendPredictor {

    public TrendSummary summarizeTrends(List<WaterReading> readings) {
        if (readings.size() < 2) {
            return new TrendSummary("Stable", "Stable", "Stable");
        }
        double[] x = new double[readings.size()];
        double[] pH = new double[readings.size()];
        double[] dO = new double[readings.size()];
        double[] turb = new double[readings.size()];

        for (int i = 0; i < readings.size(); i++) {
            x[i] = i;
            pH[i] = readings.get(i).getPH();
            dO[i] = readings.get(i).getDissolvedOxygenMgL();
            turb[i] = readings.get(i).getTurbidityNTU();
        }

        String pHTrend = classifySlope(slope(x, pH), 0.01);
        String doTrend = classifySlope(slope(x, dO), 0.03);
        String turbTrend = classifySlope(slope(x, turb), 0.05);

        return new TrendSummary(pHTrend, doTrend, turbTrend);
    }

    private String classifySlope(double m, double epsilon) {
        if (m > epsilon) return "Improving";
        if (m < -epsilon) return "Declining";
        return "Stable";
    }

    private double slope(double[] x, double[] y) {
        int n = x.length;
        double sumX = 0, sumY = 0, sumXY = 0, sumXX = 0;
        for (int i = 0; i < n; i++) {
            sumX += x[i];
            sumY += y[i];
            sumXY += x[i] * y[i];
            sumXX += x[i] * x[i];
        }
        double numerator = n * sumXY - sumX * sumY;
        double denominator = n * sumXX - sumX * sumX;
        if (denominator == 0) return 0.0;
        return numerator / denominator;
    }
}


