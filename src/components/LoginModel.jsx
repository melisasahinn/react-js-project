import React from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import SignUpModel from "./SignUpModel";
const LoginModel = ({ closeModal }) => {
  return (
    <form className="flex flex-col justify-center items-center fixed top-0 left-0 right-0 bottom-0 backdrop-blur-md">
      <div className="modalContainer max-sm:max-w-sm">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            X
          </button>
        </div>

        <form className="flex max-w-md flex-col gap-6 mt-8">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              placeholder="name@example.com"
              register
              type="email"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" register  type="password" />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button className=" bg-neutralDGrey"
            onClick={() => {
              closeModal(false);
            }}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    </form>
  );
};

export default LoginModel;
