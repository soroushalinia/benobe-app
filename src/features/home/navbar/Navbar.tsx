'use client';
import Image from 'next/image';
import HamburgerIcon from '@/features/home/navbar/images/hamburger.svg';
import BenobeLogo from '@/app/images/logo.png';
import ProfileIcon from '@/features/home/navbar/images/user.svg';
import MobileProfileIcon from '@/features/home/navbar/images/profile.svg';
import '@/features/home/navbar/styles/style.css';
import Link from 'next/link';
import DoctorIcon from '@/features/home/navbar/images/doctors.svg';
import LocationsIcon from '@/features/home/navbar/images/locations.svg';
import ConsultIcon from '@/features/home/navbar/images/consult.svg';
import MagazineIcon from '@/features/home/navbar/images/magazine.svg';
import ShopIcon from '@/features/home/navbar/images/shop.svg';
import menu from './images/menu.svg';
import close from './images/close.svg';
import menudl from './images/menudl.svg';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };
  return (
    <>
      <div className="relative sm:hidden">
        <div className={`absolute right-0 top-0 z-[100] ${menuActive ? 'hidden' : 'block'}`}>
          <div className="z-50 flex h-screen w-[205px] flex-col items-center justify-between bg-[#e3f3ff] pt-10">
            <Image src={menu} alt="Menu"></Image>
            <div className="flex flex-col items-center justify-center pb-4">
              <div className="flex w-full flex-row-reverse pb-2 pl-4">
                <button onClick={toggleMenu}>
                  <Image src={close} alt="Close"></Image>
                </button>
              </div>
              <div className="w-full">
                <Image className="w-full" alt="Menu Download Button" src={menudl}></Image>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-border relative flex items-center justify-between px-3 pb-2 pt-8">
          <div className="relative">
            <button onClick={toggleMenu}>
              <Image src={HamburgerIcon} alt="Hamburger Menu Icon"></Image>
            </button>
          </div>
          <Image
            className="absolute left-1/2 h-16 w-16 -translate-x-1/2 transform"
            alt="Benobe Logo"
            src={BenobeLogo}
          ></Image>
          <button className="">
            <Image className="h-9 w-9" src={MobileProfileIcon} alt="Profile Icon"></Image>
          </button>
        </div>
      </div>
      <div className="hidden sm:block xl:hidden"></div>
      <div className="hidden xl:block">
        <div className="flex flex-row items-center justify-between border-b border-border_primary px-4 py-2 xl:px-28 xl:py-2">
          <div>
            <Image className="xl:h-24 xl:w-24" src={BenobeLogo} alt="Benobe Logo"></Image>
          </div>
          <div className="flex flex-row items-center justify-center gap-3 xl:gap-12 2xl:gap-20">
            <Link href="#" className="flex flex-row items-center justify-center text-primary">
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
            <a
              href="https://emr-benobe.ir/landing/doctors-membership"
              className="rounded-md bg-primary px-3 py-2 text-white"
            >
              <p>برای پزشکان</p>
            </a>
            <button className="flex flex-row items-center justify-center gap-[2px] rounded-md border border-black px-2 py-2">
              <Image className="xl:w-6" src={ProfileIcon} alt="Profile Icon"></Image>
              <p className="text-md">ورود / ثبت نام</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
