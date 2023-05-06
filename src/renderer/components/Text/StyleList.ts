import type { TextListType } from 'renderer/types/components/Text';
import BaseTextStyle from './style/base';
import Header from './style/header';
import Label from './style/label';
import Error from './style/error';

const StyledTextList: TextListType = {
    base: BaseTextStyle,
    Header,
    Label,
    Error,
};

export default StyledTextList;
