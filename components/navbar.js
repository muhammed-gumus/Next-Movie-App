import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import utilsStyle from '../styles/utils.module.css'
import { useRouter } from 'next/router'
export default function Navbar () {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Silver Movie</title>
        <link rel="shortcut icon" href= '/images/movieicon.png' />
      </Head>
      <div className={utilsStyle.navbar}>
        <div className={utilsStyle.navbarDiv}>
          <div className={utilsStyle.logoDiv}>
            <a href='/'>
              <Image
                className={utilsStyle.tittlePage}
                src='/images/silvermovie.png'
                width={180}
                height={80}
                style={{objectFit: 'contain' }}
              />
            </a>
          </div>
          <div className={utilsStyle.categoryDiv}>
          <Link href='/posts'>
            <a className={utilsStyle.bestMovie}>Best Movies of All Time</a>
          </Link>
          </div>
        </div>
      </div>
    </>
  )
}
