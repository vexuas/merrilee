import styles from './WorkInProgress.module.scss';

export function WorkInProgress() {
  return (
    <div className={styles.Container}>
      <div>Nothing here yet :)</div>
      <div>Have a Muse vibing while you wait</div>
      <div className={styles.Youtube}>
        <iframe
          className={styles.Video}
          allowFullScreen
          width="560"
          height="315"
          src="https://www.youtube.com/embed/rpBCfMMVgD0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </div>
  );
}
