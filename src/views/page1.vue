<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Page 1</ion-title>
                <ion-buttons slot="start">
                    <ion-back-button />
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <p>This is page 1</p>
            <ion-button color="primary" expand="block" @click="goNextPage()">
                Go to next page
            </ion-button>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-property-decorator';
import { toastController } from '@ionic/vue';
import router from '@/router';

@Options({
    name: 'page1-view'
})
export default class Page1View extends Vue {
    async mounted() {
        (await toastController.create({
            color: 'success',
            message: 'Page 1 mounted.',
            position: 'top',
            duration: 2000
        })).present();
    }

    goNextPage() {
        router.push({ name: 'page2' });
    }
}
</script>
