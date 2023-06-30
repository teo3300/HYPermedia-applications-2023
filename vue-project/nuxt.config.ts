// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '~/assets/css/general.css'
    ],
    ssr: true,
    runtimeConfig: {
        dev: 0,
        public: {
            serverURL: "http://localhost:3001",
            baseURL: '/HYPermedia-applications-2023'
        }
    },
    app: {
        baseURL: '/HYPermedia-applications-2023'
    }
})
