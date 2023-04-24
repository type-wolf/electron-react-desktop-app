import styled from 'styled-components';
import type { BaseTextType } from '../../../types/components/Text';
import { xs, sm, md, lg, xl } from '../../styled.config';

const BaseTextStyle = styled.span<BaseTextType>`
    color: ${({ color }) => color ?? 'black'}
    font-size: ${({ fontSize }) => fontSize ?? '1.25rem'}
    font-weight: ${({ fontWeight }) => fontWeight ?? 700}
    ${xs``}
    ${sm``}
    ${md`

    `}
    ${lg``}
    ${xl``}
`;

export default BaseTextStyle;
