export type TFilterTestData = {
  stacks?: number[];
  skills?: number[];
  type?: "PRATICA" | "TEORICA";
  page?: number;
};

export const filterTestQuery = (data: TFilterTestData): string => {
  let skillsString: string = "";
  let stacksString: string = "";

  data.skills?.forEach((id) => {
    skillsString += `${id}+`;
  });

  data.stacks?.forEach((id) => {
    stacksString += `${id}+`;
  });

  return (
    "" +
    (skillsString.length > 0
      ? "ids_habilidades=" + stacksString.slice(0, -1) + "&"
      : "") +
    (stacksString.length > 0
      ? "ids_stacks=" + stacksString.slice(0, -1) + "&"
      : "") +
    "tipo=" +
    data.type +
    "&pagina=" +
    (data.page || 1)
  );
};
