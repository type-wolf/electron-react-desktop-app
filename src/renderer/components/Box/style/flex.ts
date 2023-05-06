import styled from 'styled-components';
import BaseBoxStyle from './base';

const Flex = styled(BaseBoxStyle)`
    display: ${({ display }) => display ?? 'flex'};
    flex-direction: ${({ flexDirection }) => flexDirection ?? 'row'};
    justify-content: ${({ justifyContent }) => justifyContent ?? 'center'};
    align-items: ${({ alignItems }) => alignItems ?? 'center'};
`;
export default Flex;
