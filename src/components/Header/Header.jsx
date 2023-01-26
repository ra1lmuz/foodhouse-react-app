import styles from './Header.module.css';

const Header = () => {
    return (
        <header>
            <div className={styles.container}>
                <div className={styles.header__inner}>
                    <div className={styles.headerLogo}><span>Food</span>House</div>
                    <div className={styles.headerNav}>
                        <a href="#" className={styles.aMenu}>Главная</a>
                        <a href="#" className={styles.aMenu}>Меню</a>
                        <a href="#" className={styles.aMenu}>Сервис</a>
                        <a href="#" className={styles.aMenu}>О нас</a>
                    </div>
                    <div className={styles.headerBasket}>
                        <div className={styles.basketBox}>
                            <img src="./src/assets/icons/cart-icon.svg" alt="" />
                            <div className={styles.basketValue}>12</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;