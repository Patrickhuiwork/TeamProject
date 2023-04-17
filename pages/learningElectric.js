import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/learning3FireType.module.css'
import ReturnIcon from '@/components/returnIcon'
import Bluebutton from '@/components/Bluebutton'
import Button from '@/components/Button'
import Redbutton from '@/components/Redbutton'
import PieChart from '@/components/pieChartForElectric'


export default function LearningElectric() {
    return (
      <>
        <Head>
          <title>Learning about Electric Fire</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Link href='/learning'><ReturnIcon/></Link>


        <main className={styles.main}>               
            <h1>Learn about Electric Fire</h1>
            <img src='/illustrations/electric fire.svg' className={styles.illustration} />   
            <p className={styles.description}>Electric currents generate heat and when they get too hot it can loosen the connection causing a arc of electricity which can catch fires.</p>
            <div className={styles.chart}><PieChart/></div>
            <p className={styles.description}>Basically, electrical fires originate from high-voltage power lines or electrical appliances, and these two are the main causes of most fires.</p>
            <Image src='/imagery/fire-causes/electrical-fire.jpg' width='350' height='200'/>
            <p className={styles.description}>Water is not good for putting out electrical fires as it conducts electricity and can cause electrocution or spread the fire.</p>            
            <p className={styles.description2}>Keeping flammable materials away from outlets and cords reduces the risk of ignition due to heat generated by electrical components.</p>
            <div className={styles.buttons}>
                <Redbutton>Take the quiz</Redbutton>
                <Link href='/learningGrease'><Bluebutton>Continue to Grease Fire ⮞</Bluebutton></Link>
                
            </div>
            
          
        </main>
      </>
    )
  }