interface IStyles {
  [index: string]: string;
}

declare function Styler(styles: IStyles): string;

export default Styler;

export { IStyles };
