<script setup lang="ts">

</script>

<template>
    <div>
        <h3>Listado Clientes</h3>
        <hr>
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
                <tr>
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
    </div>
</template>

<style scoped>
table {
    color: gray;
    vertical-align: middle;
}

img {
    width: 50px;
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