# YC Fundraising History Notes

Verified as of 2026-04-02.

## Method
- Every company in `company_list.tsv` gets a baseline YC row.
- For post-2022 batches, the baseline YC row uses the public standard deal: $125k for 7% plus $375k uncapped SAFE with MFN.
- For Winter 2021 companies, the baseline YC row uses the earlier public YC standard deal: $125k for 7%.
- Additional rows were added only where public reporting, official company posts, or public database/search snippets exposed a non-YC or expanded fundraising event.
- `price_or_terms` is filled only when the public source disclosed pricing/terms; otherwise it is left as `Not publicly disclosed`.

## Caveats
- Several rows rely on public search snippets from Crunchbase, CB Insights, Wellfound, Employbl, or similar third-party databases. Those rows are marked `source_confidence=medium`.
- A few companies appear to have more public rounds than could be fully enumerated from accessible sources. In those cases the CSV notes the gap instead of inventing missing details.
- The user-supplied batch list appears to disagree with the current public YC directory for at least `Kopra` and `Piggy Robotics`; both the input batch and the directory batch are preserved in the CSV.
- `round_date` uses approximate batch anchor dates for the generic YC rows because YC does not publish a company-by-company close date for the standard deal.
