<script setup lang='ts'>
import { useRouter } from 'vue-router';
import useCLientd from '@/clients/composables/useClients';

const { isError, isLoading } = useCLientd();

const router = useRouter();

const goTo = (id: number) => {

    router.push(`/client/${id}`);
}

</script>

<template>
     <!-- <div class="loading">
        <h1>Loading</h1>
        <img src="@/assets/loading.gif" class="bomb spin" alt="Bomb">
        <h3>Espere por favor...</h3>
    </div> -->
    <!-- <div v-if="hasError" class="error">
        <div class="error-int fade">
            <h1>WARNING</h1>
            <img src="@/assets/skull.png" class="alert" alt="Alert">
            <h3>Ocurrio un error</h3>
            <h4>{{ errorMessage }}</h4>
        </div>
    </div> -->
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Foto</th>
                <th scope="col">Nombre</th>
                <th scope="col">Estado</th>
            </tr>
        </thead>
        <tbody>
            <tr @click="goTo(1)">
                <th scope="row">1</th>
                <td>
                    <img src="https://cdn.iconscout.com/icon/free/png-128/avatar-380-456332.png" alt="Avatar">
                </td>
                <td>Donovan Bernardo</td>
                <td>
                    <span class="badge text-bg-danger">Inactivo</span>
                    <!-- <span class="badge text-bg-success">Activo</span> -->
                </td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>
                    <img src="https://cdn.iconscout.com/icon/free/png-128/avatar-366-456318.png" alt="Avatar">
                </td>
                <td>Mcclure Rollins</td>
                <td>
                    <!-- <span class="badge text-bg-danger">Inactivo</span> -->
                    <span class="badge text-bg-success">Activo</span>
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
    width: 70px;
    border-radius: 100%;
}

.loading img {
    width: 300px;
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