<template>
    <div>
        <h1>Page 1</h1>
        <button @click="goNextPage()">
            Go to next page
        </button>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-property-decorator';
import router from '@/router';

@Options({
    name: 'page1-view'
})
export default class Page1View extends Vue {
    async mounted() {
        alert('Page 1 mounted.');
    }

    goNextPage() {
        router.push({ name: 'page2' });
    }
}
</script>
