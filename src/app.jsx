import { UnissonComponent, Router, Route, AsyncData } from "unisson";
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
    this._parameter = new AsyncData(this, "/parameters/" + categories[0]);
    Router(this.routerName, routes);
  }

  get parameter() {
    return this._parameter.getValue();
  }
  set parameter(val) {
    this._parameter.setAttribute("route", val);
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
            height="60px"
            width="60px"
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
            uId={this._parameter.uId}
            class={styles.menuButton}
            onClick={() => (this.parameter = getCategory("/parameters/"))}
            route={this.parameter}
          >
            Parameters
          </button>
        </div>
        <div id={this.routerName}></div>
      </div>
    );
  }
}

customElements.define("app-main", App);

const categories = ["Programming", "Pun", "Spooky", "Christmas"];

function getCategory(baseUrl) {
  const index = Math.floor(Math.random() * categories.length) + 0;
  const category = categories[index];
  return baseUrl + category;
}
