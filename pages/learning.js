import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/learning.module.css'
import Bluebutton from '@/components/Bluebutton'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import LargeButton from '@/components/LargeButton'
import Accordion from '@/components/Accordion'

export default function Learning() {

  return (
    <>
      <Head>
        <title>Learning</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.box}>
          <h1>Learning</h1>
          <Image src='/icons/pagesIcon/learn more icon.svg' width='300' height='170' />
          <h2>Choose the folllowing types of fire below to learn more about</h2>
          <div className={styles.threeoptions}>
            <div className={styles.learningcontainer}>
              <img src='/illustrations/electric fire.svg' className={styles.illustration} />
              <Link href='/learningElectric'><Bluebutton>Electrical Fire</Bluebutton></Link>
            </div>
            <div className={styles.learningcontainer}>
              <img src='/illustrations/grease fire.svg' className={styles.illustration} />
              <Link href='/learningGrease'><Bluebutton>Grease Fire</Bluebutton></Link>
            </div>
            <div className={styles.learningcontainer}>
              <img src='/illustrations/ordinary fire.svg' className={styles.illustration} />
              <Link href='/learningOrdinary'><Bluebutton>Ordinary Fire</Bluebutton></Link>
            </div>
          </div>

          <div className={styles.more2LearningOptions}>
            <Link href='/learningFireCause'><LargeButton>Learn more about the most common fire causes</LargeButton></Link>
            <Link href='/learningInCaseOfAFire'><LargeButton>What to do in case of a fire?</LargeButton></Link>
          </div>

          <Accordion/>

        
        </div>

      </main>
    </>
  )
}
