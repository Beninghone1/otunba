📁 sim_data/ — Simulated Economic Data for Rare Event Modeling

This folder contains tools and datasets that simulate diverse economic environments, allowing anyone—from hobbyist to researcher—to experiment with rare event prediction without using real or private data.

🧠 Why It Matters

Predicting rare events like financial stress or market crashes is notoriously difficult. Real-world data is scarce, noisy, and ethically tricky to work with. This sandbox offers:
	•	Zero-risk training data for ML models
	•	A way to reverse-engineer causes of events without violating data privacy
	•	A safe way to play like a policymaker or forecaster, while maintaining reproducibility

⸻

📂 Folder Structure

market_shock_datasets/

Synthetic CSV files simulating rare market events (shocks, stress) across difficulty levels:
	•	easy_s*.csv: Clear signals with lower noise
	•	medium_s*.csv: Moderate confounding factors
	•	hard_s*.csv: Subtle patterns, closer to real-world complexity
	•	extreme_s*.csv: Volatile environments meant to test model robustness

Each file includes:
	•	15+ anonymized features (e.g., feature_0, feature_1, …)
	•	A rare_event binary target (1 if market stress occurs)

synthetic_datasets/

Alternate scenarios and variations for different prediction goals:
	•	stock_prediction_clean.csv: Simulated historical stock prediction data
	•	market_shock_sim.csv: Baseline mixed shock simulator

⸻

🧪 Notebooks & Generators

Notebook	                    Purpose
training_data_generator.ipynb	Launchpad for generating a variety of synthetic datasets
ShockSynth_WithLevels.ipynb	    Specialized generator for creating graded market stress environments
Stockpocalypse.ipynb	        Imaginative generator for catastrophic market collapse scenarios

🛠 Script Utilities:
	•	synthetic_generator.py / core.py: Logic to construct datasets using feature modules
	•	MarketSimGenerators.py: Functions for injecting volatility, macro noise, and engineered event likelihood

⸻