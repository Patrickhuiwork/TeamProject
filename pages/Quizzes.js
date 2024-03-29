import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Quizzes.module.css'
import Bluebutton from '@/components/Bluebutton'
import Link from 'next/link'


export default function Quizzes() {
  return (
    <>
      <Head>
        <title>Quizzes</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.box}>
          <h1 className={styles.title}>Quizzes</h1>
          <p className={styles.description}>Try one of our quizzes to asses your knowledge on different kinds of fires!</p>
          <div className={styles.threeoptions}>
              <div className={styles.quizcontainer}>
                  <img src='/illustrations/electric fire.svg' className={styles.illustration}/>
                  <Link href='/Quiz1'>

                  <Bluebutton>Electrical Fires</Bluebutton>
                  </Link>
              </div>
              
              <div className={styles.quizcontainer}>
                  <img src='/illustrations/grease fire.svg' className={styles.illustration}/>
                  <Link href='/Quiz2'>
                    <Bluebutton>Grease Fires</Bluebutton>
                    
                  </Link>
              </div>
              <div className={styles.quizcontainer}>
                  <img src='/illustrations/ordinary fire.svg' className={styles.illustration}/>
                  <Link href='Quiz3'>
                    <Bluebutton>Ordinary Fires</Bluebutton>

                  </Link>
              </div>

          </div>

        </div>


      </main>
    </>
  )
}
