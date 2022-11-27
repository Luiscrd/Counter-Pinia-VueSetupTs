import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Client } from '@/clients/interfaces/client.interface';


export const useClientsStore = defineStore('clientsSetup', () => {

    const currentPage = ref<number>(1);

    const totalPages = ref<number>(5);

    const clients = ref<Client[]>([]);

    return {
        currentPage,
        totalPages,
        clients,
        setClients(newClients: Client[]) {

            clients.value = newClients;

        },
        setPge(page: number) {

            if (currentPage.value === page) return;

            currentPage.value = page;

        }
    }

})