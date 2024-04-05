export const padStats = (stat: string, val: string, sep: string, len: number) => {
  val = val || "xx";
  const output = `
  ${stat.toString()}${sep.repeat(
    len - (val.toString().length + stat.toString().length)
  )}${val.toString()}`;
  return output;
};