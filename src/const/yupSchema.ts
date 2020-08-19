import * as Yup from "yup";

const validateSum = (value) => {
  if (
    parseInt(value.replace(/\D+/g, "")) > 1000 ||
    parseInt(value.replace(/\D+/g, "")) < 1 ||
    parseInt(value.replace(/\D+/g, "")).toString() == "NaN"
  ) {
    return false;
  } else {
    return true;
  }
};

export const validationSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(
      /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
      "Укажите правильный номер телефона"
    )
    .required("Укажите номер телефона"),
  sum: Yup.string()
    .test("sum", "Укажите сумма пополнения от 1₽ до 1000₽", validateSum)
    .required("Укажите cумму пополнения"),
});
