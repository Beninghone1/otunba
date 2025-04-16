# 🧬 rare_event_v2

A modular, evolution-based system for robust rare event classification across synthetic datasets with varying levels of imbalance, noise, and drift.

---

## 📁 Project Structure

```plaintext
rare_event_v2/
│
├── synthetic_datasets/                  # 🧪 Diverse CSVs: different drift, imbalance, noise
│   ├── baseline_easy_w5_n5_d0.csv
│   ├── noisy_overlap_w2_n20_d0.csv
│   ├── high_drift_w3_n10_d60.csv
│   ├── imbalanced_sparse_w0_n10_d10.csv
│   └── mixed_realistic_w4_n15_d30.csv
│
├── models/                              # 🧠 Model definitions
│   ├── base_models.py                   # All ElasticNet variants
│   └── models.py                        # make_model() factory
│
├── utils/                               # 🛠 Reusable functions
│   ├── resampling.py                    # All resamplers + get_resamplers()
│   ├── scoring.py                       # PR AUC, ROC AUC, confusion matrix, etc.
│   └── breeding.py                      # (Optional) Crossover, mutation logic
│
├── logs/                                # 📊 Experimental results
│   ├── leaderboard.csv                  # Ranked scores (model × resampler × dataset)
│   └── model_scores.json                # Full result history
│
├── notebooks/                           # 📓 Playground notebooks
│   ├── EDA_Synthetic_Visualization.ipynb  # Visualize distributions, balance, PCA
│   └── Arena_Test_Runs.ipynb             # Try model/resampler combos manually
│
├── SyntheticDataGenerator.py           # 🔬 Class to make synthetic datasets
├── synthetic_generator.py              # ⚙️ Helper to run generator & save CSVs
│
├── RareEvent_BreedAndBattle_WithArena.ipynb  # ⚔️ Main arena loop: test models × resamplers × datasets
├── arena_upgrade_cell.py               # 🧩 Drop-in evaluation cell for quick testing
│
└── README.md                           # 📘 Overview and instructions
```

---

## ✅ Core Concepts

- **SyntheticRareEventGenerator**: Class to procedurally generate classification datasets with configurable imbalance, drift, and noise.
- **ElasticNet model variants**: Multiple models generated using `make_model()` with varied hyperparameters.
- **Resamplers**: Includes SMOTE, ADASYN, manual upsampling, and more.
- **Battle Arena**: Main notebook where models and resamplers are run across datasets and scored.
- **Breeding logic**: Optional module for evolutionary search.
- **Logging**: Tracks performance in `leaderboard.csv` and `model_scores.json`.

---

## 🚀 How To Run

1. **Generate synthetic data**:
   - Run `training_data_generator.ipynb` or
   - Call `generate_and_save_csv()` in `synthetic_generator.py`

2. **Explore datasets**:
   - Use `EDA_Synthetic_Visualization.ipynb`

3. **Test models/resamplers**:
   - Use `Arena_Test_Runs.ipynb`

4. **Full evaluation**:
   - Run `RareEvent_BreedAndBattle_WithArena.ipynb`

---

Let the rare event battles begin! ⚔️
