import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 32px;
  gap: 24px;
  border-radius: 32px;
  border: 1px solid #202740;
  background: rgba(26, 31, 46, 0.9);

  @media (max-width: 1280px) {
    padding: 16px;
  }

  @media (max-width: 960px) {
    padding: 32px;
  }
`;

const TOKEN_INFO = {
  shib: {
    imageURL: '/icons/tokens/shib-token.png',
    tokenName: 'SHIB TOKEN',
    description:
      'Shiba Inu (SHIB) is our key token, embodying a global, decentralized, community-driven currency. Launched in 2020, this Ethereum-based token is a global sensation, accepted at numerous places directly or via third-parties.',
    shibaswapURL:
      'https://shibaswap.com/#/swap?outputCurrency=0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce',
    coingeckoURL:
      'https://www.geckoterminal.com/eth/pools/0xcf6daab95c476106eca715d48de4b13287ffdeaa',
  },
  bone: {
    imageURL: '/icons/tokens/bone-token.png',
    tokenName: 'BONE TOKEN',
    description: `BONE, our ecosystem's governance token, has a 250 million supply. It empowers Shib Army's voting in the Doggy DAO and underpins Shibarium, our proprietary Layer 2 network.`,
    shibaswapURL:
      'https://shibaswap.com/#/swap?outputCurrency=0x9813037ee2218799597d83D4a5B6F3b6778218d9',
    coingeckoURL:
      'https://www.geckoterminal.com/eth/pools/0xefb47fcfcad4f96c83d4ca676842fb03ef20a477',
  },
  leash: {
    imageURL: '/icons/tokens/leash-token.png',
    tokenName: 'LEASH TOKEN',
    description: `LEASH, limited to 107,646 tokens, rewards our ecosystem's loyalists with exclusive benefits. Holders enjoy perks like BONE rewards, Shiboshi NFT minting access, and early entry to Shib: The Metaverse land sales.`,
    shibaswapURL:
      'https://shibaswap.com/#/swap?outputCurrency=0x27C70Cd1946795B66be9d954418546998b546634',
    coingeckoURL:
      'https://www.geckoterminal.com/eth/pools/0xf6badfb9b0ab2f8f3fd8225ef1ea12fa689ad1a7',
  },
};

interface ShibTokenItemProps {
  type: string;
}

export const ShibTokenItem = ({ type }: ShibTokenItemProps) => {
  const tokenInfo = TOKEN_INFO[type as keyof typeof TOKEN_INFO];

  return (
    <div className="w-[650px] max-w-[90vw] px-2 mobile:p-0 md:w-1/3 lg:px-4">
      <Wrapper className="flex w-full flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-8 mobile:flex-col mobile:gap-2">
          <Image alt="tokenPic" width={118} height={127} src={tokenInfo.imageURL} />

          <div className="text-[24px] font-bold">{tokenInfo.tokenName}</div>
        </div>

        <div className="relative h-[1px] w-full bg-[#202740]" />

        <div className="text-[16px] font-[300] md:h-[190px] lg:h-[165px] xl:h-[120px]">
          {tokenInfo.description}
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-4">
          <Link
            target="_blank"
            href={tokenInfo.shibaswapURL}
            className="flex h-[50px] w-full items-center justify-center gap-2 rounded-full bg-[#FF7A1C] text-[16px]"
          >
            Buy on SHIBASWAP
            <Image alt="arrow-right" width={24} height={24} src={'/icons/arrow-right.svg'} />
          </Link>

          <Link
            target="_blank"
            href={tokenInfo.coingeckoURL}
            className="flex h-[50px] w-full items-center justify-center gap-2 rounded-full bg-[#8BC53F] text-[16px]"
          >
            View on Coingecko
            <Image alt="arrow-right" width={24} height={24} src={'/icons/arrow-right.svg'} />
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default ShibTokenItem;
