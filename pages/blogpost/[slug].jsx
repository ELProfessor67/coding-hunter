import styles from '../../styles/Home.module.css';
import {useState,useEffect} from 'react';
// import {readdirSync,readFileSync} from 'fs';

export default function Slug(props){
	const [blog, setBlog] = useState(props.Blog);
	if(blog)
	{
	return(
			<>
				<div className={styles.container + " " + styles.main + " " + styles.slugContainer}>
					<div className={styles.mainBlog}>
						<h2 className={styles.title}>{blog.title}</h2>
						{<div className={styles.para} dangerouslySetInnerHTML={{__html : blog.content}}></div>}
						<p className={styles.para}>~{blog.author}</p>
					</div>
				</div>
			</>
		);
	}else{
		return(
				<h2>404 page not found</h2>
			);
	}
}

// server side rendering
export async function getServerSideProps(context){
	const data = await fetch(`http://localhost:3000/api/blog?file=${context.query.slug}`);
	const Blog = await data.json();
	if(Blog.hasOwnProperty('error')){
		return{
			props : {Blog : null}
		}
	}

	return{
		props : {Blog}
	}
}

// static side genration
// export async function getStaticPaths(){
// 	const dir = readdirSync('blogData','utf-8');
// 	const paths = [];
// 	dir.forEach((file) => {
// 		const path = {params : {slug : file.replace('.json','')}};
// 		paths.push(path);
// 	});
// 	return{
// 		paths : [...paths],
// 		fallback : true
// 	}
// }
// export async function getStaticProps(context){
// 	const {slug} = context.params;
// 	const Blog = readFileSync(`blogData/${slug}.json`,'utf-8');
// 	return{
// 		props : {Blog : JSON.parse(Blog)}
// 	}
// }