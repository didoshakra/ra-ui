//Timer.js //https://overcoder.net/q/45851/%D1%82%D0%B0%D0%B9%D0%BC%D0%B5%D1%80-%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B3%D0%BE-%D0%BE%D1%82%D1%81%D1%87%D0%B5%D1%82%D0%B0-%D0%B2-react

const Timer = () => {
  // const [time, setTime] = React.useState({ h: "", m: "", s: "" });
  const [seconds, setSeconds] = React.useState(500);
  var timer = 0;
  // constructor() {
  //   super();
  //   this.state = { time: {}, seconds: 5 };
  //   this.timer = 0;
  //   this.startTimer = this.startTimer.bind(this);
  //   this.countDown = this.countDown.bind(this);
  // }

  // const secondsToTime = (secs) => {
  //   let hours = Math.floor(secs / (60 * 60));

  //   let divisor_for_minutes = secs % (60 * 60);
  //   let minutes = Math.floor(divisor_for_minutes / 60);

  //   let divisor_for_seconds = divisor_for_minutes % 60;
  //   let seconds = Math.ceil(divisor_for_seconds);

  //   let obj = {
  //     h: hours,
  //     m: minutes,
  //     s: seconds,
  //   };
  //   return obj;
  // };

  const startTimer = () => {
    let interval = setInterval(() => timer(), 1000);
    setTimer({ interval });
  };

  // const startTimer = () => {
  //   if (timer == 0 && seconds > 0) {
  //     timer = setInterval(countDown, 1000);
  //   }
  // };

  React.useEffect(() => {
    // let timeLeftVar = this.secondsToTime(this.state.seconds);
    // this.setState({ time: timeLeftVar });
    setTime(secondsToTime(seconds));
  });

  const countDown = () => {
    // Зменшужмо стан на сеунду.
    let seconds = seconds - 1;
    setTime(secondsToTime(seconds));
    setSeconds(seconds);
    // this.setState({
    //   time: this.secondsToTime(seconds),
    //   seconds: seconds,
    // });

    // Перевірте, чи ми на нулі.
    if (seconds == 0) {
      clearInterval(timer);
    }
  };

  return (
    <div>
      <button onClick={startTimer}>Start</button>
      m: {time.m} s: {time.s}
    </div>
  );
};

export default Timer;
