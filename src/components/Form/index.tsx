import { useForm, FormProvider, FieldValues } from "react-hook-form";
import { FormProps } from "./types";

const Form = <T extends FieldValues>({
  onSubmit,
  children,
  className,
  ...formOptions
}: FormProps<T>) => {
  const methods = useForm<T>({
    ...formOptions,
  });

  return (
    <FormProvider {...methods}>
      {onSubmit && (
        <form onSubmit={methods.handleSubmit(onSubmit)} className={className}>
          {children}
        </form>
      )}
    </FormProvider>
  );
};

export default Form;
