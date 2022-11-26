import {ad1} from '../../public/Image/albums';
import Image from 'next/image'
const pageHeader = "PrimaryCare";
const AdvancedDentalCare = () => {
    return (
      <div>
        <h1>{pageHeader}</h1>
        <main>
        
          <section id="0">
          <Image alt="Image of a suggested globe in flat gradient layers."  src={ad1} layout="fill"
          objectFit="cover"></Image>
          </section>
          <section id="1">
  
  
          </section>
  
  
        </main>
      </div>
      );
    };
    
    export default AdvancedDentalCare;
    