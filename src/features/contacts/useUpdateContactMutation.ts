import { useMutation, useQueryClient } from '@tanstack/react-query';
import { client } from '../../api/client';
import { Contact } from './types';

interface UpdatedContact extends Partial<Contact> {
  id: number;
}

export function useUpdateContactMutation() {
  const queryClient = useQueryClient();

  const result = useMutation(
    (updatedContact: UpdatedContact) => {
      return client(
        `https://jsonplaceholder.typicode.com/users/${updatedContact.id}`,
        {
          method: 'PUT',
          body: JSON.stringify(updatedContact),
        }
      );
    },
    {
      onMutate: async (newContact) => {
        await queryClient.cancelQueries({ queryKey: ['contacts'] });

        const previousContacts: Contact[] =
          queryClient.getQueryData(['contacts']) || [];

        const previousContactIndex = previousContacts.findIndex(
          (contact) => contact.id === newContact.id
        );

        const previousContact = previousContacts[previousContactIndex];

        const newContacts = [...previousContacts];
        newContacts[previousContactIndex] = {
          ...previousContact,
          ...newContact,
        };

        if (previousContacts) {
          queryClient.setQueryData<Contact[]>(['contacts'], newContacts);
        }

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
