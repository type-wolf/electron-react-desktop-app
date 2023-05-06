import { xs, sm, md, lg, xl } from './breakpoint';
import { fonts, sizes, weights } from './font';
import { box, radii, space, lineHeights } from './size';
import { systemColors, themeColors } from './color';
import zindex from './zindex';
import transition from './transition';
import shadow from './shadow';

const theme = {
    breakpoint: {
        xs,
        sm,
        md,
        lg,
        xl,
    },
    sizes: {
        box,
        radii,
        space,
        lineHeights,
    },
    fonts: {
        fonts,
        sizes,
        weights,
    },
    colors: {
        systemColors,
        themeColors,
    },
    shadow: {
        ...shadow,
    },
    transition: {
        ...transition,
    },
    zindex: {
        ...zindex,
    },
};

export default theme;
