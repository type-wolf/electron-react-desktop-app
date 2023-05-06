import styled, { css, keyframes } from 'styled-components';
import type { LoadingType } from '../../../types/components/Button';
import { xs, sm, md, lg, xl } from '../../config/breakpoint';
import BaseButtonStyle from './base';

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const Loading = styled(BaseButtonStyle)<LoadingType>`
    color: ${({ color }) => color ?? '#fff'};
    background: ${({ background, disabled, disabledColor }) => (disabled ? disabledColor ?? '#ccc' : background ?? '#0074D9')};
    background-color: ${({ backgroundColor }) => backgroundColor ?? 'edf2f7'};
    padding: ${({ padding }) => padding ?? '0.5em 1em'};
    border: ${({ border }) => border ?? 'none'};
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 16px;
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 2px solid rgba(255, 255, 255, 0.2);
        border-top-color: #fff;
        animation: ${({ loading }) =>
            loading &&
            css`
                ${spin} 1s linear infinite
            `};
        transform: ${({ loading }) => loading && 'translate(-50%, -50%)'};
        opacity: ${({ loading }) => loading && 1};
        visibility: ${({ loading }) => loading && 'visible'};
        transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    }
    ${xs``}
    ${sm``}
    ${md`

    `}
    ${lg``}
    ${xl``}
`;

export default Loading;
