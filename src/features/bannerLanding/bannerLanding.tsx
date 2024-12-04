import Image from 'next/image';
import BannerImage from './images/banner.png';
import TextSwitcher from '@/components/TextSwitcher';
import SearchIcon from '@/features/bannerLanding/images/search.svg';
import DropdownIcon from '@/features/bannerLanding/images/dropdown.svg';

import UserIcon from '@/features/bannerLanding/images/usersLanding.svg';
import LabIcon from '@/features/bannerLanding/images/labLanding.svg';
import HospitalIcon from '@/features/bannerLanding/images/hospitalLanding.svg';
import DoctorIcon from '@/features/bannerLanding/images/doctor.svg';

const BannerLanding: React.FC = () => {
  return (
    <div className="z-0">
      <div className="relative z-10">
        <div className="bg-primary/[.3] absolute z-20 flex h-full w-full flex-col items-center justify-center gap-8 py-10 text-white">
          <p className="text-4xl font-bold">به‌نوبه: سامانه جامع خدمات آنلاین پزشکی و درمانی</p>
          <TextSwitcher texts={['پزشک', 'بیمارستان', 'کلینیک', 'تخصص']} />
          <div className="flex flex-row items-center justify-between rounded-2xl bg-white px-3 py-4">
            <div className="flex flex-row items-center justify-center gap-2 border-l-2 px-2">
              <p className="text-lg text-primary">انتخاب شهر</p>
              <Image className="h-4 w-4" src={DropdownIcon} width={14} height={14} alt="Dropdown" />
            </div>
            <div className="w-[400px] text-gray-500 px-2 text-lg">
              <input className="w-full focus:outline-none" placeholder="جست و جو ..." />
            </div>
            <div className="rounded-lg bg-primary p-3">
              <Image className="h-5 w-5" src={SearchIcon} alt="Search" />
            </div>
          </div>
        </div>
        <Image className="z-0" src={BannerImage} alt="Banner" />
      </div>

      <div className="relative z-50 mt-5 flex w-full justify-center xl:-mt-16 2xl:-mt-20">
        <div className="flex flex-row items-center justify-center rounded-2xl bg-white shadow-xl px-2 py-6">
          <div className="flex flex-col items-center justify-center gap-2 border-l-2 border-dashed text-black px-16">
            <Image className="w-16" src={UserIcon} alt="User Icon" />
            <p className="font-bold text-2xl">۳۰۰,۰۰۰+</p>
            <p className="text-[16px]">کاربر فعال</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 border-l-2 border-dashed text-black px-16">
            <Image className="w-16" src={LabIcon} alt="Lab Icon" />
            <p className="font-bold text-2xl">۵۰۰+</p>
            <p className="text-[16px]">آزمایشگاه ثبت شده</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 border-l-2 border-dashed text-black px-16">
            <Image className="w-16" src={HospitalIcon} alt="Hospital Icon" />
            <p className="font-bold text-2xl">۲۰۰+</p>
            <p className="text-[16px]">بیمارستان ثبت شده</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 text-black px-16">
            <Image className="w-16" src={DoctorIcon} alt="Doctor Icon" />
            <p className="font-bold text-2xl">۶,۵۰۰+</p>
            <p className="text-[16px]">دکتر ثبت شده</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerLanding;
