<template>
    <div class="main-wrapper" id="app">
        <BaseHeader>
            <BaseMenu/>
        </BaseHeader>
        <BaseMain />
        <BaseFooter />
    </div>
</template>
<script>
import BaseHeader from '@/components/layout/BaseHeader';
import BaseMain from '@/components/layout/BaseMain';
import BaseFooter from '@/components/layout/BaseFooter';
import BaseMenu from '@/components/share-tools/BaseMenu';
export default {
    name:'BaseLayout',
    components:{
        BaseHeader,
        BaseMain,
        BaseFooter,
        BaseMenu
    }
}
</script>