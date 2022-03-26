import { createRouter, createWebHashHistory, createMemoryHistory } from '@ionic/vue-router';
import routes from './routes';

let router = createRouter({
    history: createMemoryHistory(),
    routes
});

export default router;

