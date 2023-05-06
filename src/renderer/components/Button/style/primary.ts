import styled from 'styled-components';
import type { PrimaryType } from '../../../types/components/Button';

const Primary = styled.button<PrimaryType>`
    color: ${({ theme, color }) => color ?? theme.colors.themeColors.primary.contrastText};
    width: ${({ width }) => width ?? '10%'};
    background: ${({ theme, background }) => background ?? theme.colors.themeColors.primary.main};
    background-color: ${({ theme, backgroundColor }) => backgroundColor ?? theme.colors.themeColors.primary.main};
    padding: ${({ theme, padding }) => padding ?? theme.sizes.space[2]};
    border: ${({ theme, border }) => border ?? `${theme.sizes.radii.sm} solid ${theme.colors.themeColors.primary.main}`};
    border-radius: ${({ theme, borderRadius }) => borderRadius ?? theme.sizes.radii.md};
    font-size: ${({ theme, fontSize }) => fontSize ?? theme.fonts.sizes.base};
    font-weight: ${({ theme, fontWeight }) => fontWeight ?? theme.fonts.weights.normal};
    line-height: ${({ theme, lineHeight }) => lineHeight ?? theme.sizes.lineHeights.shorter};
    text-align: ${({ textAlign }) => textAlign ?? 'center'};
    text-decoration: ${({ textDecoration }) => textDecoration ?? 'none'};
    white-space: ${({ whiteSpace }) => whiteSpace ?? 'nowrap'};
    cursor: ${({ cursor }) => cursor ?? 'pointer'};
    transition: ${({ transition }) => transition ?? 'all 0.3s ease'};
    &:hover {
        background-color: ${({ theme, hoverBgColor }) => hoverBgColor ?? theme.colors.themeColors.primary.hover[500]};
    }
    &:disabled {
        background-color: ${({ theme, disabledBackgroundColor }) =>
            disabledBackgroundColor ?? theme.colors.systemColors.white[50]};
        color: ${({ theme, disabledColor }) => disabledColor ?? theme.colors.themeColors.primary.contrastText};
        cursor: ${({ disabledCursor }) => disabledCursor ?? 'not-allowed'};
    }
`;

export default Primary;
