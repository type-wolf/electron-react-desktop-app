import styled from 'styled-components';
import type { MormalType } from '../../../types/components/Button';
import { xs, sm, md, lg, xl } from '../../styled.config';

const BaseButtonStyle = styled.button<MormalType>`
    color: ${({ color }) => color ?? 'black'};
    background: ${({ background }) => background ?? 'gray'};
    padding: 0.5em 1em;
    border: 1px solid #cbd5e0;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.2;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    background-color: #edf2f7;
    color: #4a5568;
    &:hover {
        background-color: #e2e8f0;
    }
    ${xs``}
    ${sm``}
    ${md`

    `}
    ${lg``}
    ${xl``}
`;

export default BaseButtonStyle;
