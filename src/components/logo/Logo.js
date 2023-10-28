/* STYLES */
import classes from './Logo.module.css';


function Logo(props) {

    return (
        <div className={`navbar-brand ${classes.logo} ${props.className}`} style={{fontSize: props.fontSize}}>
            <a href="/">
                <span className={classes.bio}>
                    Bio
                </span>
                <span className={classes.factory}>
                    Factory
                </span>
            </a>
        </div>
    );
}

export default Logo;