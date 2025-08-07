import "./NotFound.scss";
import Lottie from "lottie-react";
import animationData from "../../assets/lottie/no-data-anim.json";
import { ReactNode } from "react";

interface NotFoundProps {
  message?: ReactNode;
}

const NotFound = ({ message }: NotFoundProps) => {
  return (
    <div className="not-found">
      <div className="animation-container">
        <Lottie animationData={animationData} loop={true} />
      </div>
      <div className="message">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default NotFound;
