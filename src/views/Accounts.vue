<template>
    <div class="account-page bg-secondary text-light">
        <h2>Account Page</h2>
        <div class="line-separator"></div>
        <small>User data</small>
        <img :src="userPic" alt="#" />
        <p>{{userName}}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Accounts',
    computed: {
        ...mapGetters({userName: 'userMod/getUserName',
        userPic: 'userMod/getUserAvatar'})
    }
}
</script>