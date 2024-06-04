import styles from "./link-with-border.module.css";

interface LinkWithBorderProps {
    label: string;
    href?: string;
}

export const LinkWithBorder = ({
    label,
    href
}: LinkWithBorderProps) => {
    return (
        <a href={href} className={styles.link}>
            {label}
        </a>
    )
}