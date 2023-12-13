import Image from 'next/image';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: linear-gradient(90deg, #ff7a1c 0%, #3b82f6 30%, #ed4560 67%, #0aa663 100%);
  min-height: 48px;
  font-size: 16px;
  font-weight: 300;
`;

const ReadBtn = styled.div`
  font-weight: 600;
`;

const CloseBtn = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export const TopBanner = () => {
  return (
    <Wrapper className="relative flex w-full items-center justify-center">
      <div className="w-full max-w-[1920px] px-[78px] py-[12px]">
        <div className="relative flex items-center justify-center gap-2">
          Latest edition of The Shib Magazine
          <ReadBtn className="flex items-center justify-center gap-2">
            Read Now
            <Image alt="arrow-right" width={24} height={24} src={'/icons/arrow-right.svg'} />
          </ReadBtn>
          <CloseBtn className="flex items-center justify-center">
            <Image alt="close" width={24} height={24} src={'/icons/close-filled-circle.svg'} />
          </CloseBtn>
        </div>
      </div>
    </Wrapper>
  );
};

export default TopBanner;
