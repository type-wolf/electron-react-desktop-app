import type { ReactNode, MouseEventHandler, HTMLAttributes } from 'react';
import { StyledComponent } from 'styled-components';
import type { CSSProperties } from 'styled-components';

type StyleType = {
    styleType?: 'base';
};

type BasePropsType = {
    [props: string]:
        | CSSProperties
        | HTMLAttributes<HTMLButtonElement>
        | string
        | ReactNode
        | MouseEventHandler<HTMLButtonElement>;
    children: ReactNode;
};

export type ButtonListType = {
    [key: string]: StyledComponent<'button', any, StyleType, never>;
};

export type BaseButtonType = CSSProperties &
    HTMLAttributes<HTMLButtonElement> & {
        hoverBgColor?: string;
    };

export type ButtonType = StyleType & BasePropsType & BaseButtonType;
