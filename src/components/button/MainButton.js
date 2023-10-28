import styles from './MainButton.module.css'

function MainButton({ value, href }) {
    return (
        <div className={styles.btnGrassGreen}>
            <a className={`btn btn-outline-light btn-lg`} href={href} role="button">
                 {value}
            </a>
        </div>
    );

}

export default MainButton;