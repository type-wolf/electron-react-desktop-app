import type { BoxListType } from 'renderer/types/components/Box';
import BaseBoxStyle from './style/base';
import VStack from './style/vstack';
import HStack from './style/hstack';

const styledBoxList: BoxListType = {
    base: BaseBoxStyle,
    VStack,
    HStack,
};

export default styledBoxList;
