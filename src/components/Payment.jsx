import { useState } from "react";
import { useEffect } from "react";


const Payment = () => {



	useEffect(() => {}, []);

	const initialState = {
		evc: false,
		zaad: false,
		sahal: false,
	};
	const [paymentMethod, setPaymentMethod] = useState(initialState);
	const submitForm = (event) => {
		event.preventDefault();};

	
	return (
		<div>
			<h2>Pay With</h2>

			<div className="payment-cards">
				<div
					className={`payment-card ${paymentMethod.zaad && "selected"}`}
					onClick={() => setPaymentMethod({ ...initialState, zaad: true })}>
					<h3>Zaad Service</h3>
				</div>
				<div
					className={`payment-card ${paymentMethod.sahal && "selected"}`}
					onClick={() => setPaymentMethod({ ...initialState, sahal: true })}>
					<h3>Sahal Service</h3>
				</div>
				<div
					className={`payment-card ${paymentMethod.evc && "selected"}`}
					onClick={() => setPaymentMethod({ ...initialState, evc: true })}>
					<h3>Evc Plus</h3>
				</div>
				<form onSubmit={submitForm}>
					<input
						className="form-control"
						placeholder="2526......"
						
					/>
					<button className="btn-proceed">
						
					</button>
				</form>
			</div>
		</div>
	);
};


export default Payment;