import EpisodeCard from '@/components/EpisodeCard';
import { GET_EPISODES } from '@/graphql/queries';
import fetchData from '@/utils/fetchData';
import { Character } from '@/types/Character';

export default async function Characters() {
  const data = await fetchData(GET_EPISODES);
  const {data: {episodes: {results}}} = data;

  return (
    <section className="grid sm:grid-cols-4 grid-cols-3 gap-10">
        {results.map((episode:Character)=>(
          <EpisodeCard {...episode} />
        ))}
    </section>
  )
}