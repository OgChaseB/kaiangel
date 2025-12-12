import styles from './Header.module.css'

function Header() {


    return (
        <>
            <div className={styles.header}>
                <div className={styles.header_content}>
                    <div className={styles.header_pages}>
                        <nav>
                            <ul>
                                <li>О магазине</li>
                                <li>Наш блог</li>
                                <li>Доставка</li>
                                <li>Оплата</li>
                                <li>Контакты</li>
                                <li>Индивидуальный заказ</li>
                            </ul>
                        </nav>
                    </div>
                    <div className={styles.header_cart}>
                        <img src="/img/icons/cart.svg" alt="Некая корзина" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header