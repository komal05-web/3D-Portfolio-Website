import React from 'react';
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 20px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px; 
  padding: 18px 36px;
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
  color: ${({ theme }) => theme.text_secondary};
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;

const SkillImage = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
`;


const skills = [
  {
    title: "Languages & Tools",
    skills: [
      {
        name: "Python",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
      },
      {
        name: "SQL",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"
      },
      {
        name: "Jupyter Notebook",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg"
      },
      {
        name: "Git & GitHub",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
      },
      {
        name: "VS Code",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
      }
    ]
  },
  {
    title: "Data Science & Analytics",
    skills: [
      {
        name: "Pandas",
        image: "https://pandas.pydata.org/static/img/pandas_mark.svg"
      },
      {
        name: "NumPy",
        image: "https://numpy.org/images/logo.svg"
      },
      {
        name: "Matplotlib",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg"
      },
      {
        name: "Power BI",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg"
      },
      {
        name: "Tableau",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png"
      },
      {
        name: "Excel",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg"
      }
    ]
  },
  {
    title: "Machine Learning",
    skills: [
      {
        name: "Scikit-learn",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"
      },
      {
        name: "TensorFlow",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg"
      },
      {
        name: "PyTorch",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg"
      },
      {
        name: "XGBoost",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/XGBoost_logo.png"
      },
      {
        name: "Feature Engineering",
        image: "https://cdn-icons-png.flaticon.com/512/2103/2103658.png"
      },
      {
        name: "Model Evaluation",
        image: "https://cdn-icons-png.flaticon.com/512/3281/3281289.png"
      }
    ]
  },
  {
    title: "AI & Deep Learning",
    skills: [
      {
        name: "NLP",
        image: "https://cdn-icons-png.flaticon.com/512/4712/4712139.png"
      },
      {
        name: "Computer Vision",
        image: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png"
      },
      {
        name: "OpenCV",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg"
      },
      {
        name: "Hugging Face",
        image: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg"
      },
      {
        name: "LLMs & Prompt Engineering",
        image: "https://cdn-icons-png.flaticon.com/512/4712/4712035.png"
      },
      {
        name: "MediaPipe",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/MediaPipe-Logo.svg"
      }
    ]
  }
];

const Skills = () => {
  return (
    <Container id="Skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Here are some of the skills I have acquired over time:
        </Desc>

        <SkillsContainer>
          {skills.map((skill, index) => (
            <Skill key={index}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item, index_x) => (
                  <SkillItem key={index_x}>
                    <SkillImage src={item.image} alt={item.name} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
