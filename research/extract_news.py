import csv
import html
import json
import re
import sys
from pathlib import Path


def main() -> int:
    if len(sys.argv) != 2:
        raise SystemExit("usage: extract_news.py OUTPUT_TSV")

    output_path = Path(sys.argv[1])
    payload = sys.stdin.read()
    parts = re.split(r"\n===END===(https://[^\n]+)\n", payload)

    rows = []
    for i in range(0, len(parts) - 1, 2):
        body = parts[i]
        url = parts[i + 1]
        match = re.search(r'data-page=\"([^\"]+)\"', body)
        if not match:
            rows.append(
                {
                    "url": url,
                    "slug": "",
                    "yc_name": "",
                    "yc_batch": "",
                    "news_count": "0",
                    "news_date": "",
                    "news_title": "",
                    "news_url": "",
                    "parse_status": "no_data_page",
                }
            )
            continue

        data = json.loads(html.unescape(match.group(1)))
        props = data.get("props", {})
        company = props.get("company", {})
        news_items = props.get("newsItems", []) or []

        base = {
            "url": url,
            "slug": company.get("slug", ""),
            "yc_name": company.get("name", ""),
            "yc_batch": company.get("batch", ""),
            "news_count": str(len(news_items)),
            "parse_status": "ok",
        }
        if not news_items:
            rows.append(
                {
                    **base,
                    "news_date": "",
                    "news_title": "",
                    "news_url": "",
                }
            )
            continue

        for item in news_items:
            rows.append(
                {
                    **base,
                    "news_date": item.get("date", ""),
                    "news_title": item.get("title", ""),
                    "news_url": item.get("url", ""),
                }
            )

    with output_path.open("w", newline="") as handle:
        writer = csv.DictWriter(
            handle,
            fieldnames=[
                "url",
                "slug",
                "yc_name",
                "yc_batch",
                "news_count",
                "news_date",
                "news_title",
                "news_url",
                "parse_status",
            ],
            delimiter="\t",
        )
        writer.writeheader()
        writer.writerows(rows)

    print(f"wrote {len(rows)} rows")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
