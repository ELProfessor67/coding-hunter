import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';


export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
       <figure className={styles.coder}>
         <Image src="/coder.jpg" alt="coder image" width={230} height={230} className={styles.img}/>
         {/*<img src="/coder.jpg" alt="coder image" width={350} height={200}/>*/}
       </figure>
       <h1 className={styles.title}>&lt;Hunting Coder/&gt;</h1>
{/*       <p className={styles.description}>A blog for hunting coders by a hunting coder</p>*/}
       <div className={styles.blog}>
          <h2>Latest Blogs</h2>
          {props.Blogs && props.Blogs.slice(0,3).map(({path,title,discription,author},index) => {
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
          })}
       </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          This template is made Love by Zeeshan Raza
        </a>
      </footer>
    </div>
  )
}

export async function getServerSideProps(context){
  const data = await fetch('http://localhost:3000/api/getBlog');
  const Blogs = await data.json();
  return {
    props : {Blogs : Blogs.blogs}
  }
}
