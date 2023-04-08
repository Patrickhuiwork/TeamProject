import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/getstarted.module.css'
import Link from 'next/link'
import Squarebutton1 from '@/components/Squarebutton1'

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
        <Squarebutton1>Learn More</Squarebutton1>
        <Squarebutton1>Quizzes</Squarebutton1>
      </div>

      </main>
    </>
  )
}
