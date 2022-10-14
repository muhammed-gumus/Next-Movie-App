import { useRouter } from 'next/router'
import utilsStyle from '../../styles/utils.module.css'
import data from '../projects.json'
import Image from 'next/image'
import ReactPlayer from 'react-player'
import Layout from '../../components/layout'

export default function Project ({ itemData }) {

  return (
    <Layout>
      <div className={utilsStyle.movieTittleandTrailer}>
        <ReactPlayer
          url={itemData.data.url}
          width={600}
          height={300}
          style={{ border: '15px solid black', borderRadius: '5px!important', objectFit: 'cover' }}
        />
        <div className={utilsStyle.movieSum}>
          <h2>{itemData.name}</h2>
          <p className={utilsStyle.detailP}>{itemData.data.desc}</p>
        </div>
      </div>
      <div className={utilsStyle.moviePage}>
        
          <Image
            src={itemData.image}
            width={300}
            height={400}
            style={{ borderRadius: 10 }}
          ></Image>
          <div className={utilsStyle.movieDetailDiv}>
            <div className={utilsStyle.movieDetail1}>
              <p className={utilsStyle.movieDesc}>Country:</p>
              <p className={utilsStyle.movieDesc}>Genre:</p>
              <p className={utilsStyle.movieDesc}>Release:</p>
              <p className={utilsStyle.movieDesc}>Director:</p>
              <p className={utilsStyle.movieDesc}>Production:</p>
              <p className={utilsStyle.movieDesc}>Cast:</p>
            </div>
            <div className={utilsStyle.movieDetail2}>
              <p className={utilsStyle.movieDesc}>{itemData.country}</p>
              <p className={utilsStyle.movieDesc}>{itemData.genre}</p>
              <p className={utilsStyle.movieDesc}>{itemData.release}</p>
              <p className={utilsStyle.movieDesc}>{itemData.director}</p>
              <p className={utilsStyle.movieDesc}>{itemData.production}</p>
              <p className={utilsStyle.movieDesc}>{itemData.cast}</p>
            </div>
          </div>

          <div></div>
        
      </div>
    </Layout>
  )
}
export async function getServerSideProps (context) {
  const itemData = data.find(item => {
    return '/' + item.slug === context.req.url
  })

  return {
    props: { itemData }
  }
}

{
  /* <h2 className={utilsStyle.movieTittle}>{itemData.name}</h2> */
}

{
  /* <div className={utilsStyle.movieDetailDiv}>
            <div className={utilsStyle.movieDetail}>
              <p className={utilsStyle.movieDesc}>Country :</p>
              <p className={utilsStyle.movieDesc}>{itemData.country}</p>
            </div>
            <div className={utilsStyle.movieDetail}>
              <p className={utilsStyle.movieDesc}>Genre :</p>
              <p className={utilsStyle.movieDesc}>{itemData.genre}</p>
            </div>
            <div className={utilsStyle.movieDetail}>
              <p className={utilsStyle.movieDesc}>Release :</p>
              <p className={utilsStyle.movieDesc}>{itemData.release}</p>
            </div>
            <div className={utilsStyle.movieDetail}>
              <p className={utilsStyle.movieDesc}>Director :</p>
              <p className={utilsStyle.movieDesc}>{itemData.director}</p>
            </div>
            <div className={utilsStyle.movieDetail}>
              <p className={utilsStyle.movieDesc}>Production :</p>
              <p className={utilsStyle.movieDesc}>{itemData.production}</p>
            </div>
            <div className={utilsStyle.movieDetail}>
              <p className={utilsStyle.movieDesc}>Cast :</p>
              <p className={utilsStyle.movieDesc}>{itemData.cast}</p>
            </div>
          </div> */
}
