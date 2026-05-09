import { ProfileData, Education, Experience, Project, SkillCategory, Certification, Publication } from '../types';

export const profileData: ProfileData = {
  name: "Rahul Juluru",
  title: "Software Engineer — Backend, AI/LLM & Distributed Systems",
  email: "rahuljuluru.cs@gmail.com",
  phone: "+1 (405)-493-3371",
  linkedin: "https://www.linkedin.com/in/rahul-juluru-39205b2a7",
  github: "https://github.com/rahuljuluru92",
  about:
    "Backend engineer and MS Computer Science student at the University of Oklahoma, building production ML pipelines, distributed systems, and AI-powered applications. I work across the stack when needed, but my strongest work is in reliable backend services, containerized microservices, and LLM systems that are measurable, scalable, and easy to operate. Recent projects span RAG pipelines, vector search systems, Text-to-SQL engines, and ML workflows for biomedical classification and anomaly detection.",
};

export const educationData: Education[] = [
  {
    degree: "Master of Science",
    field: "Computer Science",
    institution: "University of Oklahoma",
    location: "Norman, OK",
    period: "Aug 2024 – May 2026",
    gpa: "3.78 / 4.0",
  },
  {
    degree: "Bachelor of Technology",
    field: "Information Technology",
    institution: "CVR College of Engineering",
    location: "Hyderabad, India",
    period: "Aug 2020 – May 2024",
    gpa: "9.35 / 10.0",
  },
];

export const experienceData: Experience[] = [
  {
    role: "Software Engineer",
    company: "University of Oklahoma",
    location: "Norman, OK",
    period: "Aug 2024 – Present",
    tags: ["Docker", "Kubernetes", "GCP", "Python", "CI/CD"],
    description: [
      "Containerized a 5-stage manual data preprocessing pipeline into GCP-deployed microservices using Docker and Kubernetes, eliminating 70% of manual effort and cutting average ingestion time from ~4 hrs to under 40 min for a 3-researcher team.",
      "Slashed asynchronous task failure rate by 40% by instrumenting retry-based orchestration, schema validation, and structured logging across the distributed ingestion pipeline — reducing silent data drops from ~12% to under 2%.",
      "Decomposed monolithic preprocessing scripts into 4 independently versioned modules (ingest, transform, feature compute, export) using OOP principles, enabling isolated per-stage iteration and cutting integration regression time by ~60%.",
    ],
  },
  {
    role: "Software Engineer ",
    company: "NeoSpark Solutions",
    location: "Hyderabad, India",
    period: "Jun 2022 – Jun 2024",
    tags: ["Node.js", "React", "Express", "Redux", "REST APIs"],
    description: [
      "Shipped a self-serve internal reporting portal (Node.js / Express / React) using RESTful API design that replaced ad-hoc spreadsheet workflows across 5+ teams — reclaiming ~8 hrs/week of analyst time and eliminating a 2-day manual reporting cycle.",
      "Accelerated multi-report dashboard load time by 25% (1.8s → 1.35s, within the 1.5s SLA target) by batching asynchronous API calls and eliminating redundant sequential fetches in the Express response layer.",
      "Refactored frontend state management from prop-drilling to Redux and Context API, reducing wasted renders from ~340ms to ~95ms per interaction (profiled via React DevTools) and raising Lighthouse performance score from 61 to 84.",
    ],
  },
  {
    role: "Software Engineer ",
    company: "Salesforce",
    location: "Remote",
    period: "Jan 2022 – Jun 2022",
    tags: ["Apex", "Lightning Web Components", "SOQL", "REST APIs"],
    description: [
      "Engineered 12 Apex triggers and Flow automations to unify cross-object business logic across 3 Salesforce orgs — eliminating a class of manual data-reconciliation errors that caused ~30% of support escalations.",
      "Composed 4 Lightning Web Components with asynchronous RESTful bindings and optimized SOQL queries, cutting data retrieval latency by 40% and eliminating full-page refresh cycles for the sales dashboard.",
      "Hardened least-privilege access across 6 custom objects using Salesforce profiles and permission sets — reducing unauthorized field-access incidents to zero and passing a compliance security audit covering 200+ user records.",
    ],
  },
];

