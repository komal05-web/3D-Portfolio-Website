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
    title: "Frontend",
    skills: [
      { name: "React", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
      { name: "Three.js", image: "https://threejs.org/files/favicon.ico" },
      { name: "TailwindCSS", image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
      { name: "HTML", image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
      { name: "CSS", image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
      { name: "JavaScript", image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
      
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", image: "https://nodejs.org/static/images/logo.svg" },
      { name: "Express", image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
      { name: "MongoDB", image: "https://webassets.mongodb.com/_com_assets/cms/mongodb-logo-rgb-j6w271g1xn.jpg" },
      { name: "SQL", image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" },
      
    ]
  },
  {
    title: "Data Science & Artificial Intelligence",
    skills: [
      { name: "Python", image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
      { name: "TensorFlow", image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" },
      { name: "PyTorch", image: "https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg" },
      { name: "Pandas", image: "https://pandas.pydata.org/static/img/pandas_mark.svg" },
      { name: "NumPy", image: "https://numpy.org/images/logo.svg" },
      { name: "Scikit-learn", image: "https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png" },
      {name: "Data Analysis", image: "https://media.istockphoto.com/id/925690772/vector/icon-icon-with-the-concept-of-searching-analyzing-for-business-finance-and-marketing.jpg?s=612x612&w=0&k=20&c=eYqm89QSN6MWpXRICxTCCQdX6o-mg-Lu9rZLWK6WNgM=" },
      {name: "Machine Learning", image: "data:image/png;base64,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" },
      {name: "Arificial Intelligence", image: "https://img.freepik.com/free-vector/artificial-intelligence-vector-symbol-illustration-isolated-white-background_8130-2310.jpg?semt=ais_hybrid&w=740&q=80" }
    ]
  },
  {
    title: "UI/UX Design",
    skills: [
      { name: "Figma", image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
      { name: "Adobe XD", image: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg" },
      { name: "Sketch", image: "data:image/png;base64,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" },
      { name: "InVision", image: "https://www.svgrepo.com/show/353911/invision-icon.svg" } 
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
