import { VideoBG } from "../../components/VideoBG/VideoBG";
import video from "../../assets/videos/videoBackground.mp4";
import { Synopsis } from "../../components/Synopsis/Synopsis";

export const Home = () => {
  return (
    <div className="home">
      <Synopsis>
        <VideoBG videoBG={video} />
      </Synopsis>
    </div>
  );
};
