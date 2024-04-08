import styles from "./AboutUsLink.module.css";

const AboutUsLink = () => {
  return (
    <div className={styles.aboutUsLink}>
      <div className={styles.privacyPolicyLink}>
        <div className={styles.termsAndConditionsLink}>
          <div className={styles.trangChContainer}>
            <span>{`Trang chủ > `}</span>
            <b>Tin tức</b>
          </div>
        </div>
        <div className={styles.facebookIcon}>
          <div className={styles.slackLogo}>
            <h1 className={styles.miNht}>Mới nhất</h1>
            <div className={styles.instagramIcon}>
              <img
                className={styles.foundationarrowDownIcon}
                loading="lazy"
                alt=""
                src="/foundationarrowdown.svg"
              />
            </div>
          </div>
          <div className={styles.facebookIconChild} />
        </div>
      </div>
      <div className={styles.aboutUsLinkInner}>
        <div className={styles.frameParent}>
          <div className={styles.image1Parent}>
            <img
              className={styles.image1Icon}
              loading="lazy"
              alt=""
              src="/image-1@2x.png"
            />
            <div className={styles.image2Parent}>
              <img
                className={styles.image2Icon}
                loading="lazy"
                alt=""
                src="/image-2@2x.png"
              />
              <img
                className={styles.image3Icon}
                loading="lazy"
                alt=""
                src="/image-3@2x.png"
              />
              <img
                className={styles.image4Icon}
                loading="lazy"
                alt=""
                src="/image-4@2x.png"
              />
              <div className={styles.image5Wrapper}>
                <img
                  className={styles.image5Icon}
                  loading="lazy"
                  alt=""
                  src="/image-5@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.marketAnalysisWrapper}>
              <div className={styles.marketAnalysis}>
                <button className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <div className={styles.tinTcTh}>Tin tức thị trường</div>
                  <img
                    className={styles.iconParkOutlinemarketAnaly}
                    alt=""
                    src="/iconparkoutlinemarketanalysis.svg"
                  />
                </button>
                <div className={styles.image6Parent}>
                  <img
                    className={styles.image6Icon}
                    loading="lazy"
                    alt=""
                    src="/image-6@2x.png"
                  />
                  <img
                    className={styles.image7Icon}
                    loading="lazy"
                    alt=""
                    src="/image-7@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.image8Wrapper}>
                <img
                  className={styles.image8Icon}
                  loading="lazy"
                  alt=""
                  src="/image-8@2x.png"
                />
              </div>
              <img
                className={styles.image9Icon}
                loading="lazy"
                alt=""
                src="/image-9@2x.png"
              />
            </div>
            <div className={styles.image10Wrapper}>
              <img
                className={styles.image10Icon}
                loading="lazy"
                alt=""
                src="/image-10@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsLink;
