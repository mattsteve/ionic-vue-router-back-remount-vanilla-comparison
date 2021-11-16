<template>
    <ion-app id="app">
        <ion-tabs>
            <ion-router-outlet />
            <ion-tab-bar slot="bottom">
                <ion-button @click="goTab('page1')">Page 1</ion-button>
                <ion-button @click="goTab('page3')">Page 3</ion-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-app>
</template>

<script lang="ts">
import { Options, Vue, Watch, mixins } from 'vue-property-decorator';
import router from '@/router';

export default class App extends Vue {
    public goTab(routeName: string) {
        const currentRouteName = router.currentRoute.value.name;
        if (currentRouteName == 'page2') {
            // User must have started on page1 to get to page 2.
            // Go back before replacing so history is managed properly.
            router.go(-1);
        }
        setTimeout(() => {
            router.replace(routeName);
        }, 50);
    }
}
</script>
