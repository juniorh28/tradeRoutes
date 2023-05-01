import Link from 'next/link'
import style from '../css/home.module.css'
import Image from 'next/image'
export default function Home() {
  return (
    <div>
      <div>
        <h1>Welcome to DnD</h1>
        <div className={style.links}>
          <Link href="/people">People</Link>
        </div>
        <div className={style.links}>
          <Link href="/places">Places</Link>
        </div>
        <div className={style.links}>
          <Link href="/lore/lore">Lore</Link>
        </div>
        <div className={style.links}>
          <Link href="/player_guide/guides">Guides</Link>
        </div>
      </div>

      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
      `}</style>
    </div>
  )
}
/**
 * 🕊
 * 🧪
 * 🧙
 */
