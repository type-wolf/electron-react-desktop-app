import styled from 'styled-components';
import type { VStackType } from '../../../types/components/Box';
import { xs, sm, md, lg, xl } from '../../styled.config';
import BaseBoxStyle from './base';

const VStack = styled(BaseBoxStyle)<VStackType>`
    width: ${({ width }) => width ?? '100%'};
    height: ${({ height }) => height ?? '100%'};
    display: flex;
    flex-direction: column;
    & > * {
        margin-bottom: ${({ spacing }) => spacing ?? '1rem'};
    }
    ${xs``}
    ${sm``}
    ${md`

    `}
    ${lg``}
    ${xl``}
`;

export default VStack;
