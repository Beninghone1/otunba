const battleLog = `

🎬 Initial Fighters Enter the Arena!

🎮 Generation 1 Begins!
-------------------------
🏆 Top Performers:
1. Elastic_L30_C1 + Random Undersample_G0: PR AUC = 0.079
2. Elastic_L30_C1 + Cluster Centroids_G0: PR AUC = 0.077
3. Elastic_L50_C5 + No Resampling_G0: PR AUC = 0.060

💘 Elastic_L30_C1 + Random Undersample breeds 2 children

👊 Elastic_L30_C1 + Random Undersample_child_1_G1 steps into the light!
📍 Style: Random Undersample
🧬 Genome: C = 0.07, l1_ratio = 0.26
🔁 Generation: 1
🏆 Last Score: PR AUC = 0.077
🧬 Lineage: child of Elastic_L30_C1 + Random Undersample_G0

👊 Elastic_L30_C1 + Random Undersample_child_2_G1 is ready to make waves!
📍 Style: Random Undersample
🧬 Genome: C = 0.07, l1_ratio = 0.26
🔁 Generation: 1
🏆 Last Score: PR AUC = 0.077
🧬 Lineage: child of Elastic_L30_C1 + Random Undersample_G0

💘 Elastic_L30_C1 + Cluster Centroids breeds 2 children

👊 Elastic_L30_C1 + Cluster Centroids_child_1_G1 marches in with fire!
📍 Style: Cluster Centroids
🧬 Genome: C = 0.19, l1_ratio = 0.23
🔁 Generation: 1
🏆 Last Score: PR AUC = 0.035
🧬 Lineage: child of Elastic_L30_C1 + Cluster Centroids_G0

👊 Elastic_L30_C1 + Cluster Centroids_child_2_G1 is ready to make waves!
📍 Style: Cluster Centroids
🧬 Genome: C = 0.02, l1_ratio = 0.39
🔁 Generation: 1
🏆 Last Score: PR AUC = 0.505
🧬 Lineage: child of Elastic_L30_C1 + Cluster Centroids_G0

💘 Elastic_L50_C5 + No Resampling breeds 2 children

👊 Elastic_L50_C5 + No Resampling_child_1_G1 joins the fray!
📍 Style: No Resampling
🧬 Genome: C = 0.43, l1_ratio = 0.42
🔁 Generation: 1
🏆 Last Score: PR AUC = 0.018
🧬 Lineage: child of Elastic_L50_C5 + No Resampling_G0

👊 Elastic_L50_C5 + No Resampling_child_2_G1 marches in with fire!
📍 Style: No Resampling
🧬 Genome: C = 0.58, l1_ratio = 0.54
🔁 Generation: 1
🏆 Last Score: PR AUC = 0.013
🧬 Lineage: child of Elastic_L50_C5 + No Resampling_G0

✅ Survivors advancing to next generation:
- Elastic_L30_C1 + Cluster Centroids_G1 | PR AUC = 0.505 → barely makes the cut.
- Elastic_L30_C1 + Random Undersample_G0 | PR AUC = 0.079 → barely makes the cut.
- Elastic_L30_C1 + Random Undersample_G1 | PR AUC = 0.077 → hangs on by a thread.
- Elastic_L30_C1 + Random Undersample_G1 | PR AUC = 0.077 → barely makes the cut.
- Elastic_L30_C1 + Cluster Centroids_G0 | PR AUC = 0.077 → hangs on by a thread.
- Elastic_L50_C5 + No Resampling_G0 | PR AUC = 0.060 → dominates the leaderboard.
- Elastic_L30_C1 + No Resampling_G0 | PR AUC = 0.040 → hangs on by a thread.
- Elastic_L30_C1 + Cluster Centroids_G1 | PR AUC = 0.035 → hangs on by a thread.
- Elastic_L100_C10 + Random Undersample_G0 | PR AUC = 0.030 → clutches their spot for next round.

💀 Eliminated this round:
- Elastic_L50_C5 + No Resampling_G1 | PR AUC = 0.018 → is knocked out!
- Elastic_L50_C5 + No Resampling_G1 | PR AUC = 0.013 → can’t continue to the next round.

📋 Summary Table – Generation 1 (Dataset: imbalanced_sparse_w0_n10_d10.csv):

   Generation                           Dataset  Baseline PR AUC  \
3           1  imbalanced_sparse_w0_n10_d10.csv            0.011   
0           1  imbalanced_sparse_w0_n10_d10.csv            0.011   
1           1  imbalanced_sparse_w0_n10_d10.csv            0.011   
2           1  imbalanced_sparse_w0_n10_d10.csv            0.011   
4           1  imbalanced_sparse_w0_n10_d10.csv            0.011   
5           1  imbalanced_sparse_w0_n10_d10.csv            0.011   

                                    Label  PR AUC Beats Baseline?  \
3   Elastic_L30_C1 + Cluster Centroids_G1   0.505           ✅ Yes   
0  Elastic_L30_C1 + Random Undersample_G1   0.077           ✅ Yes   
1  Elastic_L30_C1 + Random Undersample_G1   0.077           ✅ Yes   
2   Elastic_L30_C1 + Cluster Centroids_G1   0.035           ✅ Yes   
4       Elastic_L50_C5 + No Resampling_G1   0.018           ✅ Yes   
5       Elastic_L50_C5 + No Resampling_G1   0.013           ✅ Yes   

                                           Lineage        Status  
3   child of Elastic_L30_C1 + Cluster Centroids_G0    ✅ Survived  
0  child of Elastic_L30_C1 + Random Undersample_G0    ✅ Survived  
1  child of Elastic_L30_C1 + Random Undersample_G0    ✅ Survived  
2   child of Elastic_L30_C1 + Cluster Centroids_G0    ✅ Survived  
4       child of Elastic_L50_C5 + No Resampling_G0  ❌ Eliminated  
5       child of Elastic_L50_C5 + No Resampling_G0  ❌ Eliminated  

🏆 GRAND CHAMPION 🏆
👑 Name: Elastic_L30_C1 + Cluster Centroids_G1
🔁 Generation: 1
🧬 Genome: C = 0.02, l1_ratio = 0.39
📈 PR AUC: 0.505
🎖 ROC AUC: 0.500
🧬 Lineage: child of Elastic_L30_C1 + Cluster Centroids_G0
🏁 What a run!

`;