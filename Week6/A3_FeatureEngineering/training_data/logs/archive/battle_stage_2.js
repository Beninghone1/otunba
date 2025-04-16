const battleLog = `

🎬 Initial Fighters Enter the Arena!

🎮 Generation 1 Begins!
-------------------------
🏆 Top Performers:
1. Elastic_L30_C1 + Random Undersample_G0: PR AUC = 0.087
2. Elastic_L30_C1 + Cluster Centroids_G0: PR AUC = 0.057
3. Elastic_L30_C1 + Cluster Centroids_G0: PR AUC = 0.041

💘 Elastic_L30_C1 + Random Undersample breeds 2 children

👊 Elastic_L30_C1 + Random Undersample_child_1_G1 throws their gloves into the arena!
📍 Style: Random Undersample
🧬 Genome: C = 0.07, l1_ratio = 0.47
🔁 Generation: 1
🏆 Last Score: PR AUC = 0.041
🧬 Lineage: child of Elastic_L30_C1 + Random Undersample_G0

👊 Elastic_L30_C1 + Random Undersample_child_2_G1 is ready to make waves!
📍 Style: Random Undersample
🧬 Genome: C = 0.01, l1_ratio = 0.34
🔁 Generation: 1
🏆 Last Score: PR AUC = 0.513
🧬 Lineage: child of Elastic_L30_C1 + Random Undersample_G0

💘 Elastic_L30_C1 + Cluster Centroids breeds 2 children

👊 Elastic_L30_C1 + Cluster Centroids_child_1_G1 is ready to make waves!
📍 Style: Cluster Centroids
🧬 Genome: C = 0.08, l1_ratio = 0.33
🔁 Generation: 1
🏆 Last Score: PR AUC = 0.041
🧬 Lineage: child of Elastic_L30_C1 + Cluster Centroids_G0

👊 Elastic_L30_C1 + Cluster Centroids_child_2_G1 joins the fray!
📍 Style: Cluster Centroids
🧬 Genome: C = 0.04, l1_ratio = 0.32
🔁 Generation: 1
🏆 Last Score: PR AUC = 0.047
🧬 Lineage: child of Elastic_L30_C1 + Cluster Centroids_G0

💘 Elastic_L30_C1 + Cluster Centroids breeds 2 children

👊 Elastic_L30_C1 + Cluster Centroids_child_1_G1 throws their gloves into the arena!
📍 Style: Cluster Centroids
🧬 Genome: C = 0.04, l1_ratio = 0.33
🔁 Generation: 1
🏆 Last Score: PR AUC = 0.049
🧬 Lineage: child of Elastic_L30_C1 + Cluster Centroids_G0

👊 Elastic_L30_C1 + Cluster Centroids_child_2_G1 steps into the light!
📍 Style: Cluster Centroids
🧬 Genome: C = 0.11, l1_ratio = 0.29
🔁 Generation: 1
🏆 Last Score: PR AUC = 0.040
🧬 Lineage: child of Elastic_L30_C1 + Cluster Centroids_G0

✅ Survivors advancing to next generation:
- Elastic_L30_C1 + Random Undersample_G1 | PR AUC = 0.513 → hangs on by a thread.
- Elastic_L30_C1 + Random Undersample_G0 | PR AUC = 0.087 → barely makes the cut.
- Elastic_L30_C1 + Cluster Centroids_G0 | PR AUC = 0.057 → secures their legacy.
- Elastic_L30_C1 + Cluster Centroids_G1 | PR AUC = 0.049 → secures their legacy.
- Elastic_L30_C1 + Cluster Centroids_G1 | PR AUC = 0.047 → secures their legacy.
- Elastic_L30_C1 + Random Undersample_G1 | PR AUC = 0.041 → clutches their spot for next round.
- Elastic_L30_C1 + Cluster Centroids_G0 | PR AUC = 0.041 → secures their legacy.
- Elastic_L30_C1 + Cluster Centroids_G0 | PR AUC = 0.041 → clutches their spot for next round.
- Elastic_L30_C1 + Cluster Centroids_G1 | PR AUC = 0.041 → barely makes the cut.

💀 Eliminated this round:
- Elastic_L30_C1 + Cluster Centroids_G1 | PR AUC = 0.040 → is out of the tournament!

📋 Summary Table – Generation 1 (Dataset: noisy_overlap_w2_n20_d0.csv):

   Generation                      Dataset  Baseline PR AUC  \
1           1  noisy_overlap_w2_n20_d0.csv            0.026   
4           1  noisy_overlap_w2_n20_d0.csv            0.026   
3           1  noisy_overlap_w2_n20_d0.csv            0.026   
0           1  noisy_overlap_w2_n20_d0.csv            0.026   
2           1  noisy_overlap_w2_n20_d0.csv            0.026   
5           1  noisy_overlap_w2_n20_d0.csv            0.026   

                                    Label  PR AUC Beats Baseline?  \
1  Elastic_L30_C1 + Random Undersample_G1   0.513           ✅ Yes   
4   Elastic_L30_C1 + Cluster Centroids_G1   0.049           ✅ Yes   
3   Elastic_L30_C1 + Cluster Centroids_G1   0.047           ✅ Yes   
0  Elastic_L30_C1 + Random Undersample_G1   0.041           ✅ Yes   
2   Elastic_L30_C1 + Cluster Centroids_G1   0.041           ✅ Yes   
5   Elastic_L30_C1 + Cluster Centroids_G1   0.040           ✅ Yes   

                                           Lineage        Status  
1  child of Elastic_L30_C1 + Random Undersample_G0    ✅ Survived  
4   child of Elastic_L30_C1 + Cluster Centroids_G0    ✅ Survived  
3   child of Elastic_L30_C1 + Cluster Centroids_G0    ✅ Survived  
0  child of Elastic_L30_C1 + Random Undersample_G0    ✅ Survived  
2   child of Elastic_L30_C1 + Cluster Centroids_G0    ✅ Survived  
5   child of Elastic_L30_C1 + Cluster Centroids_G0  ❌ Eliminated  

🏆 GRAND CHAMPION 🏆
👑 Name: Elastic_L30_C1 + Random Undersample_G1
🔁 Generation: 1
🧬 Genome: C = 0.01, l1_ratio = 0.34
📈 PR AUC: 0.513
🎖 ROC AUC: 0.500
🧬 Lineage: child of Elastic_L30_C1 + Random Undersample_G0
🏁 Glory secured!

`;