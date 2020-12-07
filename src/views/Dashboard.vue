<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Dashboard</a>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Logout</a>
                </li>
            </ul>
        </nav>

    <div class="container">
        <div class="row">
            <div class="col-lg-6 mx-lg-auto py-5">

                <form>
                <div class="form-group">
                    <label for="gameName">Nombre del Juego</label>
                    <input type="text" class="form-control" id="gameName">
                </div>
                <div class="form-group">
                    <label for="gameDescription">Descripción</label>
                    <textarea class="form-control" id="gameDescription" rows="3"></textarea>
                </div>
                <div class="form-group">
                    <label for="gameGenre">Género</label>
                    <input type="text" class="form-control" id="gameGenre">
                </div>
                <div class="form-group">
                    <label for="gameImage">Miniatura</label>
                    <input type="text" class="form-control" id="gameImage">
                </div>
                <div class="form-group">
                    <label for="gameUrl">Url del Juego</label>
                    <input type="text" class="form-control" id="gameUrl">
                </div>

                <button type="submit" class="btn btn-success">Guardar Juego</button>
                </form>

            </div>
        </div>
   </div>

    </div>
</template>

<script>
export default {
    name: 'Dashboard',
}
</script>