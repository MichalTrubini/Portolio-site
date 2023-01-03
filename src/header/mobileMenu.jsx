import Menu from "./menu";
import styles from './mobileMenu.module.css'

const MobileMenu = (props) => {
    return (
        <div className={`${styles.mobile} ${props.animate ? styles.animateTop : styles.animateFromBottom}`}>
            <div className={styles.container} onClick={props.onClick}>
                <h1 className="mainHeader" onClick={props.onClick}>ttd<span className="mainHeader__light">.</span></h1>
                <div className={styles.wrapper}>
                    <div className={`${styles.cross} ${styles.crossOne}`}></div>
                    <div className={`${styles.cross} ${styles.crossTwo}`}></div>
                </div>
            </div>
            <Menu onClickClose={props.onClick}/>
        </div>
    )
}

export default MobileMenu;