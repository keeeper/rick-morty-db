import Link from 'next/link';
import { Episode } from '@/types/Episode';

const EpisodeCard: React.FC<Episode> = ({id, episode, name, air_date, characters}) => {
  return (
    <div className="text-center">
      <Link href={`/episode/${id}`} key={name}>
        {name}
        {episode}
        {air_date}
      </Link>
    </div>
  )
}

export default EpisodeCard;