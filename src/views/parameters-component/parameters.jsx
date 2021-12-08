import { UnissonComponent } from "unisson";
import styles from "./parameters.module.css";

export default class Parameters extends UnissonComponent {
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
      <div>
        <p>Parameters component</p>
      </div>
    );
  }
}

customElements.define("parameters-element", Parameters);
