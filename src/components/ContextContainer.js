import Containerheader from "./Containerheader";
import ContainerdivcardContext from "./ContainerdivcardContext";
import styles from "./ContextContainer.module.css";

const ContextContainer = () => {
  return (
    <section className={styles.containersectioncontext}>
      <Containerheader
        texth1light="Context"
        texth1bold="Selection"
        textp="ROSA (Rules Of Sports App) is a gamechanger in the way you manage, update and distribute the rules of your sport."
        containerheaderZIndex="0"
        texth1lightColor="#fff"
        texth1lightMargin="0"
        texth1boldColor="#fff"
        texth1boldMargin="0"
        textpColor="#fff"
        textpMargin="0"
      />
      <div className={styles.containerdivslider}>
        <div className={styles.containerdivcards}>
          <ContainerdivcardContext
            textlabelnumber="01."
            texth5="Context #1"
            textp="Simply download and install ROSA to unlock a world of sport-specific rules and regulations at your fingertips."
            containerdivcardContextBackgroundColor="#fff"
            containerdivcardContextBorder="1px solid var(--surfaces-default-surfaceprimary)"
            containerdivnumberBackgroundColor="#181f4e"
            textlabelnumberColor="#fff"
            texth5Color="#181f4e"
            texth5Margin="0"
            texth5FontWeight="700"
            textpColor="#7e84b5"
            textpMargin="0"
          />
          <ContainerdivcardContext
            textlabelnumber="02."
            texth5="Context #2"
            textp="Simply download and install ROSA to unlock a world of sport-specific rules and regulations at your fingertips."
            containerdivcardContextBackgroundColor="#181f4e"
            containerdivcardContextBorder="1px solid var(--colorWhite)"
            containerdivnumberBackgroundColor="#fab300"
            textlabelnumberColor="#181f4e"
            texth5Color="#fff"
            texth5Margin="0"
            texth5FontWeight="700"
            textpColor="#c8d2d8"
            textpMargin="0"
          />
          <ContainerdivcardContext
            textlabelnumber="03."
            texth5="Context #3"
            textp="Simply download and install ROSA to unlock a world of sport-specific rules and regulations at your fingertips."
            containerdivcardContextBackgroundColor="#181f4e"
            containerdivcardContextBorder="1px solid var(--colorWhite)"
            containerdivnumberBackgroundColor="#fab300"
            textlabelnumberColor="#181f4e"
            texth5Color="#fff"
            texth5Margin="0"
            texth5FontWeight="700"
            textpColor="#c8d2d8"
            textpMargin="0"
          />
          <ContainerdivcardContext
            textlabelnumber="04."
            texth5="Context #4"
            textp="Simply download and install ROSA to unlock a world of sport-specific rules and regulations at your fingertips."
            containerdivcardContextBackgroundColor="#181f4e"
            containerdivcardContextBorder="1px solid var(--colorWhite)"
            containerdivnumberBackgroundColor="#fab300"
            textlabelnumberColor="#181f4e"
            texth5Color="#fff"
            texth5Margin="0"
            texth5FontWeight="700"
            textpColor="#c8d2d8"
            textpMargin="0"
          />
        </div>
        <div className={styles.containerdivcontrol}>
          <img
            className={styles.imagecontrolactiveIcon}
            alt=""
            src="/imagecontrolactive@2x.png"
          />
          <img
            className={styles.imagecontrolinactiveIcon}
            alt=""
            src="/imagecontrolinactive@2x.png"
          />
          <img
            className={styles.imagecontrolinactiveIcon}
            alt=""
            src="/imagecontrolinactive@2x.png"
          />
          <img
            className={styles.imagecontrolinactiveIcon}
            alt=""
            src="/imagecontrolinactive@2x.png"
          />
        </div>
      </div>
      <img className={styles.imagephoneIcon} alt="" src="/imagephone@2x.png" />
    </section>
  );
};

export default ContextContainer;
