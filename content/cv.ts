export type Lang = "ko" | "en";

export type LocalizedText = {
  ko: string;
  en: string;
};

export type CvLink = {
  label: string;
  href: string;
};

export type ExperienceItem = {
  period?: string;
  organization: string;
  title: LocalizedText;
  description: LocalizedText;
  link?: CvLink;
};

export type EducationItem = {
  period?: string;
  school: string;
  degree: LocalizedText;
  description?: LocalizedText;
};

export type PublicationItem = {
  year: string;
  title: LocalizedText;
  venue: LocalizedText;
  authors: LocalizedText;
  link?: CvLink;
};

export type AwardItem = {
  year: string;
  title: LocalizedText;
  description: LocalizedText;
};

export const cvCopy = {
  kicker: { ko: "이력서", en: "Curriculum Vitae" },
  experience: { ko: "Experience", en: "Experience" },
  education: { ko: "Education", en: "Education" },
  publications: { ko: "Publications", en: "Publications" },
  awards: { ko: "Awards & Honors", en: "Awards & Honors" },
  skills: { ko: "Programming Skills", en: "Programming Skills" },
};

export const cvProfile = {
  name: "JeongYun Lee",
  imageSrc: "/profile-pics/profile.jpeg",
  imageAlt: {
    ko: "정윤이 프로필 이미지",
    en: "Profile image of JeongYun Lee",
  },
  role: {
    ko: "연구자 · 박사 과정",
    en: "Researcher · Ph.D. Student",
  },
  location: {
    ko: "서울, 대한민국",
    en: "Seoul, South Korea",
  },
  email: "cathx618@gmail.com",
  summary: {
    ko: "안녕하세요. 중앙대학교 문헌정보학과 박사과정에 재학 중인 이정윤입니다.\n\n데이터와 AI 분야를 중심으로 연구하고 있으며, 온톨로지와 지식그래프에 관심을 가지고 있습니다. AI 기술을 실제 문제에 어떻게 활용할 수 있을지 고민하는 것을 좋아하고, 소소한 개발도 즐기고 있습니다.\n\n다양한 분야의 분들과 편하게 이야기 나눌 수 있으면 좋겠습니다.",
    en: "I'm JeongYun Lee, a Ph.D. student in the Department of Library and Information Science at Chung-Ang University in Seoul. My research interests lie at the intersection of AI and information organization, particularly in ontology and knowledge graphs. I enjoy exploring how AI can be applied in meaningful ways, and I also dabble in light development on the side.\n\nI love exchanging ideas and connecting with people across different fields, so feel free to reach out anytime!",
  },
  links: [
    { label: "GitHub", href: "https://github.com/JeongYunLee" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jyunlee/" },
    { label: "Blog", href: "https://velog.io/@cathx618/posts" },
  ] as CvLink[],
};

export const cvExperience: ExperienceItem[] = [
  {
    // period: "Present", // 필요할 때 연도 범위로 다시 수정
    period: "Present",
    organization: "LIS, Chung-Ang University, Seoul",
    title: { ko: "HIKE Lab 연구원", en: "Researcher, HIKE Lab" },
    description: {
      ko: "공공데이터, 지식그래프, 인공지능 기반 연구를 수행하고 있습니다.",
      en: "Master's student and researcher focused on data and language.",
    },
    link: { label: "HIKE Lab", href: "http://hike.cau.ac.kr" },
  },
  {
    // period: "2022",
    organization: "Bio-Medical Informatics Lab, Seoul National University Hospital",
    title: { ko: "BMI Lab 인턴 연구원", en: "Intern Researcher, BMI Lab (SNUH)" },
    description: {
      ko: "서울대학교병원 BMI Lab의 NLP 팀에서 텍스트 기반 의료 정보 추출 모델과 임상노트 및 EHR(Electronic Health Records) 데이터를 활용한 질환 탐지 모델 개발 프로젝트에 참여했습니다.",
      en: "In the Bio-Medical Informatics Lab at Seoul National University Hospital, I worked as part of the NLP team. I participated in projects including developing models for extracting medical information from clinical notes and disease detection models using clinical notes and EHR (Electronic Health Records) data.",
    },
    link: {
      label: "BMI Lab",
      href: "https://sites.google.com/view/snuh-bmi-lab",
    },
  },
  {
    // period: "2020 - 2023",
    organization: "Programming Community",
    title: { ko: "COSADAMA 운영진", en: "Staff, COSADAMA" },
    description: {
      ko: "COSADAMA는 중앙대학교 학생들이 운영하는 비전공자 중심 프로그래밍 커뮤니티입니다. 구성원이자 운영진으로서 팀 운영을 담당했고, 커리큘럼 웹사이트 개발에도 참여했습니다.",
      en: "COSADAMA (since January 13, 2020) is a programming community created by students at Chung-Ang University, especially for non-majors. As both a member and a staff member, I helped manage the team and worked on developing the curriculum website.",
    },
    link: { label: "COSADAMA", href: "https://cosadama.com/" },
  },
  {
    // period: "2020 - 2022",eam.Cayley",
    organization: "Project Team",
    title: { ko: "Team.Cayley 구성원", en: "Member, Team.Cayley" },
    description: {
      ko: "Team.Cayley는 중앙대학교 문헌정보학과 학생들과 COSADAMA 구성원으로 이루어진 팀입니다. 'COVID-19: Our Memory' 프로젝트에서는 팬데믹으로 인한 사회 변화를 데이터로 아카이빙하고 국립중앙도서관에 디지털 아카이브를 기증했습니다. 또한 'Cultural Heritage Synapse' 프로젝트에서는 약 65개의 온·오프라인 출처에 흩어진 국보 데이터를 정제해 고품질 데이터와 표준안을 제안하고, 이를 기반으로 텍스트 분석과 국보 문화유산 지식그래프를 구축했습니다.",
      en: "Team.Cayley is made up of students from Chung-Ang University in Library and Information Science and COSADAMA. You can see our work through the project links and GitHub. In the 'COVID-19: Our Memory' project, we archived social changes caused by the pandemic as data and donated the digital archive to the National Library of Korea in February 2022. In the 'Cultural Heritage Synapse' project, we consolidated scattered national treasure information from around 65 online and offline sources, proposed a standard for national treasure data, and used it for text analysis and a knowledge graph on Korean cultural heritage.",
    },
    link: {
      label: "Team.Cayley",
      href: "https://github.com/TeamCayley-official",
    },
  },
];

export const cvEducation: EducationItem[] = [
  {
    school: "Chung-Ang University",
    degree: {
      ko: "대학원 박사과정",
      en: "Ph.D. Student",
    },
  },
  {
    school: "Chung-Ang University",
    degree: {
      ko: "대학원 석사과정",
      en: "M.S. in Library and Information Science",
    },
  },
  {
    school: "Chung-Ang University",
    degree: {
      ko: "문헌정보학 학사 (데이터사이언스 복수전공)",
      en: "B.S. in Library and Information Science (Double Major in Data Science)",
    },
  },
];

export const cvPublications: PublicationItem[] = [
  {
    year: "2026.07",
    title: {
      ko: "공공데이터 연계의 구조적 조건: 컬럼 유형과 참조체계를 중심으로",
      en: "Structural Conditions for Public Data Linkage: Column Types and Reference Systems",
    },
    venue: {
      ko: "디지털콘텐츠학회논문지",
      en: "Journal of Digital Contents Society",
    },
    authors: {
      ko: "주저자",
      en: "First Author",
    },
    link: {
      label: "LINK",
      href: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003364009",
    },
  },
  {
    year: "2026.06",
    title: {
      ko: "AI Ready Data의 개념적 구조와 한국의 AI Ready 공공데이터 정책 분석",
      en: "Conceptualizing AI Ready Data and Analyzing South Korea's AI Ready Public Data Policy Framework",
    },
    venue: {
      ko: "정보화정책",
      en: "Informatization Policy",
    },
    authors: {
      ko: "주저자",
      en: "First Author",
    },
    link: {
      label: "LINK",
      href: "https://doi.org/10.22693/NIAIP.2026.33.2.067",
    },
  },
  {
    year: "2025.12",
    title: {
      ko: "주소 정보 접근성 향상을 위한 에이전틱 RAG 기반 챗봇 개발",
      en: "Development of Agentic RAG-based Chatbot for Improving Address Information Accessibility",
    },
    venue: {
      ko: "지적과 국토정보",
      en: "Cadastre and Land Information",
    },
    authors: {
      ko: "주저자",
      en: "First Author",
    },
    link: {
      label: "LINK",
      href: "https://koreascience.or.kr/article/JAKO202504250437103.page",
    },
  },
  {
    year: "2024.11",
    title: {
      ko: "FAIR 데이터 원칙을 적용한 국내 디지털 아카이브 평가와 개선 방향",
      en: "The Evaluation of Domestic Digital Archives Using the FAIR Data Principles and Their Improvement Directions",
    },
    venue: {
      ko: "한국기록관리학회지",
      en: "Journal of Korean Society of Archives and Records Management",
    },
    authors: {
      ko: "공동저자",
      en: "Co-author",
    },
    link: {
      label: "LINK",
      href: "https://accesson.kr/jksarm/v.24/4/113/46740",
    },
  },
  {
    year: "2024.03",
    title: {
      ko: "문헌정보학 전공의 진로탐색을 위한 애자일 기반 데이터 분석 프레임워크",
      en: "Agile-based Data Analysis Framework for Career Exploration in Library and Information Science",
    },
    venue: {
      ko: "정보관리학회지",
      en: "Journal of the Korean Society for Information Management",
    },
    authors: {
      ko: "주저자",
      en: "First Author",
    },
    link: {
      label: "LINK",
      href: "https://accesson.kr/kosim/v.41/1/189/42157",
    },
  },
];

export const cvSkills: string[] = [
  "Python",
  "JavaScript (Vue.js, Nuxt.js)",
  "SPARQL",
  "QLever",
  "Knowledge Graph",
  "Ontology",
  "Docker",
  "Nginx",
  "Prompt Engineering",
  "LLM-based Applications",
];

export const cvAwards: AwardItem[] = [
  {
    year: "2025.09",
    title: {
      ko: "산업통상자원부 공공데이터 활용 창업경진대회 대상",
      en: "Grand Prize, MOTIE Public Data Utilization Startup Competition",
    },
    description: {
      ko: "자연어 기반 공공·산업데이터 자동 추천·분석 플랫폼 개발",
      en: "Developed a natural-language-based platform for automated recommendation and analysis of public and industrial data.",
    },
  },
  {
    year: "2021.11",
    title: {
      ko: "산림복지진흥원 데이터 시각화 아이디어 공모전 우수상",
      en: "Excellence Award, Korea Forestry Promotion Institute Data Visualization Idea Contest",
    },
    description: {
      ko: "산림복지 데이터 분석·시각화 프로젝트 수행",
      en: "Conducted a data analysis and visualization project on forest welfare data.",
    },
  },
  {
    year: "2020.07",
    title: {
      ko: "행정안전부 정부혁신해커톤 커뮤니티상",
      en: "Community Award, MOIS Government Innovation Hackathon",
    },
    description: {
      ko: "국내외 코로나19 관련 데이터 수집, 주요 이슈별 분석·시각화 아카이브 구축",
      en: "Collected domestic and international COVID-19 data and built an archive for issue-based analysis and visualization.",
    },
  },
];
