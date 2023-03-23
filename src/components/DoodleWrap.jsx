import styled from "styled-components";
import { Image } from "./Image";

export const DoodleWrap = styled(Image)`
  position: absolute;
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
`;
