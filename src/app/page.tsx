import BannerLanding from '@/features/bannerLanding/bannerLanding';
import BottomNavbar from '@/features/home/bottom_navbar/BottomNavbar';
import Navbar from '@/features/home/navbar/Navbar';
import Story from '@/features/home/stories/Story';
import Landing from '@/features/home/landing/Landing';
import Footer from '@/features/home/footer/Footer';
import Stat from '@/app/images/stats.svg';
import Image from 'next/image';
import MobileLanding from '@/features/home/mobile_landing/MobileLanding';
// import TabletLanding from './images/tablet_landing.svg';
import story1 from './images/story1.svg';
import story2 from './images/story2.svg';
import Navlogo from './images/navlogo.svg';
import BannerTablet from './bannerTablet';
import footer from '../features/home/footer/images/tablet.svg';

export default function Home() {
  return (
    <>
      <div className="font-yekanBakh bg-background_primary sm:hidden">
        <Navbar></Navbar>
        <BottomNavbar></BottomNavbar>
        <Story></Story>
        <BannerLanding></BannerLanding>

        <div className="flex flex-col items-center bg-[#f6fbff] py-4">
          <Image src={Stat} alt="Statistics"></Image>
        </div>
        <MobileLanding></MobileLanding>
        <Footer></Footer>
      </div>
      <div className="font-yekanBakh hidden bg-background_primary sm:block lg:hidden">
        {/* <p>tbalet small</p> */}
        <Navbar></Navbar>
        <div className="relative flex w-full flex-row justify-center px-8 pt-4">
          <Image className="w-full" src={Navlogo} alt="Navlogo"></Image>
          <div className="absolute inset-0 select-none bg-transparent" />
        </div>
        <div className="relative flex w-full flex-col items-center justify-center">
          <Image className="w-full py-2" src={story1}></Image>
          <br />
          <br />
          <Image className="w-full px-10" src={story2}></Image>
          <BannerTablet></BannerTablet>
          <br />
          <br />
          <div className="mt-10 bg-[#84CAF94D] px-20 pb-10 pt-5 lg:px-40">
            <Image src={footer} className="w-full"></Image>
          </div>
          <div className="absolute inset-0 select-none bg-transparent" />
        </div>
      </div>
      <div className="font-yekanBakh hidden bg-background_primary lg:block xl:hidden">
        <Navbar></Navbar>
        <div className="relative flex w-full flex-row justify-center px-12 pt-6">
          <Image className="w-full" src={Navlogo} alt="Navlogo"></Image>
          <div className="absolute inset-0 select-none bg-transparent" />
        </div>
        <div className="relative flex w-full flex-col items-center justify-center">
          <Image className="w-full py-3 pr-8" src={story1}></Image>
          <br />
          <Image className="w-full p-10 lg:p-20" src={story2}></Image>
          <BannerTablet></BannerTablet>
          <br />
          <div className="mt-10 bg-[#84CAF94D] px-20 pb-10 pt-5 lg:px-40">
            <Image src={footer} className="w-full"></Image>
          </div>
          <div className="absolute inset-0 select-none bg-transparent" />
        </div>
      </div>
      <div className="font-yekanBakh hidden bg-background_primary xl:block">
        <div className="flex flex-col">
          <Navbar></Navbar>
          <Story></Story>
          <BannerLanding></BannerLanding>
          <Landing></Landing>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}
