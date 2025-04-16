# fetch_fred.py

from fredapi import Fred
import pandas as pd
from datetime import datetime
import os

# 🔑 Import FRED API key from your config file
from config import FRED_API_KEY

def fetch_fred_series(series_ids, start="2000-01-01", end=None, save_path=None):
    """
    Fetch macroeconomic data from FRED for a list of series.

    Parameters:
    - series_ids (dict): Dictionary mapping {label: fred_series_id}
    - start (str): Start date (YYYY-MM-DD)
    - end (str): End date (defaults to today)
    - save_path (str, optional): If provided, saves output to CSV

    Returns:
    - DataFrame with time-indexed columns per macro indicator
    """
    if end is None:
        end = datetime.today().strftime("%Y-%m-%d")

    fred = Fred(api_key=FRED_API_KEY)
    df = pd.DataFrame()

    print(f"📊 Fetching FRED series from {start} to {end}...")

    for label, fred_id in series_ids.items():
        print(f"   → {label} ({fred_id})")
        series = fred.get_series(fred_id, observation_start=start, observation_end=end)
        df[label] = series

    df.index = pd.to_datetime(df.index)
    df = df.sort_index()

    if save_path:
        os.makedirs(os.path.dirname(save_path), exist_ok=True)
        df.to_csv(save_path)
        print(f"✅ Saved FRED data to {save_path}")

    return df

# ✅ CLI test run (useful for debugging outside the notebook)
if __name__ == "__main__":
    series_ids = {
        "GDP": "GDP",
        "Unemployment": "UNRATE",
        "Inflation": "CPILFESL",
        "Interest Rate": "FEDFUNDS",
        "Consumer Sentiment": "UMCSENT",
        "Bond Yields": "GS10"
    }
    fetch_fred_series(
        series_ids,
        start="2000-01-01",
        save_path="../data/raw/fred_macro_data.csv"
    )