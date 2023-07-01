"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { GET_EPISODE } from '@/graphql/queries';
import fetchData from '@/utils/fetchData';
import getId from '@/utils/getId';
import { TEpisode } from '@/types/TEpisode';
import Episod from '@/components/Episode';

export default function Episode() {
  const currentPageUrl  = usePathname();
  const episodeId = getId(currentPageUrl);
  const [episodeData, seTEpisodData] = useState<TEpisode>();

  const getData = async () => {
    const data = await fetchData(GET_EPISODE, {episodeId});
    const {data: {episode}} = data;
    seTEpisodData(episode)
  }

  useEffect(()=>{
    if(episodeId) getData();
  }, [episodeId])

  return (
    <section>
      <Episod {...episodeData} />
    </section>
  )
}
