'use client';

import styled from 'styled-components';
import HeroSection from '../components/organisms/hero-section';
import AdsBanner from '../components/organisms/ads-banner';
import ShibaSwapSection from '../components/organisms/shibaswap-section';
import { ShiboshisSection } from '../components/organisms/shiboshis-section';
import ShibariumSection from '../components/organisms/shibarium-section';
import MagazineSection from '../components/organisms/magazine-section';

const Wrapper = styled.div`
  position: relative;
`;

export default function Home() {
  return (
    <Wrapper className="relative flex flex-col items-center justify-center">
      <HeroSection />

      <AdsBanner />

      <ShibaSwapSection />

      <ShiboshisSection />

      <ShibariumSection />

      <MagazineSection />
    </Wrapper>
  );
}
