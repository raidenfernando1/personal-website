import React, { FC } from "preact/compat";
import styled from "styled-components";

interface PageLayoutTypes {
  children: React.ReactNode;
  paddingBlock?: string;
}

const PageLayout: FC<PageLayoutTypes> = ({ children, paddingBlock }) => {
  const Layout = styled.section`
    padding-block: ${paddingBlock};
  `;

  return <Layout>{children}</Layout>;
};

export default PageLayout;
