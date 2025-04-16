const battleLog = `
[✅] Elastic_L30_C1 + Manual Upsampling on baseline_easy_w5_n5_d0.csv → PR AUC: 0.684
[✅] Elastic_L30_C1 + SMOTE on baseline_easy_w5_n5_d0.csv → PR AUC: 0.670
[✅] Elastic_L30_C1 + ADASYN on baseline_easy_w5_n5_d0.csv → PR AUC: 0.542
[✅] Elastic_L30_C1 + Borderline SMOTE on baseline_easy_w5_n5_d0.csv → PR AUC: 0.530
[✅] Elastic_L30_C1 + SMOTETomek on baseline_easy_w5_n5_d0.csv → PR AUC: 0.671
[✅] Elastic_L30_C1 + SMOTEENN on baseline_easy_w5_n5_d0.csv → PR AUC: 0.667
[✅] Elastic_L30_C1 + Random Undersample on baseline_easy_w5_n5_d0.csv → PR AUC: 0.721
[✅] Elastic_L30_C1 + Cluster Centroids on baseline_easy_w5_n5_d0.csv → PR AUC: 0.677
[✅] Elastic_L30_C1 + No Resampling on baseline_easy_w5_n5_d0.csv → PR AUC: 0.690
[✅] Elastic_L30_C1 + Manual Upsampling on high_drift_w3_n10_d60.csv → PR AUC: 0.152
[✅] Elastic_L30_C1 + SMOTE on high_drift_w3_n10_d60.csv → PR AUC: 0.147
[✅] Elastic_L30_C1 + ADASYN on high_drift_w3_n10_d60.csv → PR AUC: 0.142
[✅] Elastic_L30_C1 + Borderline SMOTE on high_drift_w3_n10_d60.csv → PR AUC: 0.175
[✅] Elastic_L30_C1 + SMOTETomek on high_drift_w3_n10_d60.csv → PR AUC: 0.147
[✅] Elastic_L30_C1 + SMOTEENN on high_drift_w3_n10_d60.csv → PR AUC: 0.139
[✅] Elastic_L30_C1 + Random Undersample on high_drift_w3_n10_d60.csv → PR AUC: 0.190
[✅] Elastic_L30_C1 + Cluster Centroids on high_drift_w3_n10_d60.csv → PR AUC: 0.176
[✅] Elastic_L30_C1 + No Resampling on high_drift_w3_n10_d60.csv → PR AUC: 0.154
[✅] Elastic_L30_C1 + Manual Upsampling on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.039
[✅] Elastic_L30_C1 + SMOTE on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.038
[✅] Elastic_L30_C1 + ADASYN on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.038
[✅] Elastic_L30_C1 + Borderline SMOTE on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.022
[✅] Elastic_L30_C1 + SMOTETomek on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.038
[✅] Elastic_L30_C1 + SMOTEENN on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.037
[✅] Elastic_L30_C1 + Random Undersample on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.033
[✅] Elastic_L30_C1 + Cluster Centroids on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.094
[✅] Elastic_L30_C1 + No Resampling on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.017
[✅] Elastic_L30_C1 + Manual Upsampling on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.149
[✅] Elastic_L30_C1 + SMOTE on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.144
[✅] Elastic_L30_C1 + ADASYN on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.160
[✅] Elastic_L30_C1 + Borderline SMOTE on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.151
[✅] Elastic_L30_C1 + SMOTETomek on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.144
[✅] Elastic_L30_C1 + SMOTEENN on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.143
[✅] Elastic_L30_C1 + Random Undersample on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.138
[✅] Elastic_L30_C1 + Cluster Centroids on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.179
[✅] Elastic_L30_C1 + No Resampling on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.154
[✅] Elastic_L30_C1 + Manual Upsampling on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.039
[✅] Elastic_L30_C1 + SMOTE on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.039
[✅] Elastic_L30_C1 + ADASYN on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.040
[✅] Elastic_L30_C1 + Borderline SMOTE on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.034
[✅] Elastic_L30_C1 + SMOTETomek on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.039
[✅] Elastic_L30_C1 + SMOTEENN on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.039
[✅] Elastic_L30_C1 + Random Undersample on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.040
[✅] Elastic_L30_C1 + Cluster Centroids on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.040
[✅] Elastic_L30_C1 + No Resampling on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.040
[✅] Elastic_L50_C5 + Manual Upsampling on baseline_easy_w5_n5_d0.csv → PR AUC: 0.683
[✅] Elastic_L50_C5 + SMOTE on baseline_easy_w5_n5_d0.csv → PR AUC: 0.670
[✅] Elastic_L50_C5 + ADASYN on baseline_easy_w5_n5_d0.csv → PR AUC: 0.526
[✅] Elastic_L50_C5 + Borderline SMOTE on baseline_easy_w5_n5_d0.csv → PR AUC: 0.517
[✅] Elastic_L50_C5 + SMOTETomek on baseline_easy_w5_n5_d0.csv → PR AUC: 0.670
[✅] Elastic_L50_C5 + SMOTEENN on baseline_easy_w5_n5_d0.csv → PR AUC: 0.665
[✅] Elastic_L50_C5 + Random Undersample on baseline_easy_w5_n5_d0.csv → PR AUC: 0.712
[✅] Elastic_L50_C5 + Cluster Centroids on baseline_easy_w5_n5_d0.csv → PR AUC: 0.650
[✅] Elastic_L50_C5 + No Resampling on baseline_easy_w5_n5_d0.csv → PR AUC: 0.687
[✅] Elastic_L50_C5 + Manual Upsampling on high_drift_w3_n10_d60.csv → PR AUC: 0.150
[✅] Elastic_L50_C5 + SMOTE on high_drift_w3_n10_d60.csv → PR AUC: 0.146
[✅] Elastic_L50_C5 + ADASYN on high_drift_w3_n10_d60.csv → PR AUC: 0.140
[✅] Elastic_L50_C5 + Borderline SMOTE on high_drift_w3_n10_d60.csv → PR AUC: 0.172
[✅] Elastic_L50_C5 + SMOTETomek on high_drift_w3_n10_d60.csv → PR AUC: 0.146
[✅] Elastic_L50_C5 + SMOTEENN on high_drift_w3_n10_d60.csv → PR AUC: 0.136
[✅] Elastic_L50_C5 + Random Undersample on high_drift_w3_n10_d60.csv → PR AUC: 0.179
[✅] Elastic_L50_C5 + Cluster Centroids on high_drift_w3_n10_d60.csv → PR AUC: 0.159
[✅] Elastic_L50_C5 + No Resampling on high_drift_w3_n10_d60.csv → PR AUC: 0.149
[✅] Elastic_L50_C5 + Manual Upsampling on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.033
[✅] Elastic_L50_C5 + SMOTE on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.037
[✅] Elastic_L50_C5 + ADASYN on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.037
[✅] Elastic_L50_C5 + Borderline SMOTE on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.026
[✅] Elastic_L50_C5 + SMOTETomek on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.037
[✅] Elastic_L50_C5 + SMOTEENN on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.036
[✅] Elastic_L50_C5 + Random Undersample on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.019
[✅] Elastic_L50_C5 + Cluster Centroids on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.044
[✅] Elastic_L50_C5 + No Resampling on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.035
[✅] Elastic_L50_C5 + Manual Upsampling on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.148
[✅] Elastic_L50_C5 + SMOTE on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.141
[✅] Elastic_L50_C5 + ADASYN on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.159
[✅] Elastic_L50_C5 + Borderline SMOTE on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.151
[✅] Elastic_L50_C5 + SMOTETomek on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.141
[✅] Elastic_L50_C5 + SMOTEENN on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.142
[✅] Elastic_L50_C5 + Random Undersample on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.134
[✅] Elastic_L50_C5 + Cluster Centroids on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.172
[✅] Elastic_L50_C5 + No Resampling on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.149
[✅] Elastic_L50_C5 + Manual Upsampling on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.039
[✅] Elastic_L50_C5 + SMOTE on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.039
[✅] Elastic_L50_C5 + ADASYN on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.039
[✅] Elastic_L50_C5 + Borderline SMOTE on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.034
[✅] Elastic_L50_C5 + SMOTETomek on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.039
[✅] Elastic_L50_C5 + SMOTEENN on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.039
[✅] Elastic_L50_C5 + Random Undersample on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.039
[✅] Elastic_L50_C5 + Cluster Centroids on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.039
[✅] Elastic_L50_C5 + No Resampling on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.040
[✅] Elastic_L70_C10 + Manual Upsampling on baseline_easy_w5_n5_d0.csv → PR AUC: 0.684
[✅] Elastic_L70_C10 + SMOTE on baseline_easy_w5_n5_d0.csv → PR AUC: 0.670
[✅] Elastic_L70_C10 + ADASYN on baseline_easy_w5_n5_d0.csv → PR AUC: 0.515
[✅] Elastic_L70_C10 + Borderline SMOTE on baseline_easy_w5_n5_d0.csv → PR AUC: 0.513
[✅] Elastic_L70_C10 + SMOTETomek on baseline_easy_w5_n5_d0.csv → PR AUC: 0.669
[✅] Elastic_L70_C10 + SMOTEENN on baseline_easy_w5_n5_d0.csv → PR AUC: 0.666
[✅] Elastic_L70_C10 + Random Undersample on baseline_easy_w5_n5_d0.csv → PR AUC: 0.710
[✅] Elastic_L70_C10 + Cluster Centroids on baseline_easy_w5_n5_d0.csv → PR AUC: 0.646
[✅] Elastic_L70_C10 + No Resampling on baseline_easy_w5_n5_d0.csv → PR AUC: 0.688
[✅] Elastic_L70_C10 + Manual Upsampling on high_drift_w3_n10_d60.csv → PR AUC: 0.150
[✅] Elastic_L70_C10 + SMOTE on high_drift_w3_n10_d60.csv → PR AUC: 0.146
[✅] Elastic_L70_C10 + ADASYN on high_drift_w3_n10_d60.csv → PR AUC: 0.139
[✅] Elastic_L70_C10 + Borderline SMOTE on high_drift_w3_n10_d60.csv → PR AUC: 0.172
[✅] Elastic_L70_C10 + SMOTETomek on high_drift_w3_n10_d60.csv → PR AUC: 0.146
[✅] Elastic_L70_C10 + SMOTEENN on high_drift_w3_n10_d60.csv → PR AUC: 0.136
[✅] Elastic_L70_C10 + Random Undersample on high_drift_w3_n10_d60.csv → PR AUC: 0.177
[✅] Elastic_L70_C10 + Cluster Centroids on high_drift_w3_n10_d60.csv → PR AUC: 0.154
[✅] Elastic_L70_C10 + No Resampling on high_drift_w3_n10_d60.csv → PR AUC: 0.149
[✅] Elastic_L70_C10 + Manual Upsampling on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.033
[✅] Elastic_L70_C10 + SMOTE on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.037
[✅] Elastic_L70_C10 + ADASYN on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.037
[✅] Elastic_L70_C10 + Borderline SMOTE on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.026
[✅] Elastic_L70_C10 + SMOTETomek on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.037
[✅] Elastic_L70_C10 + SMOTEENN on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.036
[✅] Elastic_L70_C10 + Random Undersample on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.018
[✅] Elastic_L70_C10 + Cluster Centroids on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.044
[✅] Elastic_L70_C10 + No Resampling on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.052
[✅] Elastic_L70_C10 + Manual Upsampling on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.148
[✅] Elastic_L70_C10 + SMOTE on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.142
[✅] Elastic_L70_C10 + ADASYN on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.159
[✅] Elastic_L70_C10 + Borderline SMOTE on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.150
[✅] Elastic_L70_C10 + SMOTETomek on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.142
[✅] Elastic_L70_C10 + SMOTEENN on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.141
[✅] Elastic_L70_C10 + Random Undersample on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.132
[✅] Elastic_L70_C10 + Cluster Centroids on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.161
[✅] Elastic_L70_C10 + No Resampling on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.147
[✅] Elastic_L70_C10 + Manual Upsampling on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.039
[✅] Elastic_L70_C10 + SMOTE on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.039
[✅] Elastic_L70_C10 + ADASYN on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.039
[✅] Elastic_L70_C10 + Borderline SMOTE on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.034
[✅] Elastic_L70_C10 + SMOTETomek on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.039
[✅] Elastic_L70_C10 + SMOTEENN on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.039
[✅] Elastic_L70_C10 + Random Undersample on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.039
[✅] Elastic_L70_C10 + Cluster Centroids on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.038
[✅] Elastic_L70_C10 + No Resampling on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.040
[✅] Elastic_L100_C10 + Manual Upsampling on baseline_easy_w5_n5_d0.csv → PR AUC: 0.684
[✅] Elastic_L100_C10 + SMOTE on baseline_easy_w5_n5_d0.csv → PR AUC: 0.670
[✅] Elastic_L100_C10 + ADASYN on baseline_easy_w5_n5_d0.csv → PR AUC: 0.514
[✅] Elastic_L100_C10 + Borderline SMOTE on baseline_easy_w5_n5_d0.csv → PR AUC: 0.509
[✅] Elastic_L100_C10 + SMOTETomek on baseline_easy_w5_n5_d0.csv → PR AUC: 0.670
[✅] Elastic_L100_C10 + SMOTEENN on baseline_easy_w5_n5_d0.csv → PR AUC: 0.666
[✅] Elastic_L100_C10 + Random Undersample on baseline_easy_w5_n5_d0.csv → PR AUC: 0.711
[✅] Elastic_L100_C10 + Cluster Centroids on baseline_easy_w5_n5_d0.csv → PR AUC: 0.647
[✅] Elastic_L100_C10 + No Resampling on baseline_easy_w5_n5_d0.csv → PR AUC: 0.688
[✅] Elastic_L100_C10 + Manual Upsampling on high_drift_w3_n10_d60.csv → PR AUC: 0.150
[✅] Elastic_L100_C10 + SMOTE on high_drift_w3_n10_d60.csv → PR AUC: 0.146
[✅] Elastic_L100_C10 + ADASYN on high_drift_w3_n10_d60.csv → PR AUC: 0.139
[✅] Elastic_L100_C10 + Borderline SMOTE on high_drift_w3_n10_d60.csv → PR AUC: 0.172
[✅] Elastic_L100_C10 + SMOTETomek on high_drift_w3_n10_d60.csv → PR AUC: 0.146
[✅] Elastic_L100_C10 + SMOTEENN on high_drift_w3_n10_d60.csv → PR AUC: 0.136
[✅] Elastic_L100_C10 + Random Undersample on high_drift_w3_n10_d60.csv → PR AUC: 0.179
[✅] Elastic_L100_C10 + Cluster Centroids on high_drift_w3_n10_d60.csv → PR AUC: 0.157
[✅] Elastic_L100_C10 + No Resampling on high_drift_w3_n10_d60.csv → PR AUC: 0.149
[✅] Elastic_L100_C10 + Manual Upsampling on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.033
[✅] Elastic_L100_C10 + SMOTE on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.037
[✅] Elastic_L100_C10 + ADASYN on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.037
[✅] Elastic_L100_C10 + Borderline SMOTE on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.026
[✅] Elastic_L100_C10 + SMOTETomek on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.037
[✅] Elastic_L100_C10 + SMOTEENN on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.036
[✅] Elastic_L100_C10 + Random Undersample on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.019
[✅] Elastic_L100_C10 + Cluster Centroids on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.044
[✅] Elastic_L100_C10 + No Resampling on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.025
[✅] Elastic_L100_C10 + Manual Upsampling on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.148
[✅] Elastic_L100_C10 + SMOTE on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.142
[✅] Elastic_L100_C10 + ADASYN on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.159
[✅] Elastic_L100_C10 + Borderline SMOTE on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.150
[✅] Elastic_L100_C10 + SMOTETomek on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.142
[✅] Elastic_L100_C10 + SMOTEENN on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.141
[✅] Elastic_L100_C10 + Random Undersample on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.133
[✅] Elastic_L100_C10 + Cluster Centroids on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.161
[✅] Elastic_L100_C10 + No Resampling on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.149
[✅] Elastic_L100_C10 + Manual Upsampling on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.039
[✅] Elastic_L100_C10 + SMOTE on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.039
[✅] Elastic_L100_C10 + ADASYN on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.039
[✅] Elastic_L100_C10 + Borderline SMOTE on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.034
[✅] Elastic_L100_C10 + SMOTETomek on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.039
[✅] Elastic_L100_C10 + SMOTEENN on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.039
[✅] Elastic_L100_C10 + Random Undersample on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.039
[✅] Elastic_L100_C10 + Cluster Centroids on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.038
[✅] Elastic_L100_C10 + No Resampling on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.040
[✅] Elastic_L0_C10 + Manual Upsampling on baseline_easy_w5_n5_d0.csv → PR AUC: 0.684
[✅] Elastic_L0_C10 + SMOTE on baseline_easy_w5_n5_d0.csv → PR AUC: 0.669
[✅] Elastic_L0_C10 + ADASYN on baseline_easy_w5_n5_d0.csv → PR AUC: 0.516
[✅] Elastic_L0_C10 + Borderline SMOTE on baseline_easy_w5_n5_d0.csv → PR AUC: 0.515
[✅] Elastic_L0_C10 + SMOTETomek on baseline_easy_w5_n5_d0.csv → PR AUC: 0.669
[✅] Elastic_L0_C10 + SMOTEENN on baseline_easy_w5_n5_d0.csv → PR AUC: 0.667
[✅] Elastic_L0_C10 + Random Undersample on baseline_easy_w5_n5_d0.csv → PR AUC: 0.708
[✅] Elastic_L0_C10 + Cluster Centroids on baseline_easy_w5_n5_d0.csv → PR AUC: 0.641
[✅] Elastic_L0_C10 + No Resampling on baseline_easy_w5_n5_d0.csv → PR AUC: 0.687
[✅] Elastic_L0_C10 + Manual Upsampling on high_drift_w3_n10_d60.csv → PR AUC: 0.149
[✅] Elastic_L0_C10 + SMOTE on high_drift_w3_n10_d60.csv → PR AUC: 0.146
[✅] Elastic_L0_C10 + ADASYN on high_drift_w3_n10_d60.csv → PR AUC: 0.140
[✅] Elastic_L0_C10 + Borderline SMOTE on high_drift_w3_n10_d60.csv → PR AUC: 0.172
[✅] Elastic_L0_C10 + SMOTETomek on high_drift_w3_n10_d60.csv → PR AUC: 0.146
[✅] Elastic_L0_C10 + SMOTEENN on high_drift_w3_n10_d60.csv → PR AUC: 0.136
[✅] Elastic_L0_C10 + Random Undersample on high_drift_w3_n10_d60.csv → PR AUC: 0.171
[✅] Elastic_L0_C10 + Cluster Centroids on high_drift_w3_n10_d60.csv → PR AUC: 0.146
[✅] Elastic_L0_C10 + No Resampling on high_drift_w3_n10_d60.csv → PR AUC: 0.148
[✅] Elastic_L0_C10 + Manual Upsampling on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.033
[✅] Elastic_L0_C10 + SMOTE on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.037
[✅] Elastic_L0_C10 + ADASYN on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.037
[✅] Elastic_L0_C10 + Borderline SMOTE on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.026
[✅] Elastic_L0_C10 + SMOTETomek on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.037
[✅] Elastic_L0_C10 + SMOTEENN on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.035
[✅] Elastic_L0_C10 + Random Undersample on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.015
[✅] Elastic_L0_C10 + Cluster Centroids on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.025
[✅] Elastic_L0_C10 + No Resampling on imbalanced_sparse_w0_n10_d10.csv → PR AUC: 0.023
[✅] Elastic_L0_C10 + Manual Upsampling on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.148
[✅] Elastic_L0_C10 + SMOTE on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.142
[✅] Elastic_L0_C10 + ADASYN on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.158
[✅] Elastic_L0_C10 + Borderline SMOTE on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.151
[✅] Elastic_L0_C10 + SMOTETomek on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.142
[✅] Elastic_L0_C10 + SMOTEENN on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.142
[✅] Elastic_L0_C10 + Random Undersample on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.131
[✅] Elastic_L0_C10 + Cluster Centroids on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.154
[✅] Elastic_L0_C10 + No Resampling on mixed_realistic_w4_n15_d30.csv → PR AUC: 0.147
[✅] Elastic_L0_C10 + Manual Upsampling on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.039
[✅] Elastic_L0_C10 + SMOTE on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.039
[✅] Elastic_L0_C10 + ADASYN on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.040
[✅] Elastic_L0_C10 + Borderline SMOTE on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.034
[✅] Elastic_L0_C10 + SMOTETomek on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.039
[✅] Elastic_L0_C10 + SMOTEENN on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.039
[✅] Elastic_L0_C10 + Random Undersample on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.039
[✅] Elastic_L0_C10 + Cluster Centroids on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.039
[✅] Elastic_L0_C10 + No Resampling on noisy_overlap_w2_n20_d0.csv → PR AUC: 0.040

`;