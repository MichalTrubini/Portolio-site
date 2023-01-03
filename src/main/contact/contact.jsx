import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./contact.module.css";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const form = useRef();

  //STATE MANAGEMENT ***START
  const elRef = useRef()
  const [userInput, setUserInput] = useState({
    userName: "",
    userEmail: "",
    userMessage: "",
  });

  const [userSubmit, setUserSubmit] = useState(false);
  const [sendOK, setSendOK] = useState(false);
  const [sendNOK, setSendNOK] = useState(false);
  const [reCaptcha, setReCaptcha] = useState(false);
  const [intersection, setIntersection] = useState(false);

  const onUpdateField = (e) => {
    const nextFormState = {
      ...userInput,
      [e.target.name]: e.target.value,
    };
    setUserInput(nextFormState);
  };

  const onButtonClick = () => {
    setUserSubmit(true);
  };

  //STATE MANAGEMENT ***END

  const regex = /^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/;

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      userInput.userName.trim().length === 0 ||
      userInput.userEmail.trim().length === 0 ||
      userInput.userMessage.trim().length === 0 ||
      regex.test(userInput.userEmail) === false ||
      reCaptcha === false
    )
      return;

    emailjs.sendForm("service_ztdjbal", "template_4dso9vt", form.current, "7IeMeuJy_-64PCwkj").then(
      (result) => {
        setSendOK(true);
        setTimeout(() => {
          setSendOK(false);
          setUserSubmit(false);
          setUserInput({ userName: "", userEmail: "", userMessage: "" });
          e.target.reset();
        }, 1500);
      },
      (error) => {
        setSendNOK(true);
      }
    );
  };
  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIntersection(entry.isIntersecting);
    });

   observer.observe(elRef.current);

  }, []);
  return (
    <div className={ styles.contact} id="contactID" ref={elRef}>
      <div className="headingContainer">
        <h2 className="headingSection">Contact me</h2>
        <div className='headingUnderline'></div>
        <p className="headingBackground">Contact</p>
      </div>
      <form className={intersection ? `${styles.form} ${styles.formAnimation}` : styles.form} ref={form} onSubmit={sendEmail} noValidate>
        <div className={styles.formItem}>
          <label className={styles.label} htmlFor="username">
            Name
          </label>
          <input
            id="username"
            className={styles.input}
            type="text"
            name="userName"
            placeholder="Enter your name..."
            value={userInput.name}
            onChange={onUpdateField}
          />
          {userSubmit && userInput.userName.trim().length === 0 && (
            <p className={styles.errorMessage}>Name is required!</p>
          )}
        </div>
        <div className={styles.formItem}>
          <label className={styles.label} htmlFor="useremail">
            Email
          </label>
          <input
            id="useremail"
            className={styles.input}
            type="email"
            name="userEmail"
            placeholder="Enter your email..."
            value={userInput.email}
            onChange={onUpdateField}
          />
          {userSubmit & (userInput.userEmail.trim().length === 0) ? (
            <p className={styles.errorMessage}>Email is required!</p>
          ) : (
            userSubmit &&
            regex.test(userInput.userEmail) === false && <p className={styles.errorMessage}>Incorrect format!</p>
          )}
        </div>
        <div className={styles.formItem}>
          <label className={styles.label} htmlFor="usermessage">
            Message
          </label>
          <textarea
            id="usermessage"
            className={`${styles.input} ${styles.textarea}`}
            rows="8"
            name="userMessage"
            placeholder="Write your message..."
            value={userInput.message}
            onChange={onUpdateField}
          />
          {userSubmit && userInput.userMessage.trim().length === 0 && (
            <p className={styles.errorMessage}>Messsage is required!</p>
          )}
        </div>
        <ReCAPTCHA
          sitekey="6LcmisIjAAAAAJARBVeEJKe1VoOGFcz8HzxYZfd0"
          onChange={() => {
            setReCaptcha(true);
          }}
        />
        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.sendButton} onClick={onButtonClick}>
            Send
          </button>
          {userSubmit && sendOK && <p className={styles.messageOK}>Message sent!</p>}
          {userSubmit && sendNOK && <p className={styles.messageNOK}>Error sending a message!</p>}
        </div>
      </form>
    </div>
  );
};

export default Contact;
