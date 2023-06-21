import Store from 'electron-store';
import type { UpdateStateType } from 'main/types/Store/UpdateState';

const updateState = new Store<UpdateStateType>({
    defaults: {
        isUpdate: false,
        isShowMainWindow: true,
    },
});

export default updateState;
