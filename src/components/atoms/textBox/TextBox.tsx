import { Input } from "antd";
import { useController } from "react-hook-form";

export const TextBox = ({ placeholder, control, name }: TextBox) => {
  //Initialize react hook from controller
  const { field, fieldState } = useController({
    name,
    control,
  });

  return (
    <>
      <Input
        placeholder={placeholder}
        onChange={field.onChange}
        name={field.name}
        status={fieldState.invalid?"error":""}
      />
    </>
  );
};

interface TextBox {
  placeholder: string;
  control: any;
  name: string;
}
