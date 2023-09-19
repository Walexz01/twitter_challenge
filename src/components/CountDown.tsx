import Countdown, { zeroPad } from "react-countdown";

interface countDown {
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

const CountDown = () => {
  const Completionist = () => <span>You are good to go!</span>;
  const renderer = ({ hours, minutes, seconds, completed }: countDown) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="countdown">
          <div className="time">
            {zeroPad(hours)}
            <span className="unit">H</span>
          </div>
          <div className="time">
            {zeroPad(minutes)}
            <span className="unit">M</span>
          </div>
          <div className="time">
            {zeroPad(seconds)}
            <span className="unit">S</span>
          </div>
        </div>
      );
    }
  };
  return <Countdown renderer={renderer} date={Date.now() + 86400000} />;
};

export default CountDown;
