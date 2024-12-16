'use client';

import { AppDispatch, RootState } from '@/store/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopDoctors } from './topDoctorSlice';
import Image from 'next/image';
import StarIcon from './images/star.svg';
import LocationIcon from './images/location.svg';
import './style.css';

const LatestDoctor: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const { doctors, loading, error } = useSelector((state: RootState) => state.topDoctors);

  useEffect(() => {
    dispatch(fetchTopDoctors());
  }, [dispatch]);

  if (loading) return <p>در حال بارگذاری...</p>;
  if (error) return <p>خطا: {error}</p>;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full flex-row justify-between">
        <p className="text-3xl font-bold">جدیدترین پزشکان</p>
        <button className="rounded-xl bg-primary px-2 py-1 text-white">
          <p>مشاهده بیشتر</p>
        </button>
      </div>
      <div className="flex flex-row items-center xl:justify-between 2xl:justify-center 2xl:gap-28">
        {doctors.map((doctor: TopDoctorProps, index: number) => (
          <div
            className="flex flex-col items-center justify-center gap-2 rounded-3xl px-4 shadow xl:w-[200px] 2xl:w-[240px]"
            key={index}
          >
            <div className="flex w-full flex-row-reverse items-center gap-1 pt-2">
              <p>{doctor.rating}</p>
              <Image src={StarIcon} alt="Star Icon" className="h-4 w-4"></Image>
            </div>
            <Image src={doctor.imagePath} alt="Doctor" width={90} height={90}></Image>
            <p className="font-bold">{doctor.name}</p>
            <p className="">{doctor.speciality}</p>
            <div className="flex flex-row items-center justify-center">
              <Image src={LocationIcon} alt="Location Icon"></Image>
              <p className="text-primary">{doctor.location}</p>
            </div>
            <div className="flex w-full flex-row items-center justify-between px-4">
              <p>اولین نوبت خالی</p>
              <p>{doctor.first_available}</p>
            </div>
            <button className="mb-3 w-full rounded-2xl bg-primary py-2 text-white">
              <p>دریافت نوبت</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestDoctor;
