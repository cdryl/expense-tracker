import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthenticatedRoute, UnauthenticatedRoute } from "./RequireAuth";
import Home from "./routes/Home";
import Login from "./routes/Login";
import { QueryClient, QueryClientProvider } from "react-query";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const queryClient = new QueryClient();
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), setUser);
    return unsubscribe;
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<UnauthenticatedRoute user={user} />}>
          <Route index element={<Login />} />
        </Route>
        <Route element={<AuthenticatedRoute user={user} />}>
          <Route path="home" element={<Home user={user as User} />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
