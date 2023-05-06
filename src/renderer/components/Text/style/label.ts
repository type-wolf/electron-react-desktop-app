import styled from 'styled-components';
import type { LabelType } from '../../../types/components/Text';
import BaseTextStyle from './base';

const Label = styled(BaseTextStyle)<LabelType>`
    color: ${({ theme, color }) => color ?? theme.colors.systemColors.black[400]};
    font-size: ${({ theme, fontSize }) => fontSize ?? theme.fonts.sizes.lg};
    font-weight: ${({ theme, fontWeight }) => fontWeight ?? theme.fonts.weights.semibold};
    margin-buttom: ${({ theme, marginButtom }) => marginButtom ?? theme.sizes.space[0]};
    ${({ theme }) => theme.breakpoint.xs``};
    ${({ theme }) => theme.breakpoint.sm``};
    ${({ theme }) => theme.breakpoint.md``};
    ${({ theme }) => theme.breakpoint.lg``};
    ${({ theme }) => theme.breakpoint.xl``};
`;

export default Label;
