import React from "react";

import {
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import styled from "styled-components";

// ✅ Styled card container
const Skill = styled.div`
  width: 100%;
  max-width: 700px;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;

  margin: auto;
  margin-top: 40px; /* 👈 Adds space above Education box */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  @media (max-width: 768px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary || "white"};
  transition: color 0.3s ease;
  &:hover {
    color: lightblue;
  }
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
  width: 100%;
`;

// 🎓 Education timeline data
const education = [
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Science",
    institution: "Shri Ramswaroop Memorial University,Lucknow",
    date: "2022-2026",
    description:
      "Specialized in Data Science & AI. Built projects in React, Three.js, and ML pipelines.",
  },
  {
    degree: "Higher Secondary (Class XII)",
    institution: "The Lucknow Public Collegiate,Lucknow",
    date: "2021 – 2022",
    description:
      "Focused on Physics, Chemistry, Mathematics. Graduated with distinction.",
  },
  {
    degree: "Secondary School (Class X)",
    institution: "The Lucknow Public Collegiate,Lucknow",
    date: "2019 – 2020",
    description:
      "Excelled in foundational subjects and developed early interest in programming.",
  },
];

export default function Education() {
  return (
    
    
      <Skill>
        {/* Section Title */}
        <SkillTitle>Education</SkillTitle>

        {/* Timeline styled like SkillList */}
        <SkillList>
          <Stepper orientation="vertical">
            {education.map((edu, index) => (
              <Step key={index} active>
                <StepLabel>
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    {/* Degree */}
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        color: "white",
                        transition: "color 0.3s ease, transform 0.3s ease",
                        "&:hover": {
                          color: "#ffcc00",
                          transform: "scale(1.05)",
                          textShadow: "0px 0px 8px rgba(255, 204, 0, 0.7)",
                        },
                      }}
                    >
                      {edu.degree}
                    </Typography>

                    {/* Institution */}
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: "blue",
                        transition: "color 0.3s ease, transform 0.3s ease",
                        "&:hover": {
                          color: "#00bfff",
                          transform: "translateX(5px)",
                          textShadow: "0px 0px 6px rgba(0, 191, 255, 0.7)",
                        },
                      }}
                    >
                      {edu.institution}
                    </Typography>

                    {/* Date */}
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: "white",
                        transition: "color 0.3s ease, transform 0.3s ease",
                        "&:hover": {
                          color: "#90ee90",
                          transform: "translateY(-3px)",
                          textShadow: "0px 0px 6px rgba(144, 238, 144, 0.7)",
                        },
                      }}
                    >
                      {edu.date}
                    </Typography>
                  </motion.div>
                </StepLabel>

                <StepContent>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.3 }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        mb: 2,
                        color: "white",
                        transition: "color 0.3s ease",
                        "&:hover": { color: "lightgray" },
                      }}
                    >
                      {edu.description}
                    </Typography>
                  </motion.div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </SkillList>
      </Skill>
    
  );
}