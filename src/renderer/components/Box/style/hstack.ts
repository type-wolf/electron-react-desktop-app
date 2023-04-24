import styled from 'styled-components';
import type { HStackType } from 'renderer/types/components/Box';
import BaseBoxStyle from './base';
import { xs, sm, md, lg, xl } from '../../styled.config';

const HStack = styled(BaseBoxStyle)<HStackType>`
    width: ${({ width }) => width ?? '100%'};
    height: ${({ height }) => height ?? '100%'};
    display: flex;
    flex-direction: row;
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
