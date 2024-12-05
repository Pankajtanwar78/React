import { ErrorPara, StyledButton, StyledForm, StyledSection } from "../styles/form.styles"
import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"

type FormType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

let val = 0;
const Form = () => {
  const form = useForm<FormType>()

  const {
    register,
    control,
    handleSubmit,
    formState
  } = form

  const {errors} = formState

  const onSubmit = (data: FormType) => {
    console.log("Pankaj", data);
  }
  console.log (val++);
  

  return (
    <div>
      <p>{val}</p>
      <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
          <StyledSection>
            <label htmlFor="name" >Name</label>
            <input
              type="text"
              id="name"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required"
                },
                minLength: {
                  value: 3,
                  message: "Length is too short"
                }
              })}
            ></input>
            <ErrorPara>{errors.name?.message}</ErrorPara>
          </StyledSection>

          <StyledSection>
            <label htmlFor="email" >Email</label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required"
                },
                pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Invalid email format"
                },
                // validate: (fieldValue) => {
                //   return fieldValue != "admin@example.com" || "Enter a different Email address"
                // }
                validate: {
                  notAdmin: (fieldValue) => {
                    return fieldValue != "admin@example.com" || "Enter a different Email address"
                  },
                  notBlacklisted: (fieldValue) => {
                    return !fieldValue.endsWith("baddomain.com") || "This domain is blacklisted"
                  }
                }
              })}
            ></input>
            <ErrorPara>{errors.email?.message}</ErrorPara>
          </StyledSection>

          <StyledSection>
            <label htmlFor="password" >Password</label>
            <input
              type="password"
              id="password"
              {...register("password", {required: "Password is required"})}
            ></input>
            <ErrorPara>{errors.password?.message}</ErrorPara>
          </StyledSection>

          <StyledSection>
            <label htmlFor="confirmPassword" >Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword", {required: "Password is required"})}
            ></input>
            <ErrorPara>{errors.confirmPassword?.message}</ErrorPara>
          </StyledSection>

          <StyledButton>Submit</StyledButton>

      </StyledForm>
      <DevTool control={control} />
    </div>
  )
}

export default Form