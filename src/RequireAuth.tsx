import { User } from "firebase/auth";
import { Outlet, Navigate } from "react-router-dom";

export const AuthenticatedRoute = ({
  user,
}: {
  user: User | null | undefined;
}) => {
  if (user === undefined) return <div>Loading...</div>;

  return user ? <Outlet /> : <Navigate to="/" />;
};

export const UnauthenticatedRoute = ({
  user,
}: {
  user: User | null | undefined;
}) => {
  if (user === undefined) return <div>Loading...</div>;

  return user ? <Navigate to="/home" /> : <Outlet />;
};
