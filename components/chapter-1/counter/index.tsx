import styles from "./counter.module.css";

interface CounterProps {
}

// An exported function with the name you want to use for the component
export const Counter = ({
}: CounterProps) => {
  // A return Statement
  // Inside here you basically write HTML.
  // It is called JSX and only has a few little differences to HTML
  return <div className={styles.counter}>Counter</div>;
};
