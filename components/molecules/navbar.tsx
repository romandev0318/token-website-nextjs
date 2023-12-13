'use client';

import styled from 'styled-components';
import ShibLogo from '../atoms/shibLogo';

const MenuBtn = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: white;
`;

const Navbar = () => {
  return (
    <nav className="relative flex h-[77px] w-full items-center justify-center bg-[#060811]">
      <div className="flex w-full max-w-[1920px] items-center justify-between px-[78px] py-2">
        <ShibLogo />

        <div className="flex items-center justify-center gap-12">
          <MenuBtn>Shib.io</MenuBtn>
          <MenuBtn>ShibaSwap</MenuBtn>
          <MenuBtn>Shib Ecosystem</MenuBtn>
          <MenuBtn>Shibarium</MenuBtn>
          <MenuBtn>Ryoshi Archives</MenuBtn>
          <MenuBtn>Advertise with us</MenuBtn>
          <MenuBtn>Safety Guide</MenuBtn>
          <MenuBtn>Shibpedia</MenuBtn>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
