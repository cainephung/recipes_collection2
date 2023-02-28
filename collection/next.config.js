// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

//ccmodule.exports = nextConfig

module.exports = {
  reactStrictMode: true,
  webpack: (config) =>{
    config.resolve.fallback = {fs: false, child_process: false, dns: false, net: false, tls: false}
    return config;
  },
     
    };

  

