import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Contact } from './types';
import { client } from '../../api/client';

type NewContact = Omit<Contact, 'id'>;

export function useCreateContactMutation() {
  const queryClient = useQueryClient();

  const result = useMutation(
    (newContact: NewContact) => {
      return client(`https://jsonplaceholder.typicode.com/users/`, {
        method: 'POST',
        body: JSON.stringify(newContact),
      });
    },
    {
      onMutate: async (newContact) => {
        await queryClient.cancelQueries({ queryKey: ['contacts'] });

        const previousContacts: Contact[] =
          queryClient.getQueryData(['contacts']) || [];

        queryClient.setQueryData<Contact[]>(
          ['contacts'],
          [
            ...previousContacts,
            { ...newContact, id: Math.floor(Math.random() * 1000) },
          ]
        );

        return { previousContacts };
      },
      onError: (_err, _newTodo, context) => {
        if (context) {
          queryClient.setQueryData(['contacts'], context.previousContacts);
        }
      },
    }
  );

  return result;
}
