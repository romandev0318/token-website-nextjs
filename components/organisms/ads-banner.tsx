import styled from 'styled-components';
import { NormalButton, SectionWrapper } from '../../theme';
import Image from 'next/image';
import Link from 'next/link';

const Wrapper = styled.div`
  height: 250px;
  padding: 33px;
  gap: 64px;
  border-radius: 48px;
  border: 1px solid #202740;
  background:
    linear-gradient(0deg, rgba(26, 31, 46, 0.64) 0%, rgba(26, 31, 46, 0.64) 100%),
    url('/images/magazine.png'),
    lightgray 0px -126.329px / 100% 233.075% no-repeat;
  background-size: cover;
  background-position: center;

  .middle-text {
    text-shadow: 7px 25px 25px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 1024px) {
    height: auto;
    flex-direction: column;
    gap: 24px;
    padding: 16px;
  }
`;

export const AdsBanner = () => {
  return (
    <SectionWrapper className="w-full">
      <Link target="_blank" className="w-full" href="https://www.shib.io/contactus">
        <Wrapper className="relative flex w-full items-center justify-center gap-[64px]">
          <Image alt="logo1" width={137} height={135} src={'/images/cursor-shib-logo.svg'} />

          <p className="middle-text text-[40px] font-bold leading-[48px] mobile:text-[25px]">
            REACH THOUSANDS OF <br />{' '}
            <span className="text-[40px] font-bold text-[#FF7A1C] mobile:text-[25px]">
              {' '}
              MONTHLY USERS{' '}
            </span>
            <br /> WITH OUR MAGAZINE
          </p>

          <div className="flex flex-col items-center justify-center gap-[24px]">
            <Image alt="logo2" width={200} height={38} src={'/images/theshib-logo.svg'} />

            <NormalButton>
              Ad Enquiry
              <Image alt="arrow-right" width={24} height={24} src={'/icons/arrow-right.svg'} />
            </NormalButton>
          </div>
        </Wrapper>
      </Link>
    </SectionWrapper>
  );
};

export default AdsBanner;
