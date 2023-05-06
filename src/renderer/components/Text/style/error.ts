import styled from 'styled-components';
import type { ErrorType } from '../../../types/components/Text';
import Label from './label';

const Error = styled(Label)<ErrorType>`
    color: ${({ theme, color }) => color ?? theme.colors.themeColors.error.main};
    font-size: ${({ theme, fontSize }) => fontSize ?? theme.fonts.sizes.lg};
    font-weight: ${({ theme, fontWeight }) => fontWeight ?? theme.fonts.weights.semibold};
    margin-buttom: ${({ theme, marginButtom }) => marginButtom ?? theme.sizes.space[0]};
    ${({ theme }) => theme.breakpoint.xs``};
    ${({ theme }) => theme.breakpoint.sm``};
    ${({ theme }) => theme.breakpoint.md``};
    ${({ theme }) => theme.breakpoint.lg``};
    ${({ theme }) => theme.breakpoint.xl``};
`;

export default Error;
