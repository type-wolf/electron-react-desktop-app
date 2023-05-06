import type { BoxListType } from 'renderer/types/components/Box';
import BaseBoxStyle from './style/base';
import Flex from './style/flex';
import VStack from './style/vstack';
import HStack from './style/hstack';
import Center from './style/center';
import ShadowCenter from './style/shadowCenter';

const styledBoxList: BoxListType = {
    base: BaseBoxStyle,
    Flex,
    VStack,
    HStack,
    Center,
    ShadowCenter,
};

export default styledBoxList;
