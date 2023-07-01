"use client";

import CharacterCard from '@/components/CharacterCard';
import { GET_CHARACTERS } from '@/graphql/queries';
import fetchData from '@/utils/fetchData';
import { useState, useEffect, useRef } from 'react';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const pageRef = useRef(0);

  const getData = async () => {
    const page = pageRef.current;
    const data = await fetchData(GET_CHARACTERS, { page });
    const {data: {characters: { results }}} = data;
    setCharacters((characters)=> [...characters, ...results]);
  }

  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      pageRef.current++;
      getData();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, { threshold: 1 });
    observer.observe(document.querySelector('.observer-element'));
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="grid sm:grid-cols-4 grid-cols-3 gap-10">
        {characters.map((character)=>(
          <CharacterCard key={character.id} {...character} />
        ))}
        <div className="observer-element"></div>
    </section>
  )
}