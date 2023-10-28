import React from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const SignUpModel = ({ closeModal }) => {
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

        <form className="flex max-w-md flex-col gap-4">
        <div>
                <div className="mb-2 block">
                <Label htmlFor="name" value="Name Surname" />
                </div>
                <TextInput
                id="name"
                required
                type="name"
                />
          </div>
            <div>
                <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
                </div>
                <TextInput
                id="email1"
                placeholder="name@example.com"
                required
                type="email"
                />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" required type="password" />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember"><a href="#" className="underline">Kullanıcı Sözleşmesi</a> ’ni okudum ve kabul ediyorum.</Label>
          </div>
          <Button className="mt-6 bg-neutralDGrey"
            onClick={() => {
              closeModal(false);
            }}
            type="submit"
          >
            Register
          </Button>
        </form>
      </div>
    </form>
  );
};

export default SignUpModel;
