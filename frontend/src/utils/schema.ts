import * as yup from "yup";

const nameRegex = /^[A-Za-z\s]+$/;

const hotelSchema = yup.object().shape({
  name: yup
    .string()
    .required("İsim zorunludur")
    .min(3, "İsim alanı en az 3 karakter içermelidir")
    .max(40, "İsim alanı en fazla 40 karakter içermelidir")
    .matches(nameRegex, "İsim alanı yalnızca harf ve boşluktan oluşur"),
  description: yup
    .string()
    .required("Açıklama zorunludur")
    .min(10, "Açıklama alanı en az 10 karakter içermelidir")
    .max(400, "Açıklama alanı en fazla 400 karakter içermelidir"),
  location: yup.string().required("Konum zorunludur"),
  address: yup.string().required("Adres zorunludur"),
  amenities: yup.string().required("Hizmetler zorunludur"),
  rating: yup
    .number()
    .required("Puan zorunludur")
    .min(1, "Puan en az 1 olmalı")
    .max(5, "Puan en az 5 olmalı"),
  price_per_night: yup
    .number()
    .required("Fiyat zorunludur")
    .min(100, "Fiyat en az $100 olmalı")
    .max(10000, "Fiyat en fazla $10000 olmalı"),
  availability: yup.boolean(),
});
export default hotelSchema;
