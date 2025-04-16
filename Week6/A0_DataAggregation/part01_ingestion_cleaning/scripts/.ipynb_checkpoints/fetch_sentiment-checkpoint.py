from pytrends.request import TrendReq
import pandas as pd
from datetime import datetime
import os
import time

def fetch_google_trends_by_year(keywords, start_year=2004, end_year=None, geo="US", save_path=None, batch_size=2, cooldown=3):
    """
    Fetch Google Trends data with daily granularity by slicing each keyword into yearly chunks.

    Parameters:
    - keywords (list): List of search terms
    - start_year (int): Starting year (default: 2004)
    - end_year (int): Ending year (default: current year)
    - geo (str): Geographic region (default: "US")
    - save_path (str): Optional path to save the final DataFrame
    - batch_size (int): Number of keywords to query at once (1–5 max)
    - cooldown (float): Seconds to wait between requests

    Returns:
    - Tuple: (DataFrame of sentiment signals, List of (keyword, year) pairs that failed)
    """
    pytrends = TrendReq(hl='en-US', tz=360)
    if end_year is None:
        end_year = datetime.today().year

    df_all = pd.DataFrame()
    failed_attempts = []

    print(f"📈 Fetching Google Trends data (daily granularity) for: {keywords}")

    for year in range(start_year, end_year + 1):
        for i in range(0, len(keywords), batch_size):
            batch = keywords[i:i + batch_size]
            start = f"{year}-01-01"
            end = f"{year}-12-31"
            print(f"🔁 Year {year}, Batch {i // batch_size + 1}: {batch}")

            try:
                pytrends.build_payload(batch, timeframe=f"{start} {end}", geo=geo)
                df = pytrends.interest_over_time()
                df = df.drop(columns="isPartial", errors="ignore")

                for kw in batch:
                    if kw in df.columns:
                        if kw not in df_all.columns:
                            df_all[kw] = df[kw]
                        else:
                            df_all = df_all.combine_first(df[[kw]])

            except Exception as e:
                print(f"❌ Error fetching {batch} for {year}: {e}")
                failed_attempts.extend([(kw, year) for kw in batch])
                print("⏳ Cooling down before retrying...")
                time.sleep(cooldown * 2)
                continue

            time.sleep(cooldown)

    df_all.index = pd.to_datetime(df_all.index)
    df_all = df_all.sort_index()

    if save_path:
        os.makedirs(os.path.dirname(save_path), exist_ok=True)
        df_all.to_csv(save_path)
        print(f"✅ Saved Google Trends data to {save_path}")

    return df_all, failed_attempts

# CLI test run
if __name__ == "__main__":
    terms = [
        "market crash",
        "recession",
        "buy gold",
        "stock market crash"
    ]

    df, failures = fetch_google_trends_by_year(
        keywords=terms,
        start_year=2004,
        save_path="../data/raw/google_trends.csv",
        batch_size=1,   # safest
        cooldown=74     # max stealth
    )

    print("🧯 Failed Attempts:", failures)