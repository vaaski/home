module.exports = {
  apps: [
    {
      script: "./lib/index.js",
      name: "hctrl",
      node_args: "-r dotenv/config",
    },
  ],
}
