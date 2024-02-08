import { useContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import RequireAuth from "./components/RequireAuth";
import Home from "./routes/Home";
import Login from "./routes/Login";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const queryClient = new QueryClient();

  useEffect(() => {
    if (currentUser) {
      navigate("/home");
    }
  }, [currentUser]);

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route index element={<Login />} />
        <Route
          path="home"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
