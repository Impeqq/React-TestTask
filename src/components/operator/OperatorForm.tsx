import { useState } from "react";
import { Formik } from "formik";
import Router from "next/router";

import OperatorFormInputs from "./OpratorFormInputs"

import { validationSchema } from "../../const/yupSchema";

export default function OperatorForm() {
  const [finalErrors, setFinalErrors] = useState(null);
  const [finalSuccess, setFinalSuccess] = useState(null);

  return (
    <Formik
      initialValues={{ phone: "", sum: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          if (Math.random() >= 0.5) {
            setFinalErrors(null);
            setFinalSuccess(
              `Вы успешно пополнили баланс номера ${values.phone} на ${parseInt(
                values.sum.replace(/\D+/g, "")
              )} ₽`
            );
            setTimeout(() => {
              Router.push("/");
            }, 2000);
            return true;
          } else {
            setFinalSuccess(null);
            setFinalErrors("Произошла ошибка, повторите попытку.");
          }
          setSubmitting(false);
        }, 500);
      }}
    >
      {(props) => {
        const {
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
         <OperatorFormInputs props={props} finalErrors={finalErrors} finalSuccess={finalSuccess} />
        );
      }}
    </Formik>
  );
}
