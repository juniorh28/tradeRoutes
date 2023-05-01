import Link from 'next/link'
import Image from 'next/image'
// import style from '../components/404.module.css'

export default function Custom404() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Image src="/images/d20-1.png" width={300} height={250} />
      {'\n'}
      <div>
        Return back <Link href="/">Home</Link>
      </div>
    </div>
  )
}
