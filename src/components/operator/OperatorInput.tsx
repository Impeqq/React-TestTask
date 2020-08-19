import styled from "styled-components";

import { Field } from "formik";
import MaskedInput from "react-input-mask";

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

interface InputValidation {
    props: any,
    name: string,
    type: string,
    mask?: string
    label: string
  }

export default function OperatorInput({ props, name, type, mask, label }: InputValidation) {
  return (
    <PaymentInputTemplate>
      <PaymentInputText htmlFor={name}>{label}</PaymentInputText>
      <Field name={name}>
        {({ field }) => (
          <MaskedInput
            {...field}
            mask={mask}
            id={name}
            type={type}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            className={
              props.errors[name] && props.touched[name]
                ? "text-input error"
                : "text-input"
            }
          />
        )}
      </Field>
      <Notification value={props.errors[name]} touch={props.touched[name]}/>
    </PaymentInputTemplate>
  );
}
