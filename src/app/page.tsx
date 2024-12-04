import BannerLanding from '@/features/bannerLanding/bannerLanding';
import BottomNavbar from '@/features/home/bottom_navbar/BottomNavbar';
import Navbar from '@/features/home/navbar/Navbar';
import Story from '@/features/home/stories/Story';

export default function Home() {
  return (
    <>
      <div className="font-regular bg-background_primary h-screen sm:hidden">
        <Navbar></Navbar>
        <BottomNavbar></BottomNavbar>
      </div>
      <div className="font-regular bg-background_primary hidden sm:block xl:hidden"></div>
      <div className="font-regular bg-background_primary hidden xl:block">
        <div className="flex flex-col">
          <Navbar></Navbar>
          <Story></Story>
          <BannerLanding></BannerLanding>
        </div>
      </div>
    </>
  );
}
