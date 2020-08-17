import styled from "styled-components";
import { useState } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import MaskedInput from "react-input-mask";
import Router from "next/router";

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

export default function OperatorForm() {
  const [finalErrors, setFinalErrors] = useState([]);
  const [finalSuccess, setFinalSuccess] = useState([]);

  const validateSum = (value) => {
    if (value) {
      if (
        parseInt(value.replace(/\D+/g, "")) > 1000 ||
        parseInt(value.replace(/\D+/g, "")) < 1
      ) {
        return false;
      } else {
        return true;
      }
    }
  };

  return (
    <Formik
      initialValues={{ phone: "", sum: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          if (Math.random() >= 0.5) {
            setFinalErrors([]);
            setFinalSuccess([
              "Вы успешно пополнили баланс номера " +
                values.phone +
                " на " +
                parseInt(values.sum.replace(/\D+/g, "")) +
                " руб.",
            ]);
            setTimeout(() => {
              Router.push("/");
            }, 2000);
            return true;
          } else {
            setFinalSuccess([]);
            setFinalErrors(["Произошла ошибка, повторите попытку."]);
          }
          setSubmitting(false);
        }, 500);
      }}
      validationSchema={Yup.object().shape({
        phone: Yup.string()
          .matches(
            /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
            "Укажите правильный номер телефона"
          )
          .required("Укажите номер телефона"),
        sum: Yup.string()
          .required("Укажите cумму пополнения")
          .test(
            "sum",
            "Укажите сумма пополнения от 1 до 1000 рублей",
            validateSum
          ),
      })}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <PaymentInputTemplate>
              <PaymentInputText htmlFor="phone">
                Номер телефона
              </PaymentInputText>
              <Field name="phone">
                {({ field }) => (
                  <MaskedInput
                    {...field}
                    mask="+7 (999) 999-99-99"
                    id="phone"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.phone && touched.phone
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                )}
              </Field>
              {errors.phone && touched.phone ? (
                <Errors>
                  <li>{errors.phone}</li>
                </Errors>
              ) : null}
            </PaymentInputTemplate>
            <PaymentInputTemplate>
              <PaymentInputText htmlFor="sum">Сумма</PaymentInputText>
              <Field name="sum">
                {({ field }) => (
                  <MaskedInput
                    {...field}
                    mask="9999 руб"
                    id="sum"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.sum && touched.sum
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                )}
              </Field>
              {errors.sum && touched.sum ? (
                <Errors>
                  <li>{errors.sum}</li>
                </Errors>
              ) : null}
            </PaymentInputTemplate>
            {finalErrors.length > 0 ? (
              <Errors className="final">
                {finalErrors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </Errors>
            ) : null}
            {finalSuccess.length > 0 ? (
              <Success className="final">
                {finalSuccess.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </Success>
            ) : null}
            <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? <Loader></Loader> : "Оплатить"}
            </Button>
          </form>
        );
      }}
    </Formik>
  );
}
