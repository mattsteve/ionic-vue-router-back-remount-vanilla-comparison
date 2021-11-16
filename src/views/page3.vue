<template>
    <ion-page>
        <ion-content>
            <p>This is page 3</p>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-property-decorator';
import router from '@/router';

@Options({
    name: 'page3-view'
})
export default class RootView extends Vue {
    goToPage1() {
        router.go(-2);
    }
}
</script>
