import styled from 'styled-components';
import { BaseBoxType } from '../../../types/components/Box';

const BaseBoxStyle = styled.div<BaseBoxType>`
    width: ${({ theme, width }) => width ?? theme.sizes.box.xl};
    height: ${({ theme, height }) => height ?? theme.sizes.box.screenHeight};
    box-shadow: ${({ theme, boxShadow }) => boxShadow ?? theme.shadow.none};
    border-radius: ${({ borderRadius }) => borderRadius ?? '10px'};
    background-color: ${({ theme, bgColor }) => bgColor ?? theme.colors.systemColors.white[400]};
    color: ${({ theme, color }) => color ?? theme.colors.systemColors.black[400]};
    border: ${({ borderColor, borderWidth }) => `${borderWidth} solid ${borderColor}` ?? 'none'};
    padding: ${({ theme, padding }) => padding ?? theme.sizes.space[0]};
    margin: ${({ theme, margin }) => margin ?? theme.sizes.space[0]};
    transition: ${({ theme, transition }) => transition ?? theme.transition.box.base};
    ${({ theme }) => theme.breakpoint.xs``};
    ${({ theme }) => theme.breakpoint.sm``};
    ${({ theme }) => theme.breakpoint.md``};
    ${({ theme }) => theme.breakpoint.lg``};
    ${({ theme }) => theme.breakpoint.xl``};
`;

export default BaseBoxStyle;
