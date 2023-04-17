import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/learningFireCause.module.css'
import ReturnIcon from '@/components/returnIcon'

export default function LearningFireCause() {
    return (
        <>
            <Head>
                <title>Learning Fire Cause</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Link href='/learning'><ReturnIcon/></Link>
            <main className={styles.main}>
                <h3>Most common fire causes</h3>
                <div className={styles.gridof6img}>
                    <div className={styles.eachimg}>
                        <Image src='/imagery/fire-causes/cooking-fire.png' width='150' height='90' style={{borderRadius: 10}}/>
                        <p>cooking fire</p>
                    </div>

                    <div className={styles.eachimg}>
                        <Image src='/imagery/fire-causes/electrical-fire.jpg' width='150' height='90' style={{borderRadius: 10}} />
                        <p>electrical fire</p>
                    </div>

                    <div className={styles.eachimg}>
                        <Image src='/imagery/fire-causes/smoke-fire.jpg' width='150' height='90' style={{borderRadius: 10}}/>
                        <p>smoking fire</p>
                    </div>

                    <div className={styles.eachimg}>
                        <Image src='/imagery/fire-causes/candles-fire.png' width='150' height='90' style={{borderRadius: 10}}/>
                        <p>fire from candles</p>
                    </div>

                    <div className={styles.eachimg}>
                        <Image src='/imagery/fire-causes/kid-with-fire.jpg' width='150' height='90' style={{borderRadius: 10}}/>
                        <p>children fire playing </p>
                    </div>

                    <div className={styles.eachimg}>
                        <Image src='/imagery/fire-causes/camp-fire.jpg' width='150' height='90' style={{borderRadius: 10}}/>
                        <p>camping fire</p>
                    </div>
                </div>

                <div>
                    <h3>Do you know?</h3>
                    <Image src='/imagery/fire-causes/top fire causes.jpg' width='300' height='300' style={{borderRadius: 15}} />
                </div>

            </main>
        </>
    )
}

