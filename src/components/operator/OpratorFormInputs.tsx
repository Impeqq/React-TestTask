import OperatorInput from "./OperatorInput";
import Notification from "../Notification";
import Button from "../Button";

const OperatorFormInputs = ({ props, finalErrors, finalSuccess }) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <OperatorInput
        props={props}
        name="phone"
        type="text"
        mask="+7 (999) 999-99-99"
        label="input2"
      />
      <OperatorInput
        props={props}
        name="sum"
        type="text"
        mask="9999 ₽"
        label="input3"
      />
      <Notification value={finalErrors} className="final" />
      <Notification value={finalSuccess} className="final success" />
      <Button text="button" disabled={props.isSubmitting} />
    </form>
  );
};

export default OperatorFormInputs;
