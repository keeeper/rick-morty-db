"use client";

import { useState } from 'react';
import EpisodeCard from '@/components/EpisodeCard';
import LoadedCounter from '@/components/LoadedCounter';
import { GET_EPISODES } from '@/graphql/queries';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import fetchData from '@/utils/fetchData';
import { TEpisode } from '@/types/TEpisode';

export default function Characters() {
  const [episodes, setEpisodes] = useState([]);
  const [total, setTotal ] = useState(0);
  useInfiniteScroll(getData, "observer-element");

  async function getData (page) {
    const data = await fetchData(GET_EPISODES, { page });
    const {data: {episodes: { results }}} = data;
    const {data: {episodes: { info }}} = data;
    setEpisodes((episodes)=> [...episodes, ...results]);
    setTotal(info.count)
  }
  return (
    <section className="grid grid-cols-1">
        {episodes.map((episode:TEpisode)=>(
          <EpisodeCard key={episode.id} {...episode} />
        ))}
        {!!episodes.length && !!total && (<LoadedCounter current={episodes.length} total={total} />)}
      <div className="observer-element"></div>
    </section>
  )
}