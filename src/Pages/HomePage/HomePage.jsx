import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import styles from "./HomePage.module.css";
import Katalog from "./Katalog/Katalog";

function HomePage() {
  return (
    <>
      <div className={styles.HomePage}>
        <Header/>
        <Katalog />
        <Footer/>
      </div>
    </>
  );
}

export default HomePage;
