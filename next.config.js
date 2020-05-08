// module.exports = {
//   devIndicators: {
//     // autoPrerender: false //індикатор, який повідомляє вас про можливу статичну оптимізацію сторінки
//   }
// };

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
