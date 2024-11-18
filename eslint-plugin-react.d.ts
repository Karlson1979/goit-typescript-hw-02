declare module "eslint-plugin-react" {
  import { Linter } from "eslint";

  const reactPlugin: Linter.Plugin;
  export = reactPlugin;
}
