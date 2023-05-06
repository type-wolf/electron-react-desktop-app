import styled from 'styled-components';
import type { ShadowCenterType } from 'renderer/types/components/Box';
import Center from './center';

const ShadowCenter = styled(Center)<ShadowCenterType>`
    width: ${({ theme, width }) => width ?? theme.sizes.box.lg};
    height: ${({ theme, height }) => height ?? theme.sizes.box.lg};
    box-shadow: ${({ theme, boxShadow }) => boxShadow ?? theme.shadow.xl};
    ${({ theme }) => theme.breakpoint.xs``};
    ${({ theme }) => theme.breakpoint.sm``};
    ${({ theme }) => theme.breakpoint.md``};
    ${({ theme }) => theme.breakpoint.lg``};
    ${({ theme }) => theme.breakpoint.xl``};
`;

export default ShadowCenter;
