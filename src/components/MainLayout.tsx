import Head from "next/head";
import styled from "styled-components";

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
  text-align: center;
`;

export default function MainLayout({ children, title = "Терминал оплаты" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>Терминал оплаты</h1>
      <Container>{children}</Container>
      <Footer>
        <p>Brave Developers - Тестовое задание</p>
        <p>2020 г.</p>
      </Footer>
    </>
  );
}
