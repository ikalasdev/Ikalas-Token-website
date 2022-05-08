import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../component/Navbar'

import styles from '../styles/Home.module.css'




export default function News() {
    
return (
    
    <div className={styles.container}>
        <Head>
            <title>Kik token</title>
            <meta name="description" content="Generated by create next app" />
            <link rel = "icon" href = "https://ikalas.com/logo.png" type = "image/x-icon" />
        </Head>
        <main className={styles.main}>
            <h1 className={styles.title}>
                News about the platform
            </h1>
            <div className={styles.news}>
                <ul>
                    <li>05/05/2022 - Début de création du site vitrine KiK token</li>
                    <li>05/05/2022 - Début de création du site vitrine KiK token</li>
                    <li>05/05/2022 - Début de création du site vitrine KiK token</li>
                    <li>05/05/2022 - Début de création du site vitrine KiK token</li>
                </ul>
            </div>
        </main>
    </div>
    )
}
