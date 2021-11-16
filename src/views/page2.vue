<template>
    <ion-page>
        <ion-content>
            <p>This is page 2</p>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-property-decorator';
import router from '@/router';

@Options({
    name: 'page2-view'
})
export default class RootView extends Vue {
    goNextPage() {
        router.push({ name: 'page3' });
    }
}
</script>
