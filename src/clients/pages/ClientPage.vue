<script setup lang='ts'>
import useCLient from '@/clients/composables/useClient';
import LoadingList from '@/shared/components/LoadingList.vue';
import { useRoute, useRouter } from 'vue-router';
import { watch } from 'vue';

const route = useRoute();

const { isError, isLoading, client, error, clientMutation } = useCLient(+route.params.id);

const router = useRouter();

watch(isError, () => {

    if (isError.value) {

        setTimeout(() => {

            router.replace('/client/list');

        }, 3000);
    }

})

const goTo = () => {

    router.push('/client/list');
}

</script>

<template>
    <h2 v-if="client">{{ client.name }}</h2>
    <hr>
    <LoadingList :is-error="isError" :is-loading="isLoading" :error="error" />
    <img v-if="client" :src="client.picture" :alt="client.name">
    <form v-if="client" @submit.prevent="clientMutation.mutate(client!)">
        <div class="mb-3 row">
            <label class="col-sm-2 col-form-label">Nombre</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" v-model="client.name" placeholder="Introduce Nombre...">
            </div>
        </div>
        <div class="mb-3 row">
            <label class="col-sm-2 col-form-label">Dirección</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" v-model="client.address" placeholder="Introduce Dirección...">
            </div>
        </div>
        <div class="mb-3 row">
            <label class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
                <input type="email" class="form-control" v-model="client.email" placeholder="Introduce Email...">
            </div>
        </div>
        <div class="mb-3 row">
            <label class="col-sm-2 col-form-label">Teléfono</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" v-model="client.phone" placeholder="Introduce Teléfono...">
            </div>
        </div>
        <div class="mb-3 row">
            <label class="col-sm-2 col-form-label">Compañia</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" v-model="client.company" placeholder="Introduce compañia...">
            </div>
        </div>
        <div class="mb-3 row">
            <label class="col-sm-2 col-form-label">Edad</label>
            <div class="col-sm-10">
                <input type="number" class="form-control" v-model="client.age" min="0" placeholder="Introduce Edad...">
            </div>
        </div>
        <div class="mb-3 row">
            <label class="col-sm-2 col-form-label">Genero</label>
            <div class="col-sm-10">
                <select class="form-select" v-model="client.gender">
                    <option selected>Selecciona un Genero</option>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="otro">Otro</option>
                </select>
            </div>
        </div>
        <div class="mb-3 row">
            <label class="col-sm-2 col-form-label">C. Ojos</label>
            <div class="col-sm-10">
                <select class="form-select" v-model="client.eyeColor">
                    <option selected>Selecciona un color</option>
                    <option value="verde">Verde</option>
                    <option value="marron">Marron</option>
                    <option value="azul">Azul</option>
                </select>
            </div>
        </div>
        <div class="mb-3 row">
            <label class="col-sm-2 col-form-label">Estado</label>
            <div class="col-sm-10">
                <select class="form-select" v-model="client.isActive">
                    <option selected>Selecciona un Estado</option>
                    <option :value="true">Activo</option>
                    <option :value="false">Inactivo</option>
                </select>
            </div>
        </div>
        <div class="mb-3 row">
            <label class="col-sm-2 col-form-label">Imagen</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" v-model="client.picture" placeholder="Introduce url valido...">
            </div>
        </div>
        <button type="submit" class="btn btn-outline-success save"
            :disabled="clientMutation.isLoading.value">Guaradr</button>
        <button type="submit" class="btn btn-outline-warning return" @click="goTo()">Volver</button>
    </form>
</template>

<style scoped>
.form-control {
    color: #212529;
    background-color: rgb(236, 233, 233);
    border: 1px solid #a0a0a0;
}

.form-control:focus {
    color: #212529;
    background-color: rgb(249, 249, 249);
    border-color: #419b05;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(4, 165, 10, 0.25);
}

.col-form-label {
    text-align: left;
}

.form-select:focus {
    border-color: #419b05;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(4, 165, 10, 0.25);
}

.form-select {
    color: #212529;
    background-color: rgb(236, 233, 233);
    border: 1px solid #a0a0a0;
}

.save,
.return {
    width: 48%;
    margin-top: 5px;
    margin-bottom: 30px;
}

.return {
    margin-left: 4%;
}

h2 {
    color: #ffc107;
}

img {
    margin-bottom: 20px;
    margin-top: 5px;
}
</style>