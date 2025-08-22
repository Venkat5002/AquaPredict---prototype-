package aquapredict.model;

public class TrendSummary {
    private final String pHTrend; // Improving / Declining / Stable
    private final String doTrend;
    private final String turbidityTrend;

    public TrendSummary(String pHTrend, String doTrend, String turbidityTrend) {
        this.pHTrend = pHTrend;
        this.doTrend = doTrend;
        this.turbidityTrend = turbidityTrend;
    }

    public String getPHTrend() { return pHTrend; }
    public String getDOTrend() { return doTrend; }
    public String getTurbidityTrend() { return turbidityTrend; }
}


