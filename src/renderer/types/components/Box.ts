import { ReactNode } from 'react';
import { StyledComponent } from 'styled-components';
import type { CSSProperties } from 'styled-components';

type StyleType = {
    styleType?: 'base' | 'VStack' | 'HStack';
};

type BasePropsType = {
    [props: string]: CSSProperties | string | ReactNode;
    children: ReactNode;
};

type BaseBoxType = StyleType & BasePropsType;

export type BoxListType = {
    [key: string]: StyledComponent<'div', any, StyleType, never>;
};

export type NormalBoxType = BaseBoxType;

export type VStackType = BaseBoxType & {
    spacing?: number;
};

export type HStackType = BaseBoxType & {
    spacing?: number;
};

export type BoxType = NormalBoxType & VStackType & HStackType;
