import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <footer className={styles.footerChild} />
      <div className={styles.footerInner}>
        <div className={styles.frameParent}>
          <div className={styles.logoWrapper}>
            <h1 className={styles.logo}>LOGO</h1>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.shopParent}>
              <div className={styles.shop}>
                <b className={styles.shop1}>Shop</b>
                <div className={styles.laptopPcPhKinLinhLinSWrapper}>
                  <div className={styles.laptopPcPhContainer}>
                    <p className={styles.laptop}>Laptop</p>
                    <p className={styles.pc}>PC</p>
                    <p className={styles.phKin}>Phụ kiện</p>
                    <p className={styles.linhLin}>Linh liện</p>
                    <p className={styles.snPhmC}>Sản phẩm cũ</p>
                  </div>
                </div>
              </div>
              <div className={styles.aboutCompany}>
                <div className={styles.hTrKhchHng}>
                  <b className={styles.hTrKhch}>Hỗ trợ khách hàng</b>
                  <div className={styles.hngDnMuaContainer}>
                    <p className={styles.hngDnMua}>Hướng dẫn mua hàng</p>
                    <p className={styles.ccCuHi}>Các câu hỏi thường gặp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.vCngTyParent}>
              <div className={styles.vCngTy}>
                <b className={styles.vCngTy1}>Về công ty</b>
                <div className={styles.giiThiuCngContainer}>
                  <p className={styles.giiThiuCng}>Giới thiệu công ty</p>
                  <p className={styles.quyChHot}>Quy chế hoạt động</p>
                  <p className={styles.chnhSchCng}>Chính sách công ty</p>
                  <p className={styles.tuynDng}>Tuyển dụng</p>
                </div>
              </div>
              <div className={styles.contactInfo}>
                <div className={styles.linHViChngTi}>
                  <div className={styles.linHViChngTiWrapper}>
                    <div className={styles.linHVi}>Liên hệ với chúng tôi:</div>
                  </div>
                  <div className={styles.icbaselineFacebookParent}>
                    <img
                      className={styles.icbaselineFacebookIcon}
                      loading="lazy"
                      alt=""
                      src="/icbaselinefacebook.svg"
                    />
                    <div className={styles.simpleIconszaloWrapper}>
                      <img
                        className={styles.simpleIconszalo}
                        loading="lazy"
                        alt=""
                        src="/simpleiconszalo.svg"
                      />
                    </div>
                    <div className={styles.bottomFooter}>
                      <img
                        className={styles.mdiyoutubeIcon}
                        loading="lazy"
                        alt=""
                        src="/mdiyoutube.svg"
                      />
                    </div>
                    <div className={styles.mdiinstagramWrapper}>
                      <img
                        className={styles.mdiinstagramIcon}
                        loading="lazy"
                        alt=""
                        src="/mdiinstagram.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomFooter1}>
        <div className={styles.bottomFooterChild} />
        <img
          className={styles.icoutlineCopyrightIcon}
          loading="lazy"
          alt=""
          src="/icoutlinecopyright.svg"
        />
        <div className={styles.cngTy2024Wrapper}>
          <div className={styles.cngTy2024}>Công ty 2024</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
