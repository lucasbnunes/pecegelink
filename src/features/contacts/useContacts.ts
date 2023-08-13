import { useQuery } from 'react-query';
import { client } from '../../api/client';

export function useContacts() {
  const result = useQuery('contacts', async () => {
    return await client('https://jsonplaceholder.typicode.com/users');
  });

  return result;
}