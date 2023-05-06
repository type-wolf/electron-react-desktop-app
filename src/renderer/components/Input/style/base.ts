import styled from 'styled-components';
import { BaseInputType } from '../../../types/components/Input';

const BaseInputStyle = styled.input<BaseInputType>`
    display: ${({ display }) => display ?? 'block'};
    width: ${({ theme, width }) => width ?? theme.sizes.box.xl};
    padding: ${({ theme, padding }) => padding ?? `${theme.sizes.space[1.5]} ${theme.sizes.space[3]}`};
    font-size: ${({ theme, fontSize }) => fontSize ?? theme.fonts.sizes.lg};
    font-weight: ${({ theme, fontWeight }) => fontWeight ?? theme.fonts.weights.normal};
    line-height: ${({ theme, lineHeight }) => lineHeight ?? theme.sizes.lineHeights.base};
    color: ${({ theme, color }) => color ?? theme.colors.systemColors.black[400]};
    background-color: ${({ theme, backgroundColor }) => backgroundColor ?? theme.colors.systemColors.white[400]};
    background-clip: padding-box;
    border: ${({ theme, border }) => border ?? `1px solid ${theme.colors.systemColors.black[100]}`};
    border-radius: ${({ theme, borderRadius }) => borderRadius ?? theme.sizes.radii.md};
    transition: ${({ theme, transition }) => transition ?? theme.transition.input.base};

    &:focus {
        color: ${({ theme, hoverColor }) => hoverColor ?? theme.colors.systemColors.black[500]};
        background-color: ${({ theme, hoverBackgroundColor }) => hoverBackgroundColor ?? theme.colors.systemColors.white[400]};
        border-color: ${({ theme, hoverBorderColor }) => hoverBorderColor ?? theme.colors.themeColors.info.hover[400]};
        outline: ${({ hoverOutline }) => hoverOutline ?? 0};
        box-shadow: ${({ theme, hoverBoxShadow }) =>
            hoverBoxShadow ?? `0 0 0 0.2rem ${theme.colors.themeColors.info.hover[100]}`};
    }

    &::placeholder {
        color: ${({ theme, placeHolderColor }) => placeHolderColor ?? theme.colors.systemColors.black[100]};
        opacity: ${({ opacity }) => opacity ?? 1};
    }
`;

export default BaseInputStyle;
