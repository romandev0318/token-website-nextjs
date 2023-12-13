import Image from 'next/image';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 32px;
  gap: 24px;
  border-radius: 32px;
  border: 1px solid #202740;
  background: rgba(26, 31, 46, 0.9);
`;

const TOKEN_INFO = {
  shib: {
    imageURL: '/icons/tokens/shib-token.png',
    tokenName: 'SHIB TOKEN',
    description:
      'Shiba Inu (SHIB) is our key token, embodying a global, decentralized, community-driven currency. Launched in 2020, this Ethereum-based token is a global sensation, accepted at numerous places directly or via third-parties.',
    shibaswapURL: '/',
    coingeckoURL: '/',
  },
  bone: {
    imageURL: '/icons/tokens/bone-token.png',
    tokenName: 'BONE TOKEN',
    description: `BONE, our ecosystem's governance token, has a 250 million supply. It empowers Shib Army's voting in the Doggy DAO and underpins Shibarium, our proprietary Layer 2 network.`,
    shibaswapURL: '/',
    coingeckoURL: '/',
  },
  leash: {
    imageURL: '/icons/tokens/leash-token.png',
    tokenName: 'LEASH TOKEN',
    description: `LEASH, limited to 107,646 tokens, rewards our ecosystem's loyalists with exclusive benefits. Holders enjoy perks like BONE rewards, Shiboshi NFT minting access, and early entry to Shib: The Metaverse land sales.`,
    shibaswapURL: '/',
    coingeckoURL: '/',
  },
};

interface ShibTokenItemProps {
  type: string;
}

export const ShibTokenItem = ({ type }: ShibTokenItemProps) => {
  const tokenInfo = TOKEN_INFO[type as keyof typeof TOKEN_INFO];

  return (
    <div className="w-1/3 px-4">
      <Wrapper className="flex w-full flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-8">
          <Image alt="tokenPic" width={118} height={127} src={tokenInfo.imageURL} />

          <div className="text-[24px] font-bold">{tokenInfo.tokenName}</div>
        </div>

        <div className="h-[120px] text-[16px] font-[300]">{tokenInfo.description}</div>

        <div className="flex w-full flex-col items-center justify-center gap-4">
          <div className="flex h-[50px] w-full items-center justify-center gap-2 rounded-full bg-[#FF7A1C] text-[16px]">
            Buy on SHIBASWAP
            <Image alt="arrow-right" width={24} height={24} src={'/icons/arrow-right.svg'} />
          </div>

          <div className="flex h-[50px] w-full items-center justify-center gap-2 rounded-full bg-[#8BC53F] text-[16px]">
            View on Coingecko
            <Image alt="arrow-right" width={24} height={24} src={'/icons/arrow-right.svg'} />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ShibTokenItem;
