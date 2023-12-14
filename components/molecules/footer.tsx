import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  background: rgba(20, 24, 36, 0.2);
`;

const ContainerWrapper = styled.div`
  max-width: 1920px;
  padding: 19.19px 76.8px 19.19px 76.8px;
`;

const Footer = () => {
  return (
    <Wrapper className="flex w-full items-center justify-center">
      <ContainerWrapper className="flex w-full flex-col items-center justify-center gap-4">
        <div className="flex w-full items-start justify-center py-4">
          <div className="flex w-1/3 flex-col items-start justify-start gap-2">
            <div className="flex items-center justify-center">
              <Image
                alt="pic"
                src={'/logos/footer-shib-logo.svg'}
                width={152}
                height={47}
                objectFit="contain"
              />
            </div>

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

          <div className="flex flex w-1/3 flex-col items-start justify-start gap-3 text-[16px] font-[300]">
            <div className="text-[18px] font-bold">PRODUCTS</div>
            <div>Shibarium Ecosystem</div>
            <div>Shib The Metaverse</div>
            <div>ShibaSwap</div>
            <div>Shibacals</div>
            <div>Shiba Eternity</div>
          </div>

          <div className="flex flex w-1/3 flex-col items-start justify-start gap-3 text-[16px] font-[300]">
            <div className="text-[18px] font-bold">USEFUL LINKS</div>
            <div>Shib Ecosystem</div>
            <div>Shib.io Blog</div>
            <div>Foundational Document</div>
            <div>Certik ShibaSwap Audit</div>
            <div>Shiba Eternity Fandom</div>
          </div>
        </div>

        <div className="h-[1px] w-full bg-[#202740]" />

        <div className="text-[14px] font-[300]">
          Copyright © {new Date().getFullYear()} Shiba Inu
        </div>
      </ContainerWrapper>
    </Wrapper>
  );
};

export default Footer;
