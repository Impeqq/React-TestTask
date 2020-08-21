import styled from "styled-components";

import Russian from "../languages/ru-RU.json";
import English from "../languages/en-EN.json";

import { useEffect } from "react";

const Change = styled.button`
  width: 60px;
  padding: 5px;
  background: none;
  border: 1px solid #adadad;
  font-weight: 600;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  margin: 0 5px;
  transition: 0.2s ease all;

  &:hover {
    background: #d0d0d0;
  }
`;

const ChangeLanguage = ({ locale, setLocale, messages, setMessages  }) => {

  useEffect(() => {
    localStorage.getItem("locale") ? changeLanguage(localStorage.getItem("locale")) : changeLanguage("en");
  }, []);

  const changeLanguage = (locale) => {
    setLocale(locale);
    localStorage.setItem("locale", locale);
    switch (locale) {
      case "en":
        setMessages(English);
        break;

      default:
        setMessages(Russian);
        break;
    }
  };

  return (
    <>
      <Change onClick={() => changeLanguage("ru")}>RU</Change>
      <Change onClick={() => changeLanguage("en")}>ENG</Change>
    </>
  );
};

export default ChangeLanguage;
