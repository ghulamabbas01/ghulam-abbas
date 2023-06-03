import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={"Ui/Ux Designer"}
            disc={`As a UI/UX designer, I craft beautiful, intuitive interfaces that deliver seamless experiences. From user research to final design, I prioritize user needs and ensure my solutions are both usable and delightful.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={CgWebsite}
            title={"web Developer"}
            disc={`As a web developer, I bring ideas to life by writing clean, efficient code that powers interactive, user-friendly websites. I'm passionate about staying up-to-date with the latest technologies and always seek to optimize performance.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={FiCodesandbox}
            title={"web designer"}
            disc={`As a web developer, I specialize in creating custom, responsive websites that meet my clients' unique needs. From e-commerce to portfolios, I build robust, user-friendly experiences that drive engagement and results.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
