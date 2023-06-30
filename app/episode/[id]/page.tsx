"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GET_EPISODE } from '@/graphql/queries';
import fetchData from '@/utils/fetchData';
import getId from '@/utils/getId';
import { Episode } from '@/types/Episode';

export default function Episode() {
  const currentPageUrl  = usePathname();
  const episodeId = getId(currentPageUrl);
  const [episodeData, setEpisodeData] = useState({});

  const getData = async () => {
    const data = await fetchData(GET_EPISODE, {episodeId});
    const {data: {episode}} = data;
    setEpisodeData(episode)
  }

  useEffect(()=>{
    if(episodeId) getData();
  }, [episodeId])

  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{episodeData.name}</h1>
      <p>{episodeData.air_date}</p>
      <p>{episodeData.episode}</p>
      
      {episodeData?.characters?.map((item) => (
        <Link href={`/character/${item.id}`}>
          <Image src={item.image} width={100} height={100} alt={item.name} />
          {item.name}
        </Link>
      ))}
    </section>
  )
}
