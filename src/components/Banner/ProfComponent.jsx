import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import { FiFacebook, FiTwitter } from "react-icons/fi";
const ProfComponent = () => {
  return (
    <>
      <Container id="home">
        <Slide direction="left">
          <Texts>
            <h4>
              Hello <span className="green">I'am</span>
            </h4>
            <h1 className="green">Ghulam Abbas</h1>
            <h3>Front-End Developer</h3>
            <p>
              Hii! I'm Ghulam Abbas. a Frontend Web Developer And Web Designer
              With Expertise in HTML, CSS, BOOTSTRAP,Tailwind CSS, JavaScript,
              React Js, And Next Js. I Create Visually Appealing And
              User-friendly Websites, Focusing On Responsive Design And Seamless
              User Experiences. With a Passion For Clean Code And Attention To
              Detail, I Bring Creativity And Technical Skills To Every Project.
              Let's Build Something Amazing Together.
            </p>
            <a
              href="https://wa.me/923081001503"
              target="_blank"
              className="whatsup"
            >
              Let's talk
            </a>
            <Social>
              <p>Check out my</p>
              <div className="social-icons">
                <span>
                  <a
                    href="https://www.facebook.com/mrghulamabbas10"
                    target="_blank"
                  >
                    <FiFacebook />
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.instagram.com/mrghulamabbas10/"
                    target="_blank"
                  >
                    <AiOutlineInstagram />
                  </a>
                </span>
                <span>
                  <a href="https://twitter.com/GhulamA58975965" target="_blank">
                    <FiTwitter />
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.linkedin.com/in/ghulam-abbas-23a77b267/"
                    target="_blank"
                  >
                    <FaLinkedinIn />
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.fiverr.com/ghulamabbas10?up_rollout=true"
                    target="_blank"
                  >
                    <FaFacebookF />
                  </a>
                </span>
              </div>
            </Social>
          </Texts>
        </Slide>
        <Slide direction="right">
          <Profile>
            <img src="/images/logo.png" alt="profile" />
          </Profile>
        </Slide>
      </Container>
    </>
  );
};

export default ProfComponent;

const Container = styled.div`
  text-transform: capitalize;
  display: flex;
  gap: 2rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  padding-top: 1rem;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
    line-height: 24px;
    margin-bottom: 2rem;
  }

  .whatsup {
    text-decoration: none;
    padding: 0.7rem 2rem;
    margin-top: 4rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  clip-path: circle(50% at 50% 50%);
  color: red;
  background: #01be96;
  img {
    width: 23rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
