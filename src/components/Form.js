import React from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#ffffff] text-[#1f3626]">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray" className="text-[#1f3626]">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal text-[#1f3626]">
          Enter your credentials to log in.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6 text-[#1f3626]">
            <Input
              size="lg"
              label="Email"
              className="text-[#1f3626] focus:text-[#1f3626]"
            />
            <Input
              type="password"
              size="lg"
              label="Password"
              className="text-[#1f3626] focus:text-[#1f3626]"
            />
          </div>

          <Button
            className="mt-6 bg-gradient-to-r from-[#4CB8C4] to-[#3CD3AD] text-white font-bold py-2 px-4 rounded gradient-transition"
            fullWidth
          >
            Log In
          </Button>
          <Typography
            color="gray"
            className="mt-4 text-center font-normal text-[#1f3626]"
          >
            Don't have an account?{" "}
            <Link to="/signup" className="font-medium text-[#1f3626]">
              Sign Up
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}

function Signup() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#ffffff]">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray" className="text-[#1f3626]">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal text-[#1f3626]">
          Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Name" className="text-[#1f3626]" />
            <Input size="lg" label="Email" className="text-[#1f3626]" />
            <Input
              type="password"
              size="lg"
              label="Password"
              className="text-[#1f3626]"
            />
          </div>

          <Button
            className="mt-6 bg-gradient-to-r from-[#4CB8C4] to-[#3CD3AD] text-white font-bold py-2 px-4 rounded gradient-transition"
            fullWidth
          >
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link to="/signin" className="font-medium text-gray-900 ">
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}

export { Signin, Signup };
