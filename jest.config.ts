const customJestConfig = {
  preset: "jest-expo",
  setupFilesAfterEnv: ["./src/tests/setupTest.ts"],
};

module.exports = customJestConfig;
