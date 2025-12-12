import styles from './Footer.module.css'

function Footer() {


  return (
    <>
      <div className={styles.Footer}>
        <div className={styles.Footer_content}>
          <div className={styles.footer_pages}>
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
        </div>
      </div>
    </>
  )
}

export default Footer
