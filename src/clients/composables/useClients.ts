import type { Client } from "@/clients/interfaces/client.interface";
import clientApi from '@/api/clients-api';
import { useQuery } from '@tanstack/vue-query';
import { useClientsStore } from '@/store/clients';
import { storeToRefs } from 'pinia';
import { watch, computed } from 'vue';

const getClients = async (page: number): Promise<Client[]> => {
    const { data } = await clientApi.get<Client[]>(`/clients?_page=${page}`);
    return data;
}

const useCLientd = () => {

    const store = useClientsStore();

    const { currentPage, clients, totalPages } = storeToRefs(store);

    const { isError, isLoading, data } = useQuery(
        ['clients?page=', currentPage],
        () => getClients(currentPage.value),
       
    )

    watch(data, clients => {
        if (clients) store.setClients(clients);
    })

    return {
        isError,
        isLoading,
        clients,
        currentPage,
        totalPages,
        getPages(page: number) {
            store.setPge(page);
        },
        totalPagesNumber: computed(
            () => [...new Array(totalPages.value)].map((v, i) => i + 1)
        ),
    }

}

export default useCLientd;