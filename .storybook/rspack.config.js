const path = require("path")

module.exports = ({ config }) => {
  config.resolve ??= {}
  config.resolve.alias ??= {}
  config.resolve.alias = {
    ...config.resolve.alias,
    "@chakra-ui/react": path.resolve(
      __dirname,
      "../packages/components/react/src",
    ),
    "@chakra-ui/theme": path.resolve(
      __dirname,
      "../packages/components/theme/src",
    ),
  }
  return config
}
