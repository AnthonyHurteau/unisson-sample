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
      <div class="container flexHCenter flexVCenter">
        <h1 class="title flexFull">Parent Component</h1>
        <p>
          <div class="input-group">
            <input
              id="input"
              type="text"
              name="input"
              placeholder="Input" />
            <label for="input">Input</label>
          </div>
        </p>
      </div>
    );
  }
}

customElements.define("parent-element", Parent);
