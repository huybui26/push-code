import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <div className={styles.laptopIcon}>
        <h1 className={styles.logo}>LOGO</h1>
        <div className={styles.thanhTmKimWrapper}>
          <div className={styles.thanhTmKim}>
            <div className={styles.thanhTmKimChild} />
            <input
              className={styles.laptopTaiNghe}
              placeholder="Laptop, tai nghe..."
              type="text"
            />
            <div className={styles.newTabNews}>
              <img
                className={styles.claritysearchLineIcon}
                alt=""
                src="/claritysearchline.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.helpCircleParent}>
          <div className={styles.helpCircle}>
            <div className={styles.cartParent}>
              <img
                className={styles.cartIcon}
                loading="lazy"
                alt=""
                src="/cart.svg"
              />
              <div className={styles.shoppingCart}>
                <div className={styles.giHng}>Giỏ hàng</div>
              </div>
            </div>
          </div>
          <div className={styles.phcircleThinParent}>
            <img
              className={styles.phcircleThinIcon}
              loading="lazy"
              alt=""
              src="/phcirclethin.svg"
            />
            <div className={styles.productAndHelp}>
              <div className={styles.tiKhon}>Tài khoản</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
