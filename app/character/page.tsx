"use client";

import { useState } from 'react';
import { GET_CHARACTERS } from '@/graphql/queries';
import fetchData from '@/utils/fetchData';
import LoadedCounter from '@/components/LoadedCounter';
import CharacterCard from '@/components/CharacterCard';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [total, setTotal ] = useState(0);
  useInfiniteScroll(getData, "observer-element");
  
  async function getData (page) {
    const data = await fetchData(GET_CHARACTERS, { page });
    const {data: {characters: { results }}} = data;
    const {data: {characters: { info }}} = data;
    setCharacters((characters)=> [...characters, ...results]);
    setTotal(info.count)
  }

  return (
    <section>
      <div className="grid sm:grid-cols-4 grid-cols-3 gap-10">
        {characters.map((character)=>(
          <CharacterCard key={character.id} {...character} />
        ))}
      </div>
      {!!characters.length && !!total && (<LoadedCounter current={characters.length} total={total} />)}
      <div className="observer-element"></div>
    </section>
  )
}