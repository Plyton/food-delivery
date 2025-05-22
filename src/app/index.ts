import { createApp } from 'vue';
import App from './App.vue';
import { router, store } from './providers';

const app = createApp(App).use(store).use(router);

app.config.errorHandler = (err, instance, info) => {
  console.error(err, instance, info);
};

export { app };
