# fetch_yahoo.py

import yfinance as yf
import pandas as pd
import os
from datetime import datetime

def fetch_market_data(tickers=None, start="2000-01-01", end=None, save_path=None):
    """
    Fetch market data using yfinance and return as a cleaned DataFrame.

    Parameters:
    - tickers (list of str): Ticker symbols to pull.
    - start (str): Start date (YYYY-MM-DD).
    - end (str): End date (YYYY-MM-DD). Defaults to today.
    - save_path (str, optional): If provided, saves DataFrame to CSV.

    Returns:
    - DataFrame with multi-column structure: e.g., Adj Close_^GSPC
    """
    if tickers is None:
        tickers = ["^GSPC", "^IXIC", "^VIX", "BTC-USD"]
    
    if end is None:
        end = datetime.today().strftime('%Y-%m-%d')
    
    print(f"📥 Fetching data from Yahoo Finance: {tickers}")
    raw = yf.download(tickers, start=start, end=end, progress=False, group_by='ticker', auto_adjust=False)
    
    # Flatten column structure
    if isinstance(raw.columns, pd.MultiIndex):
        raw.columns = [f"{col}_{ticker}" for ticker, col in raw.columns]
    
    # Drop columns with all NaNs
    raw.dropna(axis=1, how='all', inplace=True)
    
    # Save if requested
    if save_path:
        os.makedirs(os.path.dirname(save_path), exist_ok=True)
        raw.to_csv(save_path)
        print(f"✅ Saved Yahoo data to {save_path}")
    
    return raw

# CLI Test Run (only if run as script)
if __name__ == "__main__":
    df = fetch_market_data(save_path="data/raw/yahoo_market_data.csv")
    print(df.head())