<template>
    <div class="error-wrapper">
        <h1>Not found!</h1>
        <h3>Something went wrong...</h3>
        <router-link to="/" class="btn btn-danger">Back to Home</router-link>
    </div>
</template>

<script>
export default {
    name: 'NotFound',
}
</script>