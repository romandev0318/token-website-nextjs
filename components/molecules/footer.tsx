import { faDiscord, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { ChevronDoubleUpIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const footerItems = [
  { key: 'Twitter', link: 'https://twitter.com/Shibtoken', icon: faXTwitter, color: '#fff' },
  {
    key: 'Discord',
    link: 'https://discord.com/invite/shibariumtech',
    icon: faDiscord,
    color: '#fff',
  },
];

const FooterWrapper = styled.footer`
  height: 320px;
  bottom: -320px;
  transition: all 0.3s;

  .upIcon {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    border: 1px solid #4f4f4f;
    border-bottom: 0;
  }

  &:hover {
    bottom: 0px;

    .upIcon {
      opacity: 0;
      // pointer-events: none;
    }
  }

  a {
    p {
      &:hover {
        color: #ef6402;
      }
    }
  }
`;

const Seperator = styled.div`
  position: relative;
  border-top: 1px solid #f5f5f5;
`;

const Footer = () => {
  return (
    <FooterWrapper className="fixed bottom-0 left-0 z-50 mx-auto flex w-full justify-center bg-[#2D3659] px-6 shadow mobile:hidden sm:px-16">
      <div className="flex w-[1280px] max-w-[1280px] flex-col items-center justify-center gap-4">
        <div className="flex w-full items-start justify-between pr-12">
          <div className="flex flex-col items-start justify-center gap-4">
            <Image width={339} height={60} src="/logos/logo.svg" alt="Shib Name Service Logo" />

            <p className="primary-400 text-[#f5f5f5]">
              Your decentralised name across Shib Web3 <br /> ecosystem and beyond.
            </p>

            <div className="flex items-center gap-4">
              {footerItems?.map(footerItem => (
                <Link
                  className="hover:opacity-80"
                  key={footerItem.key}
                  href={footerItem.link}
                  target="_blank"
                >
                  <Image width={32} height={32} alt="pic" src={`/icons/${footerItem.key}.svg`} />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start justify-center gap-4">
            <Link target="_blank" href={'https://www.shibecosystem.com/'}>
              <p className="primary-700 text-[#f5f5f5]">SHIB ECOSYSTEM</p>
            </Link>

            <Link target="_blank" href={'https://www.coingecko.com/en/coins/shiba-inu'}>
              <p className="primary-400 text-[#f5f5f5]">Shib</p>
            </Link>

            <Link target="_blank" href={'https://www.coingecko.com/en/coins/bone-shibaswap'}>
              <p className="primary-400 text-[#f5f5f5]">Bone</p>
            </Link>

            <Link target="_blank" href={'https://www.coingecko.com/en/coins/doge-killer'}>
              <p className="primary-400 text-[#f5f5f5]">Leash</p>
            </Link>
          </div>

          <div className="flex flex-col items-start justify-center gap-4">
            <p className="primary-700 text-[#f5f5f5]">PRODUCTS AND SERVICES</p>
            {/* <Link target="_blank" href={'https://news.shib.io/'}>
              <p className="primary-400 text-[#f5f5f5]">The Shib Newsletter</p>
            </Link> */}
            <Link target="_blank" href={'https://shibaswap.com/#/'}>
              <p className="primary-400 text-[#f5f5f5]">Shibaswap</p>
            </Link>
            <Link target="_blank" href={'https://shibarium.shib.io/'}>
              <p className="primary-400 text-[#f5f5f5]">Shibarium</p>
            </Link>
          </div>

          <div className="flex flex-col items-start justify-center gap-4">
            <p className="primary-700 text-[#f5f5f5]">USEFUL LINKS</p>
            <Link target="_blank" href={'https://shibaswap.com/#/'}>
              <p className="primary-400 text-[#f5f5f5]">Swap</p>
            </Link>
            <Link target="_blank" href={'https://shibarium.shib.io/bridge'}>
              <p className="primary-400 text-[#f5f5f5]">Bridge</p>
            </Link>
            <Link target="_blank" href={'https://shibarium.shib.io/all-validator'}>
              <p className="primary-400 text-[#f5f5f5]">Stake</p>
            </Link>
          </div>
        </div>

        <Seperator className="w-full" />

        <p className="primary-400 relative top-[2px] text-[#f5f5f5]">
          © 2023 Shib, Copyright Shiba Inu Ecosystem . All rights reserved.
        </p>
      </div>

      <div className="upIcon absolute top-[-40px] flex h-[40px] w-[70px] items-center justify-center bg-[#2D3659] ">
        <ChevronDoubleUpIcon className="h-6 w-6 text-white" />
      </div>
    </FooterWrapper>
  );
};

export default Footer;
