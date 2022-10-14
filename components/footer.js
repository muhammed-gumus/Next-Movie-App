import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import utilsStyle from '../styles/utils.module.css'

export default function () {
  return (
    <div className={utilsStyle.footer}>
      <div className={utilsStyle.footerDiv}>
        <div className={utilsStyle.footerItem}>
          <a
            href='https://twitter.com/1silvermami1'
            className={utilsStyle.footerLink}
          >
            <Image src='/images/twitter-icon.png' width={32} height={32} />
          </a>
        </div>
        <div className={utilsStyle.footerItem}>
          <a
            href='https://www.instagram.com/muhammed_gums/'
            className={utilsStyle.footerLink}
          >
            <Image src='/images/instagram-icon.png' width={32} height={32} />
          </a>
        </div>
        <div className={utilsStyle.footerItem}>
          <a
            href='https://www.linkedin.com/in/muhammed-gümüş-4bb481219/'
            className={utilsStyle.footerLink}
          >
            <Image src='/images/linkedin-icon.png' width={32} height={32} />
          </a>
        </div>
        <div className={utilsStyle.footerItem}>
          <a
            href='https://github.com/muhammed-gumus'
            className={utilsStyle.footerLink}
          >
            <Image
              src='/images/github-icon.png'
              width={32}
              height={32}
              href='https://github.com/muhammed-gumus'
            />
          </a>
        </div>
        <div className={utilsStyle.footerItem}>
          <a
            href='https://bionluk.com/muhammedgumus02'
            className={utilsStyle.footerLink}
          >
            <Image
              src='/images/bionluk.png'
              width={32}
              height={32}
              href='https://bionluk.com/muhammedgumus02'
            />
          </a>
        </div>
      </div>
    </div>
  )
}
