import type { ReactNode, HTMLAttributes } from 'react';
import { StyledComponent } from 'styled-components';
import type { CSSProperties } from 'styled-components';

type StyleType = {
    styleType?: 'base' | 'Flex' | 'VStack' | 'HStack' | 'Center' | 'ShadowCenter';
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
        bgColor?: string;
        padding?: string;
        margin?: string;
    };

export type FlexType = BaseBoxType;

export type VStackType = FlexType & {
    spacing?: string;
};

export type HStackType = FlexType & {
    spacing?: string;
};

export type CenterType = BaseBoxType;

export type ShadowCenterType = CenterType & {
    boxShadow?: string;
};

export type BoxType = StyleType & BasePropsType & (FlexType | VStackType | HStackType | CenterType | ShadowCenterType);
