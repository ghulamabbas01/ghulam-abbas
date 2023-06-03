import React from "react";
import styled from "styled-components";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { BsFacebook, BsSlack } from "react-icons/bs";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { Slide, Zoom, Fade } from "react-awesome-reveal";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";
// import Vue from "vue";
// import Router from "vue-router";
import axios from "axios";
import { Helmet } from "react-helmet";

const Footer = () => {
  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  // new Vue({
  //   el: "#app",
  //   data() {
  //     return {
  //       name: "",
  //       email: "",
  //       caps: "",
  //     };
  //   },
  //   methods: {
  //     submitForm() {
  //       axios.post("//jsonplaceholder.typicode.com/posts", {
  //         name: this.name,
  //         email: this.email,
  //         caps: this.caps,
  //       });
  //     },
  //   },
  // });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast("Form sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, message } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      // Define template params
      const templateParams = {
        name,
        email,
        message,
      };

      // Use emailjs to email contact form data
      await emailjs.send(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.EMAILJS_USER_ID
      );

      // Reset contact form fields after submission
      reset();
      // Display success toast
      toastifySuccess();
      // Re-enable form submission
      setDisabled(false);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Helmet>
        <title>About Us | Ghulam Abbas</title>
        <meta
          name="description"
          content=" We would love to hear from you! If you have any questions, inquiries, or project opportunities, please don't hesitate to get in touch. Feel free to reach out through the contact form below or via email. We are excited to collaborate and bring your web development ideas to life."
        />
      </Helmet>

      <Container id="footer">
        <Profile>
          <Slide direction="left" delay={1}>
            <h1>Portfolio</h1>
          </Slide>
          <div className="address">
            <Slide direction="left">
              <h1>Address:</h1>
            </Slide>
            <Slide direction="left">
              <p>Sargodha , Punjab , Pakistan.</p>
            </Slide>
          </div>
          <div className="links">
            <Slide direction="left">
              <h1>Contact me directly:</h1>
            </Slide>
            <div>
              <span>
                <FiPhoneCall />
              </span>
              <Slide direction="left">
                <a href="tel:+923081001503" target="_blank">
                  +92 308 1001503
                </a>
              </Slide>
            </div>
            <div>
              <Slide direction="left">
                <span>
                  <HiOutlineMailOpen />
                </span>
              </Slide>
              <Slide>
                <a href="mailto:mrghulamabbas10@gmail.com" target="_blank">
                  mrghulamabbas10@gmail.com
                </a>
              </Slide>
            </div>
          </div>
          <div className="profiles">
            <Slide direction="left">
              <h1>Check my profiles</h1>
            </Slide>
            <div className="icons">
              <Zoom>
                <span>
                  <a href="https://github.com/ghulamabbas01" target="_blank">
                    <AiFillGithub />
                  </a>
                </span>
              </Zoom>
              <Zoom>
                <span>
                  <a
                    href="https://www.linkedin.com/in/ghulam-abbas-23a77b267/"
                    target="_blank"
                  >
                    <AiFillLinkedin />
                  </a>
                </span>
              </Zoom>
              <Zoom>
                <span>
                  <a
                    href="https://www.facebook.com/mrghulamabbas10"
                    target="_blank"
                  >
                    <BsFacebook />
                  </a>
                </span>
              </Zoom>
              <Zoom>
                <span>
                  <a
                    href="https://www.instagram.com/mrghulamabbas10/"
                    target="_blank"
                  >
                    <AiOutlineInstagram />
                  </a>
                </span>
              </Zoom>
              <Zoom>
                <span>
                  <a href="https://twitter.com/GhulamA58975965" target="_blank">
                    <FiTwitter />
                  </a>
                </span>
              </Zoom>
            </div>
          </div>
          <Fade>
            <ArrowUp onClick={scrollUp}>
              <AiOutlineArrowUp />
            </ArrowUp>
          </Fade>
        </Profile>
        <Form>
          <Slide direction="right">
            <form
              id="contact-form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className="name">
                <span>
                  <CgProfile />
                </span>
                <input
                  type="text"
                  placeholder="Fullname..."
                  id="name"
                  v-model="name"
                  required
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Please enter your name",
                    },
                    maxLength: {
                      value: 30,
                      message: "Please use 30 characters or less",
                    },
                  })}
                />
              </div>
              <div className="email">
                <span>
                  <MdAlternateEmail />
                </span>
                <input
                  id="email"
                  type="email"
                  placeholder="Email..."
                  v-model="email"
                  required
                  {...register("email", {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  })}
                />
              </div>
              <div className="message">
                <span className="messageIcon">
                  <FiMail />
                </span>
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Message..."
                  id="caps"
                  v-model="caps"
                  required
                  {...register("message", {
                    required: true,
                  })}
                ></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </Slide>
        </Form>
      </Container>
    </>
  );
};

export default Footer;

const Container = styled.div`
  margin-top: 2rem;
  position: relative;
  padding: 2rem 0;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
  }
`;
const Profile = styled.div`
  flex: 1;
  .address {
    padding: 1rem 0;
    h1 {
      font-size: 1.2rem;
    }

    p {
      width: 60%;
      padding-top: 0.5rem;
      @media (max-width: 650px) {
        width: 100%;
      }
    }
  }

  .links {
    h1 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      a {
        text-decoration: none;
        color: lightgray;
        :hover {
          color: orange;
        }
      }
    }
  }

  .profiles {
    h1 {
      font-size: 1.2rem;
      padding: 1rem 0;
    }

    .icons {
      display: flex;
      align-items: center;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000;
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
        border-radius: 50px;

        :hover {
          background-color: orange;
        }

        a {
          margin-top: 0.2rem;
          color: #fff;
        }
      }
    }
  }
`;
const ArrowUp = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #01be96;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2rem;
  @media (max-width: 650px) {
    position: absolute;
    right: 3rem;
    top: 16rem;
  }
`;
const Form = styled.div`
  flex: 1;
  h1 {
    font-size: 1.3rem;
    padding-bottom: 0.7rem;
  }

  form {
    background-color: #191923;
    padding: 0.8rem;
    border-radius: 5px;
    .name,
    .email,
    .message {
      display: flex;
      border: 1px solid gray;
      margin-bottom: 0.5rem;
      input,
      textarea {
        width: 100%;
        border: none;
        outline: none;
        color: #fff;
        background-color: transparent;
        padding: 1rem 0.5rem;
      }
      span {
        background-color: #3e3e3e;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .messageIcon {
        align-items: flex-start;
        padding-top: 0.5rem;
      }
    }

    button {
      width: 5rem;
      height: 1.8rem;
      background-color: #01be96;
      border: none;
      border-radius: 5px;
      filter: drop-shadow(0px 4px 5px #01be9551);
      cursor: pointer;
      :hover {
        filter: drop-shadow(0px 6px 9px #01be9551);
      }
    }
  }
`;
