/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import style from './navbar.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter()

  return (
    <nav className={style.nav_container}>
      <div className={style.page_name}>
        <>Dnd Group</>
      </div>
      <div className={style.subnav_container}>
        <Link href="/">
          <Image
            alt="Home Logo"
            width={25}
            height={25}
            id="left-logo"
            aria-label="page logo"
            src="/images/D20.png"
          />
        </Link>
      </div>
    </nav>
  )
}
