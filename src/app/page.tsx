import BannerLanding from '@/features/bannerLanding/bannerLanding';
import BottomNavbar from '@/features/home/bottom_navbar/BottomNavbar';
import Navbar from '@/features/home/navbar/Navbar';
import Story from '@/features/home/stories/Story';
import Landing from '@/features/home/landing/Landing';
import Footer from '@/features/home/footer/Footer';
import MobileBanner from '@/app/images/banner.svg';
import Stat from '@/app/images/stats.svg';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="font-regular h-screen bg-background_primary sm:hidden">
        <Navbar></Navbar>
        <BottomNavbar></BottomNavbar>
        <Story></Story>
        <BannerLanding></BannerLanding>
        <div className="flex flex-col items-center bg-[#f6fbff] py-4">
          <Image src={Stat} alt="Statistics"></Image>
          <div className="relative">
            <Image src={MobileBanner} alt="Mobile Banner"></Image>
            <div className="pointer-events-auto absolute inset-0 bg-transparent"></div>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <div className="font-regular hidden bg-background_primary sm:block xl:hidden"></div>
      <div className="font-regular hidden bg-background_primary xl:block">
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
