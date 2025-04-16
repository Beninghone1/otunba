🔍 unblinding_simulation/ — Interpretable Feature Diagnostics from Synthetic Simulations

This section is focused on reverse-engineering meaning from synthetic rare event datasets.

After generating thousands of rows of anonymized, scalarized features simulating economic environments (via sim_data/), we run dimensionality reduction (PCA) and simulate unblinding by mapping latent features back to interpretable macroeconomic concepts (e.g., “VIX Index,” “GDP,” “credit spread”).

Key Notebooks:
	•	Economic_Feature_Taxonomy.ipynb — Defines a rich hierarchical concept map (layman, professional, academic, engineered, linchpins) to assign human-readable names to generic features like feature_8.
	•	Unblind_Features_PCA.ipynb — Uses PCA to understand variance explained in synthetic economic datasets. Then, it maps PCA components back to the most contributing features (post-simulation), revealing which economic indicators appear to drive rare outcomes.

Why It Matters:

This lets researchers, educators, and analysts train models without real-world data, then translate synthetic insights back into interpretable diagnostics. It mimics blind taste tests—training without preconceptions, then revealing what stood out.
