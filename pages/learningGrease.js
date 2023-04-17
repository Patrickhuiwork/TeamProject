import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/learning3FireType.module.css'
import ReturnIcon from '@/components/returnIcon'
import Bluebutton from '@/components/Bluebutton'
import Button from '@/components/Button'
import Redbutton from '@/components/Redbutton'
import Piechart from '@/components/PieChartForGrease'


export default function LearningGrease() {
    return (
      <>
        <Head>
          <title>Learning about Grease Fire</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Link href='/learning'><ReturnIcon/></Link>


        <main className={styles.main}>               
            <h1>Learn about Grease Fire</h1>
            <img src='/illustrations/grease fire.svg' className={styles.illustration} />   
            <p className={styles.description}>A grease fire is a type of fire that occurs when cooking oil or grease reaches its ignition point and catches fire. Grease fires are common in kitchens and can be dangerous if not handled properly</p>
            <Piechart/>
            <p className={styles.description}>The main reason for grease fires can be attributed to overheating of cooking oil or grease, which can reach its ignition point and catch fire.</p>
            <Image src='/imagery/fire-causes/cooking-fire.png' width='350' height='200'/>
            <p className={styles.description}>They can be prevented by being vigilant while cooking, using appropriate heat levels, and knowing how to properly extinguish them with a fire extinguisher or by smothering the flames. Prioritizing kitchen safety and having a plan in place to handle grease fires is essential.</p>            
            <p className={styles.description2}>To prevent grease fires, it's important to always keep an eye on cooking oil or grease when it's heated and never leave it unattended. Adjusting the heat to the appropriate level and using a thermometer to monitor the oil's temperature can also help prevent overheating. Keeping a fire extinguisher and a lid nearby when cooking with oil or grease is also a good safety precaution.</p>

            <div className={styles.buttons}>
                <Redbutton>Take the quiz</Redbutton>
                <Link href='/learningOrdinary'><Bluebutton>Continue to Ordinary Fire ⮞</Bluebutton></Link>
                
            </div>
            
          
        </main>
      </>
    )
  }