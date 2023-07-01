"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { GET_EPISODE } from '@/graphql/queries';
import fetchData from '@/utils/fetchData';
import getId from '@/utils/getId';
import { TEpisode } from '@/types/TEpisode';
import CharacterCard from '@/components/CharacterCard';
import { TCharacterCard } from '@/types/TCharacterCard';

export default function Episode() {
  const currentPageUrl  = usePathname();
  const episodeId = getId(currentPageUrl);
  const [episodeData, setEpisodeData] = useState<TEpisode>({});

  const getData = async () => {
    const data = await fetchData(GET_EPISODE, {episodeId});
    const {data: {episode}} = data;
    setEpisodeData(episode)
  }

  useEffect(()=>{
    if(episodeId) getData();
  }, [episodeId])

  return (
    <section>
      <div className="mb-8">
        <h1 className="text-4xl text-white font-bold mb-2">{episodeData.name}</h1>
        <p className="text-sm text-gray">{episodeData.air_date}</p>
        <p className="text-sm text-gray">{episodeData.episode}</p>
      </div>
      <>
        <h3 className="text-md text-white font-bold mb-4">Characters</h3>
        <div className="grid sm:grid-cols-6 grid-cols-4 gap-4">
          {episodeData?.characters?.map((item:TCharacterCard) => (
            <CharacterCard key={item.id} size="sm" {...item} />
          ))}
        </div>
      </>
    </section>
  )
}
