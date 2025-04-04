import { Control, Controller, FieldError } from "react-hook-form";
import "./CustomInput.css"
import { FormValues } from "../models";

interface Params {
  name: keyof FormValues,
  control: Control<FormValues>,
  label: string,
  type?: string,
  error?: FieldError
}

const CustomInput = ({ name, control, label, type, error }: Params) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) =>
          <input
            id={name}
            type={type}
            {...field}
            className={`form-control ${error ? 'is-invalid' : ''}`}
          />
        }
      />
      {error && <p className='error'>{error.message}</p>}
    </div>
  )
}

export default CustomInput;
