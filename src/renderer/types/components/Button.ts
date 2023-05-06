import type { ReactNode, MouseEventHandler, HTMLAttributes } from 'react';
import { StyledComponent } from 'styled-components';
import type { CSSProperties } from 'styled-components';

type StyleType = {
    styleType?: 'base' | 'Primary' | 'Loading' | 'SideMenu';
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
        disabledBackgroundColor?: string;
        disabledColor?: string;
        disabledCursor?: string;
    };

export type LoadingType = BaseButtonType & {
    loading?: boolean;
};

export type PrimaryType = BaseButtonType;

export type SideMenuType = BaseButtonType & {
    isOpen: boolean;
};

export type ButtonType = StyleType & BasePropsType & (LoadingType | PrimaryType | SideMenuType);
