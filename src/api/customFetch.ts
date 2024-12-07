export const customFetch = async (
  url: string,
  method: 'GET' | 'POST' = 'GET',
  body?: Record<string, any>,
) => {
  const response = await fetch(url, {
    method: method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: method === 'POST' ? JSON.stringify(body) : undefined,
  });

  return await response.json();
};
