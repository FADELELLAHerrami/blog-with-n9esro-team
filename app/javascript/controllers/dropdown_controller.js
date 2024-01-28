import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dropdown"
export default class extends Controller {
  static targets = ["menu"]
  connect() {
    console.log("Hello from toggle_controller.js")
    console.log(this.element)
  }
  toggle() {
  console.log("Hello from toggle_controller.js")
  this.menuTarget.classList.toggle("d-none");
  }
}
