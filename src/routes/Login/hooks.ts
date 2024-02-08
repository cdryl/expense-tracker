import { useNavigate } from "react-router-dom";
import { signInUser } from "../../firebase";
import { LoginFormValues } from "./types";
import { useState } from "react";

export const useHandleLogin = () => {
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (data: LoginFormValues) => {
    try {
      const userCredential = await signInUser(data.email, data.password);

      if (userCredential) {
        navigate("/home");
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  return { handleSubmit, error };
};
