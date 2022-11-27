import Link from 'next/link';
import Menu from './Menu';
import { Button } from '@mui/material';
import Router from 'next/router';
import OfaXray from './Services/OfaXray';
import { FaMapMarker } from "react-icons/fa"; 
import About from "../pages/About";
import ContactUs  from "../pages/ContactUs";

type MenuOptions = Array<{ name: string; link: any }>;
type MenuItem = { title: string; options: MenuOptions };
type MenuItemList = Array<MenuItem>;
const petsLogo = "BondBank Dapp"
const primaryBttText = "Login";
const Directions = "https://www.google.com/maps/place/Self+Realization+Fellowship/@29.8184586,-95.4244589,15z/data=!4m2!3m1!1s0x0:0x762e953df86dd134?sa=X&ved=2ahUKEwiv6LPz1Mn7AhXGkmoFHXxpAakQ_BJ6BAhlEAg";
const DirectionsText = "3425 Golf Dr, Houston, TX 77018";
// Example menu items for dropdown menu
//https://vcahospitals.com/animal-medical-center-pasadena/everyday-care/your-visit/client-forms
const rout = () => {
  Router.push('/OfaXray');
}
const menuItemServices: MenuItem = {
  title: 'Explore Our Services',
  options: [
    {
      name: 'Advanced Care',
      link: '/Services/AdvancedCare',
    },
    {
      name: 'Pet Grooming',
      link: '/petGrooming',
    },
    {
      name: 'Preventive Care',
      link: '/PreventiveCare',
    },
    {
      name: 'Primary Care',
      link: '/Services/PrimaryCare',
    },
  ],
};
const menuItemEverydayCare : MenuItem = {
  title: 'Advanced Care',
  options: [
    {
      name: 'Advanced Dental Care',
      link: '/Services/AdvancedDentalCare',
    },
    {
      name: 'OFA X-Ray',
      //link: {rout},
      link: './components/Services/OfaXray',
    },
    {
      name: 'BEchocardiography',
      link: '/manageBondsUI',
    },
    {
      name: 'Ultrasound',
      link: '/manageBondsUI',
    },
  ],
};
const menuItemsServices: MenuItemList = [menuItemServices];
//const menuItemsServices: MenuItemList = [menuItemServices, menuItemEverydayCare ];
const menuItemsEverydayCare: MenuItemList = [menuItemEverydayCare];

const Header = () => {
  return (
    <nav className="header">
      <h1 className="logo">{petsLogo}</h1>
      <div className="navigation">
        <Link href="/" legacyBehavior>
          <a className="navLink">Home</a>
        </Link>

        <Menu menuName="Services" menuItems={menuItemsServices} />

        <Menu menuName="Everyday Care" menuItems={menuItemsEverydayCare} />

        <Link href="/Team" legacyBehavior>
          <a className="navLink">Our Team</a>
        </Link>


        <Link href="/About" legacyBehavior>
          <a className="navLink">About Us</a>
        </Link>

       
        <Link href="/ContactUs" legacyBehavior>
          <a className="navLink">Contact Us</a>
        </Link>

        <Link href={Directions} legacyBehavior>
            
          <a className="navLink" target="_blank"><FaMapMarker />{DirectionsText}</a>
        </Link>

        <Button id="primaryBttText" variant="contained"
        size="medium" href='/BookAppointment'
        >Book</Button>
        <br></br>
         <Button id="primaryBttText" variant="contained"
        size="medium" href='/Login'
        >{primaryBttText}</Button>
      </div>
      
    </nav>
  );
};

export default Header;
