// Title, label, category, period, description, and highlights are translated,
// so they live in public/locales/{lng}/translation.json under "projects"
// (same order as here). Technology names are translated via "tech-names".
// imageUrl (1240x800 cover in public/rasters/projects/), repository, and
// livelink are optional; without imageUrl a card shows a generated tile
// (showing label), and missing links are hidden.
export const projectData = [
  {
    id: crypto.randomUUID(),
    imageUrl: '/rasters/projects/rtb.webp',
    technologies: ['Go', 'Java', 'Kubernetes', 'Redis', 'gRPC'],
  },
  {
    id: crypto.randomUUID(),
    imageUrl: '/rasters/projects/ad-ml.webp',
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
    imageUrl: '/rasters/projects/ai-agents.webp',
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
    imageUrl: '/rasters/projects/compliance-rag.webp',
    technologies: ['Python', 'RAG', 'LangChain', 'Vector Search', 'On-Premise'],
  },
  {
    id: crypto.randomUUID(),
    imageUrl: '/rasters/projects/streaming.webp',
    technologies: ['Kafka', 'Apache Spark', 'Python', 'GCP', 'Airflow'],
  },
  {
    id: crypto.randomUUID(),
    imageUrl: '/rasters/projects/kubernetes.webp',
    technologies: ['Kubernetes', 'Docker', 'Terraform', 'Prometheus', 'Grafana'],
  },
  {
    id: crypto.randomUUID(),
    imageUrl: '/rasters/projects/bilingual-nlp.webp',
    technologies: ['Python', 'Hugging Face Transformers', 'spaCy', 'PyTorch'],
  },
  {
    id: crypto.randomUUID(),
    imageUrl: '/rasters/projects/document-ai.webp',
    technologies: ['Python', 'OCR', 'OpenCV', 'spaCy', 'NLP'],
  },
  {
    id: crypto.randomUUID(),
    imageUrl: '/rasters/projects/automation.webp',
    technologies: ['Python', 'scikit-learn', 'pandas', 'Airflow'],
  },
  {
    id: crypto.randomUUID(),
    imageUrl: '/rasters/projects/chatbot.webp',
    technologies: ['Python', 'Hugging Face Transformers', 'FastAPI', 'NLP'],
  },
  {
    id: crypto.randomUUID(),
    imageUrl: '/rasters/projects/analytics.webp',
    technologies: ['Python', 'XGBoost / LightGBM', 'scikit-learn', 'pandas'],
  },
  {
    id: crypto.randomUUID(),
    imageUrl: '/rasters/projects/iot.webp',
    technologies: ['Python', 'Time-Series Models', 'Anomaly Detection', 'AWS'],
  },
  {
    id: crypto.randomUUID(),
    imageUrl: '/rasters/projects/applied-ml.webp',
    technologies: ['Python', 'PyTorch', 'OpenCV', 'Azure', 'GCP'],
  },
];
