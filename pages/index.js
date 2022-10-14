import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import utilsStyle from '../styles/utils.module.css'
import Image from 'next/image'
import img from '../public/images/silvermovie.gif'
import { useState } from 'react'
import { useRouter } from 'next/router'
import data from './projects.json'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

export default function Home () {
  const router = useRouter()

  const [message, setMessage] = useState('')
  const [selectedItem, setSelectedItem] = useState([])
  const posts = data
  const handleChange = (string, results) => {
    // setMessage(event)
    console.log('value is:', string, results)

    setMessage(string)

    if (results.length > 0) {
      setSelectedItem(results[0])
    }
  }

  const handleSelect = selectedItem => {
    // setMessage(event)
    console.log('value is: ___select', selectedItem)
    setSelectedItem(selectedItem)
  }

  const handleClick = e => {
    e.preventDefault()
    router.push(selectedItem.slug)
  }

  return (
    <Layout>
      <Head>
        <title>Silver Movie</title>
      </Head>
      <div className={utilsStyle.searchDiv}>
        <div className={utilsStyle.searchInput}>
          <ReactSearchAutocomplete
            placeholder='Search Movie'
            items={data}
            autoFocus
            type='text'
            onSearch={handleChange}
            onSelect={handleSelect}
          />
        </div>

        <button className={utilsStyle.searchButton} onClick={handleClick}>
          Search
        </button>
      </div>

      <div className={utilsStyle.whoWeAreDiv}>
        <p className={utilsStyle.whoWeAreP}>
          <h1 className={utilsStyle.whoWeAreSpan}>WHO WE ARE?</h1>
          Welcome to Silver Movie. You can reach every movie you are looking
          <br />
          for among hundreds of movies and learn about these movies. Have fun!
          <br />
        </p>
        <div >
          <Image className={utilsStyle.gif} src={img} width={760} height={380}></Image>
        </div>
      </div>
    </Layout>
  )
}
