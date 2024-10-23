declare module 'react-input-mask' {
  import * as React from 'react';

  interface InputMaskProps extends React.InputHTMLAttributes<HTMLInputElement> {
    mask: string;
    maskChar?: string;
    formatChars?: { [key: string]: string };
    alwaysShowMask?: boolean;
    beforeMaskedValueChange?: (newState: any, oldState: any, userInput: string) => any;
  }

  const InputMask: React.FC<InputMaskProps>;

  export default InputMask;
}

