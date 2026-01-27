
// import React from "react";
// import Tilt from "react-parallax-tilt";
// import {
//   Stepper,
//   Step,
//   StepLabel,
//   StepContent,
//   Typography,
// } from "@mui/material";
// import { motion } from "framer-motion";
// import styled from "styled-components";

// // Container
// const Experiencess = styled.div`
//   width: 100%;
//   max-width: 700px;
//   background-color: rgba(17, 25, 40, 0.83);
//   border: 1px solid rgba(255, 255, 255, 0.125);
//   box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
//   border-radius: 16px;
//   padding: 18px 36px;
//   margin: auto;
//   margin-top: 40px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   min-height: 100vh;

//   @media (max-width: 768px) {
//     max-width: 330px;
//     padding: 10px 36px;
//   }
// `;

// // Out-of-the-box heading
// const ExperienceTitle = styled(motion.h2)`
//   font-size: 32px;
//   font-weight: 700;
//   text-align: center;
//   background: linear-gradient(90deg, #00c6ff, #0072ff);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   position: relative;
//   margin-bottom: 30px;

//   &::after {
//     content: "";
//     position: absolute;
//     bottom: -8px;
//     left: 50%;
//     transform: translateX(-50%);
//     width: 60px;
//     height: 4px;
//     background: #00c6ff;
//     border-radius: 2px;
//     animation: pulse 1.5s infinite ease-in-out;
//   }

//   @keyframes pulse {
//     0% {
//       transform: translateX(-50%) scaleX(1);
//       opacity: 1;
//     }
//     50% {
//       transform: translateX(-50%) scaleX(1.5);
//       opacity: 0.6;
//     }
//     100% {
//       transform: translateX(-50%) scaleX(1);
//       opacity: 1;
//     }
//   }
// `;

// const ExperienceList = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   gap: 12px;
//   margin-top: 20px;
//   width: 100%;
// `;

// const experiences = [
//   {
//     title: "Data Analyst",
//     company: "Elevate Labs",
//     date: "April 2025 – May 2025",
//     description:
//       "Analyzed data daily using MySQL for management and retrieval. Built a churn prediction model using Python and ML libraries.",
//   },
//   {
//     title: "Data Visualization",
//     company: "TATA",
//     date: "Jan 2025 – Jan 2025",
//     description: "Created interactive dashboards for internal reporting using Python and Matplotlib.",
//   },
//   {
//     title: "Data Science Internship",
//     company: "The Skybrisk",
//     date: "June 2025 – Dec 2025",
//     description: "Engineered features and built anomaly detection pipelines for real-world datasets.",
//   },
// ];

// export default function Experience() {
//   return (
//     <Tilt glareEnable={true} glareMaxOpacity={0.2} scale={1.02}>
//       <Experiencess>
//         {/* Out-of-the-box heading */}
//         <ExperienceTitle
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           🚀 Experience That Speaks
//         </ExperienceTitle>

//         {/* Timeline */}
//         <ExperienceList>
//           <Stepper orientation="vertical">
//             {experiences.map((exp, index) => (
//               <Step key={index} active>
//                 <StepLabel>
//                   <motion.div
//                     initial={{ opacity: 0, x: -40 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.2 }}
//                   >
//                     <Typography
//                       variant="h6"
//                       sx={{
//                         fontWeight: "bold",
//                         color: "white",
//                         transition: "color 0.3s ease, transform 0.3s ease",
//                         "&:hover": {
//                           color: "#ffcc00",
//                           transform: "scale(1.05)",
//                           textShadow: "0px 0px 8px rgba(255, 204, 0, 0.7)",
//                         },
//                       }}
//                     >
//                       {exp.title}
//                     </Typography>

//                     <Typography
//                       variant="subtitle2"
//                       sx={{
//                         color: "blue",
//                         transition: "color 0.3s ease, transform 0.3s ease",
//                         "&:hover": {
//                           color: "#00bfff",
//                           transform: "translateX(5px)",
//                           textShadow: "0px 0px 6px rgba(0, 191, 255, 0.7)",
//                         },
//                       }}
//                     >
//                       {exp.company}
//                     </Typography>

//                     <Typography
//                       variant="subtitle2"
//                       sx={{
//                         color: "white",
//                         transition: "color 0.3s ease, transform 0.3s ease",
//                         "&:hover": {
//                           color: "#90ee90",
//                           transform: "translateY(-3px)",
//                           textShadow: "0px 0px 6px rgba(144, 238, 144, 0.7)",
//                         },
//                       }}
//                     >
//                       {exp.date}
//                     </Typography>
//                   </motion.div>
//                 </StepLabel>

//                 <StepContent>
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.3 }}
//                   >
//                     <Typography
//                       variant="body2"
//                       sx={{
//                         mb: 2,
//                         color: "white",
//                         transition: "color 0.3s ease",
//                         "&:hover": {
//                           color: "lightgray",
//                         },
//                       }}
//                     >
//                       {exp.description}
//                     </Typography>
//                   </motion.div>
//                 </StepContent>
//               </Step>
//             ))}
//           </Stepper>
//         </ExperienceList>
//       </Experiencess>
//     </Tilt>
//   );
// }

import React from "react";
import {
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Typography,
} from "@mui/material";
import styled from "styled-components";

const Experiencess = styled.div`
  width: 100%;
  max-width: 700px;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  margin: auto;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: auto;

  @media (max-width: 768px) {
    max-width: 330px;
    padding: 10px 20px;
  }
`;

const ExperienceTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary || "white"};
`;

const ExperienceList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
  width: 100%;
`;

const experiences = [
  {
    title: "Data Analyst",
    company: "Elevate Labs",
    date: "April 2025 – May 2025",
    description:
      "Analyzed daily data using MySQL for management and retrieval. Built a churn prediction model with Python.",
  },
  {
    title: "Data Visualization",
    company: "TATA",
    date: "Jan 2025 – Jan 2025",
    description: "Created interactive dashboards for internal reporting.",
  },
  {
    title: "Data Science Internship",
    company: "The Skybrisk",
    date: "June 2025 – Dec 2025",
    description: "Engineered features and built anomaly detection pipelines for real-world datasets.",
  },
];

export default function Experience() {
  return (
    <Experiencess>
      {/* Clean static heading */}
      <ExperienceTitle>Experience</ExperienceTitle>

      {/* Simple timeline */}
      <ExperienceList>
        <Stepper orientation="vertical">
          {experiences.map((exp, index) => (
            <Step key={index} active>
              <StepLabel>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "white" }}>
                  {exp.title}
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "lightblue" }}>
                  {exp.company}
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "gray" }}>
                  {exp.date}
                </Typography>
              </StepLabel>

              <StepContent>
                <Typography variant="body2" sx={{ mb: 2, color: "white" }}>
                  {exp.description}
                </Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </ExperienceList>
    </Experiencess>
  );
}