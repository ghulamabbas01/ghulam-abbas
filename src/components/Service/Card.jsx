import React from "react";
import styled from "styled-components";

const Card = (props) => {
  const { Icon, disc, title } = props;
  return (
    <Container>
      <span className="green">
        <Icon />
      </span>
      <h1>{title}</h1>
      <p
        style={{
          fontSize: "0.8rem",
          textTransform: "capitalize",
          lineHeight: "18px",
        }}
      >
        {disc}
      </p>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 100%;
  height: 300px;
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  padding: 1rem;
  text-align: center;
  span {
    font-size: 4rem;
  }

  h1 {
    font-size: 1.2rem;
    padding-bottom: 1rem;
    text-transform: capitalize;
    letter-spacing: 5px;
  }
`;
