import { UnissonComponent, httpClient, AsyncData } from "unisson";
import styles from "./parameters.module.css";

export default class Parameters extends UnissonComponent {
  constructor() {
    super();
    this._categoryString = new AsyncData(this, "Here is a wonderful joke");
    this._joke = new AsyncData(this, getJokeNode());
  }

  set params(val) {
    this.categoryString = val;
    setTimeout(async () => {
      this.joke = await getJokeAsync(val);
    }, 2000);
  }

  get categoryString() {
    return this._categoryString.getValue();
  }
  set categoryString(val) {
    const categoryString = `Here is a wonderful ${val} joke`;
    this._categoryString.setValue(categoryString);
  }

  get joke() {
    return this._joke.getValue();
  }
  set joke(val) {
    const jokeNode = getJokeNode(val);
    this._joke.setNode(jokeNode);
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {}

  disconnectedCallback() {}

  template() {
    return (
      <div class="container flexHCenter flexVCenter">
        <h1 class="title flexFull">Parameters Component</h1>
        <br />
        <div class={`${styles.card} flexHalf`}>
          <h2 uId={this._categoryString.uId}>{this.categoryString}</h2>
          <div uId={this._joke.uId}>{this.joke}</div>
        </div>
      </div>
    );
  }
}

customElements.define("parameters-element", Parameters);

function getJokeNode(joke) {
  if (joke) {
    return (
      <div>
        <p>{joke.setup}</p>
        <p>{joke.delivery}</p>
      </div>
    );
  } else {
    return <loading-element />;
  }
}

async function getJokeAsync(params) {
  const url = `https://v2.jokeapi.dev/joke/${params}?safe-mode&type=twopart`;
  const joke = await httpClient.get(url);
  return joke;
}
