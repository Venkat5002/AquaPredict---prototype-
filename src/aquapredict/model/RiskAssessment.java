package aquapredict.model;

public class RiskAssessment {
    private final int riskScore; // 0-100
    private final String riskLevel; // Low / Moderate / High

    public RiskAssessment(int riskScore, String riskLevel) {
        this.riskScore = riskScore;
        this.riskLevel = riskLevel;
    }

    public int getRiskScore() { return riskScore; }
    public String getRiskLevel() { return riskLevel; }
}


