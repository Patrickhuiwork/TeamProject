import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/learning3FireType.module.css';
import ReturnIcon from '@/components/returnIcon';
import Learnbutton from '@/components/Learnbutton';
import Button from '@/components/Button';
import Redbutton from '@/components/Redbutton';
import PieChartForElectric from '@/components/pieChartForElectric';
import { useState, useEffect, useRef } from 'react';

import LearnmoreButtonv2 from '@/components/LearnmoreButtonv2';

export default function LearningElectric() {
  const [accordion, setAccordion] = useState(false);

  const toggleAccordion = () => setAccordion(!accordion);

  const accordionRef = useRef(null);

  useEffect(() => {
    const handleClickOutsideAccordion = (event) => {
      if (
        accordionRef.current &&
        !accordionRef.current.contains(event.target) &&
        accordion
      ) {
        toggleAccordion();
      }
    };

    document.addEventListener('click', handleClickOutsideAccordion);

    return () => {
      document.removeEventListener('click', handleClickOutsideAccordion);
    };
  }, [accordionRef, accordion]);

  return (
    <>
      <Head>
        <title>Learning about Electric Fire</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/learning">
        <ReturnIcon />
      </Link>

      <main className={styles.main}>
        <div className={styles.box}>
          <h1>Learn about Electric Fire</h1>
          <img
            src="/illustrations/electric fire.svg"
            className={styles.illustration}
          />
          <p>
            An electrical fire is a type of fire that is caused by an electrical
            fault or malfunction. Electrical fires can occur when electrical
            wiring, appliances, or equipment become overheated or overloaded and
            generate heat that ignites surrounding materials, such as flammable
            insulation or combustible objects. Common causes of electrical fires
            include faulty wiring, overloaded circuits, damaged electrical cords
            or plugs, and improper use of electrical equipment. Electrical
            fires can be very dangerous and can spread quickly, so it's
            important to take precautions to prevent them from occurring and to
            know how to respond in case of an emergency.{' '}
          </p>

          <PieChartForElectric />

          <div className={styles.resourcescontainer} ref={accordionRef}>
            <LearnmoreButtonv2 onClick={toggleAccordion}>
              What to Do In Case of a Electrical Fire
            </LearnmoreButtonv2>
            {accordion && (
              <div className={styles.panel}>
                <ol>
                  <li>
                    Turn off the power source: The first and most important step
                    in dealing with an electrical fire is to turn off the power
                    source to eliminate the source of the fire. This will help
                    prevent the fire from spreading and minimize the risk of
                    electrocution.
                  </li>
                  <li>
                    Use a fire extinguisher: Once you have turned off the power source, you can try to put out the flames with a fire extinguisher. It's important to use a fire extinguisher that is rated for electrical fires, as this type of extinguisher will not conduct electricity and can safely put out the fire. 
                    </li>
                    <li>
                    Do not use water: Never use water to put out an electrical fire, as water can conduct electricity and spread the flames. Instead, use a fire extinguisher or another non-conductive substance, such as baking soda or sand, to smother the fire. 
                    </li>
                    <li>
                    Evacuate the building and call the fire department: If the fire is too large or the flames cannot be extinguished quickly, evacuate the building immediately and call the fire department.
                    </li>
                  </ol>
                 
                </div>
              )}
            </div>

            <p>
            Remember, electrical fires can be extremely dangerous and destructive, so it's important to take precautions to prevent them from occurring in the first place. However, if an electrical fire does occur, following these steps can help keep you and others safe and minimize the damage caused by the fire. 
            </p>
          
            <div className={styles.buttons}>
                <Link href='/Quiz1'>
                  <Redbutton>Take the quiz</Redbutton>
                </Link>
                <Link href='/learningGrease'><Learnbutton>Continue to Grease Fire ⮞</Learnbutton></Link>
                
            </div>
          </div>  
            
          
        </main>
      </>
    )
  }