// shorten the checksummed version of the input address to have 0x + 4 characters at start and end
export function shortenAddress(address: string, chars = 4): string {
  if (!address || !address.length) return '';

  const parsed = address;
  if (!parsed && address) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }
  return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`;
}

export function formatBalance(value: bigint) {
  let res = parseInt(value.toString());

  for (let i = 0; i < 18; i++) {
    res /= 10;
  }

  return res;
}

export function parseBalance(value: number | string) {
  return BigInt(Number(value) * Math.pow(10, 18));
}

export function shortenName(name: string) {
  if (name.length <= 15) return name;

  return `${name.slice(0, 10)}...${name.slice(-3)}`;
}
