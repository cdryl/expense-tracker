import Form from "../../components/Form";
import Input from "../../components/Fields/Input";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import { useHandleLogin } from "./hooks";
import { ButtonSize } from "../../components/Button/types";

const Login = () => {
  const { handleSubmit, error } = useHandleLogin();

  return (
    <div className="h-svh px-4">
      <div className=" flex items-center justify-center h-full">
        <div className="bg-purple-light shadow-lg p-4 sm:px-[4.5rem] py-10 sm:min-w-[37.5rem] rounded-2xl flex flex-col items-center justify-center">
          <Logo className="mb-8" />
          <h1 className="text-3xl sm:text-5xl font-semibold mb-2 text-white">
            Hello again!
          </h1>
          <h2 className="sm:text-lg text-white mb-6 text-center">
            Simplify finances: Log in,{" "}
            <span className="text-pink font-semibold">
              track expenses.
            </span>
          </h2>
          <Form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 w-full max-w-[80%] mx-auto"
          >
            <Input
              name="email"
              type="email"
              required
              label="Email"
              autoComplete="email"
            />
            <Input
              name="password"
              type="password"
              required
              label="Password"
              className="mb-4"
            />
            <Button size={ButtonSize.medium} type="submit" className="w-full">Log in</Button>
            {error && <span className="text-pink">{error}</span>}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
