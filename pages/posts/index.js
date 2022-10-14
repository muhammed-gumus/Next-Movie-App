import Portfolios from "../projects.json";
import Link from "next/link";
import Layout from "../../components/layout";
import Image from "next/image";
import utilsStyle from "../../styles/utils.module.css";
import { useRouter } from "next/router";
import {useState} from 'react';

export default function Projects({ itemData }) {
  
  return (
    <Layout>
      <div className={utilsStyle.movies}>
        {Portfolios.map((mov) => {
          return (
            <Link href={mov.slug}>
              <div className={utilsStyle.movie} key={mov.id}>
                <Image
                  className={utilsStyle.movieImage}
                  src={mov.image}
                  width={200}
                  height={300}
                  style={{objectFit:'cover'}}
                ></Image>
                <p className={utilsStyle.movieName}>{mov.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
}


{
  /* <div className="projects">
                    {Portfolios.map(portfolio => {
                        return(
                            <div className="project" key={portfolio.id}>
                                <img src={portfolio.cover} alt="project image" />
                                <h2>{portfolio.title}</h2>
                                <p>{portfolio.excerpt}</p>
                                <Link href={portfolio.slug}><a>View More</a></Link>
                            </div>
                        )}
                    )}
            </div> */
}
