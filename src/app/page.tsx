import BottomNavbar from '@/features/home/bottom_navbar/BottomNavbar';
import Navbar from '@/features/home/navbar/Navbar';

export default function Home() {
  return (
    <>
      <div className="font-regular bg-background_primary h-screen sm:hidden">
        <Navbar></Navbar>
        <BottomNavbar></BottomNavbar>
      </div>
      <div className="font-regular bg-background_primary hidden sm:block lg:hidden"></div>
      <div className="font-regular bg-background_primary hidden lg:block">
        <div className="flex flex-col">
          <Navbar></Navbar>
        </div>
      </div>
    </>
  );
}
