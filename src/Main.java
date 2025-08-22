package aquapredict;

import aquapredict.analysis.RiskScorer;
import aquapredict.analysis.TrendPredictor;
import aquapredict.model.RiskAssessment;
import aquapredict.model.TrendSummary;
import aquapredict.model.WaterReading;
import aquapredict.sim.WaterSimulator;

import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<String> waterBodies = Arrays.asList(
                "Lake Serene",
                "River Swift",
                "Reservoir Azure"
        );

        RiskScorer riskScorer = new RiskScorer();
        TrendPredictor trendPredictor = new TrendPredictor();
        DateTimeFormatter fmt = DateTimeFormatter.ofPattern("yyyy-MM-dd");

        System.out.println("=== AquaPredict (Simulated) ===");
        for (String name : waterBodies) {
            WaterSimulator sim = new WaterSimulator(name);
            List<WaterReading> readings = sim.generateRecentReadings(7);
            WaterReading latest = readings.get(readings.size() - 1);

            RiskAssessment assessment = riskScorer.score(latest);
            TrendSummary trends = trendPredictor.summarizeTrends(readings);

            System.out.println("Water Body: " + name);
            System.out.println("Latest Reading: pH=" + latest.getPH() + ", DO=" + latest.getDissolvedOxygenMgL() + " mg/L, Turbidity=" + latest.getTurbidityNTU() + " NTU (" + latest.getDate().format(fmt) + ")");
            System.out.println("Risk Score: " + assessment.getRiskScore() + " (" + assessment.getRiskLevel() + ")");
            System.out.println("3-day Trend: pH=" + trends.getPHTrend() + ", DO=" + trends.getDOTrend() + ", Turbidity=" + trends.getTurbidityTrend());
            System.out.println();
        }
    }
}


