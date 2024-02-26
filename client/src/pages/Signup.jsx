import React from "react";
import { Link } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";
export default function Signup() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-12">
        {/* left side div */}
        <div className="flex-1">
          <Link to="/" className=" font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Abhishek's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is a Blog application. You can signup with your email and
            password or by Google.
          </p>
        </div>
        {/* right side div */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your Username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label value="Your Email" />
              <TextInput
                type="text"
                placeholder="name@company.com"
                id="email"
              />
            </div>
            <div>
              <Label value="Password" />
              <TextInput type="text" placeholder="*******" id="password" />
            </div>

            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign up
            </Button>
          </form>
          <div className="flex gap-2 mt-5 text-sm">
            <span>Already have account? </span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
