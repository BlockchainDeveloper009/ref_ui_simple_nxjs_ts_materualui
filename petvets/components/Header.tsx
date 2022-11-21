import Link from 'next/link';
import Menu from './Menu';
import { Button } from '@mui/material';

type MenuOptions = Array<{ name: string; link: string }>;
type MenuItem = { title: string; options: MenuOptions };
type MenuItemList = Array<MenuItem>;
const petsLogo = "BondBank Dapp"
const primaryBttText = "Login";
// Example menu items for dropdown menu
//https://vcahospitals.com/animal-medical-center-pasadena/everyday-care/your-visit/client-forms

const menuItemServices: MenuItem = {
  title: 'Explore Our Services',
  options: [
    {
      name: 'Advanced Care',
      link: '/advancedCare',
    },
    {
      name: 'Pet Grooming',
      link: '/petGrooming',
    },
    {
      name: 'Preventive Care',
      link: '/preventiveCare',
    },
    {
      name: 'Primary Care',
      link: '/primaryCare',
    },
  ],
};
const menuItemEverydayCare : MenuItem = {
  title: 'Advanced Care',
  options: [
    {
      name: 'Advanced Dental Care',
      link: '/',
    },
    {
      name: 'OFA X-Ray',
      link: '/bondCreatorUI',
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
const menuItems: MenuItemList = [menuItemServices, menuItemEverydayCare];

const Header = () => {
  return (
    <nav className="header">
      <h1 className="logo">{petsLogo}</h1>
      <div className="navigation">
        <Link href="/" legacyBehavior>
          <a className="navLink">Home</a>
        </Link>

        <Menu menuName="Services" menuItems={menuItems} />

        <Menu menuName="Everyday Care" menuItems={menuItems} />

        <Link href="/About" legacyBehavior>
          <a className="navLink">About Us</a>
        </Link>

        <Link href="/Team" legacyBehavior>
          <a className="navLink">Our Team</a>
        </Link>

        <Button id="primaryBttText" variant="contained"
        size="medium" href='/BookAppointment'
        >{primaryBttText}</Button>
      </div>
    </nav>
  );
};

export default Header;
