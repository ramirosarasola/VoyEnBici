import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { icono_bici } from "../../../../assets";

export const Form = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
		empresa: "",
		phone:""
	});

	const [loading, setLoading] = useState(false);
	// const [validation, setValidation] = useState(false);

	const validate = (e) => {
		const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
		let emailValidation = emailRegex.test(form.email);
		let textValidation =
			form.message.length > 3 && form.name.length > 3 ? true : false;

		return emailValidation && textValidation;
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

		if (validate()) {
			setLoading(true);
			emailjs
				.send(
					"service_rxba605",
					"template_fks5926",
					{
						from_name: form.name,
						to_name: "Voy en Bici",
						from_email: form.email,
						to_email: ["ramiro.sarasola@gmail.com"],
						message: form.message,
						phone: form.phone,
						empresa: form.empresa,
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
							phone: '',
							empresa:'',
						});
					},
					(error) => {
						setLoading(false);
						console.error(error);

						alert("Ahh, something went wrong. Please try again.");
					}
				);
		} else {
			alert("Ingrese los datos correctamente");
		}
	};

	return (
		<div className="">
			<h2 className="font-black text-3xl text-center">QUEREMOS SABER MÁS DE VOS!</h2>
			<p className="mt-10  lg:text-[1.1rem] mb-10 text-center">
				Gracias a las donaciones el Banco de Bicicletas recibe semanalmente
				bicicletas usadas, antiguas y nuevas de diversos tamaños.
			</p>

			<div className="flex xl:justify-center">
				<div className="px-5 w-full xl:w-2/3">
					<p>Si queres:</p>

					<ul className="grid gap-y-5 p-5 ">
						<li className="flex items-center justify-start gap-4">
							<img className="w-[50px]" src={icono_bici} alt="" />
							<p>Sumar a una empresa como aliada!</p>
						</li>
						<li className="flex items-center justify-start gap-4">
							<img className="w-[50px]" src={icono_bici} alt="" />
							<p>Ayudarnos con una donacion monetaria!</p>
						</li>
						<li className="flex items-center justify-start gap-4">
							<img className="w-[50px]" src={icono_bici} alt="" />
							<p>Formar parte del voluntariado!</p>
						</li>
						<li className="flex items-center justify-start gap-4">
							<img className="w-[50px]" src={icono_bici} alt="" />
							<p>Donar una bicicleta!</p>
						</li>
						<li className="flex items-center justify-start gap-4">
							<img className="w-[50px]" src={icono_bici} alt="" />
							<p>Aportar insumos!</p>
						</li>
					</ul>
					<p> Llena el formulario con tus datos y acerca tu consulta o propuesta. ¡Responderemos en breve!</p>
				</div>
			</div>
			<div className="flex justify-center">
				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="bg-white shadow-xl py-10 px-5 mb-10 rounded-lg mx-5  w-full xl:w-2/3"
				>
					<div className="mb-5">
						<label className="block text-gray-700 font-bold uppercase my-4">
							Nombre y Apellido
							<input
								id="name"
								type="text"
								name="name"
								placeholder="Ingrese su nombre..."
								value={form.name}
								onChange={handleChange}
								className="font-medium border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
							/>
						</label>
						<label className="block text-gray-700 font-bold uppercase my-4">
							Email
							<input
								id="email"
								type="email"
								name="email"
								placeholder="Email..."
								value={form.email}
								onChange={handleChange}
								className="font-medium border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
							/>
						</label>
						<label className="block text-gray-700 font-bold uppercase my-4">
							Empresa
							<input
								id="empresa"
								type="empresa"
								name="empresa"
								placeholder="Empresa..."
								value={form.empresa}
								onChange={handleChange}
								className="font-medium border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
							/>
						</label>
						<label className="block text-gray-700 font-bold uppercase my-4">
							Celular
							<input
								id="phone"
								type="phone"
								name="phone"
								placeholder="Celular..."
								value={form.phone}
								onChange={handleChange}
								className="font-medium border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
							/>
						</label>
						<label className="block text-gray-700 font-bold uppercase my-4">
							Mensaje
							<textarea
								name="message"
								id="message"
								placeholder="Describe tu consulta..."
								className="font-medium border border-opacity-60 w-full  p-2"
								value={form.message}
								onChange={handleChange}
							/>
						</label>
					</div>

					<div className="flex text-center ">
						<button
							type="submit"
							className="font-semibold w-[432px] py-[5px] mx-auto text-center  rounded-md bg-[#1865AB] hover:bg-[#12518b] p-3 text-white cursor-pointer transition-all"
						>
							{loading ? "Enviando mensaje..." : "Enviar Mensaje"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
