import React, {  useRef, useState } from 'react';

import TMDBLogo from '@/assets/images/tmdb-logo.svg';

type Props = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const time = 300;

/** Renders an input that updates the search query. */
export const SearchInput: React.FC<Props> = ({ setQuery }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const timer = useRef<NodeJS.Timeout>(); 

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    clearTimeout(timer.current); 
    setInputValue(value); 
    timer.current = setTimeout(() => {
      setQuery(value);
    }, time);
  };

  return (
    <div className="relative flex items-center bg-slate-100 text-slate-700 rounded-full">
      <label className="relative z-10">
        <input
          type="text"
          placeholder="search films"
          value={inputValue}
          aria-label="search films"
          onChange={handleInput}
          className="h-10 w-52 pr-14 md:w-96 rounded-full p-4 text-md bg-transparent focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-slate-900"
        />
        <span className="sr-only">search films</span>
      </label>
      <div className="absolute right-4 top-2">
        <img
          src={TMDBLogo}
          alt="The Movie Database"
          className="pointer-events-none select-none"
        />
      </div>
    </div>
  );
};
