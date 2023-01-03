const ErrorHandlingPlugin = {
  install: (app: any, options: any) => {
    console.log(app);
    console.log(options);
    app.config.errorHandler = (err: unknown) => {
      handler(err);
    };
    // Vue.js以外のエラー
    window.addEventListener('error', (event) => {
      handler(event.error);
    });

    // Promise経由で呼び出されるエラー(Promise.reject)
    window.addEventListener('unhandledrejection', (event) => {
      handler(event.reason);
    });
  },
};

const handler = (error: any): void => {
  console.log(error);
};

export { ErrorHandlingPlugin };
