import styles from './Banner.module.css';

const Banner = () => {
    return (
        <section className={styles.banner}>
        <div className={styles.container}>
            <div className={styles.bannerContent}>
                <div className={styles.bannerText}>
                    <p className={styles.topText}>Экспресс-доставка от Яндекс.Еды</p>
                    <h1 className={styles.titleText}>Быстро и вкусно<span className={styles.color}>.</span></h1>
                    <p className={styles.bottomText}>Сеть быстрого питания #1 в Казани</p>
                    <div className={styles.buttonText}>
                        <button>Сделать заказ</button>
                        <p>бесплатная доставка от 500 рублей</p>
                    </div>
                </div>
                <div className={styles.bannerImage}>
                    <img src="./src/assets/hero-image.hero-right.png" alt="" />
                </div>
            </div>
        </div>
        </section>
    )
}

export default Banner;