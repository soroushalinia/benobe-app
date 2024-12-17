import Image from 'next/image';
import ShapeVector from './images/shape.svg';

const Reviews: React.FC = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex w-full flex-row justify-between">
        <p className="text-3xl font-bold">نظرات کاربران</p>
        <button className="rounded-xl bg-primary px-2 py-1 text-white">
          <p>مشاهده بیشتر</p>
        </button>
      </div>
      <div className="w-full">
        <div className="relative">
          <Image className="w-full" src={ShapeVector} alt="Shape vector"></Image>
          <div className="pointer-events-auto absolute inset-0 bg-transparent"></div>
        </div>
      </div>
      {/* <div className="relative">
        <div className="z-20">
          <Image src="/reviews/image1.png" alt="Profile" width={60} height={60}></Image>
        </div>
        <Image className="absolute top-0 w-[280px]" src={ShapeVector} alt="Shape Vector"></Image>
      </div> */}
    </div>
  );
};

export default Reviews;
