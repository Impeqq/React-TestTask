import styled from "styled-components";

import OperatorInput from "./OperatorInput";

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

const Errors = styled.ul`
  border: 1px solid rgb(255, 153, 153);
  background: #ffe3e3;
  border-radius: 5px;
  width: 300px;
  margin: 0 auto;
  margin-top: 15px;
  padding: 0 10px;
  list-style: none;

  &.final {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
  }

  & li {
    margin: 10px 0;
    position: relative;
    padding-left: 10px;
    font-size: 15px;
    color: rgb(221, 77, 77);

    &:before {
      position: absolute;
      content: "";
      left: 0;
      top: 50%;
      transform: translate(0, -50%);
      width: 5px;
      height: 5px;
      background: red;
      border-radius: 100%;
    }
  }
`;

const Success = styled.ul`
  border: 1px solid rgb(153, 255, 158);
  background: #e3ffe3;
  border-radius: 5px;
  width: 300px;
  margin: 0 auto;
  padding: 0 10px;
  list-style: none;

  &.final {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
  }

  & li {
    margin: 10px 0;
    position: relative;
    padding-left: 10px;
    font-size: 15px;
    color: rgb(48 183 30);

    &:before {
      position: absolute;
      content: "";
      left: 0;
      top: 50%;
      transform: translate(0, -50%);
      width: 5px;
      height: 5px;
      background: rgb(94, 221, 77);
      border-radius: 100%;
    }
  }
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
      {finalErrors ? (
        <Errors className="final">
          <li>{finalErrors}</li>
        </Errors>
      ) : null}
      {finalSuccess ? (
        <Success className="final">
          <li>{finalSuccess}</li>
        </Success>
      ) : null}
      <Button type="submit" disabled={props.isSubmitting}>
        {props.isSubmitting ? <Loader></Loader> : "Оплатить"}
      </Button>
    </form>
  );
}
