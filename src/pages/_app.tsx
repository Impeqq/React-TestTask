import "../styles/main.css";

import { IntlProvider } from "react-intl";
import English from "../languages/en-EN.json";

import { useState } from "react";

const MyApp = ({ Component, pageProps }) => {
  const [locale, setLocale] = useState("en");
  const [messages, setMessages] = useState(English);
  
  return (
    <IntlProvider locale={locale} messages={messages}>
      <Component props={{locale, setLocale, messages, setMessages}} {...pageProps} />
    </IntlProvider>
  );
};

export default MyApp;
