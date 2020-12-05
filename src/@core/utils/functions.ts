export function stringFormat(str: string, ...val: any[]): string {
  for (let index = 0; index < val.length; index++) {
    str = str.replace(`{${ index }}`, val[index]);
  }
  return str;
}
