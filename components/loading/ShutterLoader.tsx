const stage1Words = [
  { text: "Welcome", len: 7 },
  { text: "to", len: 2 },
];

const stage2Words = [
  { text: "Prajwal", len: 7 },
  { text: "Workspace", len: 9 },
];

import styles from "./ShutterLoader.module.css";

export default function ShutterLoader() {
  return (
    <div className={styles.intro}>
      <div className={styles.curtain} aria-hidden="true">
        <div className={`${styles.panel} ${styles.p1}`} />
        <div className={`${styles.panel} ${styles.p2}`} />
        <div className={`${styles.panel} ${styles.p3}`} />
        <div className={`${styles.panel} ${styles.p4}`} />
        <div className={`${styles.panel} ${styles.p5}`} />
        <div className={`${styles.panel} ${styles.p6}`} />
      </div>

      <h1 className={`${styles.glitchHeading} ${styles.stage1}`}>
        {stage1Words.map((w, i) => (
          <span
            key={w.text}
            className={styles.word}
            data-text={w.text}
            style={{ "--i": i, "--len": w.len } as React.CSSProperties}
          />
        ))}
      </h1>

      <h1 className={`${styles.glitchHeading} ${styles.stage2}`}>
        {stage2Words.map((w, i) => (
          <span
            key={w.text}
            className={styles.word}
            data-text={w.text}
            style={{ "--i": i, "--len": w.len } as React.CSSProperties}
          />
        ))}
      </h1>

      <p className={styles.srOnly}>Welcome to Prajwal Workspace</p>
    </div>
  );
}