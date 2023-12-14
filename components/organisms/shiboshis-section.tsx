import styled from 'styled-components';
import { NormalButton, SectionWrapper } from '../../theme';
import Image from 'next/image';

const Wrapper = styled.div`
  background:
    linear-gradient(90deg, #03050d 32.29%, rgba(0, 0, 0, 0) 100%),
    url('/images/shiboshis-back.png'),
    lightgray 50% / cover no-repeat;
  background-size: cover;
  background-position: center;
`;

const BuyButton = styled(NormalButton)`
  background: #1868b7;
  border: 1px solid #002664;
`;

export const ShiboshisSection = () => {
  return (
    <Wrapper className="flex w-full items-center justify-center">
      <SectionWrapper className="flex w-full items-center justify-center">
        <div className="flex w-1/2 flex-col items-center justify-center gap-4">
          <Image alt="pic" src={'/images/shiboshis-logo.png'} width={412} height={157} />

          <div className="text-center text-[16px] text-[#ECECEC]">
            {`SHIBOSHIS, 10,000 unique Shiba Inu NFTs on Ethereum, are tradable on ShibaSwap with
            special traits. They're integral to our upcoming Shiboshi Game, providing strategic play
            and unique benefits.`}
          </div>

          <NormalButton>
            Shiboshis Collection
            <Image alt="arrow-right" width={24} height={24} src={'/icons/arrow-right.svg'} />
          </NormalButton>

          <BuyButton>Buy on Opensea</BuyButton>
        </div>

        <div className="flex w-1/2 items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center gap-4 pb-8">
            <Image alt="pic" src={'/images/shiboshis/4.png'} width={241} height={241} />
            <Image alt="pic" src={'/images/shiboshis/3.png'} width={241} height={241} />
          </div>

          <div className="flex flex-col items-center justify-center gap-4 pt-8">
            <Image alt="pic" src={'/images/shiboshis/1.png'} width={241} height={241} />
            <Image alt="pic" src={'/images/shiboshis/2.png'} width={241} height={241} />
          </div>
        </div>
      </SectionWrapper>
    </Wrapper>
  );
};
