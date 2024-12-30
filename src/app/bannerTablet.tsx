import Image from 'next/image';
import BannerTabletImage from './images/banner_tablet.svg';

const BannerTablet: React.FC = () => {
  return (
    <div className="flex w-full flex-row justify-center p-8 lg:px-20">
      <Image className="w-full" src={BannerTabletImage}></Image>
    </div>
  );
};

export default BannerTablet;
