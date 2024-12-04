import Image from 'next/image';
import HamburgerIcon from '@/features/home/navbar/images/hamburger.svg';
import BenobeLogo from '@/app/images/logo.png';
import ProfileIcon from '@/features/home/navbar/images/user.svg';
import '@/features/home/navbar/styles/style.css';
import Link from 'next/link';
import DoctorIcon from '@/features/home/navbar/images/doctors.svg';
import LocationsIcon from '@/features/home/navbar/images/locations.svg';
import ConsultIcon from '@/features/home/navbar/images/consult.svg';
import MagazineIcon from '@/features/home/navbar/images/magazine.svg';
import ShopIcon from '@/features/home/navbar/images/shop.svg';

const Navbar: React.FC = () => {
  return (
    <>
      <div className="sm:hidden">
        <div className="nav-border relative flex items-center justify-between px-3 pb-2 pt-8">
          <Image src={HamburgerIcon} alt="Hamburger Menu Icon"></Image>
          <Image
            className="absolute left-1/2 h-16 w-16 -translate-x-1/2 transform"
            alt="Benobe Logo"
            src={BenobeLogo}
          ></Image>
          <button className="flex flex-row items-center justify-center gap-[2px] rounded-md border-[1px] border-black py-1 pl-1 pr-[2px]">
            <Image className="w-4" src={ProfileIcon} alt="Profile Icon"></Image>
            <p className="text-xs">ورود / ثبت نام</p>
          </button>
        </div>
      </div>
      <div className="hidden sm:block lg:hidden"></div>
      <div className="hidden lg:block">
        <div className="flex flex-row items-center justify-between px-4 py-2 xl:px-8 xl:py-4">
          <div>
            <Image
              className="h-20 w-20 xl:h-28 xl:w-28 2xl:h-32 2xl:w-32"
              src={BenobeLogo}
              alt="Benobe Logo"
            ></Image>
          </div>
          <div className="flex flex-row items-center justify-center gap-3 xl:gap-8 2xl:gap-16">
            <Link href="#" className="flex flex-row items-center justify-center">
              <p>صفحه اصلی</p>
            </Link>
            <Link href="#" className="flex flex-row items-center justify-center gap-2 xl:gap-3">
              <Image src={DoctorIcon} alt="Doctor Icon"></Image>
              <p>لیست پزشکان</p>
            </Link>
            <Link href="#" className="flex flex-row items-center justify-center gap-2 xl:gap-3">
              <Image src={LocationsIcon} alt="Locations Icon"></Image>
              <p>مراکز درمانی</p>
            </Link>
            <Link href="#" className="flex flex-row items-center justify-center gap-2 xl:gap-3">
              <Image src={ConsultIcon} alt="Consult Icon"></Image>
              <p>مشاوره آنلاین</p>
            </Link>
            <Link href="#" className="flex flex-row items-center justify-center gap-2 xl:gap-3">
              <Image src={MagazineIcon} alt="Magazine Icon"></Image>
              <p>مجله سلامت</p>
            </Link>
            <Link href="#" className="flex flex-row items-center justify-center gap-2 xl:gap-3">
              <Image src={ShopIcon} alt="Shop Icon"></Image>
              <p>فروشگاه</p>
            </Link>
          </div>
          <div className="flex flex-row items-center justify-center gap-2">
            <button className="rounded-md bg-[#2E86C1] px-3 py-2 text-white">
              <p>برای پزشکان</p>
            </button>
            <button className="flex flex-row items-center justify-center gap-[2px] rounded-md border border-black px-2 py-2">
              <Image className="w-4 xl:w-6" src={ProfileIcon} alt="Profile Icon"></Image>
              <p className="text-md">ورود / ثبت نام</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
