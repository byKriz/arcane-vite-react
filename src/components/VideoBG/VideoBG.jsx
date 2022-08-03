import style from "./VideoBG.module.scss";

export const VideoBG = ({ videoBG }) => {
  return (
    <>
      <div className={style.screen}>
      </div>
      <video
          className={style.videoSlide}
          src={videoBG}
          autoPlay
          muted
          loop
        ></video>
    </>
  );
};
