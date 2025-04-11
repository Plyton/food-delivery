import { createApp } from 'vue';
import { router, store } from './providers';
import App from './App.vue';

const app = createApp(App).use(store).use(router);

app.config.errorHandler = (err, instance, info) => {
  console.error(info);
};

export { app };
