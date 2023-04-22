import { ReactNode, MouseEventHandler } from 'react';
import { StyledComponent } from 'styled-components';
import type { CSSProperties } from 'styled-components';

type StyleType = {
    styleType?: 'base' | 'normal';
};

type BasePropsType = {
    [props: string]: CSSProperties | string | ReactNode | MouseEventHandler<HTMLButtonElement>;
    children: ReactNode;
};

export type BaseButtonType = StyleType & BasePropsType;

export type ButtonListType = {
    [key: string]: StyledComponent<'button', any, StyleType, never>;
};

export type MormalType = BaseButtonType & {
    background?: string;
};

export type ButtonType = BaseButtonType & MormalType;
