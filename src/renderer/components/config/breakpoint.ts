import { css, CSSObject, FlattenSimpleInterpolation, SimpleInterpolation } from 'styled-components';

/**
 * max-width`370px`（iPhone12Pro）
 */
export const xs = (
    first: CSSObject | TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
    @media (max-width: 370px) {
        ${css(first, ...interpolations)}
    }
`;

/**
 * max-width`600px`（iPadPro）
 */
export const sm = (
    first: CSSObject | TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
    @media (min-width: 600px) {
        ${css(first, ...interpolations)}
    }
`;

/**
 * max-width`840px`（iPhone12Pro 横向き）
 */
export const md = (
    first: CSSObject | TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
    @media (min-width: 840px) {
        ${css(first, ...interpolations)}
    }
`;

/**
 * max-width`1025px`（ノートPC）
 */
export const lg = (
    first: CSSObject | TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
    @media (min-width: 1025px) {
        ${css(first, ...interpolations)}
    }
`;

/**
 * max-width`1280px`（デスクトップPC）
 */
export const xl = (
    first: CSSObject | TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
    @media (min-width: 1280px) {
        ${css(first, ...interpolations)}
    }
`;
