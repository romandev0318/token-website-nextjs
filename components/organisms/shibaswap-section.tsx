import Image from 'next/image';
import { NormalButton, SectionWrapper } from '../../theme';
import styled from 'styled-components';
import Link from 'next/link';

const Wrapper = styled.div`
  @media (max-width: 850px) {
    flex-direction: column;
    gap: 4rem;
  }
`;

const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 17px 33px;
  justify-content: space-between;
  align-items: center;
  border-radius: 24px;
  border: 1px solid #202740;
  background: #1a1f2e;
  transition: all 0.3s;

  &:hover {
    border: 1px solid #737373;
  }

  @media (max-width: 500px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const ShibaSwapSection = () => {
  return (
    <SectionWrapper className="w-full">
      <Wrapper className="flex items-center justify-center">
        <div className="flex w-full flex-col items-start justify-center gap-[24px] px-2 md:w-1/2">
          <div className="flex flex-col gap-2">
            <div className="text-[40px]">Shibaswap</div>

            <div className="text-[18px]">Decentralized Exchange</div>
          </div>

          <Link href={'https://shibaswap.com/#/bury'} target="_blank" className="w-full">
            <ItemWrapper className="mobile:px-4">
              <div className="flex items-center justify-center gap-2">
                <Image alt="pic" width={64} height={64} src={'/images/bury-logo.svg'} />

                <div className="flex flex-col items-start justify-center gap-1">
                  <div className="text-[18px] font-bold">Bury</div>
                  <div className="text-[16px] text-[#D9D9D9]">Stake and Earn Rewards</div>
                </div>
              </div>

              <Image alt="arrow-right" width={24} height={24} src={'/icons/arrow-right.svg'} />
            </ItemWrapper>
          </Link>

          <Link href={'https://shibaswap.com/#/swap'} target="_blank" className="w-full">
            <ItemWrapper>
              <div className="flex items-center justify-center gap-2">
                <Image alt="pic" width={64} height={64} src={'/images/swap-logo.svg'} />

                <div className="flex flex-col items-start justify-center gap-1">
                  <div className="text-[18px] font-bold">Swap</div>
                  <div className="text-[16px] text-[#D9D9D9]">Between tokens</div>
                </div>
              </div>

              <Image alt="arrow-right" width={24} height={24} src={'/icons/arrow-right.svg'} />
            </ItemWrapper>
          </Link>

          <Link href={'https://shibaswap.com/#/pool'} target="_blank" className="w-full">
            <ItemWrapper>
              <div className="flex items-center justify-center gap-2">
                <Image alt="pic" width={64} height={64} src={'/images/dig-logo.svg'} />

                <div className="flex flex-col items-start justify-center gap-1">
                  <div className="text-[18px] font-bold">DIG</div>
                  <div className="text-[16px] text-[#D9D9D9]">Stake Tokens</div>
                </div>
              </div>

              <Image alt="arrow-right" width={24} height={24} src={'/icons/arrow-right.svg'} />
            </ItemWrapper>
          </Link>

          <div className="flex w-full items-center justify-start mobile:justify-center">
            <Link href={'https://shibaswap.com/#/'} target="_blank">
              <NormalButton className="shadow">
                Go to Shibaswap
                <Image alt="arrow-right" width={24} height={24} src={'/icons/arrow-right.svg'} />
              </NormalButton>
            </Link>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-start gap-[24px] px-2 md:w-1/2">
          <div className="text-center mobile:text-[36px]">Audited by Certik</div>

          <Image
            alt="certiklogo"
            className="mobile:w-[260px]"
            width={520}
            height={124}
            src={'/images/certik-logo.svg'}
          />

          <Link href={'https://skynet.certik.com/projects/shiba-swap'} target="_blank">
            <NormalButton>
              Audit Overview
              <Image alt="arrow-right" width={24} height={24} src={'/icons/arrow-right.svg'} />
            </NormalButton>
          </Link>
        </div>
      </Wrapper>
    </SectionWrapper>
  );
};

export default ShibaSwapSection;