export const projectsData: Project[] = [
  // ── Full Stack ──────────────────────────────────────────────────
  {
    title: "Smart Expense Tracker",
    period: "Jan 2025 – Apr 2025",
    category: "fullstack",
    technologies: ["Next.js", "Express.js", "FastAPI", "PostgreSQL", "Prisma", "Docker", "Tesseract", "OpenCV", "Redis"],
    visualNote: "Receipt OCR + AI categorization pipeline",
    metrics: [
      { label: "Throughput", value: "240 RPS" },
      { label: "Accuracy", value: "92%" },
      { label: "Scale", value: "500 users" },
    ],
    description: [
      "Architected a microservices-based system with 3 independently deployable services (Next.js frontend, Express.js API gateway, FastAPI AI service) to decouple ML model updates from UI releases — enabling zero-downtime service-level deployments.",
      "Launched an OCR-to-LLM receipt processing pipeline (Tesseract, OpenCV, GPT-4 categorization) achieving 92% classification accuracy across 15 expense categories — eliminating 60% of manual data entry validated over 200+ receipts.",
      "Scaled backend throughput from 120 to 240 RPS under sustained load by introducing Redis response caching and PostgreSQL query optimization with composite indexing — validated via k6 load tests simulating 500 concurrent users.",
    ],
    repoUrl: "https://github.com/rahuljuluru92/smart-expense-tracker",
  },
  {
    title: "Airbnb Clone",
    period: "Nov 2024",
    category: "fullstack",
    technologies: ["Next.js 14", "React", "Tailwind CSS", "Django", "DRF", "PostgreSQL", "Docker Compose", "Django Channels"],
    visualNote: "Real-time booking + chat platform",
    metrics: [
      { label: "UI", value: "Responsive" },
      { label: "Chat", value: "WebSocket" },
      { label: "Deploy", value: "DigitalOcean" },
    ],
    description: [
      "Built a responsive full-stack booking platform with email authentication (Django Allauth), date-range availability (react-date-range), conflict-safe reservations, and image uploads via Django DRF.",
      "Containerized the entire stack with Docker Compose and deployed on DigitalOcean; tuned DRF + PostgreSQL (indexes, pagination) and added real-time WebSocket live chat via Django Channels, maintaining stable P95 API latency under load.",
    ],
    repoUrl: "",
  },
  {
    title: "CogniFetch",
    period: "Aug 2024 – Oct 2024",
    category: "fullstack",
    technologies: ["React", "Node.js", "Flask", "Tesseract OCR", "OpenNLP", "REST", "Task Queue"],
    visualNote: "Document parser and query ranking engine",
    metrics: [
      { label: "Docs", value: "5+" },
      { label: "Error", value: "<5%" },
      { label: "Latency", value: "<2s" },
    ],
    description: [
      "Designed an OCR-to-NLP extraction pipeline (Tesseract, OpenNLP) that structured 10–20+ topics per syllabus upload with under 5% topic-boundary error across 5+ document formats — transforming unstructured PDFs into ranked, indexed query sets.",
      "Resolved a query-ambiguity problem in syllabus parsing by combining LLM-generated search queries with Google Search API relevance ranking — cutting average topic lookup time by ~50% across 30 diverse syllabus documents.",
      "Deployed a modular Flask backend with asynchronous task queuing, RESTful endpoints, and concurrent multi-format upload support — maintaining sub-2-second p95 response time under load testing with 20 simultaneous users.",
    ],
    repoUrl: "https://github.com/rahuljuluru92/Cogni-Fetch",
  },
  {
    title: "Internship Program Management System",
    period: "Feb 2025",
    category: "fullstack",
    technologies: ["JavaScript", "Node.js", "MongoDB", "React", "NodeMailer", "RBAC"],
    visualNote: "Approval workflows for student placement",
    metrics: [
      { label: "Teams", value: "3" },
      { label: "RBAC", value: "Enabled" },
      { label: "Cycle", value: "Automated" },
    ],
    description: [
      "Built partner-facing approval workflows and dashboards with RBAC and schema-validated APIs, enabling real-time coordination among students, supervisors, and coordinators.",
      "Implemented notification pipelines (NodeMailer + templates) and optimized React UI while collaborating in a five-member Agile team to ensure reliable delivery and integration.",
    ],
    repoUrl: "",
  },
  // ── AI / LLM ────────────────────────────────────────────────────
  {
    title: "Domain-Specific RAG Chatbot",
    period: "Jun 2025 – Aug 2025",
    category: "ai",
    technologies: ["LangChain", "FAISS", "Chroma", "OpenAI GPT-4", "FastAPI", "GCP", "Docker", "RAGAS"],
    visualNote: "RAG pipeline with indexed domain documents",
    metrics: [
      { label: "Docs", value: "5,000+" },
      { label: "Latency", value: "<1.5s" },
      { label: "Accuracy", value: "86%" },
    ],
    description: [
      "Architected a production-ready RAG pipeline using LangChain and FAISS/Chroma vector databases, indexing 5,000+ domain documents with OpenAI embedding models for semantic top-k retrieval — achieving sub-1.5s p95 query latency.",
      "Boosted answer accuracy from 62% (baseline prompt-only LLM) to 86% by implementing document chunking strategies, embedding caching, and cosine-similarity reranking — validated using RAGAS evaluation framework across a 200-query golden test set.",
      "Reduced average response latency by 35% (1.9s → 1.2s) via embedding memoization and async FastAPI endpoints, deployed as a containerized service on GCP using Docker.",
    ],
    repoUrl: "",
  },
  {
    title: "Chat-with-PDF AI SaaS",
    period: "May 2025",
    category: "ai",
    technologies: ["Next.js", "TypeScript", "Firebase", "Pinecone", "LangChain", "Stripe", "Clerk"],
    visualNote: "Multi-tenant PDF chat SaaS",
    metrics: [
      { label: "Auth", value: "Clerk" },
      { label: "Billing", value: "Stripe" },
      { label: "Deploy", value: "Vercel" },
    ],
    description: [
      "Engineered a full-stack SaaS app that lets users upload and query PDFs via LangChain-powered retrieval, with secure multi-tenant architecture deployed on Vercel.",
      "Integrated Clerk authentication and Stripe billing for multi-plan subscription access and optimized retrieval/caching pipelines, achieving ~40% lower query latency.",
    ],
    repoUrl: "",
    liveUrl: "",
  },
  {
    title: "Conversational Text-to-SQL System",
    period: "Jan 2025 – Feb 2025",
    category: "ai",
    technologies: ["GPT-4", "LangChain", "Python", "AI Agents", "PostgreSQL", "FastAPI"],
    visualNote: "Schema-aware natural language query layer",
    metrics: [
      { label: "Exec rate", value: "91%" },
      { label: "Gain", value: "+23 pts" },
      { label: "Fixes", value: "Auto" },
    ],
    description: [
      "Launched a schema-aware text-to-SQL pipeline using GPT-4 with LangChain orchestration, lifting natural-language query execution rate from 68% to 91% by injecting live schema context, query validation logic, and automated syntax correction.",
      "Resolved LLM hallucination of table and column references by applying prompt engineering constraints and AI agents for schema introspection — reducing hallucination rate by 40% across a 500+ labeled query benchmark.",
      "Benchmarked end-to-end performance using exact-match and execution-based accuracy metrics (Precision@k, Exact Match), surfacing a 23-point accuracy gap between schema-aware and schema-agnostic prompting strategies.",
    ],
    repoUrl: "",
  },
  // ── ML & Data Science ───────────────────────────────────────────
  {
    title: "Biomedical ML — Acute GVHD Classification",
    period: "2024",
    category: "ml",
    technologies: ["Python", "scikit-learn", "SVM", "PCA", "Multiple Instance Learning", "NumPy"],
    visualNote: "Biomedical classification and biomarker localization",
    metrics: [
      { label: "F1", value: "84%" },
      { label: "Sensitivity", value: "80%" },
      { label: "Specificity", value: "83%" },
    ],
    description: [
      "Architected a Multiple Instance Learning (MIL) pipeline for acute GVHD classification from Raman spectroscopy biopsies, modeling each sample as a bag of 500+ spectral instances with PCA-based dimensionality reduction across 10,000+ features.",
      "Trained an SVM-MIL classifier with Log-Sum-Exp pooling achieving 80% sensitivity, 83% specificity, and 84% F1-score — outperforming average-spectrum baselines by +24% specificity on held-out test data.",
      "Mapped instance-level MIL probabilities to localize 3 key spectral biomarker regions (epithelial damage, lipid remodeling, NADH disruption), providing interpretable disease-associated signatures beyond classification output.",
    ],
    repoUrl: "",
  },
  {
    title: "Predictive Maintenance — Time-Series Sensor Modeling",
    period: "2025",
    category: "ml",
    technologies: ["Python", "Isolation Forest", "Random Forest", "NASA C-MAPSS", "scikit-learn", "Pandas"],
    visualNote: "Drift-aware failure prediction pipeline",
    metrics: [
      { label: "Recall", value: "+18%" },
      { label: "False alerts", value: "-35%" },
      { label: "Subsets", value: "4" },
    ],
    description: [
      "Designed a two-stage ML pipeline on the NASA C-MAPSS benchmark distinguishing sensor drift from true engine degradation — applying Isolation Forest for unsupervised drift detection over temporal sensor deltas to identify gradual calibration loss.",
      "Engineered rolling-window features from drift-corrected sensor streams and trained a Random Forest classifier for 30-cycle failure prediction, improving failure recall by 18% and reducing false maintenance alerts by 35% vs the non-drift-corrected baseline.",
      "Validated model robustness via stratified cross-validation and ROC-AUC analysis across 4 operating condition subsets, confirming generalization beyond the dominant training distribution.",
    ],
    repoUrl: "",
  },
  {
    title: "Industrial IoT — Refinery Anomaly Detection",
    period: "2025",
    category: "ml",
    technologies: ["Python", "Isolation Forest", "Streamlit", "Pandas", "scikit-learn", "Matplotlib"],
    visualNote: "Sensor triage dashboard for industrial faults",
    metrics: [
      { label: "Precision", value: "85%" },
      { label: "F1", value: "82%" },
      { label: "Faults", value: "4" },
    ],
    description: [
      "Calibrated an Isolation Forest anomaly detection model on simulated refinery IoT sensor streams (temperature, pressure, vibration, flow), achieving 85% precision and 82% F1-score across 4 injected fault classes.",
      "Profiled multivariate feature interactions for overheating, pressure leaks, flow blockages, and vibration surges — identifying cross-sensor correlation patterns that reduced false positive rate by 20% vs single-sensor baselines.",
      "Deployed a modular Streamlit inference dashboard enabling real-time anomaly triage across 4 sensor streams, with production-style fault classification and confusion matrix monitoring.",
    ],
    repoUrl: "",
  },
];

