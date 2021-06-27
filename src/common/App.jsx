import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import styles from "./Common.module.css";


function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
