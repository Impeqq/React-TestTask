import styled from "styled-components";

import OperatorInput from "./OperatorInput";
import Notification from "../Notification";

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

const Loader = styled.div`
  display: inline-block;
  width: 26px;
  height: 26px;

  :after {
    content: " ";
    display: block;
    width: 15px;
    height: 15px;
    margin: 0px;
    border-radius: 50%;
    border: 3px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Button = styled.button`
  margin: 0 auto;
  display: block;
  width: 300px;
  height: 40px;
  outline: none;
  color: #fff;
  font-weight: 700;
  padding: 10px;
  text-transform: uppercase;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background: rgb(0, 102, 255);
  transition: 0.2s ease background;

  :hover {
    background: rgb(0, 85, 212);
  }

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export default function OperatorFormInputs({
  props,
  finalErrors,
  finalSuccess,
}) {
  return (
    <form onSubmit={props.handleSubmit}>
      <OperatorInput
        props={props}
        name="phone"
        type="text"
        mask="+7 (999) 999-99-99"
        label="Номер телефона"
      />
      <OperatorInput
        props={props}
        name="sum"
        type="text"
        mask="9999 ₽"
        label="Сумма"
      />
      <Notification value={finalErrors} className="final"/>
      <Notification value={finalSuccess} className="final success"/>
      <Button type="submit" disabled={props.isSubmitting}>
        {props.isSubmitting ? <Loader></Loader> : "Оплатить"}
      </Button>
    </form>
  );
}
