import styled, { css } from "styled-components";
import breakpointsMedia from "../utils/breakpointsMedia";
import propToStyle from "../utils/propToStyle";

interface IContainer {
  margin?: string | object;
  width?: string | number;
  marginLeft?: string | object;
  paddingLeft?: string | object;
  display?: string | object;
  flex?: number | object;
  justifyContent?: string | object;
}

export const Container = styled.div<IContainer>`
width: 100%;
padding-right: 28px;
padding-left: 28px;
margin-right: auto;
margin-left: auto;
max-width: initial; 

${breakpointsMedia({
  sm: css`
    max-width: 576px;
  `,
  md: css`
      max-width: 768px;
      padding-right: 16px;
      padding-left: 16px
    `,
  lg: css`
    max-width: 1160px;
  `,
  xl: css`
    max-width: 1222px;
  `
})}
${propToStyle('display')}
${propToStyle('margin')}
${propToStyle('flex')}
${propToStyle('justifyContent')}
`

export const Grid = {
  Container,
  Row: styled.div<IContainer>`
  display: flex;
  flex-wrap: wrap;
  margin-right: -16px;
  margin-left: -16px;
  ${propToStyle('flex')}
  ${propToStyle('marginLeft')}
  ${propToStyle('paddingLeft')}
  ${propToStyle('justifyContent')}
  ${propToStyle('margin')}
`,
}