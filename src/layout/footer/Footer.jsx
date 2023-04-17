import React from "react";
import {
	facebook,
	instagram,
	linkedin,
} from "../../assets/social-media/socialMedia.js";
export const Footer = () => {
	return (
		<>
			<footer className="p-5">
				<ul
					className="flex justify-center gap-x-5 items-center"
					data-aos="fade-left"
				>
					<li>
						<a
							href="https://www.instagram.com/voyenbici_argentina/"
							target="blank"
						>
							{" "}
							<img
								src={instagram}
								alt=""
								className="max-h-[40px] hover:scale-110 duration-200"
							/>
						</a>
					</li>
					<li>
						<a
							href="https://m.facebook.com/people/Voyenbici/100069367055083/"
							target="blank"
						>
							<img
								src={facebook}
								alt=""
								className="h-[40px] hover:scale-110 duration-200"
							/>
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/voy-en-bici-banco-mundial-de-bicicletas-a02789171/"
							target="blank"
						>
							<img
								src={linkedin}
								alt=""
								className="h-[40px] hover:scale-110 duration-200"
							/>
						</a>
					</li>
				</ul>
			</footer>
		</>
	);
};
