import { type FC } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { type LucideIcon } from "lucide-react";

interface FormFieldProps {
  id: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  label: string;
  icon?: LucideIcon;
  required?: boolean;
  className?: string;
}

const FormField: FC<FormFieldProps> = ({
  id,
  name,
  type,
  value,
  onChange,
  placeholder,
  label,
  icon: Icon,
  required = false,
  className = "",
}) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm font-medium">
        {Icon && <Icon className="h-4 w-4" />}
        {label}
      </Label>
      <Input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
        required={required}
      />
    </div>
  );
};

export default FormField;
