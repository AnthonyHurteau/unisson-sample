import { UnissonComponent, Router, Route } from "unisson";
import styles from "./app.module.css";

const routes = [
  new Route("home-element", "/", true),
  new Route("parent-element", "/parent"),
  new Route("parameters-element", "/parameters/:id"),
];

export default class App extends UnissonComponent {
  constructor() {
    super();
    this.routerName = "router";
    Router(this.routerName, routes);
  }

  connectedCallback() {
    this.title = "unisson-sample";
    this.render();
  }

  template() {
    return (
      <div>
        <div class={styles.appBar}>
          <img
            src="/unisson192.png"
            width="60"
            alt="AppBar logo" />
          <div>{this.title}</div>
          <button
            class={styles.menuButton}
            route="/">
            Home
          </button>
          <button
            class={styles.menuButton}
            route="/parent">
            Parent
          </button>
          <button
            class={styles.menuButton}
            route="/parameters/test">
            Parameters
          </button>
        </div>
        <div id={this.routerName}></div>
      </div>
    );
  }
}

customElements.define("app-main", App);
