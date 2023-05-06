import styled from 'styled-components';
import type { HStackType } from 'renderer/types/components/Box';
import Flex from './flex';

const HStack = styled(Flex)<HStackType>`
    width: ${({ width }) => width ?? '100%'};
    height: ${({ height }) => height ?? '100%'};
    flex-direction: row;
    & > *:not(:last-child) {
        margin-right: ${({ spacing }) => spacing ?? '0.5rem'};
    }
    ${({ theme }) => theme.breakpoint.xs``};
    ${({ theme }) => theme.breakpoint.sm``};
    ${({ theme }) => theme.breakpoint.md``};
    ${({ theme }) => theme.breakpoint.lg``};
    ${({ theme }) => theme.breakpoint.xl``};
`;

export default HStack;
