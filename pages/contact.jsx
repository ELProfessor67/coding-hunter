import styles from '../styles/contact.module.css';
import {useState} from 'react';

export default function Contact(){
	const [name,setName] = useState();
	const [email,setEmail] = useState();
	const [phone,setPhone] = useState();
	const [message,setMessage] = useState();

	const submitHandler = (e) => {
		e.preventDefault();
		fetch('/api/contactApi',{
			method: "POST",
			headers : {
				'Content-Type' : "application/json"
			},
			body : JSON.stringify({name,email,phone,message})})
		.then(res => res.json())
		.then(data => {
			alert(data.message);
			setName('');
			setEmail('');
			setPhone('');
			setMessage('');
		}).catch(err => console.log(err));
	}

	return(
	<>	
		<div className={styles.contact_section}>
			<div className={styles.container}>
				<div className={styles.contact_form}>
					<h2>Contact Us</h2>
					<form onSubmit={submitHandler}>
						<div>
							<label htmlFor="name">Name :</label>
							<input type="text" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} id="name" autoComplete="off" required/>
						</div>
						<div>
							<label htmlFor="email">Email :</label>
							<input type="email" placeholder="Enter Your Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off" required/>
						</div>
						<div>
							<label htmlFor="phone">Phone :</label>
							<input type="phone" placeholder="Enter Your Phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}  autoComplete="off" required/>
						</div>
						<div>
							<label htmlFor="message">Message :</label>
							<textarea placeholder="Enter Your Message" id="message" value={message} onChange={(e) => setMessage(e.target.value)} autoComplete="off" required/>
						</div>
						<div>
							<button className={styles.btn} type="submit">Submit</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</>
	);
}
