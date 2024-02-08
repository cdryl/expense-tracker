import { FieldValues, SubmitErrorHandler, SubmitHandler, UseFormProps, UseFormReturn } from "react-hook-form";

export interface FormProps<FormData extends FieldValues> {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FormData>;
  defaultValues?: UseFormProps<FormData>['defaultValues'];
  mode?: UseFormProps<FormData>['mode'];
  options?: UseFormProps<FormData>;
  className?: string;
}
