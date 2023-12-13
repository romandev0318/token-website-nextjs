import styled from 'styled-components';
import ShibTokenItem from '../molecules/shib-token-item';
import { SectionWrapper } from '../../theme';

const Wrapper = styled.div`
  gap: 48px;
  background: url('/images/hero-back.png');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 100vh;
`;

export const HeroSection = () => {
  return (
    <Wrapper className="relative flex flex-col items-center justify-end">
      <SectionWrapper className="relative flex flex-col items-center justify-end gap-[48px]">
        <div className="text-center text-[60px] font-bold">Shib Tokens</div>

        <div className="flex items-start justify-center">
          <ShibTokenItem type={'shib'} />
          <ShibTokenItem type={'bone'} />
          <ShibTokenItem type={'leash'} />
        </div>
      </SectionWrapper>
    </Wrapper>
  );
};

export default HeroSection;
