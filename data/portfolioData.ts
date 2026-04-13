import { ProfileData, Education, Experience, Project, SkillCategory, Certification, Publication } from '../types';

export const profileData: ProfileData = {
  name: "Rahul Juluru",
  title: "Full Stack Engineer & AI/LLM Systems Builder",
  email: "rahuljuluru.cs@gmail.com",
  phone: "+1 (405)-493-3371",
  linkedin: "https://www.linkedin.com/in/rahul-juluru-39205b2a7",
  github: "https://github.com/rahuljuluru92",
  about:
    "Full Stack Software Engineer and MS Computer Science student at the University of Oklahoma, building scalable cloud-native systems and LLM-powered applications. I work across the stack — developing responsive frontends with React/Next.js, engineering high-performance backend services with Node.js and FastAPI, and deploying containerized microservices on GCP and AWS. My recent work includes RAG pipelines, vector search systems (FAISS/Chroma), Text-to-SQL engines, and ML pipelines for biomedical classification and anomaly detection. Passionate about combining strong software engineering fundamentals with intelligent AI systems to build production-ready, impactful software.",
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
    role: "Software Engineering ",
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
    role: "Software Engineering ",
    company: "Salesforce",
    location: "Remote",
    
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
      { name: "Python" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Java" },
      { name: "C / C++" },
      { name: "SQL" },
      { name: "R" },
      { name: "HTML / CSS" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Node.js / Express.js" },
      { name: "FastAPI" },
      { name: "Django / DRF" },
      { name: "Spring Boot" },
      { name: "Flask" },
    ],
  },
  {
    title: "AI & LLM Engineering",
    skills: [
      { name: "RAG (Retrieval-Augmented Generation)" },
      { name: "LangChain" },
      { name: "OpenAI GPT-4" },
      { name: "Hugging Face" },
      { name: "Prompt Engineering" },
      { name: "LLM Fine-Tuning" },
      { name: "Text-to-SQL" },
      { name: "FAISS / Chroma" },
      { name: "AI Agents" },
      { name: "Transformer Architectures" },
      { name: "NLP" },
    ],
  },
  {
    title: "ML & Data Science",
    skills: [
      { name: "scikit-learn" },
      { name: "Pandas / NumPy" },
      { name: "XGBoost" },
      { name: "Isolation Forest" },
      { name: "SVM / Random Forest" },
      { name: "Multiple Instance Learning" },
      { name: "Time-Series Modeling" },
      { name: "Anomaly Detection" },
      { name: "Feature Engineering" },
      { name: "Matplotlib / Seaborn" },
      { name: "Streamlit" },
    ],
  },
  {
    title: "MLOps & Data Pipelines",
    skills: [
      { name: "MLflow" },
      { name: "ETL / ELT Pipelines" },
      { name: "Experiment Tracking" },
      { name: "Model Versioning" },
      { name: "Data Validation" },
      { name: "RAGAS" },
      { name: "GitHub Actions" },
      { name: "Jenkins" },
    ],
  },
  {
    title: "Infrastructure & DevOps",
    skills: [
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "AWS (Lambda, S3, API Gateway, SageMaker)" },
      { name: "GCP (Cloud Run, Vertex AI, Firestore)" },
      { name: "CI/CD Pipelines" },
      { name: "Linux" },
      { name: "Git" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "MySQL" },
      { name: "Firebase / Firestore" },
      { name: "Pinecone" },
    ],
  },
];
