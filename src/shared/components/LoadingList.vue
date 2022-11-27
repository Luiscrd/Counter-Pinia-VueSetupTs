<script setup lang='ts'>
import useCLientd from '@/clients/composables/useClients';


const { isError, isLoading } = useCLientd();
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
</template>

<style scoped>
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
.loading img {
    width: 300px;
}

.error img {
    width: 300px;
    filter: brightness(2000%);
}

h3 {
    margin-bottom: 30px;
}
</style>