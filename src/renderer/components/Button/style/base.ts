import styled from 'styled-components';
import type { BaseButtonType } from '../../../types/components/Button';
import { xs, sm, md, lg, xl } from '../../styled.config';

const BaseButtonStyle = styled.button<BaseButtonType>`
    color: ${({ color }) => color ?? '#4a5568'};
    background: ${({ background }) => background ?? 'gray'};
    background-color: ${({ backgroundColor }) => backgroundColor ?? 'edf2f7'};
    padding: ${({ padding }) => padding ?? '0.5em 1em'};
    border: ${({ border }) => border ?? '1px solid #cbd5e0'};
    border-radius: ${({ borderRadius }) => borderRadius ?? '0.25rem'};
    font-size: ${({ fontSize }) => fontSize ?? '1rem'};
    font-weight: ${({ fontWeight }) => fontWeight ?? 500};
    line-height: ${({ lineHeight }) => lineHeight ?? 1.2};
    text-align: ${({ textAlign }) => textAlign ?? 'center'};
    text-decoration: ${({ textDecoration }) => textDecoration ?? 'none'};
    white-space: ${({ whiteSpace }) => whiteSpace ?? 'nowrap'};
    cursor: ${({ cursor }) => cursor ?? 'pointer'};
    &:hover {
        background-color: ${({ hoverBgColor }) => hoverBgColor ?? '#e2e8f0'};
    }
    ${xs``}
    ${sm``}
    ${md`

    `}
    ${lg``}
    ${xl``}
`;

export default BaseButtonStyle;
