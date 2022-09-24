import styles from '../styles/about.module.css';
export default function About(){

	return(
	<>
		<section className={styles.about_section}>
			<div className={styles.container}>
				<h2>Hunting Coder About</h2>
				<div>
					<h2>Introduction</h2>
					<p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
				</div>
				<div>
					<h2>Service Offerd</h2>
					<p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
					<h3>We are providing following services</h3>
					<ul>
						<li>Website Making</li>
						<li>Web scraping</li>
						<li>Web Automation</li>
					</ul>
				</div>
				<div>
					<h2>Contact Us</h2>
					<p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
				</div>
			</div>
		</section>
	</>
	);
}