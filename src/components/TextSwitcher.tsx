'use client';

import { useState, useEffect } from 'react';

interface TextSwitcherProps {
  texts: string[];
  interval?: number;
}

const TextSwitcher: React.FC<TextSwitcherProps> = ({ texts, interval = 1500 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeState, setFadeState] = useState<'fadeIn' | 'fadeOut'>('fadeIn');

  useEffect(() => {
    const switchText = setInterval(() => {
      setFadeState('fadeOut');
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setFadeState('fadeIn');
      }, 300);
    }, interval);

    return () => clearInterval(switchText);
  }, [texts.length, interval]);

  return (
    <div className="flex flex-row items-center justify-center gap-4 text-lg text-white xl:text-3xl">
      <p>نام</p>
      <div
        className={`font-bold text-primary transition-opacity duration-300 ${fadeState === 'fadeIn' ? 'animate-fadeIn' : 'animate-fadeOut'}`}
      >
        {texts[currentIndex]}
      </div>
      <p>را جستجو کنید</p>
    </div>
  );
};

export default TextSwitcher;