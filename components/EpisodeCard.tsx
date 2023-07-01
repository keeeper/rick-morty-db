import Link from 'next/link';
import { Episode } from '@/types/TEpisode';

const EpisodeCard: React.FC<Episode> = ({id, episode, name, air_date, size}) => {

  return (
    <div className={size==="sm" ? 'text-xs' : 'text-sm'}>
      <Link href={`/episode/${id}`} key={name} className={`flex justify-between border-b-light-gray border-b ${size==="sm" ? 'p-2' : 'p-5'}  hover:bg-header transition`}>
        <span className="mr-6">{episode}</span>
        <span className="text-white flex-1">{name}</span>
        <span className="hidden sm:block">{air_date}</span>
      </Link>
    </div>
  )
}

export default EpisodeCard;