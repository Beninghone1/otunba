# retry_failed_trends.py

from pytrends.request import TrendReq
import pandas as pd
from datetime import datetime
import time
import os

def retry_failed_trends(failures, geo="US", cooldown=74):
    """
    Retry fetching Google Trends for specific (keyword, year) failures.

    Parameters:
    - failures (list): List of (keyword, year) tuples that failed
    - geo (str): Google Trends region
    - cooldown (float): Sleep between requests

    Returns:
    - DataFrame with all recovered signals
    """
    pytrends = TrendReq(hl='en-US', tz=360)
    df_retry = pd.DataFrame()

    for kw, year in failures:
        start = f"{year}-01-01"
        end = f"{year}-12-31"
        print(f"🔁 Retrying: {kw} ({year})")

        try:
            pytrends.build_payload([kw], timeframe=f"{start} {end}", geo=geo)
            df = pytrends.interest_over_time()
            df = df.drop(columns="isPartial", errors="ignore")
            if kw in df.columns:
                if kw not in df_retry.columns:
                    df_retry[kw] = df[kw]
                else:
                    df_retry = df_retry.combine_first(df[[kw]])
        except Exception as e:
            print(f"❌ Still failed: {kw} ({year}) → {e}")
        
        time.sleep(cooldown)

    df_retry.index = pd.to_datetime(df_retry.index)
    df_retry = df_retry.sort_index()
    return df_retry