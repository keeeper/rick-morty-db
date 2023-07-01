import CharacterCard from '@/components/CharacterCard';
import { GET_CHARACTERS } from '@/graphql/queries';
import fetchData from '@/utils/fetchData';
import { TCharacter } from '@/types/TCharacter';

export default async function Characters() {
  const data = await fetchData(GET_CHARACTERS);
  const {data: {characters: {results}}} = data;

  return (
    <section className="grid sm:grid-cols-4 grid-cols-3 gap-10">
        {results.map((character:TCharacter)=>(
          <CharacterCard key={character.id} {...character} />
        ))}
    </section>
  )
}