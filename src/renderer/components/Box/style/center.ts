import styled from 'styled-components';
import type { CenterType } from 'renderer/types/components/Box';
import { xs, sm, md, lg, xl } from '../../styled.config';
import BaseBoxStyle from './base';

const Center = styled(BaseBoxStyle)<CenterType>`
    width: ${({ width }) => width ?? '100%'};
    height: ${({ height }) => height ?? '100%'};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    ${xs``};
    ${sm``};
    ${md`

    `};
    ${lg``};
    ${xl``};
`;

export default Center;
