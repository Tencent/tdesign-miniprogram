export type ValidateTriggerType = 'blur' | 'change' | 'all';

export interface FormRule {
  required?: boolean;
  message?: string;
  trigger?: 'change' | 'blur';
  type?: 'error' | 'warning';
}

export interface FormItemValidateMessage {
  type: 'warning' | 'error';
  message: string;
}
