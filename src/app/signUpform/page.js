"use client";
import { FormControl } from "@mui/joy";
import { Sheet } from "@mui/joy";
import React from "react";
import { useForm } from "react-hook-form";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import InputField from "@/component/shared/form/InputField";
import { errorMsg, successMsg } from "@/component/Toastmsg/toaster";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignInValidation } from "@/component/validation/signInValidation";

const SignUpForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm(  {
    resolver:yupResolver(SignInValidation)
  });
  const router = useRouter();

  //handle Form is Submitted
  const onSubmit = async (data) => {
    const { username, password } = data;
    try {
      const res = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });
      if (res.error) {
        return errorMsg("Invalid credentials");
      } else {
        router.replace('/');
        return successMsg("Login Successfully");
      }
    } catch (error) {
      return errorMsg("Login Error");
    }
  };

  return (
    <>
      <div className="main-page">
       <div className="py-16 ">
       <Sheet
          sx={{

            width: 500,
            mx: "auto",
            py: 9,
            py: 7,
            px: 5,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: "sm",
            boxShadow: "md",
          }}
          variant="outlined"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Typography variant="h4" className="text-center">
                <b>Welcome!</b>
              </Typography>
            </div>
            <div>
              <FormControl>
                <InputField
                errors={errors}
                  className="w-96 ml-5"
                  label="Email"
                  control={control}
                  name="email"
                  type="text"
                  placeholder="example123"
                />
              </FormControl>
            </div>
            <br/>
            <div>
              <FormControl>
                <InputField
                errors={errors}
                  className="w-96 ml-5"
                  label="Username"
                  control={control}
                  name="username"
                  type="text"
                  placeholder="example123@gmail.com"
                
                />
              </FormControl>
            </div>
            <br />
            <div>
              <FormControl>
                <InputField
                errors={errors}
                  className="w-96 ml-5"
                  control={control}
                  name="password"
                  type="password"
                  label="Password"
                />
              </FormControl>
            </div>
            <br />
            <div className="flex justify-center items-center mt-10  ">
              <Button
                type="submit"
                className="!bg-gray-600 !hover:bg-gray-700 !text-white !font-bold cursor-pointer !px-6 !py-2 
                !rounded-md !transition duration-300"
              >
                Register
              </Button>
            </div>
          </form>
        </Sheet>
       </div>
      </div>
    </>
  );
};

export default SignUpForm;
