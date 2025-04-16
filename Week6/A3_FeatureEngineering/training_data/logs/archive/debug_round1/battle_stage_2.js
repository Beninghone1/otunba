const battleLog = `

🎬 Initial Fighters Enter the Arena!

🎮 Generation 1 Begins!
-------------------------
🏆 Top Performers:
1. Elastic_L30_C1 + ADASYN_G0: PR AUC = 0.039
2. Elastic_L50_C5 + ADASYN_G0: PR AUC = 0.039
3. Elastic_L30_C1 + ADASYN_G0: PR AUC = 0.039

💘 Elastic_L30_C1 + ADASYN breeds 2 children

👊 Elastic_L30_C1 + ADASYN_child_1_G1 joins the fray!
📍 Style: ADASYN
🧬 Genome: C = 1.03, l1_ratio = 0.51
🔁 Generation: 1
🏆 Last Score: PR AUC = 0.039
🧬 Lineage: child of Elastic_L30_C1 + ADASYN_G0

👊 Elastic_L30_C1 + ADASYN_child_2_G1 is ready to make waves!
📍 Style: ADASYN
🧬 Genome: C = 1.01, l1_ratio = 0.56
🔁 Generation: 1
🏆 Last Score: PR AUC = 0.039
🧬 Lineage: child of Elastic_L30_C1 + ADASYN_G0

💘 Elastic_L50_C5 + ADASYN breeds 2 children

👊 Elastic_L50_C5 + ADASYN_child_1_G1 joins the fray!
📍 Style: ADASYN
🧬 Genome: C = 0.91, l1_ratio = 0.53
🔁 Generation: 1
🏆 Last Score: PR AUC = 0.039
🧬 Lineage: child of Elastic_L50_C5 + ADASYN_G0

👊 Elastic_L50_C5 + ADASYN_child_2_G1 marches in with fire!
📍 Style: ADASYN
🧬 Genome: C = 0.98, l1_ratio = 0.35
🔁 Generation: 1
🏆 Last Score: PR AUC = 0.039
🧬 Lineage: child of Elastic_L50_C5 + ADASYN_G0

💘 Elastic_L30_C1 + ADASYN breeds 2 children

👊 Elastic_L30_C1 + ADASYN_child_1_G1 is ready to make waves!
📍 Style: ADASYN
🧬 Genome: C = 1.02, l1_ratio = 0.43
🔁 Generation: 1
🏆 Last Score: PR AUC = 0.039
🧬 Lineage: child of Elastic_L30_C1 + ADASYN_G0

👊 Elastic_L30_C1 + ADASYN_child_2_G1 steps into the light!
📍 Style: ADASYN
🧬 Genome: C = 0.98, l1_ratio = 0.54
🔁 Generation: 1
🏆 Last Score: PR AUC = 0.039
🧬 Lineage: child of Elastic_L30_C1 + ADASYN_G0

✅ Survivors advancing to next generation:
- Elastic_L30_C1 + ADASYN_G0 | PR AUC = 0.039 → hangs on by a thread.
- Elastic_L50_C5 + ADASYN_G0 | PR AUC = 0.039 → dominates the leaderboard.
- Elastic_L30_C1 + ADASYN_G0 | PR AUC = 0.039 → barely makes the cut.
- Elastic_L30_C1 + ADASYN_G0 | PR AUC = 0.039 → clutches their spot for next round.
- Elastic_L30_C1 + ADASYN_G0 | PR AUC = 0.039 → dominates the leaderboard.
- Elastic_L30_C1 + ADASYN_G0 | PR AUC = 0.039 → barely makes the cut.
- Elastic_L30_C1 + ADASYN_G0 | PR AUC = 0.039 → clutches their spot for next round.
- Elastic_L30_C1 + ADASYN_G0 | PR AUC = 0.039 → clutches their spot for next round.
- Elastic_L30_C1 + ADASYN_G0 | PR AUC = 0.039 → barely makes the cut.

💀 Eliminated this round:
- Elastic_L30_C1 + ADASYN_G1 | PR AUC = 0.039 → is out of the tournament!
- Elastic_L30_C1 + ADASYN_G1 | PR AUC = 0.039 → can’t continue to the next round.
- Elastic_L50_C5 + ADASYN_G1 | PR AUC = 0.039 → is knocked out!
- Elastic_L50_C5 + ADASYN_G1 | PR AUC = 0.039 → is eliminated from the arena.
- Elastic_L30_C1 + ADASYN_G1 | PR AUC = 0.039 → is out of the tournament!
- Elastic_L30_C1 + ADASYN_G1 | PR AUC = 0.039 → falls short this time.

📋 Summary Table – Generation 1 (Dataset: noisy_overlap_w2_n20_d0.csv):

   Generation                      Dataset  Baseline PR AUC  \
0           1  noisy_overlap_w2_n20_d0.csv            0.026   
1           1  noisy_overlap_w2_n20_d0.csv            0.026   
2           1  noisy_overlap_w2_n20_d0.csv            0.026   
3           1  noisy_overlap_w2_n20_d0.csv            0.026   
4           1  noisy_overlap_w2_n20_d0.csv            0.026   
5           1  noisy_overlap_w2_n20_d0.csv            0.026   

                        Label  PR AUC Beats Baseline?  \
0  Elastic_L30_C1 + ADASYN_G1   0.039           ✅ Yes   
1  Elastic_L30_C1 + ADASYN_G1   0.039           ✅ Yes   
2  Elastic_L50_C5 + ADASYN_G1   0.039           ✅ Yes   
3  Elastic_L50_C5 + ADASYN_G1   0.039           ✅ Yes   
4  Elastic_L30_C1 + ADASYN_G1   0.039           ✅ Yes   
5  Elastic_L30_C1 + ADASYN_G1   0.039           ✅ Yes   

                               Lineage        Status  
0  child of Elastic_L30_C1 + ADASYN_G0  ❌ Eliminated  
1  child of Elastic_L30_C1 + ADASYN_G0  ❌ Eliminated  
2  child of Elastic_L50_C5 + ADASYN_G0  ❌ Eliminated  
3  child of Elastic_L50_C5 + ADASYN_G0  ❌ Eliminated  
4  child of Elastic_L30_C1 + ADASYN_G0  ❌ Eliminated  
5  child of Elastic_L30_C1 + ADASYN_G0  ❌ Eliminated  

🏆 GRAND CHAMPION 🏆
👑 Name: Elastic_L30_C1 + ADASYN_G0
🔁 Generation: 0
🧬 Genome: C = 0.99, l1_ratio = 0.50
📈 PR AUC: 0.039
🎖 ROC AUC: 0.600
🧬 Lineage: origin of Elastic_L30_C1 + ADASYN
🏁 Glory secured!

`;