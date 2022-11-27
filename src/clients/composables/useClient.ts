import { ref, watch } from 'vue';
import type { Client } from '@/clients/interfaces/client.interface';
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query';
import clientApi from '@/api/clients-api';
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';

const getClient = async (id: number): Promise<Client> => {

    const { data } = await clientApi.get(`/clients/${id}`);

    return data;

}

const updateClient = async (client: Client): Promise<Client> => {

    const { data } = await clientApi.patch<Client>(`/clients/${client.id}`, client);

    return data;

}

const useCLient = (id: number) => {

    const client = ref<Client>();

    const queryClient = useQueryClient();

    const queris = queryClient.getQueryCache().findAll(['clients?page='],{exact: false});

    const clientMutation = useMutation(updateClient);

    const router = useRouter();

    const { isError, isLoading, data, error } = useQuery(
        ['client', id],
        () => getClient(id),
    );

    watch(clientMutation.isSuccess, () => {

        if (clientMutation.isSuccess) {

            queris.forEach(query => query.reset());

            Swal.fire({
                icon: 'success',
                title: 'Guardado',
                text: 'Usuariio Actualizado',
                confirmButtonColor: 'rgb(9, 183, 15)',
            }).then((result) => {
                if (result.isConfirmed) {
                    router.push('/client/list');
                }
            })

        }
    })

    watch(data, () => {

        if (data.value) client.value = { ...data.value };

    }, { immediate: true })

    return {
        isLoading,
        isError,
        error,
        client,
        clientMutation
    }

}

export default useCLient;