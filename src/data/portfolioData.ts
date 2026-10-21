export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  highlights: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  score: string;
}

export const siteConfig = {
  name: "Anshal Upmanyu",
  role: "Software Engineer",
  currentTitle: "System Engineer",
  currentCompany: "Infosys",
  location: "Bengaluru, Karnataka, India",
  timezone: "IST (UTC+5:30)",
  email: "anshalupmanyuu@gmail.com",
  headline: "Engineering scalable cloud infrastructure, distributed systems, and production AI pipelines.",
  aboutBio:
    "I am a Software Engineer specializing in Kubernetes & Red Hat OpenShift orchestration, high-concurrency microservices, and practical machine learning platforms. With research backgrounds at DRDO and IIT Mandi, I focus on building resilient, low-latency architectures that bridge cutting-edge research and mission-critical production systems.",
  socials: {
    github: "https://github.com/anshalupmanyu",
    linkedin: "https://www.linkedin.com/in/anshal-upmanyu/",
    twitter: "https://x.com/", // Update with your handle if desired
    sourceCode: "https://github.com/anshalupmanyu/portfolio",
  },
  skills: {
    "Languages": ["Java", "Python", "C++", "Shell/Bash", "SQL"],
    "Cloud & Infrastructure": ["Kubernetes", "Red Hat OpenShift", "Docker", "Linux", "OCI"],
    "Databases & Frameworks": [
      "FastAPI",
      "LangChain",
      "PyTorch",
      "Hugging Face",
      "Scikit-learn",
      "Oracle DB 21c",
      "MySQL",
    ],
    "Core Competencies": [
      "Distributed Systems",
      "Microservices",
      "REST APIs",
      "RAG Pipelines",
      "MLOps",
      "CI/CD",
    ],
  },
  experience: [
    {
      company: "Infosys",
      role: "System Engineer",
      period: "Oct 2025 - Present",
      location: "Bengaluru, Karnataka, India",
      current: true,
      highlights: [
        "Orchestrated 15+ containerized microservices on Red Hat OpenShift and Kubernetes clusters, configuring ingress, persistent volumes, and mutual TLS.",
        "Streamlined enterprise workload migration pipelines from legacy virtualization platforms (VMware/RHV) into OpenShift Container Platform.",
        "Enforced zero-trust identity policies and granular Role-Based Access Controls (RBAC) across 3 distinct multi-tenant clusters.",
      ],
    },
    {
      company: "DRDO, Ministry of Defence, Govt. of India",
      role: "Research Intern",
      period: "Aug 2024 - Jan 2025",
      location: "Chandigarh, India",
      current: false,
      highlights: [
        "Spearheaded a multi-modal remote sensing classification architecture fusing 3D LiDAR point clouds and hyperspectral imagery.",
        "Formulated high-throughput Python preprocessing routines to denoise and calibrate 100+ spectral bands, accelerating inference readiness by 35%.",
      ],
    },
    {
      company: "IIT Mandi",
      role: "Machine Learning Research Intern",
      period: "Jan 2024 - May 2024",
      location: "Mandi, Himachal Pradesh, India",
      current: false,
      highlights: [
        "Adapted state-of-the-art vision-language models (mPLUG-2) in PyTorch, evaluating cross-modal semantic alignment across noisy datasets.",
        "Accelerated multi-GPU training throughput across 4x NVIDIA A100 instances by 15% through pinned memory optimization and mixed-precision pipelines.",
      ],
    },
  ] as ExperienceItem[],
  education: {
    institution: "University Institute of Information and Technology, H.P.U",
    degree: "Bachelor of Technology in Information Technology",
    period: "Oct 2021 - Aug 2025",
    location: "Shimla, Himachal Pradesh, India",
    score: "CGPA: 8.32",
  } as EducationItem,
  certifications: [
    {
      title: "Oracle Cloud Infrastructure AI Foundations Associate",
      issuer: "Oracle (OCI Certified)",
      year: "2025",
    },
    {
      title: "J.P. Morgan Software Engineering Job Simulation",
      issuer: "Forage / J.P. Morgan",
      year: "2024",
    },
  ],
};
