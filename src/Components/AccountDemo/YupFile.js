import * as yup from "yup";

export let Schema1 = yup.object().shape({
  name: yup.string().required(),
  date: yup.date().default(function () {
    return new Date();
  }),
});
