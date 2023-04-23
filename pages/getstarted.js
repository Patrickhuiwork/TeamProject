import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/getstarted.module.css'
import Link from 'next/link'
import ReturnIcon from '@/components/returnIcon'
import Squarebutton1 from '@/components/Squarebutton1'
import Squarebutton2 from '@/components/Squarebutton2'

export default function Activites() {
  return (
    <>
      <Head>
        <title>Activites</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <p className={styles.reccommendationmessage}>We recommend having a look on our <span>Learn More</span> section before jumping into the <span>Quizzes</span></p>
        <div className={styles.container}>
          <Link href='/learning'><Squarebutton1>Learn More</Squarebutton1></Link>
          <div>➟</div>
          <Link href='/Quizzes'><Squarebutton1>Quizzes</Squarebutton1></Link>
        </div>

        <p className={styles.reccommendationmessage}>Discover more about our app</p>
        <div className={styles.container}>
          <Link href='/about'><Squarebutton2>About Us</Squarebutton2></Link>
          <Link href='/resources'><Squarebutton2>Resources</Squarebutton2></Link>
        </div>
        <div>
          <Link href='/tutorial'><Squarebutton2>Tutorial</Squarebutton2></Link>
        </div>
      </main>
    </>
  )
}
