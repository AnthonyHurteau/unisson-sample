import { UnissonComponent } from "unisson";
import styles from "./loading.module.css";

export default class Loading extends UnissonComponent {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {}

  disconnectedCallback() {}

  template() {
    return (
      <div class={styles.loading}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}

customElements.define("loading-element", Loading);
