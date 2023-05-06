import styled from 'styled-components';
import type { BaseTextType } from '../../../types/components/Text';

const BaseTextStyle = styled.span<BaseTextType>`
    color: ${({ theme, color }) => color ?? theme.colors.systemColors.black[400]};
    font-size: ${({ theme, fontSize }) => fontSize ?? theme.fonts.sizes.base};
    font-weight: ${({ theme, fontWeight }) => fontWeight ?? theme.fonts.weights.normal};
    margin-top: ${({ theme, marginTop }) => marginTop ?? theme.sizes.space[0]};
    ${({ theme }) => theme.breakpoint.xs``};
    ${({ theme }) => theme.breakpoint.sm``};
    ${({ theme }) => theme.breakpoint.md``};
    ${({ theme }) => theme.breakpoint.lg``};
    ${({ theme }) => theme.breakpoint.xl``};
`;

export default BaseTextStyle;
