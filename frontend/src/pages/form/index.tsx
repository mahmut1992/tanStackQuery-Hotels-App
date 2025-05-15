import React, { type FC } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import hotelSchema from "../../utils/schema";
import { initialValues, inputFields } from "../../utils/constants";
import type { HotelFormValues } from "../../types";
import { useCreatePlaces } from "../../utils/service";

const HotelForm: FC = () => {
  const { mutate, isPending } = useCreatePlaces();
  // form gönderildiği  an çalışacak fonk
  const handleSubmit = (values: HotelFormValues) => {
    mutate(values);
  };

  return (
    <div className="container ">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={hotelSchema}
      >
        <Form className="max-w-2xl mx-auto grid gap-6  ">
          {inputFields.map((i, key) => (
            <div key={key} className="field relative">
              <label htmlFor={i?.name}>{i?.label}</label>
              <Field
                id={i?.name}
                type={i?.type}
                name={i?.name}
                className="input"
              />
              <ErrorMessage
                className="text-red-500 text-sm absolute -bottom-6"
                name={i?.name as string}
                component="div"
              />
            </div>
          ))}

          <button
            disabled={isPending}
            className="my-5 bg-blue-500 py-2 px-6 text-white rounded-md transition hover:bg-blue-600 cursor-pointer"
          >
            {isPending ? "Oluşturuluyor..." : "Gönder"}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default HotelForm;
