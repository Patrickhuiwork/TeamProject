import Head from 'next/head'
import styles from './ReturnIcon.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function ReturnIcon() {

  return (
    <>
      <main className={styles.icon}>
       <Image src='/icons/backButton.svg' width='25' height='25'/>
      </main>
    </>
  )
}



