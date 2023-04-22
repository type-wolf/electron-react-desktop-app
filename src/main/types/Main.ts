import { MessageBoxReturnValue, OpenDialogReturnValue } from 'electron';

export type OpenMessageDialog = {
    type: 'none' | 'info' | 'question' | 'warning' | 'error';
    message: string;
    detail: string;
    buttons: string[];
    defaultId: number;
    cancelId: number;
    checkboxLabel?: string;
};

export type OpenMessageDialogReturnValue = MessageBoxReturnValue;

export type OpenFileDialogReturnValue = OpenDialogReturnValue;
