import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {pet1,pet,p2} from '../public/Image/albums'

import BodyPage from './BodyPage'

export default function Home() {
  return (
    <div className={styles.container}>
      
    <div>
            
        <BodyPage />
      </div>  
    </div>
    
  )
}
