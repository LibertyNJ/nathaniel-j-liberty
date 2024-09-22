import styled from 'styled-components';

import {
  baseline,
  borderThickness,
  breakpoint,
  transition,
  typography,
} from '../../../style';
import Props from './Props';

export default styled.button<Props>`
  background: none;
  border: ${borderThickness} solid ${(props) => props.theme.contrast};
  border-radius: ${baseline};
  color: ${(props) => props.theme.contrast};
  display: block;
  font-family: ${typography.font.monospace};
  text-align: center;
  text-decoration: none;
  transition:
    background ${transition.duration},
    color ${transition.duration},
    filter ${transition.duration};
  white-space: nowrap;
  ${(props) => props.$unlimitedWidth && 'width: 100%;'}

  &:focus {
    background: ${(props) => props.theme.base};
    filter: drop-shadow(0 0 5px ${(props) => props.theme.contrast});
  }

  &:hover {
    background: ${(props) => props.theme.contrast};
    color: ${(props) => props.theme.base};
    cursor: pointer;
  }

  ${(props) => {
    switch (props.size) {
      case 'large':
        return `
          font-size: ${typography.fontSize.h4.xs};
          line-height: ${typography.lineHeight.h4.xs};
          padding: calc(6 * ${baseline} - ${borderThickness});
          
          @media (min-width: ${breakpoint.md}) {
            font-size: ${typography.fontSize.h4.md};
            line-height: ${typography.lineHeight.h4.md};
          }
          
          @media (min-width: ${breakpoint.lg}) {
            font-size: ${typography.fontSize.h4.lg};
            line-height: ${typography.lineHeight.h4.lg};
          }
      `;

      case 'medium':
        return `
          font-size: ${typography.fontSize.h5.xs};
          line-height: ${typography.lineHeight.h5.xs};
          padding: calc(3 * ${baseline} - ${borderThickness});
          
          @media (min-width: ${breakpoint.md}) {
            font-size: ${typography.fontSize.h5.md};
            line-height: ${typography.lineHeight.h5.md};
          }
          
          @media (min-width: ${breakpoint.lg}) {
            font-size: ${typography.fontSize.h5.lg};
            line-height: ${typography.lineHeight.h5.lg};
          }
        `;

      case 'small':
        return `
          font-size: ${typography.fontSize.h6.xs};
          line-height: ${typography.lineHeight.h6.xs};
          padding: calc(3 * ${baseline} - ${borderThickness});
          
          @media (min-width: ${breakpoint.md}) {
            font-size: ${typography.fontSize.h6.md};
            line-height: ${typography.lineHeight.h6.md};
          }
          
          @media (min-width: ${breakpoint.lg}) {
            font-size: ${typography.fontSize.h6.lg};
            line-height: ${typography.lineHeight.h6.lg};
          }
        `;

      default:
        throw new Error(`Button received invalid size prop: "${props.size}".`);
    }
  }}
`;
