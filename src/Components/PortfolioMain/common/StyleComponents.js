import styled from "styled-components";

export const Tag = styled.div`
  white-space: nowrap;
  width: ${(props) => props.width};
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: ${(props) => props.font};
  font-weight: ${(props) => props.weigth};
`;

export const TagValue = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => props.line};
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: ${(props) => props.font};
  font-weight: ${(props) => props.weigth};
`;
