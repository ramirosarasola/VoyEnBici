import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const Form = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [validation, setValidation] = useState(false);

  const validate = (e) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    let emailValidation = emailRegex.test(form.email);
    let textValidation =
      form.message.length > 3 && form.name.length > 3 ? true : false;

    return emailValidation && textValidation
      ? setValidation(true)
      : alert("Ingrese correctamente los datos.");
  };

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();

    if (validation) {
      setLoading(true);
      emailjs
        .send(
          "service_rxba605",
          "template_fks5926",
          {
            from_name: form.name,
            to_name: "Ramiro Sarasola",
            from_email: form.email,
            to_email: "ramiro.sarasola@gmail.com",
            message: form.message,
          },
          "SvwDBI_MBsyvGFvu9"
        )
        .then(
          () => {
            setLoading(false);
            alert("Gracias por tu mensaje!");
            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.error(error);

            alert("Ahh, something went wrong. Please try again.");
          }
        );
    }
  };

  return (
    <div className="">
      <h2 className="font-black text-3xl text-center">Dona tu bicicleta </h2>
      <p className="mt-10 text-lg mb-10 text-center">
        Gracias a las donaciones el Banco de Bicicletas recibe semanalmente
        bicicletas usadas, antiguas y nuevas de diversos tamaños.
      </p>

      <div className="flex xl:justify-center">
        <div className="px-5 w-full xl:w-2/3">
          <p>Pasos para donar:</p>

          <ul className="grid gap-y-5 p-5 ">
            <li>
              1 - Vamos a pedirte algunos datos para ponernos en contacto con
              vos para coordinar la donacón.
            </li>

            <li>
              2 - Si podes sacale una foto a la bici. La foto de la bici nos da
              una idea de cuánto dinero deberíamos poner para arreglar y renovar
              la bici( costo por servicio general 8.000 pesos-10.000 pesos).
            </li>

            <li>
              3 - Una vez que tenemos la ubicación de las bicicletas, la
              buscamos por nuestra cuenta, luego las bicis son reparadas por
              nuestro equipo de bicicleteros, para finalmente presentarlas al
              Banco de Bicicletas, dónde se les dará utilidad compartida y
              resguardo.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-white shadow-xl py-10 px-5 mb-10 rounded-lg mx-5  w-full xl:w-2/3"
        >
          <div className="mb-5">
            <label className="block text-gray-700 font-bold uppercase">
              Nombre
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Ingrese su nombre..."
                value={form.name}
                onChange={handleChange}
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              />
            </label>
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 font-bold uppercase">
              Email
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email propio..."
                value={form.email}
                onChange={handleChange}
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              />
            </label>
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 font-bold uppercase">
              Mensaje
              <textarea
                name="message"
                id="message"
                placeholder="Describe tu consulta..."
                className="border border-opacity-60 w-full  p-2"
                value={form.message}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="flex text-center ">
            <button
              type="submit"
              className="font-semibold w-[432px] py-[5px] mx-auto text-center  rounded-md bg-indigo-600  p-3 text-white  hover:bg-indigo-700 cursor-pointer transition-all"
            >
              {loading ? "Sending" : "Hace tu donación"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
