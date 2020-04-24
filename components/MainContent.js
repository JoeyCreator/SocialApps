import React from "react";
import "./style/style.css";

function MainContent() {
  return (
    <main className="center">
      <div>
        <h1>A JavaScript library for building user interfaces</h1>
        <p>
          React is a JavaScript library for building user interfaces. Learn what
          React is all about on our homepage or in the tutorial.
        </p>

        <h2>Declarative</h2>
        <p>
          React makes it painless to create interactive UIs. Design simple views
          for each state in your application, and React will efficiently update
          and render just the right components when your data changes.
          Declarative views make your code more predictable and easier to debug.
        </p>

        <h2>Component-Based</h2>
        <p>
          Build encapsulated components that manage their own state, then
          compose them to make complex UIs. Since component logic is written in
          JavaScript instead of templates, you can easily pass rich data through
          your app and keep state out of the DOM.
        </p>
      </div>
    </main>
  );
}
export default MainContent;
