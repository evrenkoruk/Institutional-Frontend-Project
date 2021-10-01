module.exports = {
  apps : [
    {
      name: "Ultavlar",
      script: "./node_modules/nuxt-start/bin/nuxt-start.js",
      env: {
        "HOST": "127.0.0.1",
        "PORT": 3001,
        "NODE_ENV": "production",
      }
    }
  ]
}
