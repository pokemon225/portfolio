// Period, description, and highlights are translated, so they live in
// public/locales/{lng}/translation.json under "projects" (same order as here).
// imageUrl, repository, and livelink are optional; cards fall back to a
// generated tile (showing label) and hide missing links.
export const projectData = [
  {
    id: crypto.randomUUID(),
    title: 'Real-Time Bidding Platform',
    label: 'RTB',
    category: 'Internet Ad · RTB',
    technologies: ['Go', 'Java', 'Kubernetes', 'Redis', 'gRPC'],
  },
  {
    id: crypto.randomUUID(),
    title: 'Ad Performance & Bid ML Platform',
    label: 'Ad ML',
    category: 'AI · Ad Performance',
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
    title: 'AI Agent Platform',
    label: 'AI Agents',
    category: 'AI · Agent Platform',
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
    title: 'Nuclear Regulatory Compliance Agent',
    label: 'Compliance RAG',
    category: 'AI / LLM · Nuclear · Compliance',
    technologies: ['Python', 'RAG', 'LangChain', 'Vector Search', 'On-Premise'],
  },
  {
    id: crypto.randomUUID(),
    title: 'Real-Time Data Ingestion Pipeline',
    label: 'Streaming',
    category: 'Data · ML Pipeline',
    technologies: ['Kafka', 'Apache Spark', 'Python', 'GCP', 'Airflow'],
  },
  {
    id: crypto.randomUUID(),
    title: 'Kubernetes Cloud Migration',
    label: 'Kubernetes',
    category: 'Cloud · Infrastructure',
    technologies: ['Kubernetes', 'Docker', 'Terraform', 'Prometheus', 'Grafana'],
  },
  {
    id: crypto.randomUUID(),
    title: 'Bilingual Business NLP',
    label: 'Bilingual NLP',
    category: 'NLP · Translation',
    technologies: ['Python', 'Hugging Face Transformers', 'spaCy', 'PyTorch'],
  },
  {
    id: crypto.randomUUID(),
    title: 'Intelligent Document Processing',
    label: 'Document AI',
    category: 'OCR · NLP · Compliance',
    technologies: ['Python', 'OCR', 'OpenCV', 'spaCy', 'NLP'],
  },
  {
    id: crypto.randomUUID(),
    title: 'Back-Office Automation Pipelines',
    label: 'Automation',
    category: 'ML Pipelines · Enterprise',
    technologies: ['Python', 'scikit-learn', 'pandas', 'Airflow'],
  },
  {
    id: crypto.randomUUID(),
    title: 'Support Chatbot & Routing',
    label: 'Chatbot',
    category: 'NLP · Customer Support',
    technologies: ['Python', 'Hugging Face Transformers', 'FastAPI', 'NLP'],
  },
  {
    id: crypto.randomUUID(),
    title: 'Banking & POS Predictive Analytics',
    label: 'Analytics',
    category: 'Fintech · Retail',
    technologies: ['Python', 'XGBoost / LightGBM', 'scikit-learn', 'pandas'],
  },
  {
    id: crypto.randomUUID(),
    title: 'AI-Enabled IoT Printer Monitoring',
    label: 'IoT',
    category: 'IoT · Predictive Maintenance',
    technologies: ['Python', 'Time-Series Models', 'Anomaly Detection', 'AWS'],
  },
  {
    id: crypto.randomUUID(),
    title: 'Industry ML Solutions',
    label: 'Applied ML',
    category: 'Healthcare · Energy · Agriculture',
    technologies: ['Python', 'PyTorch', 'OpenCV', 'Azure', 'GCP'],
  },
];
