'use client';

import styled from 'styled-components';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import ShibLogo from '../atoms/shibLogo';
import { useState } from 'react';

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
  .desktop {
    display: flex;
  }

  .menuBtn {
    display: none;
  }

  @media (max-width: 1400px) {
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
      <div className="flex w-full max-w-[1780px] items-center justify-between px-8 py-2">
        <ShibLogo />

        <LinkWrapper className="relative">
          <div className="desktop flex items-center justify-center md:gap-4 lg:gap-6 xl:gap-12">
            <MenuBtn>Shib.io</MenuBtn>
            <MenuBtn>ShibaSwap</MenuBtn>
            <MenuBtn>Shib Ecosystem</MenuBtn>
            <MenuBtn>Shibarium</MenuBtn>
            <MenuBtn>Ryoshi Archives</MenuBtn>
            <MenuBtn>Advertise with us</MenuBtn>
            <MenuBtn>Safety Guide</MenuBtn>
            <MenuBtn>Shibpedia</MenuBtn>
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
        <MenuBtn>Shib.io</MenuBtn>
        <MenuBtn>ShibaSwap</MenuBtn>
        <MenuBtn>Shib Ecosystem</MenuBtn>
        <MenuBtn>Shibarium</MenuBtn>
        <MenuBtn>Ryoshi Archives</MenuBtn>
        <MenuBtn>Advertise with us</MenuBtn>
        <MenuBtn>Safety Guide</MenuBtn>
        <MenuBtn>Shibpedia</MenuBtn>
      </DropDownMenu>
    </nav>
  );
};

export default Navbar;
