import SearchBar from "../components/SearchBar";
import GroupComponent from "../components/GroupComponent";
import AboutUsLink from "../components/AboutUsLink";
import Footer from "../components/Footer";
import styles from "./TrangTinTc.module.css";

const TrangTinTc = () => {
  return (
    <div className={styles.trangTinTc}>
      <header className={styles.header}>
        <div className={styles.headerChild} />
        <SearchBar />
        <GroupComponent />
      </header>
      <main className={styles.image11Parent}>
        <img
          className={styles.image11Icon}
          loading="lazy"
          alt=""
          src="/image-11@2x.png"
        />
        <section className={styles.aboutUsLinkWrapper}>
          <AboutUsLink />
        </section>
      </main>
      <Footer />
      <h2 className={styles.tinTc}>Tin tức</h2>
    </div>
  );
};

export default TrangTinTc;
