# Pin npm packages by running ./bin/importmap

pin "application"
pin "application", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin_all_from "app/javascript/controllers", under: "controllers"
pin "bootstrap", to: "https://ga.jspm.io/npm:bootstrap@5.2.3/dist/js/bootstrap.esm.js"
pin "@popperjs/core", to: "https://unpkg.com/@popperjs/core@2.11.2/dist/esm/index.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin "@editorjs/editorjs", to: "@editorjs--editorjs.js" # @2.28.2
pin "@editorjs/header", to: "@editorjs--header.js" # @2.8.1
pin "@editorjs/list", to: "@editorjs--list.js" # @1.9.0
pin "@editorjs/paragraph", to: "@editorjs--paragraph.js" # @2.11.3
