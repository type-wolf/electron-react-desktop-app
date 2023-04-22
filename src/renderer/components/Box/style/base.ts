import styled from 'styled-components';
import { BoxType } from '../../../types/components/Box';
import { xs, sm, md, lg, xl } from '../../styled.config';

const BaseBoxStyle = styled.div<BoxType>`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    ${xs``}
    ${sm``}
    ${md`

    `}
    ${lg``}
    ${xl``}
`;

export default BaseBoxStyle;
