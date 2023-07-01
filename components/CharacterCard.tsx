import Link from 'next/link';
import { TCharacterCard } from '@/types/TCharacterCard';
import Image from 'next/image';

const CharacterCard: React.FC<TCharacterCard> = ({size, id, image, name}) => {
  const imageSize = size === "sm" ? 100 : 260;

  return (
    <div className="text-center text-sm hover:text-white transition">
      <Link href={`/character/${id}`} key={name}>
        <Image className="rounded-lg saturate-0 hover:saturate-100 transition" src={image} width={imageSize} height={imageSize} alt={name} />
        <div className={`mt-2 ${size === "sm" ? "text-xs" : "text-sm"}`}>{name}</div>
      </Link>
    </div>
  )
}

export default CharacterCard;