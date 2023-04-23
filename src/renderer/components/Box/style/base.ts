import styled from 'styled-components';
import { BaseBoxType } from '../../../types/components/Box';
import { xs, sm, md, lg, xl } from '../../styled.config';

const BaseBoxStyle = styled.div<BaseBoxType>`
    width: ${({ width }) => width ?? '200px'};
    height: ${({ height }) => height ?? '100vh'};
    display: ${({ display }) => display ?? 'flex'};
    justify-content: ${({ justifyContent }) => justifyContent ?? 'center'};
    align-items: ${({ alignItems }) => alignItems ?? 'center'};
    ${xs``}
    ${sm``}
    ${md`

    `}
    ${lg``}
    ${xl``}
`;

export default BaseBoxStyle;
