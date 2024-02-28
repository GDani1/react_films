import { useState } from 'react';

type Props = {
  text: string;
};

export const TruncatedText: React.FC<Props> = ({ text }) => {
  const [truncate, setTruncate] = useState(text.length > 50);
  return (
    <div className="text-base mb-8">
      <p className="relative mb-1">
        {truncate ? `${text.slice(0, 200)} ...` : text}
      </p>
      <button
        className="text-cyan-200 italic"
        onClick={() => setTruncate((prev) => !prev)}
      >
        {truncate ? 'Keep reading' : 'See less'}
      </button>
    </div>
  );
};
