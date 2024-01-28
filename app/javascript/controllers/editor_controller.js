import { Controller } from "@hotwired/stimulus"
import EditorJS from "@editorjs/editorjs"


// plugins
import Quote from "@editorjs/quote";
import Warning from "@editorjs/warning";
import CodeTool from "@editorjs/code";
import Checklist from "@editorjs/checklist";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import ImageTool from "@editorjs/image";
import Paragraph from "@editorjs/paragraph";
import Marker from "@editorjs/marker";
import Delimiter from "@editorjs/delimiter";
import Table from "@editorjs/table";



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
          code: CodeTool,
          checklist: Checklist,
          quote: Quote,
          warning: Warning,
          marker: Marker,
          delimiter: Delimiter,
          table: Table,
          image: {
            class: ImageTool,
            config: {
              uploader: {
                /**
                 * @param {File} file - file containing data
                 * @return {Promise<{default: string, files: {default: {url: string}}}>}
                 */
                uploadByFile(file) {
                  return fetch("/articles/upload_image", {
                    method: "POST",
                    body: file,
                  })
                    .then(response => response.json())
                    .then(result => {
                      return {
                        default: result.secure_url,
                        files: {
                          default: { url: result.secure_url }
                        }
                      };
                    })
                    .catch(error => {
                      console.error("Error uploading image:", error);
                      throw error;
                    });
                }
              },
            },
          },
        },
      });
      this.element.addEventListener("submit", this.saveEditorData.bind(this));
    }
  }

  getInitialContent() {
    const hiddenInput = document.getElementById('article_content_hidden');
    if (hiddenInput && hiddenInput.value) {
      return JSON.parse(hiddenInput.value);
    } else {
      // Set a default content here to act as a placeholder
      return {
        blocks: [
          {
            type: 'paragraph',
            data: {
              text: 'New post content here...',
              placeholder: true,
            },
          },
        ],
      };
    }
  }

  async saveEditorData(event) {
    event.preventDefault();
    const outputData = await this.contentEditor.save();
    const articleForm = this.element;

    // Utilisez `this.articleContentTarget` pour accéder à la cible correctement
    const hiddenInput = document.getElementById('article_content_hidden');

    hiddenInput.value = JSON.stringify(outputData);
    console.log(JSON.stringify(outputData));
    // articleForm.submit(); // Ajoutez les parenthèses ici
  }

}
