<template>
    <ion-app id="app">
        <ion-tabs>
            <ion-router-outlet />
        </ion-tabs>
    </ion-app>
</template>

<script lang="ts">
import { Options, Vue, Watch, mixins } from 'vue-property-decorator';
import router from '@/router';

export default class App extends Vue {
}
</script>
