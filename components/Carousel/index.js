import Image from "next/image"
import { useEffect, useState } from "react"
import styles from './Carousel.module.css'
import { pagename } from '../../data/pagename.js'

export default function Carousel() {
    const [position, setPosition] = useState(0);
    const [wordImage, setWordImage] = useState(pagename[position]?.value)

    useEffect(() => {
        if (position < 6 && position >= 0) {
            setWordImage(pagename[position].value)
        } else if (position == -1) {
            setPosition(5);
            setWordImage(pagename[5].value)
        } else {
            setPosition(0);
            setWordImage(pagename[0].value)
        }

    }, [position])

    return (
        <>

            <div className={styles.textOnImage}>
                {wordImage}
            </div>

            <div className={styles.outerCarousel}>
                <div className={styles.carouselImg}
                    style={{
                        backgroundImage: "url(/pages-display/" + position + ".png)",
                    }}>

                    <div className={styles.middleImage}>
                        <div className={styles.leftcenter}>
                            <Image
                                src={"/icons/leftArrow.png"}
                                alt={"leftArrow"}
                                width={30}
                                height={30}
                                onClick={() => setPosition(position - 1)}
                            />
                        </div>

                        <div className={styles.rightcenter}>
                            <Image
                                src={"/icons/rightArrow.png"}
                                alt={"rightArrow"}
                                width={30}
                                height={30}
                                onClick={() => setPosition(position + 1)}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}