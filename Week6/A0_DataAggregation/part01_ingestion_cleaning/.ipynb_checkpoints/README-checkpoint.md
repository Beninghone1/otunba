part01_ingestion_cleaning/
├── data/
│   ├── raw/                             # Unprocessed downloads & API pulls
│   ├── cleaned/                         # Aligned, filtered, deduplicated CSVs
│   └── processed/                       # Final outputs used for modeling or EDA
│
├── scripts/
│   ├── fetch_yahoo.py                   # Pulls stock/index/ETF data
│   ├── fetch_fred.py                    # Macroeconomic data
│   ├── fetch_sentiment.py               # WSB, Google Trends, etc.
│   └── clean_merge_data.py              # Aligns dates, fills missing, merges
│
├── notebooks/
│   └── pendle_data_aggregation.ipynb    # Main notebook to test pipeline end-to-end
│
└── logs/                                # (optional) Track API pulls, failed dates