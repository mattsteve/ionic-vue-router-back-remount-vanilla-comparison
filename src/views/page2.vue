<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Page 2</ion-title>
                <ion-buttons slot="start">
                    <ion-back-button />
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <p>This is page 2</p>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-property-decorator';
import { toastController } from '@ionic/vue';
import router from '@/router';

@Options({
    name: 'page2-view'
})
export default class Page2View extends Vue {
    async mounted() {
        (await toastController.create({
            color: 'success',
            message: 'Page 2 mounted.',
            position: 'top',
            duration: 2000
        })).present();
    }

    goNextPage() {
        router.push({ name: 'page3' });
    }
}
</script>
