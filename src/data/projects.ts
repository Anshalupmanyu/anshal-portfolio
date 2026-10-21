export interface Project {
  title: string;
  year: string;
  summary: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const projectsData: Project[] = [
  {
    title: "Enterprise RAG Platform",
    year: "2026",
    summary:
      "Architected a scalable Retrieval-Augmented Generation service indexing 10,000+ document chunks via FAISS vector store with sub-100ms response latency.",
    techStack: ["Python", "LangChain", "FAISS", "FastAPI", "Hugging Face", "Docker"],
    githubUrl: "https://github.com/anshalupmanyu",
  },
  {
    title: "End-to-End MLOps Pipeline with Drift Detection",
    year: "2026",
    summary:
      "Constructed an automated CI/CD pipeline for model lifecycle management using MLflow tracking, maintaining 99.2% service uptime and real-time concept drift alerting.",
    techStack: ["Python", "MLflow", "FastAPI", "Docker", "Scikit-learn"],
    githubUrl: "https://github.com/anshalupmanyu",
  },
  {
    title: "Semantic Metadata ETL & Search Service",
    year: "2025",
    summary:
      "Developed an ETL pipeline capable of ingesting and vectorizing 45,000+ multi-attribute JSON metadata records using sentence transformers and FastAPI.",
    techStack: ["Python", "Pandas", "Scikit-learn", "FastAPI", "Streamlit"],
    githubUrl: "https://github.com/anshalupmanyu",
  },
];
