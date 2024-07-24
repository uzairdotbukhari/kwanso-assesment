import { FC } from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";

const InputField: FC<TextFieldProps> = ({ name, ...props }) => {
  return (
    <TextField
      name={name}
      {...props}
    />
  );
};

export default InputField;
