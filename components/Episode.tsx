import { TEpisode } from '@/types/TEpisode';
import { TCharacterCard } from '@/types/TCharacterCard';
import CharacterCard from './CharacterCard';

const Episod:React.FC<TEpisode> = ({id, name, air_date, characters, episode, size}) => {
    return (
      <>
        <div className="mb-8">
          <h1 className="text-4xl text-white font-bold mb-2">{name}</h1>
          <p className="text-sm text-gray">{air_date}</p>
          <p className="text-sm text-gray">{episode}</p>
        </div>
        <h3 className="text-md text-white font-bold mb-4">Characters</h3>
        <div className="grid sm:grid-cols-6 grid-cols-4 gap-4">
          {characters?.map((item:TCharacterCard) => (
            <CharacterCard key={item.id} size="sm" {...item} />
          ))}
        </div>
      </>
    );
  }

  export default Episod;

