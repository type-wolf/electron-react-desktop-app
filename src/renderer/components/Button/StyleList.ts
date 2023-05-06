import type { ButtonListType } from 'renderer/types/components/Button';
import BaseButtonStyle from './style/base';
import SideMenu from './style/sideMenu';
import Loading from './style/loading';
import Primary from './style/primary';

const styledButtonList: ButtonListType = {
    base: BaseButtonStyle,
    Primary,
    Loading,
    SideMenu,
};

export default styledButtonList;
