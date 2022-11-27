<script setup lang='ts'>
import { useRouter } from 'vue-router';
import useCLientd from '@/clients/composables/useClients';
import PaginationNumbers from '@/clients/components/PaginationNumbers.vue';

const { isError, isLoading, clients } = useCLientd();

const router = useRouter();

const goTo = (id: number) => {

    router.push(`/client/${id}`);
}

</script>

<template>
    <div v-if="isLoading" class="loading">
        <h1>Loading</h1>
        <img src="@/assets/loading.gif" class="bomb spin" alt="Bomb">
        <h3>Espere por favor...</h3>
    </div>
    <div v-if="isError" class="error">
        <div class="error-int">
            <h1>WARNING</h1>
            <img src="@/assets/caution.gif" class="alert" alt="Alert">
            <h3>Ocurrio un error</h3>
        </div>
    </div>
    <table class="table" v-if="clients.length > 1">
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Foto</th>
                <th scope="col">Nombre</th>
                <th scope="col">Estado</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="client of clients" :key="client.id" @click="goTo(client.id)">
                <th scope="row">{{ client.id }}</th>
                <td>
                    <img :src="client.picture" :alt="client.name">
                </td>
                <td>{{ client.name }}</td>
                <td>
                    <span v-if="client.isActive" class="badge text-bg-success">Activo</span>
                    <span v-else class="badge text-bg-danger">Inactivo</span>
                </td>
            </tr>
        </tbody>
    </table>
    <PaginationNumbers />
</template>

<style scoped>
table {
    color: gray;
    vertical-align: middle;
}

img {
    width: 60px;
    border-radius: 100%;
}

.loading img {
    width: 300px;
}

.error img {
    width: 300px;
    filter: brightness(2000%);
}


tbody tr {
    cursor: pointer;
}

tbody tr:hover {
    transition: 0.3s;
    background: rgb(49, 49, 49);
    color: rgb(255, 255, 255);
}

.loading,
.error {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.error-int {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

h3 {
    margin-bottom: 30px;
}
</style>