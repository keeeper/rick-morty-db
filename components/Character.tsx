import { TCharacter } from '@/types/TCharacter';
import Image from 'next/image';
import EpisodeCard from './EpisodeCard';

const Character:React.FC<TCharacter> = ({name, image, gender, status, location, origin, species, episode: episodes}) => {
    return (
      <>
        <h1 className="text-4xl text-white font-bold mb-8">{name}</h1>
        <div className="flex flex-col sm:flex-row">
          <div className="flex-none">
            <Image src={image ? image : "/images/placeholder.jpg"} width={300} height={300} alt={name ? name : "Character"} className="rounded-lg" />
          </div>
          <div className="flex flex-col mt-4 ml-0 sm:mt-0 sm:ml-6 text-md gap-2">
            <p><span>Gender:</span><span className="text-white ml-2">{gender}</span></p>  
            <p><span>Status:</span><span className="text-white ml-2">{status}</span></p>  
            <p><span>Location:</span><span className="text-white ml-2">{location?.name}</span></p>  
            <p><span>Origin:</span><span className="text-white ml-2">{origin?.name}</span></p>  
            <p><span>Spieces:</span><span className="text-white ml-2">{species}</span></p>  
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-md text-white font-bold mb-4">Episodes</h3>
          {episodes?.map((item) => <EpisodeCard key={item.id} size="sm" {...item} />)}
        </div>
      </>
    );
  }

  export default Character;

