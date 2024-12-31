import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";
import photo from "../assets/Images/passport.jpeg";
import logo from "../assets/Images/v.png";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`;
const Spaceman = styled.div`
  position: absolute;
  top: 18%;
  right: 18%;
  width: 20vw;
  // animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
  background: #fff;
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.5rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        {/* <SocialIcons theme="dark" /> */}
        <PowerButton />
        <ParticleComponent theme="dark" />

        <Spaceman>
          <img src={photo} alt="Venkatesh photo" />
        </Spaceman>
        <Main>
          I am Venkatesh, an engineering student pursuing my Bachelor’s degree
          at Meenakshi Sundararajan Engineering College. I am passionate about
          technology and have a strong foundation in web development,
          specializing in HTML, CSS, and JavaScript. I enjoy solving problems
          and creating impactful projects, I’ve worked on various applications
          that showcase my technical skills and innovative approach. <br></br>{" "}
          <br></br>
          Beyond academics, I serve as the president of my college coding club,
          where I lead initiatives, conduct events, and mentor students to
          foster a collaborative and dynamic learning environment. My ultimate
          goal is to secure a position in a reputed organization where I can
          apply my skills, learn from industry experts, and contribute to
          meaningful projects.
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
