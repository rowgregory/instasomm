const pagesToExclude = (pathname: string) =>
  ["auth"].some((a: string) => pathname?.includes(a));

export default pagesToExclude;
