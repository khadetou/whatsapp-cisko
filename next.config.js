/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    if (!isServer) {
      // Check if the ProvidePlugin is already added (to avoid duplication)
      const existingProvidePlugin = config.plugins.find(
        (plugin) => plugin instanceof webpack.ProvidePlugin
      );

      if (existingProvidePlugin) {
        // If the ProvidePlugin is already added, update its values
        existingProvidePlugin.definitions.$ = "jquery";
        existingProvidePlugin.definitions.jQuery = "jquery";
        existingProvidePlugin.definitions["window.jQuery"] = "jquery";
      } else {
        // If the ProvidePlugin is not added, add it
        config.plugins.push(
          new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
          })
        );
      }
    }

    return config;
  },
};

module.exports = nextConfig;
