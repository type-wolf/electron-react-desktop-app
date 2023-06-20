export type SendStatusToRendererType = {
    status:
        | 'checking-for-update'
        | 'update-available'
        | 'update-not-available'
        | 'download-progress'
        | 'update-downloaded'
        | 'error';
    data?: string | number;
};
