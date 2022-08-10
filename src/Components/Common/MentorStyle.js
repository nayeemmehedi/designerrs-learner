import styled from "styled-components";

// export const Tag = styled.div`
//   white-space: nowrap;
//   width: ${(props) => props.width};
//   overflow: hidden;
//   text-overflow: ellipsis;
//   font-size: ${(props) => props.font};
//   font-weight: ${(props) => props.weigth};
// `;

export const StyleMentor = styled.div`
  
  width: ${(props) => props.width} ;
  height: ${(props) => props.height} ;
  object-fit: cover;
  position:relative;
  top: ${(props) => props.top} ;
  bottom:${(props) => props.bottom}

  
`;

