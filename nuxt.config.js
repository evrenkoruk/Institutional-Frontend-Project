export default {
  components: true,
  server: {
    port: 3001,
  },
  buildModules: [
    '@nuxtjs/axios',
  ],
  modules: [
    "nuxt-i18n",
    '@nuxtjs/axios',
    [
      "nuxt-gmaps",
      {
        key: "<API-Key>",
        //you can use libraries: ['places']
      },
    ],
  ],
  axios: {
    baseURL: `https://ultavlar-service.saasdev.net/api`,
  },
  plugins: [
      { src: "~/plugins/tinySlider.js", mode: "client" },
    { src: '~/plugins/cool-lightbox', ssr: false },
    ],
  i18n: {
    locales: [
      {
        code: "tr",
        name: "Türkçe",
        file: "tr.js",
      },
      {
        code: "en",
        name: "English",
        file: "en.js",
      },
      {
        code: "de",
        name: "Deutsche",
        file: "de.js",
      },
    ],
    langDir: "i18n/",
    defaultLocale: "tr",
  },
  head: {
    htmlAttrs: {
      lang: "tr",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    link: [
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.0.13/css/all.css",
        integrity: "sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp",
        crossorigin: "anonymous",
      },
    ],
  },
};
