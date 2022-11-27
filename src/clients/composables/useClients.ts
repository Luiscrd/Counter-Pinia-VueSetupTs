import type { Client } from "@/clients/interfaces/client.interface";
import clientApi from '@/api/clients-api';
import { useQuery } from '@tanstack/vue-query';

const getClients = async(): Promise<Client[]> => {

    const { data } = await clientApi.get<Client[]>('/clients?_page=1');

    return data;
}

const useCLientd = () => {

    const { isError, isLoading, data } = useQuery(
        ['clients?page=', 1],
        () => getClients()
    )
    
    return {
        isError,
        isLoading,
        data
    }

}

export default useCLientd;