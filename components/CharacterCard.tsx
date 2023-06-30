import Link from 'next/link';
import { Character } from '@/types/Character';
import Image from 'next/image';

const CharacterCard: React.FC<Character> = ({id, image, name}) => {
  return (
    <div className="text-center">
      <Link href={`/characters/${id}`} key={name}>
        <Image className="rounded-full" src={image} width={140} height={140} alt={name} />
        {name}
      </Link>
    </div>
  )
}

export default CharacterCard;