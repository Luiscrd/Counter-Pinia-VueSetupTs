<script setup lang='ts'>
import { useRouter } from 'vue-router';
import type { Client } from '@/clients/interfaces/client.interface';

interface Props {
    clients: Client[]
    route: string
}

const props = defineProps<Props>();

const router = useRouter();

const goTo = (id: number) => {

    router.push(`${props.route}${id}`);
}

</script>

<template>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Foto</th>
                <th scope="col">Edad</th>
                <th scope="col">Estado</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="client of props.clients" :key="client.id" @click="goTo(client.id)">
                <th scope="row">{{ client.id }}</th>
                <td>{{ client.name }}</td>
                <td>
                    <img :src="client.picture" :alt="client.name">
                </td>
                <td>{{ client.age }}</td>
                <td>
                    <span v-if="client.isActive" class="badge text-bg-success">Activo</span>
                    <span v-else class="badge text-bg-danger">Inactivo</span>
                </td>
            </tr>
        </tbody>
    </table>
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


tbody tr {
    cursor: pointer;
}

tbody tr:hover {
    transition: 0.3s;
    background: rgb(49, 49, 49);
    color: rgb(255, 255, 255);
}

</style>