"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Character from '@/components/Character';
import { GET_CHARACTER } from '@/graphql/queries';
import fetchData from '@/utils/fetchData';
import getId from '@/utils/getId';
import { TCharacter } from '@/types/TCharacter';

export default function CharacterPage() {
  const currentPageUrl  = usePathname();
  const characterId = getId(currentPageUrl);
  const [personData, setPersonData] = useState<TCharacter>({});

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
      <Character {...personData} />
    </section>
  ) 
}