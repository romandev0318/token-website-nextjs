'use client';

import styled from 'styled-components';
import HeroSection from '../components/organisms/hero-section';
import AdsBanner from '../components/organisms/ads-banner';

const Wrapper = styled.div`
  position: relative;
`;

export default function Home() {
  return (
    <Wrapper className="relative flex flex-col items-center justify-center">
      <HeroSection />

      <AdsBanner />
    </Wrapper>
  );
}
