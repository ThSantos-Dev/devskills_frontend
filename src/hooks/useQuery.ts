// Import - Hooks
import { useLocation } from "react-router-dom";
import { useMemo } from "react"; // guarda um valor e não re-renderiza o componente se esse valor alterar

export const useQuery = () => {
  // Utilizando o hook para pegar a query
  const { search } = useLocation();

  // URLSearchParams - permite acessar dados da url como se fosse um objeto
  return useMemo(() => new URLSearchParams(search), [search]);
};
