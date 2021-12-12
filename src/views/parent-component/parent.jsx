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
              placeholder=" " />
            <label for="input">Input</label>
          </div>
          <div class="input-group">
            <select
              name="operators"
              id="operators"
              name="operators"
              placeholder="operator"
              onChange={() => setSelectValue()}
              value=""
            >
              <option value=""></option>
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="*">*</option>
              <option value="/">/</option>
            </select>
            <label for="operators">Operator</label>
          </div>
        </p>
      </div>
    );
  }
}

customElements.define("parent-element", Parent);

function setSelectValue() {
  const select = document.getElementById("operators");
  select.setAttribute("value", select.value);
}
