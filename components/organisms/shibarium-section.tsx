import styled from 'styled-components';
import { NormalButton, SectionWrapper } from '../../theme';
import Image from 'next/image';

const ParaItem = styled.div`
  padding: 30px 30px 30px 28px;
  gap: 10px;
  border-radius: 18px;
  border: 1px solid #202740;
  background: #1a1f2e;
`;

export const ShibariumSection = () => {
  return (
    <SectionWrapper className="flex w-full flex-col items-center justify-center gap-[48px]">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="text-[40px]">Shibarium</div>
        <div className="text-[18px]">Shib's L2 Blockchain</div>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-1/2 p-2">
          <ParaItem className="flex flex-col">
            <div className="flex items-center justify-start gap-2">
              <Image alt="pic" src={'/icons/stake.svg'} width={64} height={64} />

              <div className="flex flex-col gap-0">
                <div className="text-[18px] font-bold">Stake Bone</div>
                <div className="text-[16px] text-[#D9D9D9]">Earn Rewards</div>
              </div>
            </div>

            <div className="relative h-[1px] w-full bg-[#202740]" />

            <div className="text-[16px] font-[300] text-[#ECECEC]">
              Stake your BONE tokens to support network security and earn rewards. As a Delegator,
              you indirectly contribute to consensus by backing Validators, gaining from the
              ecosystem's success.
            </div>

            <div>
              <NormalButton>
                Stake Bone
                <Image alt="arrow-right" width={24} height={24} src={'/icons/arrow-right.svg'} />
              </NormalButton>
            </div>
          </ParaItem>
        </div>

        <div className="w-1/2 p-2">
          <ParaItem className="flex flex-col">
            <div className="flex items-center justify-start gap-2">
              <Image alt="pic" src={'/icons/bridge.svg'} width={64} height={64} />

              <div className="flex flex-col gap-0">
                <div className="text-[18px] font-bold">Bridge Tokens</div>
                <div className="text-[16px] text-[#D9D9D9]">Between Chains</div>
              </div>
            </div>

            <div className="relative h-[1px] w-full bg-[#202740]" />

            <div className="text-[16px] font-[300] text-[#ECECEC]">
              Collect majestic cards to create your perfect deck, then train with your unique
              Shiboshis to defeat all your friends and foes alike in this collectible card game now
              available on iOS and Android stores.
            </div>

            <div>
              <NormalButton>
                Shibarium Bridge
                <Image alt="arrow-right" width={24} height={24} src={'/icons/arrow-right.svg'} />
              </NormalButton>
            </div>
          </ParaItem>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ShibariumSection;
