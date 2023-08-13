export async function client(
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) {
  const response = await fetch(input, init);

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message ?? `Response returned status ${response.status}`);
  }

  const data = await response.json();
  return data;
}
