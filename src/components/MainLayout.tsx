import Head from "next/head";
import styled from "styled-components";
import ChangeLanguage from "./ChangeLanguage";
import { IntlProvider, FormattedMessage } from "react-intl";

const Container = styled.div`
  flex-grow: 1;
  width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

const Footer = styled.div`
  width: 100%;
  background: #fff;
  font-size: 15px;
  padding-top: 20px;
  text-align: center;
`;

const MainLayout = ({ children, title, props}) => {
  return (
    <IntlProvider locale={props.locale} messages={props.messages}>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>
        <FormattedMessage id="general" />
      </h1>
      <Container>{children}</Container>
      <Footer>
        <ChangeLanguage {...props} />
        <p>
          Brave Developers - <FormattedMessage id="footer" />
        </p>
        <p>2020 г.</p>
      </Footer>
    </IntlProvider>
  );
};

export default MainLayout;
