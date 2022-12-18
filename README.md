# Description

Provides simple separations for tailwind styles for different device screens.
You don't need to write screen prefixes for tailwind classes.  
Just describe styles for components inside of the screen alias in the styles object and pass it to the "tailwind-styler" function.  
It will generate a string with tailwind classes.
All duplicates will be removed (the last repetition will rewrite the previous one).

# Usage

```bash
npm i tailwind-styler
```

# Example

With React .tsx component

```ts
import Styler from "tailwind-styler";

const styles = {
  // "All" means: for all screens
  all: "bg-gray-600",
  sm: "hidden",
  md: "flex w-64 flex-col fixed inset-y-0",
  // Also you can use custom aliases:
  mobile: "hidden",
  //
  // These keys are reserved:
  // "all", "md", "sm", "lg", "xl", "xxl"
  // *xxl - will generates a "2xl" prefix
};

const style = Styler(styles);

export default function Sidebar() {
  return <div className={style}>Sidebar</div>;
}

// That jsx produces classes:
// "bg-gray-600 sm:hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 mobile:hidden"
```
