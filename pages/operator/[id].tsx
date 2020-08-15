import { useState, useEffect } from "react";
import styled from "styled-components";
import Router from "next/router";
import MainLayout from "../../components/MainLayout";
import InputElement from "react-input-mask";
import Link from "next/link";
import { operators } from "../../const/operators";
import { OperatorValidation } from "../../interfaces/operator";

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
  transition: 0.2s ease all;

  :hover {
    background: rgb(0, 85, 212);
  }

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

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
  padding: 5px 20px;
  transition: 0.2s ease all;
  :hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  &.hidden {
    opacity: 0;
  }
`;

const PaymentTitle = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  margin: 0;
`;

const PaymentBody = styled.form`
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

const PaymentInputText = styled.div`
  margin: 0;
  margin-bottom: 15px;
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

const Errors = styled.ul`
  border: 1px solid rgb(255, 153, 153);
  background: #ffe3e3;
  border-radius: 5px;
  width: 300px;
  margin: 0 auto;
  margin-bottom: 30px;
  padding: 0 10px;
  list-style: none;

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
  margin-bottom: 30px;
  padding: 0 10px;
  list-style: none;

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

interface OperatorPageProps {
  operator: OperatorValidation[];
}

function usePhoneValue(defaultValue = "") {
  const [phone, setPhone] = useState(defaultValue);

  return {
    bind: {
      value: phone,
      onChange: (event) => setPhone(event.target.value),
    },
    clear: () => setPhone(""),
    value: () => phone,
  };
}

function useSummValue(defaultValue = "") {
  const [summ, setSumm] = useState(defaultValue);

  return {
    bind: {
      value: summ,
      onChange: (event) => setSumm(event.target.value),
    },
    clear: () => setSumm(""),
    value: () => summ,
  };
}

function Operator() {
  const [operator, setOperator] = useState("");
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState([]);
  const [status, setStatus] = useState(false);

  const phone = usePhoneValue("");
  const summ = useSummValue("");

  useEffect(() => {
    async function load() {
      operators.map((data: any) => {
        if (data.id.toString() == location.pathname.split("/")[2]) {
          setTimeout(() => {
            setOperator(data);
          }, 1000);
        }
      });
    }

    load();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    setStatus(true);
    let errorsArray = [];
    setTimeout(() => {
      if (phone.bind.value.length == 0) {
        errorsArray.push("Заполните поле телефон.");
      } else if (phone.bind.value.replace(/\D+/g, "").length < 11) {
        errorsArray.push("Заполните поле телефон полностью.");
      }

      if (summ.bind.value.length == 0) {
        errorsArray.push("Заполните поле сумма");
      } else if (
        parseInt(summ.bind.value.replace(/\D+/g, "")) > 1000 ||
        parseInt(summ.bind.value.replace(/\D+/g, "")) < 1
      ) {
        errorsArray.push("Введите сумму от 1 до 1000 рублей.");
      }
      if (errorsArray.length == 0) {
        if (Math.random() >= 0.5) {
          setErrors([]);
          setSuccess([
            "Вы успешно пополнили баланс номера " +
              phone.bind.value +
              " на " +
              parseInt(summ.bind.value.replace(/\D+/g, "")) +
              " руб.",
          ]);
          setTimeout(() => {
            Router.push("/");
          }, 2000);
        } else {
          setSuccess([]);
          setErrors(["Произошла ошибка, повторите попытку."]);
        }
      } else {
        setErrors(errorsArray);
      }
      setStatus(false);
    }, 1000);
  }

  if (!operator) {
    return (
      <MainLayout>
        <Payment className="loading">
          <PaymentTop></PaymentTop>
          <PaymentBody></PaymentBody>
        </Payment>
      </MainLayout>
    );
  }

  return (
    <MainLayout title={"Оплата " + operator["name"]}>
      <Payment>
        <PaymentTop>
          <Link href={"/"}>
            <PaymentArrow>&larr;</PaymentArrow>
          </Link>
          <PaymentTitle>Оплата {operator["name"]}</PaymentTitle>
          <PaymentArrow className="hidden">&larr;</PaymentArrow>
        </PaymentTop>
        <PaymentBody onSubmit={handleSubmit}>
          <PaymentBodyImg src={operator["img"]} />
          <PaymentInputTemplate>
            <PaymentInputText>Выбранный оператор</PaymentInputText>
            <InputElement type="text" value={operator["name"]} disabled />
          </PaymentInputTemplate>
          <PaymentInputTemplate>
            <PaymentInputText>Номер телефона</PaymentInputText>
            <InputElement mask="+7 (999) 999-99-99" {...phone.bind} />
          </PaymentInputTemplate>
          <PaymentInputTemplate>
            <PaymentInputText>Сумма</PaymentInputText>
            <InputElement mask="9999 руб" {...summ.bind} />
          </PaymentInputTemplate>
          {errors.length > 0 ? (
            <Errors>
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </Errors>
          ) : null}
          {success.length > 0 ? (
            <Success>
              {success.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </Success>
          ) : null}
          {success.length > 0 ? null : (
            <Button>
              {status ? <Loader></Loader> : "Оплатить"}
            </Button>
          )}
          <PaymentDescription>
            Внимание: получение денег на свой счёт, используя данный терминал,
            производится на свой страх и риск!
          </PaymentDescription>
        </PaymentBody>
      </Payment>
    </MainLayout>
  );
}

export default Operator;
