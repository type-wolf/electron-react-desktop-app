/* eslint react/jsx-props-no-spreading: off */

import type { FC, FormEvent } from 'react';
import { FormType } from 'renderer/types/components/Form';
import StyledFormList from './StyleList';

const Form: FC<FormType> = ({ children, styleType = 'base', ...props }) => {
    const onSubmitHandler = (e: FormEvent) => {
        e.preventDefault();
        // const { onSubmit } = props;
        // if (onSubmit) onSubmit();
    };
    const StyledForm = StyledFormList[styleType];
    return (
        <StyledForm onSubmit={onSubmitHandler} {...props}>
            {children}
        </StyledForm>
    );
};

export default Form;
