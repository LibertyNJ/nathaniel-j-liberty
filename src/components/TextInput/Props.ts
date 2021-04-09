export default TextInputProps;

type TextInputProps = InputProps | TextareaProps;

interface InputProps extends CommonTextInputProps {
  readonly type: 'email' | 'text';
}

interface TextareaProps extends CommonTextInputProps {
  readonly rows?: number;
  readonly type: 'textarea';
}

interface CommonTextInputProps {
  readonly id: string;
  readonly label: string;
  readonly required?: boolean;
}
