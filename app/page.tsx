import CharacterCard from '@/components/CharacterCard';
import { GET_CHARACTER_BY_IDS } from '@/graphql/queries';
import fetchData from '@/utils/fetchData';
import { TCharacter } from '@/types/TCharacter';

export default async function Home() {
  const ids = ["1", "2", "3", "4", "5"];
  const data = await fetchData(GET_CHARACTER_BY_IDS, {ids});
  const {data: {charactersByIds}} = data;

  return (
    <section>
      <div className="mb-16">
        <h2 className="text-4xl text-white text-center font-bold mb-8">The Story</h2>
        <p className="text-center leading-6">After having been missing for nearly 20 years, Rick Sanchez suddenly arrives at daughter Beth's doorstep to move in with her and her family. Although Beth welcomes Rick into her home, her husband, Jerry, isn't as happy about the family reunion. Jerry is concerned about Rick, a sociopathic scientist, using the garage as his personal laboratory. In the lab, Rick works on a number of sci-fi gadgets, some of which could be considered dangerous. But that's not all Rick does that concerns Jerry. He also goes on adventures across the universe that often involve his grandchildren, Morty and Summer…</p>
      </div>
      
      <h3 className="text-l text-white font-bold mb-4">Main characters</h3>
      <div className="grid sm:grid-cols-5 grid-cols-3 gap-4">
        {charactersByIds.map((character:TCharacter)=>(
          <CharacterCard key={character.id} {...character} />
        ))}
      </div>
    </section>
  )
}
