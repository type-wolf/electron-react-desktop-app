import type { ReactNode, HTMLAttributes } from 'react';
import { StyledComponent } from 'styled-components';
import type { CSSProperties } from 'styled-components';

type StyleType = {
    styleType?: 'base';
};

type BasePropsType = {
    [props: string]: CSSProperties | HTMLAttributes<HTMLFormElement> | string | ReactNode;
    children: ReactNode;
};

export type FormListType = {
    [key: string]: StyledComponent<'form', any, StyleType, never>;
};

export type BaseFormType = CSSProperties & HTMLAttributes<HTMLFormElement>;

export type FormType = StyleType & BasePropsType & BaseFormType;
