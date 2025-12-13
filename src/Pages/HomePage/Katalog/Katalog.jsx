import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Katalog.module.css";
import Rick from "../Rick/Rick";
import Post from "../Post/Post";
import { motion, AnimatePresence } from "framer-motion";

function Katalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const hoverVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const complexVariants = {
    animate: {
      scale: [1, 1.1, 1],
      rotate: [0, 3, -3, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 2,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://torguisam.ru/api/product/oksei-all-products"
        );
        setProducts(response.data.slice(0, 20));
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <div className="loading">Загрузка товаров...</div>;
  if (error) return <div className="error">Ошибка: {error}</div>;

  return (
    <>
      <motion.div
        className={styles.Rick}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <motion.div variants={hoverVariants}>
              <Rick product={product} />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <div className={styles.btns}>
        <motion.button
          className={styles.slay}
          variants={complexVariants}
          animate="animate"
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowCreateForm(!showCreateForm)}
        >
          {showCreateForm ? "Скрыть форму" : "Создать новый товар"}
        </motion.button>
      </div>

      <AnimatePresence>
        {showCreateForm && (
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -20 }}
          >
            <Post />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Katalog;
