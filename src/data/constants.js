// Personal Bio
export const Bio = {
  name: "Komal Pandey",
  roles: [
    "Data Analytics",
    "Data Science",
    "Machine Learning",
    "Artificial Intelligence",
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/komal05-web",
};

// Skills
export const skills = [
  {
    title: "Data Analytics",
    skills: [
      { name: "Python", image: "..." },
      { name: "R", image: "..." },
      { name: "Data Analytics", image: "..." },
      { name: "Angular Js", image: "..." },
      { name: "HTML", image: "..." },
      { name: "CSS", image: "..." },
      { name: "JavaScript", image: "..." },
      { name: "Bootstrap", image: "..." },
      { name: "Material UI", image: "..." },
      { name: "Flutter", image: "..." },
    ],
  },
  {
    title: "Data Science",
    skills: [
      { name: "Node Js", image: "..." },
      { name: "Express Js", image: "..." },
      { name: "GraphQL", image: "..." },
      { name: "Python", image: "..." },
      { name: "Flask", image: "..." },
      { name: "Django", image: "..." },
      { name: "MySQL", image: "..." },
      { name: "Postgresql", image: "..." },
      { name: "MongoDB", image: "..." },
      { name: "Firebase", image: "..." },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "AWS", image: "..." },
      { name: "Google Cloud", image: "..." },
      { name: "Docker", image: "..." },
      { name: "Jenkins", image: "..." },
      { name: "Nginx", image: "..." },
      { name: "Grafana", image: "..." },
      { name: "Kubernetes", image: "..." },
      { name: "Prometheus", image: "..." },
    ],
  },
  {
    title: "Android",
    skills: [
      { name: "Java", image: "..." },
      { name: "Kotlin", image: "..." },
      { name: "Jetpack Compose", image: "..." },
      { name: "XML", image: "..." },
      { name: "Android Studio", image: "..." },
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      { name: "Python", image: "..." },
      { name: "Tensorflow", image: "..." },
      { name: "Keras", image: "..." },
      { name: "Jupyter", image: "..." },
      { name: "Google Colab", image: "..." },
      { name: "Scikit Learn", image: "..." },
    ],
  },
  {
    title: "Others",
    skills: [
      { name: "Git", image: "..." },
      { name: "GitHub", image: "..." },
      { name: "Netlify", image: "..." },
      { name: "VS Code", image: "..." },
      { name: "Postman", image: "..." },
      { name: "Adobe XD", image: "..." },
      { name: "Figma", image: "..." },
    ],
  },
];

// Experiences
export const experiences = [
  {
    id: 0,
    role: "Frontend Engineer Intern",
    company: "Neurobit",
    date: "June 2023 - Nov 2023",
    desc: "Enhanced user experiences on Neurobit PSG & Hybrid...",
    skills: ["ReactJS", "Redux", "NodeJs", "Material UI"],
  },
  {
    id: 1,
    role: "DevOps & Fullstack Engineering Intern",
    company: "Flipr Innovations Pvt. Ltd.",
    date: "Aug 2023 - Oct 2023",
    desc: "Built Flipr Connect Platforms using React Js integrated GraphQL...",
    skills: ["Docker", "AWS", "GraphQL", "Node Js"],
  },
  // ... other experiences
];

// Education
export const education = [
  {
    id: 0,
    school: "Shri Ramswaroop Memorial University,Lucknow",
    date: "Oct 2022-July 2026",
    grade: "7.37 CGPA",
    degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
    specialization: "DS+AI",
  },
  {
    id: 1,
    school: "The Lucknow Public Collegiate,Lucknow",
    date: "March 2021 - July 2022",
    grade: "76%",
    degree: "CBSE(XII), Science",
  },
  {
    id: 2,
    school: "The Lucknow Public Collegiate,Lucknow",
    date: "March 2019 - July 2020",
    grade: "86%",
    degree: "CBSE(X), Science",
  },
];

// ✅ FIXED: Export projects properly
export const projects = [
  {
    id: 11,
    title: "Movie Recommendation System",
    date: "Jan 2025 - Feb 2025",
    description:
      "A movie recommendation system that will suggest movie based on your mood or movie genre.",
    image: "/images/movie.png",
    tags: ["Python", "Streamlite"],
    category: "machine learning",
    github: "https://github.com/komal05-web/Movie-Recommender-System",
    webapp:
      "https://movie-recommender-system-gj2gqwxeoeaaobwtchkahg.streamlit.app/",
  },
  {
    id: 12,
    title: "Fashion Recommendation System",
    date: "Jan 2026 - Jan 2026",
    description:
      "A fashion recommendation system that will suggest fashion items based on your preferences.",
    image:
      "https://github.com/rishavchanda/DecisionHub/raw/master/assets/testRule.jpg",
    tags: ["Python", "Streamlit"],
    category: "machine learning",
    github: "https://github.com/komal05-web/Fashion-Recommendation-System.git",
    webapp:
      "https://fashionrecommendation-system-sqdnvrz7y69gddk3gaaper.streamlit.app/",
  },
  {
    id: 9,
    title: "Netflix Data Analytics",
    date: "Jun 2025 - Jul 2025",
    description:
      "Developed an interactive Netflix Data Analytics dashboard using Python and Pandas.",
    image:
      "https://user-images.githubusercontent.com/64485885/255202416-e1f89b04-2788-45b0-abc2-9dec616669e2.png",
    tags: ["Python", "Pandas", "Matplotlib"],
    category: "Data Analytics",
    github: "https://github.com/komal05-web/Netflix_Data_Analytics.git",
  },
  {
    id: 0,
    title: "Indian Sign Language Translator",
    date: "September 2025 - April 2026",
    description:
      "Built a real-time Indian Sign Language detection system using computer vision and deep learning. Leveraged MediaPipe for hand landmark extraction and a custom-trained CNN model to classify 35+ ISL gestures with high accuracy. Features a live webcam interface for accessible, real-time gesture-to-text translation.",
    image:
      "https://i.ytimg.com/vi/wOmVJqg7MqI/maxresdefault.jpg",
    tags: [
      "Python",
      "MediaPipe",
      "OpenCV",
      "CNN",
      "Deep Learning",
      "Computer Vision",
    ],
    category: "machine learning",
    github:
      "https://github.com/komal05-web/Indian-Sign-Language-Translator.git",
    webapp: "",
  },
  {
   id: 1,
   title: "Hotel Booking Analysis",
   date: "May 2026 - May 2026",
   description:
     "Developed a comprehensive hotel booking analysis project using Python and machine learning techniques. Analyzed a large dataset of hotel bookings to uncover trends and insights. Built predictive models to forecast booking cancellations and customer preferences, achieving high accuracy. Created interactive visualizations to present findings and support data-driven decision-making for the hospitality industry.",
   image: "https://user-images.githubusercontent.com/64485885/234916413-96296f13-fe4b-4cc4-b215-e72bd7c27928.png",
   tags: ["Python", "Powerpoint"],
   category: "Data Analytics",
   github: "https://github.com/komal05-web/Hotel_Booking_Analysis.git",
   webapp: "",
  },
];
