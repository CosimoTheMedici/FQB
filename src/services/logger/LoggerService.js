import * as Sentry from "@sentry/react";

function init() {
  Sentry.init({
    dsn: "https://80af049d18d94044a2a460a1a8c605d7@o436111.ingest.sentry.io/5313775",
  });
}

function log(message, level) {
  //   console.log({ message, level });
  // Sentry.withScope(scope => {
  //     scope.setLevel(level);
  //     if(level === 'info') {
  //         Sentry.captureMessage(message);
  //     } else {
  //         Sentry.captureException(new Error(message))
  //     }
  //   });
}

export default {
  init,
  log,
};