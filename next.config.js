/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    // output: 'export',
    // images: {
    //     loader: 'custom',
    //     loaderFile: './my-loader.js',
    // },
}
// experimental: {
//     appDir: true,
// }
// const isProd = process.env.NODE_ENV === 'production'
// module.exports = {
//     // Use the CDN in production and localhost for development.
//     assetPrefix: isProd ? 'http://localhost:3000' : undefined,
// }


module.exports = nextConfig