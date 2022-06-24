export const INFO = (...args: any): void => {
  if (parseInt(process.env.VERBOSITIY as string) >= 1) {
    console.log(...args);
  }
};

export const DEBUG = (...args: any): void => {
  if (parseInt(process.env.VERBOSITIY as string) >= 2) {
    console.log(...args);
  }
};

export const WARN = (...args: any): void => {
  if (parseInt(process.env.VERBOSITIY as string) >= 3) {
    console.log(...args);
  }
};
