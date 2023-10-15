const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  install() {
    this.spawnCommand("pnpm", [
      "i",
      "-E",
      "-D",
      "eslint",
      "prettier",
      "eslint-config-prettier",
      "eslint-plugin-prettier",
      "@typescript-eslint/parser",
      "@typescript-eslint/eslint-plugin",
      "eslint-plugin-react",
      "eslint-plugin-react-hooks",
      "eslint-plugin-import",
      "eslint-import-resolver-typescript",
    ]);
  }

  applyEslint() {
    this.fs.delete(this.destinationPath(".eslintrc.json"));
    this.fs.copy(this.templatePath(".eslintrc.json"), this.destinationPath(".eslintrc.json"));
  }
};
