<script setup lang='ts'>
// import LoadingList from '@/shared/components/LoadingList.vue';


</script>

<template>
    <h2>Pagina Cliente</h2>
    <hr>
    <!-- <LoadingList /> -->
    <img src="https://cdn.iconscout.com/icon/free/png-128/avatar-370-456322.png" alt="Avatar">
    <form>
        <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Nombre</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" placeholder="Introduce Nombre...">
            </div>
        </div>
        <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Dirección</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" placeholder="Introduce Dirección...">
            </div>
        </div>
        <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
                <input type="email" class="form-control" placeholder="Introduce Email...">
            </div>
        </div>
        <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Teléfono</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" placeholder="Introduce Teléfono...">
            </div>
        </div>
        <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Compañia</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" placeholder="Introduce compañia...">
            </div>
        </div>
        <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Edad</label>
            <div class="col-sm-10">
                <input type="number" class="form-control" min="0" placeholder="Introduce Edad...">
            </div>
        </div>
        <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Genero</label>
            <div class="col-sm-10">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Selecciona un Genero</option>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="otro">Otro</option>
                </select>
            </div>
        </div>
        <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">C. Ojos</label>
            <div class="col-sm-10">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Selecciona un color</option>
                    <option value="verde">Verde</option>
                    <option value="marron">Marron</option>
                    <option value="azul">Azul</option>
                </select>
            </div>
        </div>
        <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Imagen</label>
            <div class="col-sm-10">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Introduce url valido...">
                    <button class="btn btn-outline-warning" type="button" id="button-addon2">Validar</button>
                </div>
            </div>
        </div>
        <button type="submit" class="btn btn-outline-warning save">Guaradr</button>
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

.save {
    width: 100%;
    margin-top: 5px;
    margin-bottom: 30px;
}

h2 {
    color: #ffc107;
}

img {
    margin-bottom: 20px;
    margin-top: 5px;
}
</style>