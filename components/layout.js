import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import utilsStyle from '../styles/utils.module.css'
import Navbar from './navbar'
import Footer from './footer'
import { useMediaQuery } from 'react-responsive'

export default function Layout ({ children }) {
  return (
    <div>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  )
}

// export async function getServerSideProps (context) {
//   const itemData = data.find(item => {
//     return '/' + item.slug === context.req.url
//   })

//   return {
//     props: { itemData }
//   }
// }
