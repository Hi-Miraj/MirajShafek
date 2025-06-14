
export interface Article {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  content: string;
  categories: string[];
  slug: string;
}

export const articles: Article[] = [
  
  {
  "id": "1",
  "date": "APRIL 12, 2025",
  "title": "Comparative Analysis of Genomic, Proteomic, and Metabolomic Data for Early Detection of Glioblastoma Using AI",
  "excerpt": "This research aimed to determine the most effective type of omics data (genomic, proteomic, or metabolomic) for early detection of glioblastoma using predictive modeling. We found that proteomic data consistently outperformed both genomic and metabolomic data across all evaluation metrics.",
  "content": `
    <h1>Executive Summary</h1>
    <p>This research aimed to determine the most effective type of omics data (genomic, proteomic, or metabolomic) for early detection of glioblastoma using predictive modeling. Through comprehensive analysis of publicly available datasets and the application of multiple machine learning models, we found that <strong>proteomic data consistently outperformed both genomic and metabolomic data</strong> across all evaluation metrics.</p>
    <p>The superior performance of proteomic data (average F1 score of 0.993) compared to metabolomic (0.595) and genomic data (0.305) suggests that protein expression patterns contain the most discriminative information for glioblastoma detection. Both Support Vector Machine (SVM) and Neural Network models achieved perfect classification using proteomic data, indicating robust signal presence.</p>
    <p>These findings suggest that future research and clinical applications for early glioblastoma detection should prioritize proteomic biomarkers, potentially supplemented by metabolomic data for enhanced accuracy.</p>

    <h2>1. Introduction</h2>
    <h3>1.1 Background</h3>
    <p>Glioblastoma (GBM) is the most aggressive form of brain cancer, with a poor prognosis largely due to late-stage diagnosis. Early detection is crucial for improving patient outcomes, yet existing diagnostic methods are limited. The advent of high-throughput omics technologies has opened new avenues for biomarker discovery, but it remains unclear which type of molecular data provides the most reliable indicators for early detection.</p>
    
    <h3>1.2 Research Objective</h3>
    <p>This study aimed to determine the most effective type of omics data (genomic, proteomic, or metabolomic) for early detection of glioblastoma using predictive modeling. We conducted a comparative analysis of these three data types to assess their ability to distinguish glioblastoma samples from controls and identify the most promising biomarker category for future diagnostic development.</p>
    
    <h3>1.3 Significance</h3>
    <p>Identifying the most effective omics data type for glioblastoma detection has significant implications for:
    <ul>
      <li>Development of early screening techniques</li>
      <li>Clinical decision-making and personalized treatment planning</li>
      <li>Resource allocation in biomarker research</li>
      <li>Understanding the molecular basis of glioblastoma progression</li>
    </ul>
    </p>
    
    <h2>2. Methodology</h2>
    <h3>2.1 Data Collection</h3>
    <p>We collected and analyzed datasets from three major omics categories:</p>
    <ul>
      <li><strong>Genomic Data:</strong> Source: GEO dataset GSE119834. Samples: 98 samples (primary glioblastomas, glioblastoma stem cell models, and neural stem cells). Features: 1,000 genes.</li>
      <li><strong>Proteomic Data:</strong> Source: TCGA-GBM Proteome Profiling. Samples: 237 samples representing different glioblastoma subtypes (Classical, Mesenchymal, Proneural, and Neural). Features: 500 proteins.</li>
      <li><strong>Metabolomic Data:</strong> Source: Metabolomics Workbench (ST003362). Samples: 60 samples (different cell lines with control and treatment conditions). Features: 200 metabolites.</li>
    </ul>

    <h3>2.2 Data Preprocessing</h3>
    <p>For each omics data type, we performed the following preprocessing steps:
      <ul>
        <li>Log2 transformation to normalize data distribution</li>
        <li>Standardization (z-score normalization)</li>
        <li>Principal Component Analysis (PCA) for dimensionality reduction and visualization</li>
        <li>Feature selection based on variance and importance</li>
      </ul>
    </p>

    <h3>2.3 Model Implementation</h3>
    <p>We implemented three different machine learning models for each omics data type:
      <ul>
        <li>Random Forest classifier</li>
        <li>Support Vector Machine (SVM)</li>
        <li>Neural Network (Multi-layer Perceptron)</li>
      </ul>
    </p>
    <p>Each model was trained using stratified cross-validation to ensure robust and unbiased evaluation, particularly important given the class imbalance in some datasets.</p>

    <h3>2.4 Evaluation Metrics</h3>
    <p>Model performance was assessed using standard classification metrics:
      <ul>
        <li>Accuracy</li>
        <li>Precision</li>
        <li>Recall</li>
        <li>F1-score</li>
        <li>Area Under the ROC Curve (AUC)</li>
      </ul>
    </p>

    <h2>3. Results</h2>
    <h3>3.1 Model Performance Comparison</h3>
    <table>
      <tr>
        <th>Data Type</th>
        <th>Model</th>
        <th>Accuracy</th>
        <th>Precision</th>
        <th>Recall</th>
        <th>F1 Score</th>
        <th>CV F1 Mean</th>
      </tr>
      <tr>
        <td>Genomic</td>
        <td>Random Forest</td>
        <td>0.3500</td>
        <td>0.1750</td>
        <td>0.3500</td>
        <td>0.2333</td>
        <td>0.3590</td>
      </tr>
      <tr>
        <td>Genomic</td>
        <td>SVM</td>
        <td>0.4500</td>
        <td>0.2025</td>
        <td>0.4500</td>
        <td>0.2793</td>
        <td>0.2716</td>
      </tr>
      <tr>
        <td>Genomic</td>
        <td>Neural Network</td>
        <td>0.4500</td>
        <td>0.3650</td>
        <td>0.4500</td>
        <td>0.4015</td>
        <td>0.4172</td>
      </tr>
      <tr>
        <td>Proteomic</td>
        <td>Random Forest</td>
        <td>0.9792</td>
        <td>0.9805</td>
        <td>0.9792</td>
        <td>0.9780</td>
        <td>0.9712</td>
      </tr>
      <tr>
        <td>Proteomic</td>
        <td>SVM</td>
        <td>1.0000</td>
        <td>1.0000</td>
        <td>1.0000</td>
        <td>1.0000</td>
        <td>1.0000</td>
      </tr>
      <tr>
        <td>Proteomic</td>
        <td>Neural Network</td>
        <td>1.0000</td>
        <td>1.0000</td>
        <td>1.0000</td>
        <td>1.0000</td>
        <td>1.0000</td>
      </tr>
      <tr>
        <td>Metabolomic</td>
        <td>Random Forest</td>
        <td>0.6667</td>
        <td>0.4722</td>
        <td>0.6667</td>
        <td>0.5444</td>
        <td>0.6142</td>
      </tr>
      <tr>
        <td>Metabolomic</td>
        <td>SVM</td>
        <td>0.6667</td>
        <td>0.4722</td>
        <td>0.6667</td>
        <td>0.5444</td>
        <td>0.5419</td>
      </tr>
      <tr>
        <td>Metabolomic</td>
        <td>Neural Network</td>
        <td>0.7500</td>
        <td>0.6944</td>
        <td>0.7500</td>
        <td>0.6968</td>
        <td>0.5880</td>
      </tr>
    </table>
    
    <h3>3.2 Data Type Effectiveness</h3>
    <table>
      <tr>
        <th>Data Type</th>
        <th>Accuracy</th>
        <th>Precision</th>
        <th>Recall</th>
        <th>F1 Score</th>
        <th>CV F1 Mean</th>
      </tr>
      <tr>
        <td>Genomic</td>
        <td>0.4167</td>
        <td>0.2475</td>
        <td>0.4167</td>
        <td>0.3047</td>
        <td>0.3493</td>
      </tr>
      <tr>
        <td>Proteomic</td>
        <td>0.9931</td>
        <td>0.9935</td>
        <td>0.9931</td>
        <td>0.9927</td>
        <td>0.9904</td>
      </tr>
      <tr>
        <td>Metabolomic</td>
        <td>0.6944</td>
        <td>0.5463</td>
        <td>0.6944</td>
        <td>0.5952</td>
        <td>0.5813</td>
      </tr>
    </table>
    
    <h3>3.3 Model Robustness</h3>
    <p>The most robust model-data combinations (highest mean performance with lowest variability) were:
      <ul>
        <li>SVM on Proteomic data</li>
        <li>Neural Network on Proteomic data</li>
        <li>Random Forest on Proteomic data</li>
      </ul>
    </p>

    <h3>3.4 Feature Importance</h3>
    <p>For Random Forest models, we identified the top features (biomarkers) for each data type. The proteomic features showed the highest discriminative power, with several proteins consistently appearing as important predictors across different model evaluations.</p>

    <h2>4. Discussion</h2>
    <h3>4.1 Key Findings</h3>
    <p>1. <strong>Proteomic Data Superiority:</strong> Proteomic data consistently outperformed both genomic and metabolomic data across all evaluation metrics and machine learning models.</p>
    <p>2. <strong>Model Performance:</strong> For proteomic data, both SVM and Neural Network models achieved perfect classification (F1 = 1.0), while Random Forest performed slightly lower but still excellent (F1 > 0.97).</p>
    <p>3. <strong>Genomic Data Limitations:</strong> Genomic data showed the lowest performance across all models.</p>
    <p>4. <strong>Metabolomic Data Potential:</strong> Metabolomic data achieved moderate performance, and further optimization may enhance its applicability in combination with proteomic data.</p>

    <h3>4.2 Implications for Early Detection of Glioblastoma</h3>
    <p>Our results suggest that proteomic biomarkers should be prioritized in future glioblastoma diagnostic development. Combining proteomic data with metabolomic information may further enhance diagnostic accuracy, but further studies are needed to validate these findings.</p>

    <h2>5. Conclusion</h2>
    <p>This study demonstrates that proteomic data provides the most reliable indicators for early glioblastoma detection compared to genomic and metabolomic data. Further research into proteomic biomarkers, coupled with advanced machine learning techniques, holds great promise for improving early detection and patient outcomes in glioblastoma.</p>
  `,
        categories: ["OPINION"],
    slug: "comparative-analysis-genomic-proteomic-metabolomic-gliblastoma-detection"
}

];

export const categories = [
  "TECH",
  "BUSINESS",
  "PRODUCTIVITY",
  "AI",
  "ROBOTICS",
  "PHILOSOPHY",
  "FICTION",
  "OPINION",
  "BOOKS"
];
