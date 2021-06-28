import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import styles from "./Common.module.css";
import Card from "../Components/Content/Card";


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
