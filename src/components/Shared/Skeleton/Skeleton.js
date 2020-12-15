import React from "react";
import styled from "styled-components";
import ContentLoader from "react-content-loader";
const Container = styled.div`
  height: 100%;
  width: 100%;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const Skeleton = () => (
  <Container>
    <ContentLoader
      speed={2}
      width={400}
      height={57}
      viewBox="0 0 400 57"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="174" y="154" rx="0" ry="0" width="2" height="1" />
      <rect x="140" y="115" rx="0" ry="0" width="9" height="3" />
      <rect x="58" y="38" rx="0" ry="0" width="1" height="3" />
      <rect x="6" y="14" rx="0" ry="0" width="366" height="58" />
      <rect x="368" y="54" rx="0" ry="0" width="6" height="21" />
    </ContentLoader>
  </Container>
);

export default Skeleton;
