import Image from 'next/image';
import { NormalButton, SectionWrapper } from '../../theme';

export const MagazineSection = () => {
  return (
    <SectionWrapper className="flex w-full flex-col items-center justify-center gap-[58px]">
      <div className="w-full text-[40px] font-bold">Latest Magazine Editions</div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Image
            alt="pic"
            src={'/images/magazine/1.png'}
            width={428}
            height={558}
            objectFit="contain"
            className="max-w-[90%]"
          />
          <Image
            alt="pic"
            src={'/images/magazine/2.png'}
            width={428}
            height={558}
            objectFit="contain"
            className="max-w-[90%]"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Image
            alt="pic"
            src={'/images/magazine/3.png'}
            width={428}
            height={558}
            objectFit="contain"
            className="max-w-[90%]"
          />
          <Image
            alt="pic"
            src={'/images/magazine/4.png'}
            width={428}
            height={558}
            objectFit="contain"
            className="max-w-[90%]"
          />
        </div>
      </div>

      <NormalButton className="shadow">
        Visit The Shib
        <Image alt="arrow-right" width={24} height={24} src={'/icons/arrow-right.svg'} />
      </NormalButton>
    </SectionWrapper>
  );
};

export default MagazineSection;
