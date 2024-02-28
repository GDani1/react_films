import React from 'react';
import { Thumbnail } from '../Thumbnail/Thumbnail';
import { Link } from 'react-router-dom';

type Props = {
  imgUrl: string;
  title: string;
  subtitle?: string;
  href?: string;
};

export const Card: React.FC<Props> = ({ imgUrl, title, subtitle, href }) => {
  
  
  const CardBase = (
    <div className="h-80 rounded-xl shadow-md overflow-hidden">
      <div className="relative h-full">
        <Thumbnail imgUrl={imgUrl} />
        <div className="absolute w-full bottom-0 px-4 py-2 bg-slate-800">
          <h3 className="text-white text-center text-lg truncate font-medium">
            {title}
          </h3>
          {subtitle ? (
            <p className="text-cyan-200 text-center text-sm truncate">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
  if (href) {
    return (
      <Link to={href} aria-label={title}>
        <div className="cursor-pointer hover:opacity-80 duration-300 transition-opacity">
          {CardBase}
        </div>
      </Link>
    );
  }
  return CardBase;
};
