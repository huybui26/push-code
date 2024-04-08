import styles from "./GroupComponent.module.css";

const GroupComponent = () => {
  return (
    <div className={styles.newsContentParent}>
      <div className={styles.newsContent} />
      <div className={styles.newsContent1} />
      <h2 className={styles.snPhm}>Sản phẩm</h2>
      <div className={styles.khuynMiWrapper}>
        <h2 className={styles.khuynMi}>Khuyến mãi</h2>
      </div>
      <div className={styles.tinTc}>Tin tức</div>
      <h2 className={styles.hTr}>Hỗ trợ</h2>
      <img
        className={styles.bichevronDownIcon}
        loading="lazy"
        alt=""
        src="/bichevrondown.svg"
      />
    </div>
  );
};

export default GroupComponent;
