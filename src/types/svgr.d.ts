declare module "*.svg?react" {
  import { FunctionComponent } from "preact";
  const Component: FunctionComponent<JSX.IntrinsicElements["svg"]>;
  export default Component;
}
