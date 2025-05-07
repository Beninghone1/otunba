**Trending Topics Analysis for Lakaka French Cat Meme Lore**

Overview

This document is part of a private repository for analyzing social media trends related to the "Lakaka French cat meme lore" project. It identifies key social media platforms, lists trending topics, and generates keyword searches for deterministic (non-stochastic) test runs to study meme propagation dynamics. The analysis leverages configuration parameters from config_lakaka_french_cat_meme_lore_20250423_160342.json to simulate trends with properties such as burstiness, semantic_drift, and shock.

The Python script generator.py (included below) implements the analysis, producing outputs like keyword searches, a trend simulation plot, and metadata. This Markdown file serves as documentation for the script and its outputs.

Objectives

Identify relevant social media platforms for meme trend analysis.

Document current trending topics based on recent data (April 29-30, 2025).

Generate keyword searches for reproducible test runs, reflecting config parameters.

Simulate trend analysis using deterministic methods to ensure consistent results.

Repository Setup


Private Repository: Hosted on GitHub (or similar), with restricted access to team members.



Structure:

notebooks/: Contains analysis notebooks (if any).

scripts/: Contains generator.py.

configs/: Stores configuration files (e.g., config_lakaka_french_cat_meme_lore_*.json).

data/: Stores output data (e.g., CSV files, plots).

Dependencies: Install via pip install pandas matplotlib numpy.



Running the Script: Execute python scripts/generator.py to generate outputs in data/.

Social Media Platforms

Based on recent web research, the following platforms are key for tracking meme trends:

X: Real-time trending topics and hashtags, ideal for burstiness analysis.

Instagram: Visual content and hashtags, useful for semantic_drift in meme captions.

