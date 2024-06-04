import styles from "./button.module.css";

// Taking the fear out of React
// The reason React became successful

// - Don't worry too much about React setups nowadays, especially not as a beginner in React.
// When you start, just rely on preconfigured React environments
// Next.js is great, but feel free to use alternatives

// Here you can find the most simple version of a React component
// For building static components, you will not need much more

// CSS Modules
// Nowadays you can find many ways to write CSS,
// but CSS Modules are one of the most popular ways to go forward with these days.


interface ButtonProps {
    label: string;
}

// An exported function with the name you want to use for the component
export const Button = ({
    label
}: ButtonProps) => {
  // A return Statement
  // Inside here you basically write HTML.
  // It is called JSX and only has a few little differences to HTML
  return <div className={styles.button}>{label}</div>;
};
