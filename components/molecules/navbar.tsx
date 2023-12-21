'use client';

import styled from 'styled-components';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import ShibLogo from '../atoms/shibLogo';
import { useState } from 'react';
import Link from 'next/link';

const MenuBtn = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: white;
  transition: all 0.3s;

  &:hover {
    color: #ef6402;
  }
`;

const LinkWrapper = styled.div`
  width: calc(100% - 250px);

  .desktop {
    display: flex;
  }

  .menuBtn {
    display: none;
  }

  @media (max-width: 1400px) {
    width: auto;

    .desktop {
      display: none;
    }

    .menuBtn {
      display: block;
    }
  }
`;

const DropDownMenu = styled.div`
  position: absolute;
  right: 0;
  top: 65px;
  width: 250px;
  overflow: hidden;
  transition: all 0.3s;

  @media (max-width: 500px) {
    top: 76px;
    width: 100%;
  }
`;

const Navbar = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <nav className="relative flex h-[77px] w-full items-center justify-center bg-[#060811]">
      <div className="flex w-full max-w-[1500px] items-center justify-between px-8 py-2 mobile:px-4">
        <ShibLogo />

        <LinkWrapper className="relative">
          <div className="desktop flex items-center justify-between ">
            <Link href={`https://www.shib.io/`} target="_blank">
              <MenuBtn>Shib.io</MenuBtn>
            </Link>

            <Link href={'https://shibaswap.com/#/'} target="_blank">
              <MenuBtn>ShibaSwap</MenuBtn>
            </Link>

            <Link href={'https://www.shibecosystem.com/'} target="_blank">
              <MenuBtn>Shib Ecosystem</MenuBtn>
            </Link>

            <Link href={'https://shibarium.shib.io/'} target="_blank">
              <MenuBtn>Shibarium</MenuBtn>
            </Link>

            <Link
              href={
                'https://assets-global.website-files.com/6424006598e25f12a6360e93/6425c40b662f5690cb62e831_Ryoshi_Article.pdf'
              }
              target="_blank"
            >
              <MenuBtn>Ryoshi Archives</MenuBtn>
            </Link>

            <Link href={'https://www.shib.io/contactus'} target="_blank">
              <MenuBtn>Advertise with us</MenuBtn>
            </Link>

            <Link
              href={
                'https://assets-global.website-files.com/6424006598e25f12a6360e93/6425c5484385fb3e0dd6821f_Shiba_Inu_Safe_Guarding_Guide.pdf'
              }
              target="_blank"
            >
              <MenuBtn>Safety Guide</MenuBtn>
            </Link>

            <Link href={'https://docs.shibatoken.com/'} target="_blank">
              <MenuBtn>Shibpedia</MenuBtn>
            </Link>
          </div>

          <button className="menuBtn" onClick={() => setShowDropDown(prev => !prev)}>
            {showDropDown ? (
              <XMarkIcon className="h-8 w-8 text-white" />
            ) : (
              <Bars3Icon className="h-8 w-8 text-white" />
            )}
          </button>
        </LinkWrapper>
      </div>

      <DropDownMenu
        className={`dropdownMenu ${
          showDropDown ? 'h-[344px] p-2' : 'h-0 p-0'
        } flex flex-col items-center justify-center gap-4 bg-[#060811]`}
      >
        <Link href={`https://www.shib.io/`} target="_blank">
          <MenuBtn>Shib.io</MenuBtn>
        </Link>

        <Link href={'https://shibaswap.com/#/'} target="_blank">
          <MenuBtn>ShibaSwap</MenuBtn>
        </Link>

        <Link href={'https://www.shibecosystem.com/'} target="_blank">
          <MenuBtn>Shib Ecosystem</MenuBtn>
        </Link>

        <Link href={'https://shibarium.shib.io/'} target="_blank">
          <MenuBtn>Shibarium</MenuBtn>
        </Link>

        <Link
          href={
            'https://assets-global.website-files.com/6424006598e25f12a6360e93/6425c40b662f5690cb62e831_Ryoshi_Article.pdf'
          }
          target="_blank"
        >
          <MenuBtn>Ryoshi Archives</MenuBtn>
        </Link>

        <Link href={'https://www.shib.io/contactus'} target="_blank">
          <MenuBtn>Advertise with us</MenuBtn>
        </Link>

        <Link
          href={
            'https://assets-global.website-files.com/6424006598e25f12a6360e93/6425c5484385fb3e0dd6821f_Shiba_Inu_Safe_Guarding_Guide.pdf'
          }
          target="_blank"
        >
          <MenuBtn>Safety Guide</MenuBtn>
        </Link>

        <Link href={'https://docs.shibatoken.com/'} target="_blank">
          <MenuBtn>Shibpedia</MenuBtn>
        </Link>
      </DropDownMenu>
    </nav>
  );
};

export default Navbar;
