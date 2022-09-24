import styles from '../styles/Home.module.css';
import Link from 'next/link';
import {useState,useEffect} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
// import {readdirSync,readFileSync} from 'fs';

export default function Blog(props){
	// console.log(props.Blogs)
	const [Blogs,setBlogs] = useState(props.Blogs);
	const [count,setCount] = useState(5);


	const fetchData = () => {
		setTimeout(() => {
	      setCount(count + 5);
	      console.log('add');
	      console.log(Blogs.length)
	    }, 1500);
	}

	// const getBlogs = async () => {
	// 	try{
	// 		const data = await fetch('/api/getBlog');
	// 		const blogs = await data.json();
	// 		setBlogs(blogs);
	// 	}catch(err){
	// 		console.log(err.message);
	// 	}
	// }
	// useEffect(() => {
	// 	getBlogs();
	// },[]);
	return(
	<>
		<div className={styles.container + " " + styles.main}>
			<div className={styles.blog}>
			  <h2>Latest Blogs</h2>
			  	<InfiniteScroll
				  	dataLength={count} //This is important field to render the next data
            		next={fetchData}
            		hasMore={count <= props.length}
            		loader={<h4>Loading...</h4>}
            		scrollableTarget="scrollableDiv"
            		endMessage={
					    <p style={{ textAlign: 'center' }}>
					      <b>Yay! You have seen it all</b>
					    </p>
				  	}
				>
				  {Blogs && Blogs.length !== 0 ? Blogs.slice(0,count).map(({path,title,discription,author},index) => {
				  	return(
				  			<>
				  				<div className={styles.blog_item} key={index}>
						            <Link href={`blogpost/${path}`}>
						            	<h3>{title}</h3>
									</Link>
						            <p>{discription}...<Link href={`blogpost/${path}`}>Read More</Link></p>
						          </div>
				  			</>
				  		);
				  }) : <h2>No Blogs Yet</h2>}
			  </InfiniteScroll>
			 {/* {Blogs && Blogs.length !== 0 ? Blogs.map(({path,title,discription,author},index) => {
			  	return(
			  			<>
			  				<div className={styles.blog_item} key={index}>
					            <Link href={`blogpost/${path}`}>
					            	<h3>{title}</h3>
								</Link>
					            <p>{discription}...<Link href={`blogpost/${path}`}>Read More</Link></p>
					          </div>
			  			</>
			  		);
			  }) : <h2>No Blogs Yet</h2>}
*/}	       </div>
		</div>
	</>
	);
}

// server side rendering
export async function getServerSideProps(context){
	const data = await fetch('http://localhost:3000/api/getBlog');
	const Blogs = await data.json();
	return {
		props : {Blogs : Blogs.blogs,length: Blogs.length}
	}
}

// static side genration
// export async function getStaticProps(context){
// 	const data = readdirSync('blogData','utf-8');
// 	const Blogs = [];
// 	data.forEach(item => {
// 		let blog = readFileSync('blogData/'+item,'utf-8');
// 		blog = JSON.parse(blog);
// 		blog.path = item.replace(".json",'');
// 		Blogs.push(blog);
// 	});
// 	return {
// 		props : {Blogs}
// 	}
// }