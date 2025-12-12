import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Katalog.module.css";
import Rick from "../Rick/Rick";
import Post from "../Post/Post";

function Katalog() {
  // Состояние для хранения массива товаров с сервера
  const [products, setProducts] = useState([]);
  // Состояние для отслеживания загрузки
  const [loading, setLoading] = useState(true);
  // Состояние для обработки ошибок
  const [error, setError] = useState(null);
  // Состояние для отображения/скрытия формы
  const [showCreateForm, setShowCreateForm] = useState(false);
  // useEffect выполняется после рендера компонента
  useEffect(() => {
    // Функция для получения данных
    const fetchProducts = async () => {
      try {
        // Отправляем GET запрос на API для получения всех товаров
        const response = await axios.get(
          "https://torguisam.ru/api/product/oksei-all-products"
        );
        // Сохраняем полученные товары в состояние (берем только первые 10)
        // response.data содержит массив товаров с полями: id, name, description, image
        setProducts(response.data.slice(0, 20));
        // Устанавливаем loading в false, так как данные загружены
        setLoading(false);
      } catch (err) {
        // Если произошла ошибка, сохраняем её
        setError(err.message);
        setLoading(false);
      }
    };
    // Вызываем функцию
    fetchProducts();
  }, []); // Пустой массив зависимостей означает, что эффект выполнится только один раз
  // Функция для обновления списка товаров с сервера
  const refreshProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://torguisam.ru/api/product/oksei-all-products"
      );
      setProducts(response.data.slice(0, 10));
      setLoading(false);
    } catch (err) {
      console.error("Ошибка при обновлении товаров:", err);
      setError(err.message);
      setLoading(false);
    }
  };
  // Функция-обработчик успешного создания товара
  const handleProductCreated = (newProduct) => {
    // Обновляем список товаров с сервера, чтобы получить актуальные данные
    refreshProducts();
    // Скрываем форму после успешного создания
    setShowCreateForm(false);
  };
  // Показываем индикатор загрузки
  if (loading) return <div className="loading">Загрузка товаров...</div>;
  // Показываем сообщение об ошибке
  if (error) return <div className="error">Ошибка: {error}</div>;

  return (
    <>
      <div className={styles.Rick}>
        {products.map((product) => (
          <Rick key={product.id} product={product} />
        ))}
      </div>
      {/* Кнопка для показа/скрытия формы создания товара */}
      <div className={styles.btns}>
        <button
          className={styles.slay}
          onClick={() => setShowCreateForm(!showCreateForm)}
        >
          {showCreateForm ? "Скрыть форму" : "Создать новый товар"}
        </button>
      </div>
      {/* Форма создания товара */}
      {showCreateForm && (
        <Post onProductCreated={handleProductCreated} />
      )}
    </>
  );
}

export default Katalog;
