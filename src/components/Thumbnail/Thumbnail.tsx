import React from 'react';

import NoImage from '@/assets/images/no-avatar.svg';

type Props = {
  imgUrl?: string;
};

export const Thumbnail: React.FC<Props> = ({ imgUrl }) => (
  <img
    src={imgUrl || NoImage}
    alt=""
   
    className="object-cover rounded-lg"
    sizes={
      imgUrl
        ? '(max-width: 768px) 100vw, (max-width: 1200px) 20vw, 20vw'
        : '400px'
    }
  />
);
