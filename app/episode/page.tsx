import EpisodeCard from '@/components/EpisodeCard';
import { GET_EPISODES } from '@/graphql/queries';
import fetchData from '@/utils/fetchData';
import { TEpisode } from '@/types/TEpisode';

export default async function Characters() {
  const data = await fetchData(GET_EPISODES);
  const {data: {episodes: {results}}} = data;

  return (
    <section className="grid grid-cols-1">
        {results.map((episode:TEpisode)=>(
          <EpisodeCard key={episode.id} {...episode} />
        ))}
    </section>
  )
}