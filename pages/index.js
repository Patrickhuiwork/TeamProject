import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Button from '@/components/Button'
import Link from 'next/link'
import PieChartForElectric from '@/components/pieChartForElectric'

export default function Home() {

  var name = process.env.NEXT_PUBLIC_NAME;

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {name}
        <div className={styles.box}>

          <img src='/Logo/stacklogo.svg'className={styles.logo}/>
          <p className={styles.quote}>"Join the fight against fire hazards with Heat Help - The ultimate fire safety app!"</p>
          <p className={styles.description}>
            Heat Help is the ultimate fire safety app designed to educate and equip you with the knowledge necessary to prevent fires and respond to emergencies. Wherever you go, Heat Help has got you covered.
          </p>

          <Link href='/getstarted'><Button>Get Started</Button></Link>

          <Link href='/tutorial'><Button>Tutorial</Button></Link>
        </div>



      </main>
    </>
  )
}
