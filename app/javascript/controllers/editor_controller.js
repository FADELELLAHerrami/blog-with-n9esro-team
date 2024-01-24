import { Controller } from "@hotwired/stimulus"
import EditorJS from "@editorjs/editorjs"

// Connects to data-controller="editor"
export default class extends Controller {
  static targets = ["article_content"];
  connect() {
    console.log("hello world",this.element);
    this.contentEditor = new EditorJS({
      // holder is the target element
      holder: article_contentTrget,
    });
    this.element.addEventListener("submit", this.saveEditorData.bind(this));
  }
  async saveEditorData(event) {
    event.preventDefault();
    const outputData = await this.contentEditor.save();
    const articleForm = this.element
    const hiddenInput = document.getElementById("article_content")
    hiddenInput.valueJSON.stringify(outputData)
    articleForm.submit();
  }
}