export const certificationsData: Certification[] = [
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=0CEBCA7CF91AD1C7C7885DE8ECCC9623D318609E80900005D915DDDCE9383BC5",
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=F22B9691B4DFF5636EC8B3FB2B19B386A30C98B1E7EC438B49AFF8D5B3D4E970",
  },
  {
    name: "Artificial Intelligence Foundation",
    issuer: "Wipro",
  },
  {
    name: "Python for Data Science",
    issuer: "NPTEL",
  },
  {
    name: "Cyber Security Foundation",
    issuer: "Wipro",
  },
];

export const publicationsData: Publication[] = [
  {
    title: "Prediction of graft-versus-host disease severity using optical biopsy",
    venue: "SPIE Digital Library — Proceedings of SPIE, Volume 13843",
    date: "Mar 5, 2026",
    url: "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/13843/3077116/Prediction-of-graft-versus-host-disease-severity-using-optical-biopsy/10.1117/12.3077116.short",
    description:
      "Co-authored a research paper on predicting acute graft-versus-host disease (A-GVHD) severity using Raman spectroscopy and machine learning. Applied PCA, PLS-DA, SVM-DA, and Multiple Instance Learning (MIL) to analyze spectral data from gut biopsies. Demonstrated improved classification performance (up to 84% F1 score) and enhanced detection of disease-specific molecular signatures, highlighting the potential of optical biopsy for early diagnosis and risk stratification.",
  },
];

