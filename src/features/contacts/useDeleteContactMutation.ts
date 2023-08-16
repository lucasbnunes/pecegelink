import { useMutation, useQueryClient } from '@tanstack/react-query';
import { client } from '../../api/client';
import { Contact } from './types';

type DeletedContact = Pick<Contact, 'id'>;

export function useDeleteContactMutation() {
  const queryClient = useQueryClient();

  const result = useMutation(
    (deletedContact: DeletedContact) => {
      return client(
        `https://jsonplaceholder.typicode.com/users/${deletedContact.id}`,
        {
          method: 'DELETE',
        }
      );
    },
    {
      onMutate: async (deletedContact) => {
        await queryClient.cancelQueries({ queryKey: ['contacts'] });

        const previousContacts: Contact[] =
          queryClient.getQueryData(['contacts']) || [];

        const newContacts = previousContacts.filter(
          (contact) => contact.id !== deletedContact.id
        );

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
