import styled from "styled-components";

import OperatorInput from "./OperatorInput";
import Notification from "../Notification";
import Button from "../Button";

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
      <Button text="Оплатить" disabled={props.isSubmitting} />
    </form>
  );
}