export const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Java", level: 78 },
      { name: "C / C++", level: 72 },
      { name: "SQL", level: 86 },
      { name: "R" },
      { name: "HTML / CSS", level: 84 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "Node.js / Express.js", level: 87 },
      { name: "FastAPI", level: 89 },
      { name: "Django / DRF", level: 82 },
      { name: "Spring Boot" },
      { name: "Flask", level: 84 },
    ],
  },
  {
    title: "AI & LLM Engineering",
    skills: [
      { name: "RAG (Retrieval-Augmented Generation)", level: 92 },
      { name: "LangChain", level: 90 },
      { name: "OpenAI GPT-4", level: 88 },
      { name: "Hugging Face" },
      { name: "Prompt Engineering", level: 90 },
      { name: "LLM Fine-Tuning" },
      { name: "Text-to-SQL", level: 86 },
      { name: "FAISS / Chroma", level: 89 },
      { name: "AI Agents", level: 84 },
      { name: "Transformer Architectures" },
      { name: "NLP", level: 83 },
    ],
  },
  {
    title: "ML & Data Science",
    skills: [
      { name: "scikit-learn", level: 88 },
      { name: "Pandas / NumPy", level: 88 },
      { name: "XGBoost" },
      { name: "Isolation Forest", level: 84 },
      { name: "SVM / Random Forest", level: 82 },
      { name: "Multiple Instance Learning", level: 80 },
      { name: "Time-Series Modeling", level: 83 },
      { name: "Anomaly Detection", level: 85 },
      { name: "Feature Engineering", level: 84 },
      { name: "Matplotlib / Seaborn" },
      { name: "Streamlit", level: 82 },
    ],
  },
  {
    title: "MLOps & Data Pipelines",
    skills: [
      { name: "MLflow" },
      { name: "ETL / ELT Pipelines", level: 84 },
      { name: "Experiment Tracking" },
      { name: "Model Versioning" },
      { name: "Data Validation", level: 85 },
      { name: "RAGAS", level: 82 },
      { name: "GitHub Actions", level: 80 },
      { name: "Jenkins" },
    ],
  },
  {
    title: "Infrastructure & DevOps",
    skills: [
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 86 },
      { name: "AWS (Lambda, S3, API Gateway, SageMaker)", level: 82 },
      { name: "GCP (Cloud Run, Vertex AI, Firestore)", level: 84 },
      { name: "CI/CD Pipelines", level: 84 },
      { name: "Linux", level: 82 },
      { name: "Git", level: 90 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 82 },
      { name: "Redis", level: 85 },
      { name: "MySQL" },
      { name: "Firebase / Firestore", level: 80 },
      { name: "Pinecone", level: 83 },
    ],
  },
];
