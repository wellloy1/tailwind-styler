type IStyles = {
  [index: string]: string | undefined;
  all?: string;
};

type IStylesDefault = IStyles & {
  md?: string;
  sm?: string;
  lg?: string;
  xl?: string;
  xxl?: string;
};

/**
 * Returns a string of the tailwindcss classes.
 */
declare function Styler(styles: IStyles | IStylesDefault): string;

export default Styler;

export { IStyles, IStylesDefault };
