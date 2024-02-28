import React from "react";

import NoImage from "@/assets/images/no-avatar.svg";
import { TruncatedText } from "./TruncatedText";

import { parseISO, format } from "date-fns";

type Props = {
  thumbUrl?: string;
  backgroundImgUrl?: string;
  name: string;
  place_of_birth?: string | null;
  role: string;
  gender: number;
  birthday?: string | null;
  deathday?: string | null;
  biography: string;
};

function getAge(birthDateString: string, referenceDateString?: string) {
  const referenceDate = referenceDateString
    ? parseISO(referenceDateString)
    : new Date();
  const birthDate = parseISO(birthDateString);
  let age = referenceDate.getFullYear() - birthDate.getFullYear();
  const m = referenceDate.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && referenceDate.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

function getGender(gender: number) {
  if (gender === 1) return "Female";
  else if (gender === 2) return "Male";
  else if (gender === 3) return "Non-binary";
  else return "Unknown";
}

export const CastInfo: React.FC<Props> = ({
  thumbUrl,
  backgroundImgUrl,
  name,
  place_of_birth,
  role,
  gender,
  birthday,
  deathday,
  biography,
}) => (
  <div className="relative w-full h-auto">
    <div className="relative h-full max-w-screen-xl mx-auto px-2 py-4">
      <div className="relative min-h-128 w-full h-full flex flex-col md:flex-row p-4 z-10 rounded-xl bg-slate-900/80">
        <div className="relative w-full h-96 md:h-auto md:w-1/3">
          <img
            src={thumbUrl || NoImage}
            alt=""
            className="object-cover rounded-lg pointer-events-none select-none animate-fade-in"
            sizes={
              thumbUrl
                ? "(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                : undefined
            }
          />
        </div>
        <section className="text-white px-0 py-4 md:py-0 md:px-8 w-full md:w-2/3 md:max-h-[38rem] md:overflow-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">{name}</h2>
          <h3 className="text-lg md:text-xl font-bold mb-3">Biography</h3>
          <TruncatedText text={biography} />
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-3">
              Personal Information
            </h3>
            <dl>
              {birthday ? (
                <>
                  <dt className="font-bold">Born</dt>
                  <dd className="mb-2">
                    {format(parseISO(birthday), "MMMM dd, yyyy")}
                    {deathday ? null : ` (${getAge(birthday)} years old)`}
                  </dd>
                </>
              ) : null}
              {deathday && birthday ? (
                <>
                  <dt className="font-bold">Died</dt>
                  <dd className="mb-2">
                    {format(parseISO(deathday), "MMMM dd, yyyy")}
                    {` (${getAge(birthday, deathday)} years old)`}
                  </dd>
                </>
              ) : null}
              {place_of_birth ? (
                <>
                  <dt className="font-bold">Place of birth</dt>
                  <dd className="mb-2">{place_of_birth}</dd>
                </>
              ) : null}
              <dt className="font-bold">Gender</dt>
              <dd className="mb-2">{getGender(gender)}</dd>
              <dt className="font-bold">Known for</dt>
              <dd className="mb-2">{role}</dd>
            </dl>
          </div>
        </section>
      </div>
    </div>
    {backgroundImgUrl ? (
      <img
        className="object-cover object-center pointer-events-none select-none animate-fade-in absolute w-full h-full top-0 left-0"
        src={backgroundImgUrl}
        alt=""
      />
    ) : null}
  </div>
);
