import React from "react";
import styled, { useTheme } from "styled-components";
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/komal.jpeg";
import HeroBgAnimation from "../HeroBgAnimation";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { headContainerAnimation } from "../../utils/motion";
import StarCanvas from "../canvas/stars";
import komalPDF from "../../data/komal.pdf";   

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;

  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;

  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
    font-size: 16px;
    line-height: 32px;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;

  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;

  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(221, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;
  color: white;

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 25px 25px 60px #1f2634, -25px -25px 60px #1f2634;
    filter: brightness(1);
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
`;

const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border: ${({ theme }) => `2px solid ${theme.primary}`};
  margin-left: 70px;

  @media (max-width: 640px) {
    border-radius: 50%;
    max-width: 280px;
    max-height: 280px;
    margin-left: 0;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  bottom: 0;
  left: 50%;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: end;
  transform: translate(-50%, -50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

const Hero = () => {
  const theme = useTheme();

  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <StarCanvas />
          <HeroBgAnimation />
        </HeroBg>

        <motion.div {...headContainerAnimation}>
          <HeroInnerContainer>
            <HeroLeftContainer>
              <motion.div {...headContainerAnimation}>
                <Title>
                  Hello, I'm <br /> Komal Pandey
                </Title>

                <TextLoop>
                  I am a{" "}
                  <span style={{ color: theme.primary }}>
                    <Typewriter
                      options={{
                        strings: [
                          "Web Designer",
                          "Frontend Developer",
                          "UI/UX Enthusiast",
                          "React Developer",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                </TextLoop>
              </motion.div>

              <motion.div {...headContainerAnimation}>
                <SubTitle>
                  A passionate frontend developer with experience in creating
                  dynamic and responsive web applications using React.js and
                  modern web technologies. Always eager to learn and explore new
                  technologies to enhance my skills and deliver innovative
                  solutions.
                </SubTitle>
              </motion.div>

              {/* ✅ Resume button now downloads the PDF */}
              <ResumeButton href={komalPDF} download="Komal_Pandey_Resume.pdf">
                Check Resume
              </ResumeButton>
            </HeroLeftContainer>

            <HeroRightContainer>
              <motion.div {...headContainerAnimation}>
                <Tilt>
                  <Img src={HeroImg} alt="Komal Pandey" />
                </Tilt>
              </motion.div>
            </HeroRightContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  );
};

export default Hero;
