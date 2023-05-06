import styled from 'styled-components';
import type { CenterType } from 'renderer/types/components/Box';
import BaseBoxStyle from './base';

const Center = styled(BaseBoxStyle)<CenterType>`
    width: ${({ theme, width }) => width ?? theme.sizes.box.md};
    height: ${({ theme, height }) => height ?? theme.sizes.box.md};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: ${({ theme, boxShadow }) => boxShadow ?? theme.shadow.none};
    ${({ theme }) => theme.breakpoint.xs``};
    ${({ theme }) => theme.breakpoint.sm``};
    ${({ theme }) => theme.breakpoint.md``};
    ${({ theme }) => theme.breakpoint.lg``};
    ${({ theme }) => theme.breakpoint.xl``};
`;

export default Center;
