<script setup lang="ts">
import ClientList from '@/clients/components/ClientList.vue';
import PaginationNumbers from '@/clients/components/PaginationNumbers.vue';
import LoadingList from '@/shared/components/LoadingList.vue';
import useCLientd from '@/clients/composables/useClients';

const { clients, totalPages, currentPage, getPages } = useCLientd();

</script>

<template>
    <div>
        <h3>Listado Clientes</h3>
        <hr>
        <ClientList route="/client/" :clients="clients" />
        <PaginationNumbers :current-page="currentPage" :total-pages="totalPages" @page-changed="getPages" />
        <LoadingList />
    </div>
</template>

<style scoped>

</style>