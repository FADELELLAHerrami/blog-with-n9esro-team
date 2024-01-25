import { Controller } from "@hotwired/stimulus"
import EditorJS from "@editorjs/editorjs"


// plugins
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Paragraph from "@editorjs/paragraph";

// Connects to data-controller="editor"
export default class extends Controller {
  static targets = ["article_content"];
  connect() {
    console.log("hello world", this.element);
    console.log("this ", this.article_contentTarget);
    const initialContent = this.getInitialContent();

    if (this.article_contentTarget) {
      this.contentEditor = new EditorJS({
        // holder is the target element
        holder: this.article_contentTarget,
        data: initialContent,
        tools: {
          header: Header,
          list: List,
          paragraph: {
            class: Paragraph,
            config: {
              inlineToolbar: true,
            },
          },
        },
      });
      this.element.addEventListener("submit", this.saveEditorData.bind(this));
    }
  }

  getInitialContent() {
    const hiddenInput = document.getElementById('article_content_hidden');
    if(hiddenInput && hiddenInput.value){
      return JSON.parse(hiddenInput.value)
    }else{
      return {}
    }
  }

  async saveEditorData(event) {
    event.preventDefault();
    const outputData = await this.contentEditor.save();
    const articleForm = this.element;

    // Utilisez `this.articleContentTarget` pour accéder à la cible correctement
    const hiddenInput = document.getElementById('article_content_hidden');

    hiddenInput.value = JSON.stringify(outputData);
    console.log(hiddenInput.value);
    articleForm.submit(); // Ajoutez les parenthèses ici
  }

}
