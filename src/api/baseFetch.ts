export const baseFetch = async <ReturnType>(
  endpoint: string
): Promise<ReturnType> => {
  const response = await fetch(endpoint);

  if (!response.ok) throw new Error('Error: unable to fetch from api.');
  const data = await response.json();
  return data;
};
