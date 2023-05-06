import styled from 'styled-components';
import type { VStackType } from '../../../types/components/Box';
import Flex from './flex';

const VStack = styled(Flex)<VStackType>`
    width: ${({ width }) => width ?? '100%'};
    height: ${({ height }) => height ?? '100%'};
    flex-direction: column;
    & > * {
        margin-bottom: ${({ spacing }) => spacing ?? '1rem'};
    }
    ${({ theme }) => theme.breakpoint.xs``};
    ${({ theme }) => theme.breakpoint.sm``};
    ${({ theme }) => theme.breakpoint.md``};
    ${({ theme }) => theme.breakpoint.lg``};
    ${({ theme }) => theme.breakpoint.xl``};
`;

export default VStack;
