// import Cards from '@/features/doctor/Cards';
import BottomNavbar from '@/features/home/bottom_navbar/BottomNavbar';
import NavbarAlt from '@/features/home/navbar/NavbarAlt';
import Reviews from './images/reviews.svg';
import Profile from './images/profile.svg';
import Reserve from './images/reserve.svg';

import Image from 'next/image';
import Footer from '@/features/home/footer/Footer';
import Tablet from './images/profile_tablet.svg';
import footer from '../../../features/home/footer/images/tablet.svg';
import navlogo from './images/navlogo.svg';

const DoctorProfile: React.FC = () => {
  return (
    <>
      <div className="font-yekanBakh bg-background_primary sm:hidden">
        <NavbarAlt></NavbarAlt>
        {/* <Cards></Cards> */}
        <div className="p-4">
          <Image src={Profile} alt="Reviews"></Image>
          <Image src={Reserve} alt="Reviews"></Image>
          <Image src={Reviews} alt="Reviews"></Image>
        </div>
        <BottomNavbar></BottomNavbar>
        <Footer></Footer>
      </div>
      <div className="font-yekanBakh relative hidden bg-background_primary sm:block lg:hidden">
        <div className="w-full px-6 pb-4 pt-2 shadow-xl">
          <Image className="w-full" src={navlogo}></Image>
        </div>
        <br />
        <br />
        <div className="flex flex-row justify-center px-8">
          <Image className="w-full" src={Tablet}></Image>
        </div>
        <div className="mt-10 bg-[#84CAF94D] px-20 pb-10 pt-5 lg:px-40">
          <Image src={footer} className="w-full"></Image>
        </div>
        <div className="absolute inset-0 select-none bg-transparent" />
      </div>
      <div className="font-yekanBakh relative hidden bg-background_primary lg:block xl:hidden">
        <div className="w-full px-6 pb-4 pt-2 shadow-xl">
          <Image className="w-full" src={navlogo}></Image>
        </div>
        <br />
        <br />
        <div className="flex flex-row justify-center px-8">
          <Image className="w-full" src={Tablet}></Image>
        </div>
        <div className="mt-10 bg-[#84CAF94D] px-20 pb-10 pt-5 lg:px-40">
          <Image src={footer} className="w-full"></Image>
        </div>

        <div className="absolute inset-0 select-none bg-transparent" />
      </div>
      <div className="font-yekanBakh hidden bg-background_primary xl:block">
        <div className="flex flex-col">
          <NavbarAlt></NavbarAlt>
          {/* <Cards></Cards> */}
          <div className="p-4">
            <div className="flex flex-row items-center justify-center gap-8">
              <Image src={Profile} alt="Reviews"></Image>
              <Image src={Reserve} alt="Reviews"></Image>
            </div>
            <br />
            <br />
            <div className="flex w-full flex-row items-center justify-center">
              <Image src={Reviews} alt="Reviews"></Image>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default DoctorProfile;
