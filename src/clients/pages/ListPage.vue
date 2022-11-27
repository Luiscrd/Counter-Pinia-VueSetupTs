<script setup lang="ts">
import ClientList from '@/clients/components/ClientList.vue';
import PaginationNumbers from '@/clients/components/PaginationNumbers.vue';
import LoadingList from '@/shared/components/LoadingList.vue';
import useCLientd from '@/clients/composables/useClients';

const { clients, totalPages, currentPage, getPages, isLoading, isError } = useCLientd();

</script>

<template>
    <div>
        <h2>Listado Clientes</h2>
        <hr>
        <ClientList v-if="!isLoading" route="/client/" :clients="clients" />
        <PaginationNumbers :current-page="currentPage" :total-pages="totalPages" @page-changed="getPages" />
        <LoadingList :is-error="isError" :is-loading="isLoading" />
    </div>
</template>

<style scoped>
h2 {
    color: #ffc107;
}
</style>