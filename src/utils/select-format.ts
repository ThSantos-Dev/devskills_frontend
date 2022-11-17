export const selectFormat = (
  data: any[]
): { value: string; label: string }[] => {

  if (data.length === 0) return [];

  let options: { value: string; label: string }[] = [];

  options = data.map((option) => ({
    value: `${option.id}`,
    label: option.nome,
  }));

  return options;
};
