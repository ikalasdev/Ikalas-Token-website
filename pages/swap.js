import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../component/Navbar'
import Login from '../component/Login'
import { useWeb3 } from "@3rdweb/hooks"
import styles from '../styles/Home.module.css'




export default function Swap() {
    const { connectWallet, address, error } = useWeb3();
    return (

        <div>
            <main>
                <h1>
                    Exchange your tokens
                </h1>
            </main>
        </div>
    )
}