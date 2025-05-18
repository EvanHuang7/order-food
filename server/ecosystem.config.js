module.exports = {
  apps: [
    {
      name: "order-food",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
