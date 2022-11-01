import App from './app';

const port = process.env.APP_PORT || 3001;

App.listen(
  port,
  // eslint-disable-next-line no-console
  () => console.log(`Api rodando na porta ${port}`),
);