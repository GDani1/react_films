import React from 'react';


import { SearchInput } from './SearchInput/SearchInput';
import LogoFull from '@/assets/images/logo-full.svg';
import LogoSmall from '@/assets/images/logo-small.svg';
import { Link } from 'react-router-dom';


type Props = {
  setQuery?: React.Dispatch<React.SetStateAction<string>>;
};


export const Header: React.FC<Props> = ({ setQuery }) => (
  <div className="sticky flex top-0 z-40 w-full bg-gradient-to-br from-stone-700 to-stone-600 shadow-lg">
    <div className="flex flex-wrap justify-between items-center w-full h-full max-w-screen-xl mx-auto px-6 py-2 md:py-4">
      <h1>
        <Link to="/">
          <div className="flex items-center cursor-pointer py-2">
            <div className="hidden sm:block">
              <img
                src={LogoFull}
                alt="React Film Database"
                className="h-6 w-full"
              />
            </div>
            <div className="sm:hidden">
              <img
                src={LogoSmall}
                alt="React Film Database"
                className="h-6 w-full"
              />
            </div>
          </div>
        </Link>
      </h1>
      {setQuery ? <SearchInput setQuery={setQuery} /> : null}
    </div>
  </div>
);
