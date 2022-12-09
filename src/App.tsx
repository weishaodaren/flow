import type { Component } from "solid-js";
import { createSignal, createEffect } from "solid-js";

const App: Component = () => {
  const [count, setCount] = createSignal(0);
  const [ready, setReady] = createSignal(false);

  const doubledCount = () => count() * 2;
  const countDisplay = <div>{doubledCount()}</div>;

  setReady(true);

  const newCount = setCount((prev) => prev + 1);

  createEffect(() => {});

  return (
    <p>
      {count()}
      {countDisplay}
      {newCount}
    </p>
  );
};

export default App;
