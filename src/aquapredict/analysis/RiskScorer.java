package aquapredict.analysis;

import aquapredict.model.RiskAssessment;
import aquapredict.model.WaterReading;

public class RiskScorer {

    public RiskAssessment score(WaterReading reading) {
        double pHScore = scorePH(reading.getPH());
        double doScore = scoreDO(reading.getDissolvedOxygenMgL());
        double turbScore = scoreTurbidity(reading.getTurbidityNTU());

        int total = (int) Math.round((pHScore + doScore + turbScore) / 3.0);
        String level = total < 34 ? "Low" : (total < 67 ? "Moderate" : "High");
        return new RiskAssessment(total, level);
    }

    private double scorePH(double pH) {
        if (pH >= 6.8 && pH <= 8.2) return 10;
        double distance = Math.min(Math.abs(pH - 6.8), Math.abs(pH - 8.2));
        double score = Math.min(100.0, 10 + distance * 30.0);
        return score;
    }

    private double scoreDO(double doMgL) {
        if (doMgL >= 7.0) return 10;
        double shortfall = 7.0 - doMgL;
        double score = Math.min(100.0, 10 + shortfall * 15.0);
        return score;
    }

    private double scoreTurbidity(double turbNTU) {
        if (turbNTU <= 5.0) return 10;
        double excess = turbNTU - 5.0;
        double score = Math.min(100.0, 10 + excess * 4.0);
        return score;
    }
}


