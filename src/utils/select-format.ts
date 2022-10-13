export const selectFormat = (
  data: any[]
): { value: string; label: string }[] => {
  let options: { value: string; label: string }[] = [];

  options = data.map((option) => ({
    value: `${option.id}`,
    label: option.nome,
  }));

  return options;
};
