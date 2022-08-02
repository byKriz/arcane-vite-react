import style from "./VideoBG.module.scss";


export const VideoBG = ({ videoBG }) => {
  return (
    <>
      <video className={style.videoSlide} src={videoBG} autoPlay muted loop></video>
    </>
  );
};
