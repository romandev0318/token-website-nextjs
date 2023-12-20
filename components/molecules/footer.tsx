import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import Faq from 'react-faq-component';
import ShibLogo from '../atoms/shibLogo';

const Wrapper = styled.footer`
  background: rgba(20, 24, 36, 0.2);
`;

const ContainerWrapper = styled.div`
  max-width: 1780px;
  padding: 2rem 2rem;
`;

const FaqWrapper = styled.div`
  .faq-row-wrapper {
    border-radius: 8px;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.08);
    background: transparent;

    .faq-row {
      padding: 0rem;
    }

    .row-title {
      padding: 0.5rem 0rem !important;
      font-weight: 700;
    }

    .row-content-text {
      height: 100%;
    }

    .faq-row {
      border-color: #737373;
    }
  }
`;

const footerMenuData = {
  rows: [
    {
      title: `PRODUCTS`,
      content: (
        <div className="flex flex-col items-start justify-center gap-2">
          <div>Shibarium Ecosystem</div>
          <div>Shib The Metaverse</div>
          <div>ShibaSwap</div>
          <div>Shibacals</div>
          <div>Shiba Eternity</div>
          <div className="relative h-[10px]"></div>
        </div>
      ),
    },
    {
      title: `USEFUL LINKS`,
      content: (
        <div className="flex flex-col items-start justify-center gap-2">
          <div>Shib Ecosystem</div>
          <div>Shib.io Blog</div>
          <div>Foundational Document</div>
          <div>Certik ShibaSwap Audit</div>
          <div>Shiba Eternity Fandom</div>
          <div className="relative h-[10px]"></div>
        </div>
      ),
    },
  ],
};

const styles = {
  titleTextColor: 'blue',
  rowTitleColor: '#fafafa',
  rowTitleTextSize: '18px',
  rowContentColor: '#E5E5E5',
  rowContentTextSize: '16px',
  rowContentPaddingTop: '10px',
  rowContentPaddingBottom: '20px',
  rowContentPaddingLeft: '0px',
  rowContentPaddingRight: '0px',
  arrowColor: '#F9FAFB',
};

const config = {
  tabFocus: true,
};

const Footer = () => {
  return (
    <Wrapper className="flex w-full items-center justify-center">
      <ContainerWrapper className="flex w-full flex-col items-center justify-center gap-4">
        <div className="flex w-full flex-wrap items-start justify-center py-4">
          <div className="flex w-full flex-col items-start justify-start gap-2 pr-2 md:w-1/3">
            <ShibLogo />

            <div className="text-[16px] font-[300]">Get connected with us on social networks:</div>

            <div className="flex items-center justify-center gap-3">
              <Image
                alt="pic"
                src={'/icons/social/1.svg'}
                width={32}
                height={32}
                objectFit="contain"
              />

              <Image
                alt="pic"
                src={'/icons/social/2.svg'}
                width={32}
                height={32}
                objectFit="contain"
              />

              <Image
                alt="pic"
                src={'/icons/social/3.svg'}
                width={32}
                height={32}
                objectFit="contain"
              />
            </div>
          </div>

          <FaqWrapper className="relative w-full pb-4 pt-8 md:hidden">
            <Faq data={footerMenuData} styles={styles} config={config} />
          </FaqWrapper>

          <div className="flex flex hidden w-1/3 flex-col items-start justify-start gap-3 text-[16px] font-[300] md:flex">
            <div className="text-[18px] font-bold">PRODUCTS</div>
            <div>Shibarium Ecosystem</div>
            <div>Shib The Metaverse</div>
            <div>ShibaSwap</div>
            <div>Shibacals</div>
            <div>Shiba Eternity</div>
          </div>

          <div className="flex flex hidden w-1/3 flex-col items-start justify-start gap-3 text-[16px] font-[300] md:flex">
            <div className="text-[18px] font-bold">USEFUL LINKS</div>
            <div>Shib Ecosystem</div>
            <div>Shib.io Blog</div>
            <div>Foundational Document</div>
            <div>Certik ShibaSwap Audit</div>
            <div>Shiba Eternity Fandom</div>
          </div>
        </div>

        <div className="hidden h-[1px] w-full bg-[#202740] md:block" />

        <div className="text-[14px] font-[300]">
          Copyright © {new Date().getFullYear()} Shiba Inu
        </div>
      </ContainerWrapper>
    </Wrapper>
  );
};

export default Footer;
