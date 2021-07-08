const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "components")],
    prependData: `
      $xs: 4px;
      $sm: 8px;
      $md: 16px;
      $lg: 32px;
      $xl: 64px;
  `,
  },
};
