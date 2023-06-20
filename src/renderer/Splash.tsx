import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import type { SendStatusToRendererType } from 'main/types/Events/AppUpdater';
import GlobalStyle from './components/config/globalStyle';

const Header = () => {
    const [data, setData] = useState<string | number>();
    window.electron.ipcRenderer.on('appUpdaterMessage', (datas: SendStatusToRendererType) => {
        setData(datas.data);
    });
    return <h3>{data}</h3>;
};

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
    <>
        <GlobalStyle />
        <Header />
    </>
);
