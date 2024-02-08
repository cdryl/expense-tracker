import Form from "../../components/Form";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import { useHandleLogin } from "./hooks";

const Login = () => {
  const { handleSubmit, error } = useHandleLogin();

  return (
    <div className="relative h-svh bg-gray-900 px-4">
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="bg-white p-4 sm:px-[4.5rem] py-10 sm:min-w-[37.5rem] rounded-2xl flex flex-col items-center justify-center">
          <Logo className="mb-8" />
          <h1 className="text-3xl sm:text-5xl font-semibold mb-2 text-gray-700">
            Hello again!
          </h1>
          <h2 className="sm:text-lg text-gray-700 mb-6 text-center">
            Simplify finances: Log in,{" "}
            <span className="text-green-700 font-semibold">
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
            <Button type="submit">Log in</Button>
            {error && <span className="text-red-600">{error}</span>}
          </Form>
        </div>
      </div>
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1473773508845-188df298d2d1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
    </div>
  );
};

export default Login;
