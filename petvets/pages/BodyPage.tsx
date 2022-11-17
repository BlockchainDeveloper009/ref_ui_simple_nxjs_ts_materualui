import Image from 'next/image'

import {pet1,pet,p2} from '../public/Image/albums'

const BodyPage = () => {
    return (
       <div>
         <main>
        <section id="0">
        {/* <Image alt="Image of a suggested globe in flat gradient layers."  src="/p2.png" layout="fill"
        objectFit="cover"></Image> */}
        </section>
        <section id="1">
          {/* <span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"></span>
          <span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"></span> */}
           {/* <img alt="Image of a suggested globe in flat gradient layers." src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Findex_decentralized.b0fa2b97.png&amp;w=3840&amp;q=75" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Findex_decentralized.b0fa2b97.png&amp;w=3840&amp;q=75 1x"> */}
          {/* <Image alt="Image of a suggested globe in flat gradient layers." src={pet1}&amp;w=3840&amp;q=75" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Findex_decentralized.b0fa2b97.png&amp;w=3840&amp;q=75 1x"></Image> */}
          {/* <Image alt="" width="200" height="200" src={pet1}></Image> */}

        </section>
        <section id="2">
        {/* <img alt="Image of a suggested globe in flat gradient layers." src="./pet1.jpg"></img> */}
        <Image  width="800" height="600" src={pet1} alt=""></Image>
        <span>I will fill some details for tseting and a good dev is working everyday towards the goal</span>
        </section>

        <section id="3">
        {/* <img alt="Image of a suggested globe in flat gradient layers." src="./pet1.jpg"></img> */}
        <Image  width="200" height="200" src={p2} alt=""/>
        </section>

      </main>
       </div>
    )
}
export default BodyPage;