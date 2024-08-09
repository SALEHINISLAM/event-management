import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { replace, useLocation, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";

export function Login() {
  const { signIn, signInWithGoogle,user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigation();
  const from = location.state?.from?.pathname || "/";
  const [error, setError]=useState(null);
  const [loading, setLoading]=useState(false);
  const handleLogin = async(e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const form = new FormData(e.currentTarget);
    const email=form.get('email');
    const password=form.get('password');
    try{
      const res=await signIn(email, password);
      console.log(res.user);
      navigate(from, {replace:true})
      toast.success('Log In Successful !!!');
    }catch(err){
      toast.error(err.message);
      setError(err.message);
      console.log(err);
    }
    finally{
      setLoading(false)
    }
  };
  const handleGoogleSignIn=async(e)=>{
    e.preventDefault();
    setLoading(true);
    setError(null);
    try{
      const res=await signInWithGoogle();
      console.log(res.user);
      navigate(from, {replace:true})
      toast.success('Log In Successful !!!');
      setLoading(false)
    }catch(err){
      setError(err.message);
      toast.error(error)
      setLoading(false)
    }
  }
  return (
    <div className="flex justify-center flex-col items-center min-h-screen">
      <Card className="md:w-3/4 lg:w-1/2 w-full">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Log In
          </Typography>
        </CardHeader>
        <CardBody>
          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          
          <Input label="Email" size="lg" name="email"/>
          <Input label="Password" size="lg" name="password"/>
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
          <Button variant="gradient" fullWidth type="submit" disabled={loading || user} >
            {
              user?"You have Already logged in":
              loading? "Logging In ...":"Log In with Google"
            }
          </Button>
          </form>

        </CardBody>
          
        <CardFooter className="pt-0">
          <Button className="flex w-full text-center justify-center" onClick={handleGoogleSignIn} disabled={loading || user}>
            {
              user?"You have Already logged in":
              loading? "Logging In ...":"Log In with Google"
            }
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Typography
              as="a"
              href="#signup"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
            >
              Sign up
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
}
