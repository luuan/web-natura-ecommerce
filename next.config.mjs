/** @type {import('next').NextConfig} */
 function defineNextConfig(config) {
    return config
 }

 export default defineNextConfig ({
    reactStrictMode: true,
    swcMinify: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [{ loader: '@svgr/webpack', options: {icon:true}}]
        })

        return config
    },
    images: {
        remotePatterns: [{ hostname: 'production.na01.natura.com' }, {hostname: 'api-teste-natura-v1.onrender.com'}]
    },
 })