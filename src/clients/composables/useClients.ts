import type { Client } from "@/clients/interfaces/client.interface";
import clientApi from '@/api/clients-api';
import { useQuery } from '@tanstack/vue-query';
import { useClientsStore } from '@/store/clients';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';

const getClients = async (page: number): Promise<Client[]> => {

    // await new Promise(resolve => {
    //     setTimeout(() => resolve(true), 1500);
    // })
    
    const { data } = await clientApi.get<Client[]>(`/clients?_page=${page}`);
    return data;
}

const useCLientd = () => {

    const store = useClientsStore();

    const { currentPage, clients, totalPages } = storeToRefs(store);

    const { isError, isLoading, data, error } = useQuery(
        ['clients?page=', currentPage],
        () => getClients(currentPage.value),
       
    )

    watch(data, clients => {
        if (clients) store.setClients(clients);
    }, {immediate: true})

    return {
        isError,
        error,
        isLoading,
        clients,
        loading: store.loading,
        currentPage,
        totalPages,
        getPages(page: number) {
            store.setPge(page);
        },
    }

}

export default useCLientd;