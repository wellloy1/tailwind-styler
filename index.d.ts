interface IStyles {
  all?: string;
  md?: string;
  sm?: string;
  lg?: string;
  xl?: string;
  xxl?: string;
}

declare function Styler(styles: IStyles): string;

export default Styler;

export { IStyles };
