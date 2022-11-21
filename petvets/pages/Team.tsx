import Image from 'next/image'

import {pet1,pet,p2} from '../public/Image/albums'

const dr1Profile  ="This is our fun and knowledgeable receptionist, Courtney. " + 
"She is originally from Louisiana and currently resides in Kingwood with her fiance and 5 kids. "+
"She also has one adorable dog named Costa. Courtney has worked in the veterinary field for 10+years working "+
"everything from kennel to assistant to reception. In her spare time,she enjoys fishing, disc golf, and wandering "+
" the town playing Pokemon Go! Courtney is excited to visit with our pets and their respective owners during every visit to our clinic."

const Team = () => {
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
        <Image  width="200" height="200" src={pet1} alt=""></Image>
        
        </section>
        <section>
        <p>I will fill some details for tseting and a good dev is working everyday towards the goal</p>
        </section>

        <section id="3">
        {/* <img alt="Image of a suggested globe in flat gradient layers." src="./pet1.jpg"></img> */}
        <Image  width="200" height="200" src={p2} alt=""/>
        </section>
        <section>
        <div>
            <p>{dr1Profile}</p>
        </div>
        </section>
      </main>
       </div>
    )
}
export default Team;