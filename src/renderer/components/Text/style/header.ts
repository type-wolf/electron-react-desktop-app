import styled from 'styled-components';
import type { LabelType } from '../../../types/components/Text';
import BaseTextStyle from './base';

const Header = styled(BaseTextStyle)<LabelType>`
    font-size: ${({ theme, fontSize }) => fontSize ?? theme.fonts.sizes.xl2};
    font-weight: ${({ theme, fontWeight }) => fontWeight ?? theme.fonts.weights.bold};
    margin-top: ${({ theme, marginTop }) => marginTop ?? theme.sizes.space[10]};
    margin-buttom: ${({ theme, marginButtom }) => marginButtom ?? theme.sizes.space[0]};
    ${({ theme }) => theme.breakpoint.xs``};
    ${({ theme }) => theme.breakpoint.sm``};
    ${({ theme }) => theme.breakpoint.md``};
    ${({ theme }) => theme.breakpoint.lg``};
    ${({ theme }) => theme.breakpoint.xl``};
`;

export default Header;
