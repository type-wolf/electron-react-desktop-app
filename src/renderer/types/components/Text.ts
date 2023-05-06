import type { ReactNode, HTMLAttributes } from 'react';
import { StyledComponent } from 'styled-components';
import type { CSSProperties } from 'styled-components';

type StyleType = {
    styleType?: 'base' | 'Header' | 'Label' | 'Error';
};

type BasePropsType = {
    [props: string]: CSSProperties | HTMLAttributes<HTMLSpanElement> | string | ReactNode;
    children?: ReactNode;
};

export type TextListType = {
    [key: string]: StyledComponent<'span', any, StyleType, never>;
};

export type BaseTextType = CSSProperties &
    HTMLAttributes<HTMLSpanElement> & {
        color?: string;
        fontSize?: string;
        fontWeight?: number;
    };

export type HeaderType = BaseTextType & {
    marginTop?: string;
};

export type LabelType = BaseTextType & {
    marginButtom: string;
};

export type ErrorType = LabelType;

export type TextType = StyleType & BasePropsType & BaseTextType & (HeaderType | LabelType | ErrorType);
