import Image from 'next/image';
import { NormalButton, SectionWrapper } from '../../theme';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 17px 33px;
  justify-content: space-between;
  align-items: center;
  border-radius: 24px;
  border: 1px solid #202740;
  background: #1a1f2e;
`;

export const ShibaSwapSection = () => {
  return (
    <SectionWrapper className="w-full">
      <div className="flex items-center justify-center">
        <div className="flex w-1/2 flex-col items-start justify-center gap-[24px]">
          <div className="flex flex-col gap-2">
            <div className="text-[40px]">Shibaswap</div>

            <div className="text-[18px]">Decentralized Exchange</div>
          </div>

          <ItemWrapper>
            <div className="flex items-center justify-center gap-2">
              <Image alt="pic" width={64} height={64} src={'/images/bury-logo.svg'} />

              <div className="flex flex-col items-start justify-center gap-1">
                <div className="text-[18px] font-bold">Bury</div>
                <div className="text-[16px] text-[#D9D9D9]">Stake and Earn Rewards</div>
              </div>
            </div>

            <Image alt="arrow-right" width={24} height={24} src={'/icons/arrow-right.svg'} />
          </ItemWrapper>

          <ItemWrapper>
            <div className="flex items-center justify-center">
              <Image alt="pic" width={64} height={64} src={'/images/bury-logo.svg'} />

              <div className="flex flex-col items-start justify-center">
                <div>Bury</div>
                <div>Stake and Earn Rewards</div>
              </div>
            </div>

            <Image alt="arrow-right" width={24} height={24} src={'/icons/arrow-right.svg'} />
          </ItemWrapper>

          <ItemWrapper>
            <div className="flex items-center justify-center">
              <Image alt="pic" width={64} height={64} src={'/images/bury-logo.svg'} />

              <div className="flex flex-col items-start justify-center">
                <div>Bury</div>
                <div>Stake and Earn Rewards</div>
              </div>
            </div>

            <Image alt="arrow-right" width={24} height={24} src={'/icons/arrow-right.svg'} />
          </ItemWrapper>

          <NormalButton className="shadow">
            Go to Shibaswap
            <Image alt="arrow-right" width={24} height={24} src={'/icons/arrow-right.svg'} />
          </NormalButton>
        </div>

        <div className="flex w-1/2 flex-col items-center justify-start gap-[24px]">
          <div>Audited by Certik</div>

          <Image alt="certiklogo" width={520} height={124} src={'/images/certik-logo.svg'} />

          <NormalButton>
            Audit Overview
            <Image alt="arrow-right" width={24} height={24} src={'/icons/arrow-right.svg'} />
          </NormalButton>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ShibaSwapSection;
