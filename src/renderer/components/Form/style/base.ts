import styled from 'styled-components';
import type { BaseFormType } from 'renderer/types/components/Form';

const BaseFormStyle = styled.form<BaseFormType>`
    display: ${({ display }) => display ?? 'flex'};
    flex-direction: ${({ flexDirection }) => flexDirection ?? 'column'};
    align-items: ${({ alignItems }) => alignItems ?? 'center'};
`;

export default BaseFormStyle;
