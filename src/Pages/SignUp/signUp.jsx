import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const errorToast = () => {
    if (error) {
      toast.error(error);
    }
  };
  const successToast = () => {
    if (success) {
      toast.success(success);
    }
  };

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    signInWithGoogle()
      .then((res) => {
        console.log(res.user);
        setSuccess("Sign Up Successful !!!");
        successToast();
      })
      .catch((err) => {
        setError(err.message);
        console.log(err);
        errorToast();
      });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    if (!passwordRegex.test(password)) {
        setError("Please provide strong password .");
      return errorToast()
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
    setError("Please provide a valid email address");
      return errorToast()
    }
    try {
      await createUser(email, password, name);
      setSuccess("Registration Successful!!!");
      successToast();
    } catch (err) {
      setError(err.message);
      errorToast();
    }
  };
  return (
    <Card
      color="transparent"
      shadow={false}
      className="flex flex-col justify-center items-center p-2 py-6 md:p-4 md:py-8 lg:py-20"
    >
      <ToastContainer />
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form
        className="mt-8 mb-2 w-full md:w-2/3 lg:w-1/2"
        onSubmit={handleSignUp}
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="lg"
            placeholder="your name"
            type="text"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            name="name"
            required
            autoComplete="username"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            type="email"
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            name="email"
            required
            autoComplete="email"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            name="password"
            required
            autoComplete="current-password"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>

        <Button className="mt-6" fullWidth type="submit">
          sign up
        </Button>
      </form>
      <Typography color="gray" className="mt-4 text-center font-normal">
        Already have an account?{" "}
        <a href="/login" className="font-medium text-gray-900">
          Sign In
        </a>
      </Typography>
      <Button className="w-full md:w-2/3 lg:w-1/2" onClick={handleGoogleSignIn}>
        Signup with Google
      </Button>
    </Card>
  );
};
export default Register;
