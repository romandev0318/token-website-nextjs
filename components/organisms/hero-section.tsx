import styled from 'styled-components';
import ShibTokenItem from '../molecules/shib-token-item';
import { SectionWrapper } from '../../theme';

const Wrapper = styled.div`
  gap: 48px;
  background: url('/images/hero-back.png');
  background-size: cover;
  background-position: top right;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 100vh;

  @media (max-width: 960px) {
    background-position: top;
  }
`;

export const HeroSection = () => {
  return (
    <Wrapper className="relative flex flex-col items-center justify-end">
      <div className="relative h-[77px] w-full mobile:h-[50px]" />
      <SectionWrapper className="relative flex flex-col items-center justify-end gap-[48px]">
        <div className="text-center text-[60px] font-bold mobile:mt-12 mobile:text-[48px]">
          Shiba Inu Tokens
        </div>

        <div className="flex flex-col items-start justify-center gap-4 md:flex-row md:gap-0">
          <ShibTokenItem type={'shib'} />
          <ShibTokenItem type={'bone'} />
          <ShibTokenItem type={'leash'} />
        </div>
      </SectionWrapper>
    </Wrapper>
  );
};

export default HeroSection;
