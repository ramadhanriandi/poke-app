import styled from '@emotion/styled';

export const StyledOverlayBackground = styled.div`
  backdrop-filter: blur(10px);
  background-color: #1e273222;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  padding-top: 200px;
  position: fixed;
  right: 0;
  top: 0;
  transition: backdrop-filter 250ms ease-out;
  z-index: 30;
`