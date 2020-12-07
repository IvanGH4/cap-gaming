<template>
      <h2>{{title}} <span class="pixel">{{subTitle}}</span></h2>
</template>

<script>
export default {
    name: 'BaseLogo',
    props:{
        title:{
            type: String,
            default: 'CAPITAL'
        },
        subTitle:{
            type: String,
            default: 'america'
        }
    }
}
</script>