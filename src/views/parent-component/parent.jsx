import { UnissonComponent } from "unisson";
import styles from "./parent.module.css";

export default class Parent extends UnissonComponent {
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
        <p>Parent component</p>
      </div>
    );
  }
}

customElements.define("parent-element", Parent);
