module.exports = {
  projects: [
    {
      displayName: "lint:prettier",
      preset: "jest-runner-prettier",
      testPathIgnorePatterns: ["/node_modules/", "/dist/"],
    },
  ],
};
