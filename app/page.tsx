import CharacterCard from '@/components/CharacterCard';
import { GET_CHARACTERS } from '@/graphql/queries';
import fetchData from '@/utils/fetchData';
import { Character } from '@/types/TCharacter';

export default async function Home() {
  const data = await fetchData(GET_CHARACTERS);
  const {data: {characters: {results}}} = data;

  return (
    <section className="grid sm:grid-cols-4 grid-cols-1 gap-10">
      {results.map((character:Character)=>(
        <CharacterCard key={character.id} {...character} />
      ))}
    </section>
  )
}
