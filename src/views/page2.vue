<template>
    <div>
        <h1>Page 2</h1>
        <button @click="goBack()">
            Go back to page 1
        </button>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-property-decorator';
import router from '@/router';

@Options({
    name: 'page2-view'
})
export default class Page2View extends Vue {
    async mounted() {
        alert('Page 2 mounted.');
    }

    goBack() {
        router.go(-1);
    }
}
</script>
