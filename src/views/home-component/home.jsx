import { UnissonComponent, AsyncData } from "unisson";
import styles from "./home.module.css";

export default class Home extends UnissonComponent {
  constructor() {
    super();
    this._title = new AsyncData(this);
  }

  get title() {
    return this._title.getValue();
  }
  set title(val) {
    this._title.setValue(val);
  }

  connectedCallback() {
    this.render();

    const app = document.querySelector("app-main");
    this.title = app.title;
  }

  attributeChangedCallback() {}

  disconnectedCallback() {}

  template() {
    return (
      <div class="container">
        <h1
          uId={this._title.uId}
          class="title flexFull">
          Welcome to {this.title}
        </h1>
        <div class="flexFull">
          <img
            src="/unisson192.png"
            width="192px"
            height="192px"
            alt="Unisson logo" />
        </div>
        <h2 class="flexFull">The Unisson Framework</h2>
        <div class="flex flexSmall gutter">
          <h3>Design</h3>
          <p>
            Unisson is the French word for "unison" and it describes the design philosophy behind this project: making
            use of native browser features to compose an harmonious workflow.
          </p>
        </div>
        <div class="flex flexSmall gutter">
          <h3>Core</h3>
          <p>
            Unisson is a featherweight Javascript framework that integrates JSX into the native modern browser standard
            of Web Components.
          </p>
        </div>
        <div class="flex flexSmall gutter">
          <h3>Tangibility</h3>
          <p>
            No runtime dependencies and hardly any abstractions are included in order to give you as much liberty as
            possible to craft your website. 
          </p>
        </div>
        <h2 class="flexFull">Documentation</h2>
        <a
          class="flex"
          href="https://www.npmjs.com/package/unisson"
          target="_blank"
          rel="noopener noreferrer">
          NPM
        </a>
        <br />
        <a
          class="flex"
          href="https://github.com/AnthonyHurteau/unisson"
          target="_blank"
          rel="noopener noreferrer">
          Github
        </a>
        <br />
        <a
          class="flex"
          href="https://vitejs.dev/"
          target="_blank"
          rel="noopener noreferrer">
          Vitejs
        </a>
      </div>
    );
  }
}

customElements.define("home-element", Home);
