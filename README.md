## AquaPredict Java Prototype (Simulated Data Only)

This is a fast, console-only demo that pretends to monitor a few water bodies by generating fake but realistic readings and producing a simple risk score and 3-day trend prediction.

### What it does
- Generates simulated readings for: pH, dissolved oxygen (mg/L), turbidity (NTU)
- Computes a single risk score (0–100) and a qualitative risk level
- Predicts a 3-day trend per metric: Improving / Declining / Stable
- Runs entirely in the console (no IoT, no server)

### Requirements
- Java 17+ (older may work, but this was written with modern syntax in mind)
- Windows: run the included `scripts/run.cmd`

### Quick start (Windows)
1. Double-click `scripts/run.cmd` or run it from a terminal.
2. You should see simulated outputs for multiple water bodies.

### Manual run (any OS)
```bash
javac -d out src/aquapredict/**/*.java src/Main.java
java -cp out aquapredict.Main
```

### Notes
- Data is randomly simulated but seeded per water body name to be reproducible across runs.
- Risk scoring is intentionally simple and explainable.
- Trend is inferred by a basic linear fit over the last few days; the next 3 days are summarized as Improving / Declining / Stable per metric.

### Sample Output
```
=== AquaPredict (Simulated) ===
Water Body: Lake Serene
Latest Reading: pH=7.2, DO=8.1 mg/L, Turbidity=5.4 NTU (2025-08-19)
Risk Score: 18 (Low)
3-day Trend: pH=Stable, DO=Improving, Turbidity=Stable

Water Body: River Swift
Latest Reading: pH=6.6, DO=5.8 mg/L, Turbidity=14.2 NTU (2025-08-19)
Risk Score: 52 (Moderate)
3-day Trend: pH=Declining, DO=Stable, Turbidity=Improving
```


