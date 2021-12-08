import { UnissonComponent } from "unisson";
import styles from "./child.module.css";

export default class Child extends UnissonComponent {
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
        <p>Child component</p>
      </div>
    );
  }
}

customElements.define("child-element", Child);