TikTok: Short-form videos```python import pandas as pd import numpy as np import matplotlib.pyplot as plt import os from datetime import datetime

Ensure output directory exists

os.makedirs('data', exist_ok=True)

Set random seed for deterministic results

np.random.seed(42)

Configuration parameters (from config_lakaka_french_cat_meme_lore_20250423_160342.json)

config = { 'imbalance': 0.3, 'noise': 0.7, 'drift': 0.5, 'shock': False, 'burstiness': 0.8, 'regime_complexity': 2, 'semantic_drift': 0.6, 'n_features': 200 }

Social media platforms

platforms = ['X', 'Instagram', 'TikTok', 'Reddit', 'YouTube', 'Pinterest']

**Trending topics and associated keywords**

trending_topics = [ {'topic': 'Ekaki horror-comedy', 'keywords': ['ekaki', 'ashish chanchlani', 'horror comedy', 'youtube meme'], 'platform': 'YouTube'}, {'topic': 'Kim Seokjin Run Jin', 'keywords': ['run jin', 'kim seokjin', 'jin wick', 'bts meme'], 'platform': 'TikTok'}, {'topic': 'Deepika in King', 'keywords': ['deepika padukone', 'king movie', 'shah rukh khan', 'bollywood meme'], 'platform': 'Instagram'}, {'topic': 'Arsenal Bring Everything', 'keywords': ['arsenal', 'bring everything', 'football meme', 'cringe meme'], 'platform': 'X'}, {'topic': 'Purple aesthetics', 'keywords': ['purple aesthetic', 'purple meme', 'purple shampoo', 'visual meme'], 'platform': 'TikTok'} ]

**Generate keyword searches for test runs**

def generate_keyword_searches(topics, config): searches = [] for topic in topics: base_keywords = topic['keywords'] # Adjust keywords based on semantic_drift (add related terms) if config['semantic_drift'] > 0.5: base_keywords += [f"{kw} trend" for kw in base_keywords[:2]] # Add trend-related terms # Adjust for burstiness (prioritize high-impact terms) if config['burstiness'] > 0.7: base_keywords = [kw.upper() for kw in base_keywords] # Simulate high-impact searches searches.append({ 'topic': topic['topic'], 'platform': topic['platform'], 'keywords': base_keywords }) return searches

Simulate trend analysis (deterministic)

def simulate_trend_data(config, n_points=100): t = np.linspace(0, 10, n_points) # Base trend (logistic growth to simulate meme popularity) trend = 100 / (1 + np.exp(-0.5 * (t - 5))) # Add noise noise = config['noise'] * np.random.normal(0, 10, n_points) # Deterministic with fixed seed # Add burstiness (sudden spikes) if config['burstiness'] > 0.7: spike_indices = [20, 50, 80] trend[spike_indices] += 50 * config['burstiness'] # Add drift drift = config['drift'] * t * 5 return t, trend + noise + drift

Run analysis

keyword_searches = generate_keyword_searches(trending_topics, config)

Save keyword searches to CSV

search_df = pd.DataFrame([ {'topic': s['topic'], 'platform': s['platform'], 'keyword': kw} for s in keyword_searches for kw in s['keywords'] ]) search_df.to_csv('data/keyword_searches.csv', index=False)

Simulate and plot trend data

t, trend_data = simulate_trend_data(config)

plt.figure(figsize=(10, 6)) plt.plot(t, trend_data, label='Simulated Trend (Popularity)', color='b') plt.title('Simulated Meme Trend with Burstiness and Drift') plt.xlabel('Time') plt.ylabel('Popularity') plt.grid(True) plt.legend() plt.savefig('data/trend_simulation.png') plt.close()

Display results

print('Social Media Platforms:', platforms) print('\nTrending Topics:') for topic in trending_topics: print(f'- {topic["topic"]} ({topic["platform"]})') print('\nKeyword Searches for Test Runs:') for search in keyword_searches: print(f'- Topic: {search["topic"]}, Platform: {search["platform"]}, Keywords: {search["keywords"]}')

Save metadata

metadata = { 'created': str(datetime.now()), 'config_file': 'config_lakaka_french_cat_meme_lore_20250423_160342.json', 'platforms_analyzed': platforms, 'trending_topics': [t['topic'] for t in trending_topics] } pd.Series(metadata).to_json('data/notebook_metadata.json')

This script generates the following outputs in the `data/` directory:
- `keyword_searches.csv`: Contains 30 keyword searches across five trending topics, with uppercase keywords (due to **burstiness=0.8**) and trend-related terms (due to **semantic_drift=0.6**).
- `trend_simulation.png`: A plot showing a logistic growth curve with three spikes (at `t ≈ 2, 5, 8`) due to **burstiness**, noisy fluctuations due to **noise=0.7**, and linear upward drift due to **drift=0.5**.
- `notebook_metadata.json`: Metadata documenting the run, including timestamp, config file, platforms, and topics.

### Example Outputs
- **keyword_searches.csv** (excerpt):
  ```csv
  topic,platform,keyword
  Ekaki horror-comedy,YouTube,EKAKI
  Ekaki horror-comedy,YouTube,ASHISH CHANCHLANI
  Ekaki horror-comedy,YouTube,HORROR COMEDY
  Ekaki horror-comedy,YouTube,YOUTUBE MEME
  Ekaki horror-comedy,YouTube,EKAKI TREND
  Ekaki horror-comedy,YouTube,ASHISH CHANCHLANI TREND
  ...

  trend_simulation.png: A line plot with:

X-axis: Time (0 to 10).

Y-axis: Popularity (~0 to ~150).

Features: Sigmoid growth, three spikes, noisy fluctuations, and linear drift.

notebook_metadata.json (example):

{
  "created": "2025-04-30T12:00:00",
  "config_file": "config_lakaka_french_cat_meme_lore_20250423_160342.json",
  "platforms_analyzed": ["X", "Instagram", "TikTok", "Reddit", "YouTube", "Pinterest"],
  "trending_topics": [
    "Ekaki horror-comedy",
    "Kim Seokjin Run Jin",
    "Deepika in King",
    "Arsenal Bring Everything",
    "Purple aesthetics"
  ]
}

Results


Keyword Searches: Saved to data/keyword_searches.csv. Keywords are tailored to high burstiness (uppercase for emphasis) and semantic_drift (trend-related terms).



Trend Simulation: Plot saved to data/trend_simulation.png, showing popularity with spikes (due to burstiness=0.8) and gradual increase (due to drift=0.5).



Metadata: Saved to data/notebook_metadata.json for reproducibility.

