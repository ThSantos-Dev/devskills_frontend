// Hooks
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const useAuth = () => {
  // Restando o dev do Redux
  const { user, type } = useSelector((state: any) => state.auth);

  // State para valdiar se o usuário está autenticado ou não
  const [auth, setAuth] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (user) setAuth(true);
    else setAuth(false);

    setLoading(false);
  }, [user]);

  return { auth, loading, type };
};
