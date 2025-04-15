import { Input } from "antd";
import { useController } from "react-hook-form";

export const TextBoxType1 = ({ placeholder, control, name }: TextBoxType1) => {
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

interface TextBoxType1 {
  placeholder: string;
  control: any;
  name: string;
}
