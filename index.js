/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  app.log.info("✅ mit10s GitHub app was loaded");
  app.on(
    ["pull_request.opened", "pull_request.synchronize"],
    async (context) => {
      app.log.info("🎁 New PR is submitted");
      // app.log.info(context.payload);
    }
  );
};
