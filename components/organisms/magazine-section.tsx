import Image from 'next/image';
import { NormalButton, SectionWrapper } from '../../theme';
import styled from 'styled-components';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
`;

export const MagazineSection = () => {
  const [latestData, setLatestData] = useState<any[]>([]);

  const fetchLatestArticles = async () => {
    const { data } = await axios.get('https://mintnews.shib.io/articles/latest/all');

    setLatestData(data);
  };

  useEffect(() => {
    fetchLatestArticles();
  }, []);

  return (
    <SectionWrapper className="flex w-full flex-col items-center justify-center gap-[58px]">
      <div className="w-full text-center text-[40px] font-bold md:text-left">
        Latest Magazine Editions
      </div>

      <div className="flex w-full flex-wrap items-center justify-center">
        {new Array(4).fill(0).map((val, index) =>
          !latestData.length ? (
            <ImageWrapper
              className="w-1/2 blur-[15px] mobile:w-full md:w-1/4"
              key={`imagewrapper ${val} ${index}`}
            >
              <Image
                alt="pic"
                src={`/images/magazine/${index + 1}.png`}
                width={428}
                height={558}
                objectFit="contain"
                className="w-full max-w-[95%]"
              />
            </ImageWrapper>
          ) : (
            <ImageWrapper
              className="w-1/2 mobile:w-full md:w-1/4"
              key={`imagewrapperlink ${index}`}
            >
              <Link href={'https://news.shib.io/article/' + latestData[index].id} target="_blank" className="w-full">
                <Image
                  alt="pic"
                  src={latestData[index].feature_image}
                  width={428}
                  height={558}
                  objectFit="contain"
                  className="w-full max-w-[95%]"
                />
              </Link>
            </ImageWrapper>
          )
        )}
      </div>

      <Link href={'http://news.shib.io/'} target="_blank">
        <NormalButton className="shadow">
          Visit The Shib
          <Image alt="arrow-right" width={24} height={24} src={'/icons/arrow-right.svg'} />
        </NormalButton>
      </Link>
    </SectionWrapper>
  );
};

export default MagazineSection;
