import * as Yup from "yup";

const validateSum = (value = "0") => {
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
      "notification1"
    )
    .required("notification2"),
  sum: Yup.string()
    .test("sum", "notification3", validateSum)
    .required("notification4"),
});
