// Title, label, category, period, description, and highlights are translated,
// so they live in public/locales/{lng}/translation.json under "projects"
// (same order as here). Technology names are translated via "tech-names".
// imageUrl, repository, and livelink are optional; cards fall back to a
// generated tile (showing label) and hide missing links.
export const projectData = [
  {
    id: crypto.randomUUID(),
    technologies: ['Go', 'Java', 'Kubernetes', 'Redis', 'gRPC'],
  },
  {
    id: crypto.randomUUID(),
    technologies: [
      'Python',
      'Feature Stores',
      'Model Serving',
      'Kubernetes',
      'MLflow',
    ],
  },
  {
    id: crypto.randomUUID(),
    technologies: [
      'Python',
      'LangChain',
      'LLM',
      'Kubernetes',
      'Workflow Agents',
    ],
  },
  {
    id: crypto.randomUUID(),
    technologies: ['Python', 'RAG', 'LangChain', 'Vector Search', 'On-Premise'],
  },
  {
    id: crypto.randomUUID(),
    technologies: ['Kafka', 'Apache Spark', 'Python', 'GCP', 'Airflow'],
  },
  {
    id: crypto.randomUUID(),
    technologies: ['Kubernetes', 'Docker', 'Terraform', 'Prometheus', 'Grafana'],
  },
  {
    id: crypto.randomUUID(),
    technologies: ['Python', 'Hugging Face Transformers', 'spaCy', 'PyTorch'],
  },
  {
    id: crypto.randomUUID(),
    technologies: ['Python', 'OCR', 'OpenCV', 'spaCy', 'NLP'],
  },
  {
    id: crypto.randomUUID(),
    technologies: ['Python', 'scikit-learn', 'pandas', 'Airflow'],
  },
  {
    id: crypto.randomUUID(),
    technologies: ['Python', 'Hugging Face Transformers', 'FastAPI', 'NLP'],
  },
  {
    id: crypto.randomUUID(),
    technologies: ['Python', 'XGBoost / LightGBM', 'scikit-learn', 'pandas'],
  },
  {
    id: crypto.randomUUID(),
    technologies: ['Python', 'Time-Series Models', 'Anomaly Detection', 'AWS'],
  },
  {
    id: crypto.randomUUID(),
    technologies: ['Python', 'PyTorch', 'OpenCV', 'Azure', 'GCP'],
  },
];
