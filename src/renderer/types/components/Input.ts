import { ReactNode, MouseEventHandler, HTMLAttributes } from 'react';
import { StyledComponent } from 'styled-components';
import type { CSSProperties } from 'styled-components';

type StyleType = {
    styleType?: 'base';
};

type BasePropsType = {
    [props: string]: CSSProperties | HTMLAttributes<HTMLInputElement> | string | ReactNode | MouseEventHandler<HTMLInputElement>;
    children?: ReactNode;
};

export type InputListType = {
    [key: string]: StyledComponent<'input', any, StyleType, never>;
};

export type BaseInputType = CSSProperties &
    HTMLAttributes<HTMLInputElement> & {
        hoverColor?: string;
        hoverBackgroundColor?: string;
        hoverBorderColor?: string;
        hoverOutline?: number;
        hoverBoxShadow?: string;
        placeHolderColor?: string;
    };

export type InputType = StyleType & BasePropsType & BaseInputType;
