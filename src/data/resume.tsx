import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Vishal Haldar",
  initials: "VH",
  url: "https://github.com/VishalHaldar",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "B.Tech Computer Science student at MSIT with a focus on Machine Learning, Deep Learning, and Generative AI. Experienced in building multi-agent systems and RAG pipelines.",
  summary:
    "I am a Computer Science student at Maharaja Surajmal Institute of Technology with a strong foundation in Artificial Intelligence. I specialize in building intelligent AI systems, RAG-based chatbots, and multi-agent workflows using technologies like FastAPI, LangChain, and LangGraph. I've worked on research projects with DRDO and developed scalable AI applications.",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "C++",
    "JavaScript",
    "Machine Learning",
    "Deep Learning",
    "Generative AI",
    "NLP",
    "FastAPI",
    "HTML",
    "CSS",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "TensorFlow",
    "NLTK",
    "LangChain",
    "OpenAI API",
    "Gemini API",
    "Hugging Face API",
    "MongoDB",
    "Docker",
    "Git",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "vishalhaldar2023@gmail.com",
    tel: "+91 7047932489",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/vis-hal-git",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/thevishalhaldar/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,
        navbar: false,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/vishalhaldar/",
        icon: Icons.leetcode,
        navbar: true,
      },
      Cal: {
        name: "Book a Call",
        url: "#",
        icon: Icons.calendar,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:vishalhaldar2023@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Institute for Systems Studies & Analyses (ISSA), DRDO",
      badges: [],
      href: "",
      location: "India",
      title: "Trainee",
      logoUrl: "",
      start: "June 2025",
      end: "July 2025",
      description:
        "• Conducted a research project on analyzing disinformation and narrative warfare with respect to Operation Sindoor.\n• Utilized an NPC-based simulation platform to model the spread of disinformation, demonstrating how group dynamics and communication patterns influence public trust and societal resilience.\n• Analyzed the impact of strategic interventions and timing, showing how small changes can lead to dramatically different outcomes in public opinion.",
    },
    {
      company: "Maharaja Surajmal Institute of Technology",
      href: "",
      badges: [],
      location: "India",
      title: "Research Project: Integrating Machine and Deep Learning for Skin Cancer and Disease Classification",
      logoUrl: "",
      start: "",
      end: "",
      description:
        "• Conducted under the mentorship of Dr. Sangeeta, Department of CSE, MSIT.\n• Co-developed a hybrid model integrating machine learning algorithms and CNN-based deep learning techniques with MobileNet feature extraction for melanoma and multi-class skin disease classification.\n• Outcome: Research paper presented at ICAIA 2025 and published based on this work.",
    },
  ],
  education: [
    {
      school: "Maharaja Surajmal Institute of Technology",
      href: "https://www.msit.in/",
      degree: "Bachelor of Technology in Computer Science",
      logoUrl: "",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "VidMind: RAG-Based Multi-Agent YouTube Chatbot",
      href: "https://vidmind.haldar.online/",
      active: true,
      description:
        "Designed and developed an intelligent web application that extracts YouTube transcripts and uses Retrieval-Augmented Generation (RAG) to allow users to interactively chat with video content. Engineered a multi-agent orchestration backend using FastAPI and LangChain. Implemented persistent chat sessions, timestamped bookmarks, and architected a lightweight, containerized deployment using Docker.",
      technologies: [
        "Python",
        "FastAPI",
        "LangChain",
        "RAG",
        "Docker"
      ],
      links: [
        {
          type: "Website",
          href: "https://vidmind.haldar.online/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/vis-hal-git/youtube_chatbot.git",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "",
      video: "",
    },
    {
      title: "ResearchMind: Autonomous AI Research System",
      href: "http://researchmind.haldar.online/",
      active: true,
      description:
        "Built an autonomous multi-agent research system using LangGraph to search, analyze, and generate structured research reports. Developed a PDF-based RAG pipeline to ground responses with domain-specific document context. Designed a self-correcting Critic Loop to evaluate generated drafts and integrated deep web search with dynamic query expansion.",
      technologies: [
        "Python",
        "FastAPI",
        "LangGraph",
        "RAG",
        "Multi-Agent"
      ],
      links: [
        {
          type: "Website",
          href: "http://researchmind.haldar.online/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/vis-hal-git/ResearchMind.git",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "",
      video: "",
    },
    {
      title: "RAG-Based Chatbot System",
      href: "http://ragchatbot.haldar.online/",
      active: true,
      description:
        "Built a multi-modal RAG chatbot capable of analyzing both text and image-heavy documents, leveraging OCR and the OpenAI API. Engineered a hybrid search and reranking engine for highly accurate, context-aware document retrieval. Containerized the application with Docker and utilized MongoDB for session management.",
      technologies: [
        "Python",
        "OpenAI API",
        "OCR",
        "Docker",
        "MongoDB"
      ],
      links: [
        {
          type: "Website",
          href: "http://ragchatbot.haldar.online/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/vis-hal-git/RAG-Based-Chatbot-System",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "",
      video: "",
    },
    {
      title: "Medical Advisor - AI-Powered Health Assistant",
      href: "https://github.com/vis-hal-git/Medical-Assisstant",
      active: true,
      description:
        "A modern Flask web application that uses OpenAI's GPT to provide medical information and health guidance. Features include multiple query categories, chat history, an emergency page, rate limiting, and a REST API.",
      technologies: [
        "Python",
        "Flask",
        "OpenAI API",
        "REST API"
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/vis-hal-git/Medical-Assisstant",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "HackCBS 8.0: AI Linux Agent",
      dates: "",
      location: "",
      description:
        "Developed an offline AI-powered Linux assistant using FastAPI, LangChain, and Ollama Qwen 2.5, integrated with a RAG-based system trained on over 600 Linux commands. Enabled voice and text interaction, real-time automation, and secure handling of 20+ tools for system control.",
      image: "",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/vis-hal-git/Linux-Ai-Agent",
        }
      ],
    },
  ],
} as const;
