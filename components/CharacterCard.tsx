import Link from 'next/link';
import { Character } from '@/types/Character';
import Image from 'next/image';

const CharacterCard: React.FC<Character> = ({id, image, name}) => {
  return (
    <div className="text-center text-sm hover:text-white transition">
      <Link href={`/character/${id}`} key={name}>
        <Image className="rounded-full" src={image} width={140} height={140} alt={name} />
        <div className="mt-2">{name}</div>
      </Link>
    </div>
  )
}

export default CharacterCard;