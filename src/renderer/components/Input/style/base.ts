import styled from 'styled-components';
import { BaseInputType } from '../../../types/components/Input';
import { xs, sm, md, lg, xl } from '../../styled.config';

const BaseInputStyle = styled.input<BaseInputType>`
    display: ${({ display }) => display ?? 'block'};
    width: ${({ width }) => width ?? '100%'};
    padding: ${({ padding }) => padding ?? '0.375rem 0.75rem'};
    font-size: ${({ fontSize }) => fontSize ?? '1rem'};
    font-weight: ${({ fontWeight }) => fontWeight ?? 400};
    line-height: ${({ lineHeight }) => lineHeight ?? 1.5};
    color: ${({ color }) => color ?? '#495057'};
    background-color: ${({ backgroundColor }) => backgroundColor ?? '#fff'};
    background-clip: padding-box;
    border: ${({ border }) => border ?? '1px solid #ced4da'};
    border-radius: ${({ borderRadius }) => borderRadius ?? '0.25rem'};
    transition: ${({ transition }) => transition ?? 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out'};

    &:focus {
        color: ${({ hoverColor }) => hoverColor ?? '#495057'};
        background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor ?? '#fff'};
        border-color: ${({ hoverBorderColor }) => hoverBorderColor ?? '#80bdff'};
        outline: ${({ hoverOutline }) => hoverOutline ?? 0};
        box-shadow: ${({ hoverBoxShadow }) => hoverBoxShadow ?? '0 0 0 0.2rem rgba(0, 123, 255, 0.25)'};
    }

    &::placeholder {
        color: ${({ placeHolderColor }) => placeHolderColor ?? '#6c757d'};
        opacity: ${({ opacity }) => opacity ?? 1};
    }

    ${xs``}
    ${sm``}
    ${md`

    `}
    ${lg``}
    ${xl``}
`;

export default BaseInputStyle;
