import styled from 'styled-components';
import type { HStackType } from 'renderer/types/components/Box';
import { xs, sm, md, lg, xl } from '../../styled.config';

const HStack = styled.div<HStackType>`
    display: flex;
    flex-direction: row;
    align-items: center;
    & > *:not(:last-child) {
        margin-right: ${({ spacing }) => spacing ?? '0.5rem'};
    }
    ${xs``}
    ${sm``}
    ${md`

    `}
    ${lg``}
    ${xl``}
`;

export default HStack;
