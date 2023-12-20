import Image from 'next/image';
import Link from 'next/link';

interface ShibLogoProps {
  className?: string;
}

const ShibLogo = ({ className }: ShibLogoProps) => {
  return (
    <Link href="/" className="flex items-center gap-4 text-[24px] font-bold text-white">
      <Image
        width={50}
        height={60}
        src="/logos/shib-logo.svg"
        className={`${className}`}
        alt="Shib Name Service Logo"
      />
      SHIBTOKEN
    </Link>
  );
};

export default ShibLogo;
