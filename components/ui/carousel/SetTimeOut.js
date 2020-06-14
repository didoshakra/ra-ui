import React, { useState, useEffect, useRef } from "react";
// import ReactDOM from "react-dom";

const SetTimeOut = () => {
  const useRecursiveTimeout = (callback, delay = 4000) => {
    const ref = useRef();

    useEffect(() => {
      ref.current = callback;
    });

    useEffect(() => {
      const tick = () => {
        const ret = ref.current();

        const nextDelay = Math.floor(Math.random() * (delay * 2)) + 1;
        if (!ret) {
          setTimeout(tick, nextDelay);
        } else if (ret.constructor === Promise) {
          ret.then(() => setTimeout(tick, nextDelay));
        }
      };

      const timer = setTimeout(tick, delay);

      return () => clearTimeout(timer);
    }, [delay]);
  };

  const Counter = () => {
    const [count, setCount] = useState(0);

    useRecursiveTimeout(() => setCount(count + 1), 4000);

    return (
      <div>
        <button onClick={() => setCount(count - 1)}>-</button> {count}{" "}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    );
  };

  const CounterP = () => {
    const [count, setCount] = useState(0);

    useRecursiveTimeout(
      () =>
        new Promise((r) => {
          setCount(count + 1);
          r();
        }),
      1000
    );

    return (
      <div>
        <button onClick={() => setCount(count - 1)}>-</button> {count}{" "}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    );
  };

  return (
    <div className="App">
      <h3>
        Hello
        CodeSandbox//https://www.aaron-powell.com/posts/2019-09-23-recursive-settimeout-with-react-hooks/
      </h3>
      <h4>Start editing to see some magic happen!</h4>
      <Counter />
      <CounterP />
      <style jsx>{`
        .App {
          font-family: sans-serif;
          text-align: center;
        }
      `}</style>
    </div>
  );
};
export default SetTimeOut;
