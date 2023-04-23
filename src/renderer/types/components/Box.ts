import { ReactNode, HTMLAttributes } from 'react';
import { StyledComponent } from 'styled-components';
import type { CSSProperties } from 'styled-components';

type StyleType = {
    styleType?: 'base' | 'VStack' | 'HStack' | 'Center';
};

type BasePropsType = {
    [props: string]: CSSProperties | HTMLAttributes<HTMLDivElement> | string | ReactNode;
    children: ReactNode;
};

export type BoxListType = {
    [key: string]: StyledComponent<'div', any, StyleType, never>;
};

export type BaseBoxType = CSSProperties &
    HTMLAttributes<HTMLDivElement> & {
        width?: string;
        height?: string;
    };

export type VStackType = BaseBoxType & {
    spacing?: string;
};

export type HStackType = BaseBoxType & {
    spacing?: string;
};

export type CenterType = BaseBoxType;

export type BoxType = StyleType & BasePropsType & BaseBoxType & (VStackType | HStackType);
