import { ErrorPara, StyledButton, StyledForm, StyledSection, StyledPhoneSection } from "../styles/form.styles"
import { FieldErrors, useFieldArray, useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"
import { useEffect } from "react";

type FormType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  social: {
    twitter: string;
    facebook: string;
  },
  phoneNumbers: string[];
  phNumbers: {
    number: string;
  }[],
  age: number;
  dob: Date;
}

const EnhanceFormSubmission = () => {
  const form = useForm<FormType>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      social: {
        twitter: "",
        facebook: ""
      },
      phoneNumbers: ["", ""],
      phNumbers: [{
        number: ""
      }],
      age: 0,
      dob: new Date()
      
    }
    // defaultValues: async () => {
    //   const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    //   const data = await response.json();
    //   return {
    //     name: "",
    //     email: data.email,
    //     password: "",
    //     confirmPassword: ""
    //   }
    // }    // To load saved data to default values
  })

  const {
    register,
    control,
    handleSubmit,
    formState,
    reset,      // Use to reset the form (set to default value)
    // setValue,  // To set some default values. May be useful in timesheet case (only one value can be set at a time)
    // getValues,  // To get the values of the form, either one, multipe or all values
    watch       // can be used for preview but it re-render the component every time as we are watching
  } = form

  const { errors, 
          touchedFields, 
          dirtyFields, 
          isDirty, 
          isValid, 
          isSubmitting, // true when submitting is going on => use to prevent multple submission
          isSubmitted,  // remain true till form reset
          isSubmitSuccessful, // true if successful else false (false if validation error etc and other errors)
          submitCount // Number of times form submitted, initially 0
         } = formState;
  // const watchName = watch("name")
  // const watchNameEmail = watch(["name", "email"])
  // const watchForm = watch()
  console.log ({isSubmitting, isSubmitted, isSubmitSuccessful, submitCount})
  console.log({ touchedFields, dirtyFields }) // these just display about the info which field is modified accordingly
  console.log("dirty", isDirty) // Related to full form (can be useful to enamble submit button when isDirty is valid)
  useEffect(() => {
    console.log("pk")
    const subscription = watch((value) => {
      console.log(value);
    })
    return () => subscription.unsubscribe()
  },[watch])  // THis will use watch but not re-render as we subscribed it

  const {fields, append, remove} = useFieldArray({
    name: 'phNumbers',
    control
  })

  const onSubmit = (data: FormType) => {
    console.log("Pankaj", data);
  }

  const onError = (error: FieldErrors<FormType>) => {
    console.log("Form errors: ", error)
  }

  // const handleGetValues = () => {
  //   console.log(getValues("name"));
  //   console.log(getValues(["name","email"]));
  //   console.log(getValues());
  // }

  // const handleSetValues = () => {
  //   setValue( "name", "" ,{
  //     shouldValidate: true,
  //     shouldDirty: true,
  //     shouldTouch: true
  //   })
  // }

  useEffect(() => {
    if(isSubmitSuccessful){
      reset();  // Excepts some values and etc as option also check doc for that
    }
     
  },[isSubmitSuccessful, reset])  // reset on successful submission
  

  return (
    <div>
      <StyledForm onSubmit={handleSubmit(onSubmit, onError)} noValidate>
          
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

          <StyledSection>
            <label htmlFor="twitter" >Twitter</label>
            <input
              type="text"
              id="twitter"
              {...register("social.twitter", {
                //disabled: true,   // value become undefined and the validation is also disabled
                //disabled: errors.email?.message?.length !== undefined,    // Work with valid email only. Disabled for invalid email
                disabled: watch("email") === "",  // diabled till email is empty
                required: "This error will not show as field is disabled"
              })}
            ></input>
          </StyledSection>

          <StyledSection>
            <label htmlFor="facebook" >Facebook</label>
            <input
              type="text"
              id="facebook"
              {...register("social.facebook")}
            ></input>
          </StyledSection>

          <StyledSection>
            <label htmlFor="primary" >Primary phone number</label>
            <input
              type="text"
              id="primary"
              {...register("phoneNumbers.0")}
            ></input>
          </StyledSection>

          <StyledSection>
            <label htmlFor="secondary" >Secondary phone number</label>
            <input
              type="text"
              id="secondary"
              {...register("phoneNumbers.1")}
            ></input>
          </StyledSection>

          <StyledSection>
            <label >Enter phone numbers</label>
            {
              fields.map((field, index) => {
                return (
                  <StyledPhoneSection key={field.id}>
                    <input
                      type="text"
                      {...register(`phNumbers.${index}.number`)}
                    ></input>
                    {index > 0 && <StyledButton 
                      type="button"
                      onClick={() => remove(index)}
                    >Remove</StyledButton>}
                    
                  </StyledPhoneSection>
                )
              })
            }
            <StyledButton style={{
              alignSelf: "start"
            }} type="button" onClick={() => append({number: ""})}>Add</StyledButton>
          </StyledSection>

          <StyledSection>
            <label htmlFor="age" >Age</label>
            <input
              type="number"
              id="age"
              {...register("age", {
                valueAsNumber: true,    // To make sure to deal with number and not string
                required: "Age id required", 
                min: {
                  value: 1,
                  message: "Min age should be at least 1"
                },
                max: {
                  value: 100,
                  message: "Max age should not be more than 100"
                }
              })}
            ></input>
            <ErrorPara>{errors.age?.message}</ErrorPara>
          </StyledSection>

          <StyledSection>
            <label htmlFor="dob" >Date of birth</label>
            <input
              type="date"
              id="dob"
              {...register("dob", {
                valueAsDate: true,    // To make sure to deal with date and not string
                required: "Dob is required"
              })}
            ></input>
            <ErrorPara>{errors.dob?.message}</ErrorPara>
          </StyledSection>

          <StyledButton
            disabled={!isDirty || !isValid || isSubmitting}
          >Submit</StyledButton>
          <StyledButton
            onClick={() => reset()} 
          >Submit</StyledButton>
          {/* <StyledButton onClick={handleGetValues}>Get Values</StyledButton>
          <StyledButton onClick={handleSetValues}>Set Values</StyledButton> */}

          

      </StyledForm>
      <DevTool control={control} />
    </div>
  )
}

export default EnhanceFormSubmission