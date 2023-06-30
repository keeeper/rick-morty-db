"use client"
import { usePathname  } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { GET_CHARACTER } from '@/graphql/queries';
import fetchData from '@/utils/fetchData';
import getId from '@/utils/getId';

export default function Character() {
  const currentPageUrl  = usePathname();
  const characterId = getId(currentPageUrl);
  const [personData, setPersonData] = useState({});

  const getData = async () => {
    const data = await fetchData(GET_CHARACTER, { characterId }); 
    const {data: { character }} = await data;
    setPersonData(character);
  }

  useEffect(()=>{
    if (characterId) getData();
  }, [characterId]);

  return (
    <section>
        <h1>{personData?.name}</h1>  
        <img src={personData.image} />
        <h3>{personData?.gender}</h3>  
        <p>{personData?.status}</p>
        <p>{personData?.location?.name}</p>
        <p>{personData?.species}</p>
        <p>{personData?.origin?.name}</p>
        {personData?.episode?.map((item: any) => (
          <Link key={item.id} href={`/episode/${item.id}`}>{item.name}</Link>
        ))}
    </section>
  ) 
}