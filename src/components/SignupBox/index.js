import React, { useRef, useState } from "react";
import "./style.scss";
import W3Modal from "../w3modal/W3Modal";
import { apiRequest } from "../../api";

export default function SignupBox(props) {
	const [thankYou, setThankYou] = useState(false);
	let userEmail = useRef();
	let userName = useRef();
	let userPhone = useRef();
	let saveLead = () => {
		if (userEmail.current.value && userName.current.value && userPhone.current.value)
			apiRequest({
				method: "post",
				url: "/crm/new-lead",
				data: {
					email: userEmail.current.value,
					name: userName.current.value,
					phone: userPhone.current.value,
					title:window.location.hostname
				},
			}).then((res) => {
				console.log(res);
				setThankYou(true);
			});
		else alert("Please enter the valid data.");
	};
	return (
		<>
			<div className="signup-box">
				<div className="signup-form-inputs">
					<div className="nameinput-container">
						<input type="text" required placeholder="Your Name" ref={userName} />
					</div>
					<div className="phoneinput-container">
						<input type="tel" pattern="[0-9]{10}" maxLength="10" required placeholder="Phone Number" ref={userPhone} />
					</div>
				</div>
				<div className="signup-form-group">
					<input type="email" required placeholder="Your Email Address" ref={userEmail} />
					{props.site && props.site == "design" ? (
						<button
							onClick={() => {
								console.log(window.location.hostname);
								// window.top.location = `/ab/account-security/login?email=${userEmail.current.value}`
								saveLead();
							}}
							className="submit"
							style={{ backgroundColor: "var(--color-primary)" }}
						>
							Sign Up
						</button>
					) : (
						<button
							onClick={() => {
								console.log(window.location.hostname);
								// window.top.location = `/ab/account-security/login?email=${userEmail.current.value}`
								saveLead();
							}}
							className="submit"
						>
							Sign Up
						</button>
					)}
				</div>

				{props.noOffer ? null : (
					<div className="offer">{/* Sign up today & get credits worth Rs. 2000/-  */}</div>
				)}
				<W3Modal
					className="featured-work-modal"
					show={thankYou}
					onClick={() => {}}
					onModalChange={() => {
						setThankYou(false);
					}}
					showFooter="false"
					backdrop="static"
				>
					<h1>Thank You</h1>
					{/* {activePortfolioType == "video" ? (
						<>
						<center>
						<video controls>
						<source src={activePortfolioImage} type="video/mp4" />
						</video>
						</center>
						</>
						) : (
							<img className="active-portfolio-large" src={activePortfolioImage} />
						)} */}
				</W3Modal>
			</div>
		</>
	);
}
