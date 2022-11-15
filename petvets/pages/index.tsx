import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
    <div>
    <main>
        <section id="0">
        <img alt="Image of a suggested globe in flat gradient layers." src="../public/images/pet1.jpg"></img>
        </section>
        <section id="1">
          {/* <span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"></span>
          <span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"></span> */}
           {/* <img alt="Image of a suggested globe in flat gradient layers." src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Findex_decentralized.b0fa2b97.png&amp;w=3840&amp;q=75" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Findex_decentralized.b0fa2b97.png&amp;w=3840&amp;q=75 1x"> */}
          <img alt="Image of a suggested globe in flat gradient layers." src="/public/images/pet1.jpg&amp;w=3840&amp;q=75" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Findex_decentralized.b0fa2b97.png&amp;w=3840&amp;q=75 1x"></img>
        </section>
        <section id="2">
        <img alt="Image of a suggested globe in flat gradient layers." src="./pet1.jpg"></img>
        </section>

      </main>
      
      </div>  
    </div>
    
  )
}
