import Image from 'next/image';
import { NormalButton, SectionWrapper } from '../../theme';
import styled from 'styled-components';
import Link from 'next/link';

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
`;

export const MagazineSection = () => {
  return (
    <SectionWrapper className="flex w-full flex-col items-center justify-center gap-[58px]">
      <div className="w-full text-center text-[40px] font-bold md:text-left">
        Latest Magazine Editions
      </div>

      <div className="flex w-full flex-wrap items-center justify-center">
        <ImageWrapper className="w-1/2 mobile:w-full md:w-1/4">
          <Image
            alt="pic"
            src={'/images/magazine/1.png'}
            width={428}
            height={558}
            objectFit="contain"
            className="w-full max-w-[95%]"
          />
        </ImageWrapper>

        <ImageWrapper className="w-1/2 mobile:w-full md:w-1/4">
          <Image
            alt="pic"
            src={'/images/magazine/2.png'}
            width={428}
            height={558}
            objectFit="contain"
            className="w-full max-w-[95%]"
          />
        </ImageWrapper>

        <ImageWrapper className="w-1/2 mobile:w-full md:w-1/4">
          <Image
            alt="pic"
            src={'/images/magazine/3.png'}
            width={428}
            height={558}
            objectFit="contain"
            className="w-full max-w-[95%]"
          />
        </ImageWrapper>

        <ImageWrapper className="w-1/2 mobile:w-full md:w-1/4">
          <Image
            alt="pic"
            src={'/images/magazine/4.png'}
            width={428}
            height={558}
            objectFit="contain"
            className="w-full max-w-[95%]"
          />
        </ImageWrapper>
      </div>

      <Link href={'http://name.shib.io/'} target="_blank">
        <NormalButton className="shadow">
          Visit The Shib
          <Image alt="arrow-right" width={24} height={24} src={'/icons/arrow-right.svg'} />
        </NormalButton>
      </Link>
    </SectionWrapper>
  );
};

export default MagazineSection;
