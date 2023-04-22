import styled from 'styled-components';
import type { VStackType } from '../../../types/components/Box';
import { xs, sm, md, lg, xl } from '../../styled.config';

const VStack = styled.div<VStackType>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
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
