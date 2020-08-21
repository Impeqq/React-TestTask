import { useState, useEffect } from "react";

import styled from "styled-components";

import MainLayout from "../MainLayout";
import LinkComponent from "../LinkComponent";
import OperatorForm from "./OperatorForm";

import { operators } from "../../const/operators";

import { FormattedMessage, injectIntl } from "react-intl";

const PaymentTop = styled.div`
  background: #fff;
  border-radius: 5px;
  margin: 10px;
  padding: 1rem;
  border: 1px solid rgb(235, 235, 235);
  display: flex;
  height: 70px;
  align-items: center;
  justify-content: space-between;
`;

const Payment = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;

  &.loading > * {
    background: linear-gradient(270deg, #f8f8f8, #e6e6e6);
    background-size: 400% 400%;
    animation: gradient 10s ease infinite;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const PaymentArrow = styled.div`
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid rgb(235, 235, 235);
  transition: 0.2s ease all;
  :hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  &.hidden {
    width: 62px;
    opacity: 0;
  }
`;

const PaymentTitle = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  margin: 0;
`;

const PaymentBody = styled.div`
  background: #fff;
  margin: 10px;
  padding: 2rem;
  border: 1px solid rgb(235, 235, 235);
  transition: 0.2s ease all;
  border-radius: 5px;
  height: 100%;
  flex-grow: 1;
`;

const PaymentBodyImg = styled.img`
  width: 250px;
  margin: 0 auto;
  margin-bottom: 20px;
  display: block;
`;

const PaymentInputTemplate = styled.div`
  width: 300px;
  margin: 0 auto;
  margin-bottom: 30px;
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

const PaymentInputText = styled.label`
  margin: 0;
  margin-bottom: 15px;
  display: inline-block;
  font-weight: 500;
  font-size: 17px;
`;

const PaymentDescription = styled.div`
  color: rgb(160, 160, 160);
  text-align: center;
  width: 500px;
  margin: 0 auto;
  margin-top: 15px;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

const OperatorPayment = ({ intl, props }) => {
  const [operator, setOperator] = useState({ id: null, name: null, img: null });

  useEffect(() => {
    operators.map((data) => {
      data.id.toString() == location.pathname.split("/")[2]
        ? setTimeout(() => {
            setOperator(data);
          }, 1000)
        : null;
    });
  }, []);

  if (!operator.id) {
    return (
      <MainLayout props={props} title={intl.formatMessage({ id: "title" })}>
        <Payment className="loading">
          <PaymentTop></PaymentTop>
          <PaymentBody></PaymentBody>
        </Payment>
      </MainLayout>
    );
  }

  return (
    <MainLayout
      props={props}
      title={intl.formatMessage({ id: "title" }) + " - " + operator.name}
    >
      <Payment>
        <PaymentTop>
          <PaymentArrow>
            <LinkComponent
              href={"/"}
              text="&larr;"
              className="arrow"
              translation={false}
            ></LinkComponent>
          </PaymentArrow>
          <PaymentTitle>
            <FormattedMessage id="title" /> {operator.name}
          </PaymentTitle>
          <PaymentArrow className="hidden">&larr;</PaymentArrow>
        </PaymentTop>

        <PaymentBody>
          <PaymentBodyImg src={operator.img} />
          <PaymentInputTemplate>
            <PaymentInputText>
              <FormattedMessage id="input1" />
            </PaymentInputText>
            <input type="text" value={operator.name} disabled />
          </PaymentInputTemplate>
          <OperatorForm></OperatorForm>
          <PaymentDescription>
            <FormattedMessage id="description" />
          </PaymentDescription>
        </PaymentBody>
      </Payment>
    </MainLayout>
  );
};

export default injectIntl(OperatorPayment);
