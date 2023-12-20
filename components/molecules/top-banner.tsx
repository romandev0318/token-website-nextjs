import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: linear-gradient(90deg, #ff7a1c 0%, #3b82f6 30%, #ed4560 67%, #0aa663 100%);
  font-size: 16px;
  font-weight: 300;
  transition: all 0.3s;
`;

const ReadBtn = styled.div`
  font-weight: 600;
`;

const CloseBtn = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export const TopBanner = () => {
  const [active, setActive] = useState(true);

  const onClose = () => {
    setActive(prev => !prev);
  };

  return (
    <Wrapper
      className={`relative flex ${
        !active ? `h-0 opacity-0` : `h-[48px]`
      } w-full items-center justify-center`}
    >
      <div className="w-full max-w-[1780px] px-8 mobile:px-2">
        <div className="relative flex items-center justify-center gap-2 mobile:flex-col mobile:gap-0">
          Latest edition of The Shib Magazine
          <Link href={'http://news.shib.io/'} target="_blank">
            <ReadBtn className="flex items-center justify-center gap-2">
              Read Now
              <Image alt="arrow-right" width={24} height={24} src={'/icons/arrow-right.svg'} />
            </ReadBtn>
          </Link>
          <CloseBtn className="flex items-center justify-center" onClick={onClose}>
            <Image alt="close" width={24} height={24} src={'/icons/close-filled-circle.svg'} />
          </CloseBtn>
        </div>
      </div>
    </Wrapper>
  );
};

export default TopBanner;
