import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [authState, setAuthState] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState("");
  console.log(authState);
  return (
    <>
      <div className="h-screen">
        <div className="flex justify-center items-center mt-20">
          <div className="px-10 lg:px-32 w-full">
            <div className="lg:flex flex-col items-center">
              <h1 className="text-center lg:mt-32 text-3xl lg:text-5xl font-bold">
                Register
              </h1>
              <p className="text-center">Welcome Back! Start your Purchase!</p>
              <div className="mt-4 lg:w-[550px]">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  onChange={(e) =>
                    setAuthState({ ...authState, email: e.target.value })
                  }
                />
                {/* <span className="text-red-700 font-bold">{errors?.email}</span> */}
              </div>
              <div className="mt-4  lg:w-[550px]">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  onChange={(e) =>
                    setAuthState({ ...authState, password: e.target.value })
                  }
                />
                {/* <span className="text-red-700 font-bold">{errors?.password}</span> */}
              </div>
              <div className="mt-4 lg:w-[550px]">
                <Button
                  variant="default"
                  className="w-full bg-[#253237]"
                  // disabled={loading}
                  // onClick={submitHandler}
                >
                  {loading ? "Processing" : "Register"}
                </Button>
              </div>

              <div className="mt-4 text-center lg:w-[550px]">
                <strong>Don&apos;t Have an account ?</strong>
                <Link to="/login" className="pl-2 text-orange-400">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
