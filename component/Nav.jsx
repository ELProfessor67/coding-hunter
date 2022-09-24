import styles from '../styles/Home.module.css';
import Link from 'next/link';


export default function(){
	return(
			<>
				<header className={styles.main_nav}>
			        <nav>
			          <ul>
			            <li><Link href="/">Home</Link></li>
			            <li><Link href="/about">About</Link></li>
			            <li><Link href="/contact">Contact</Link></li>
			            <li><Link href="/blog">Blog</Link></li>
			          </ul>
			        </nav>
			      </header>
			</>
		);
}