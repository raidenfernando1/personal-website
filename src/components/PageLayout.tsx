import { FC } from "preact/compat";
import styled from "styled-components";

const PageLayout: FC<{ paddingBlock?: string }> = ({
  children,
  paddingBlock = `10px`, // default value
}) => {
  const Layout = styled.section`
    padding-block: ${paddingBlock};
  `;

  return <Layout>{children}</Layout>;
};

export default PageLayout;
