import { ref, watch } from 'vue';
import type { Client } from '@/clients/interfaces/client.interface';
import { useQuery } from '@tanstack/vue-query';
import clientApi from '@/api/clients-api';

const getClient = async(id: number): Promise<Client> => {

    const { data } = await clientApi.get(`/clients/${id}`);

    return data;

}

const useCLient = (id: number) => {

    const client = ref<Client>();

    const { isError, isLoading, data } = useQuery(
        ['client', id],
        () => getClient(id),
    );

    watch(data, () => {

        if (data.value) client.value = {...data.value};

    }, {immediate: true})

    return {
        isLoading,
        isError,
        client
    }

}

export default useCLient;