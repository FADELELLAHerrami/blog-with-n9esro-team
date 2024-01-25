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
pin "@editorjs/code", to: "@editorjs--code.js" # @2.9.0
pin "@editorjs/image", to: "@editorjs--image.js" # @2.9.0
pin "@editorjs/checklist", to: "@editorjs--checklist.js" # @1.6.0
pin "@editorjs/quote", to: "@editorjs--quote.js" # @2.6.0
pin "@editorjs/warning", to: "@editorjs--warning.js" # @1.4.0
pin "@editorjs/marker", to: "@editorjs--marker.js" # @1.4.0
pin "@editorjs/delimiter", to: "@editorjs--delimiter.js" # @1.4.0
pin "@editorjs/table", to: "@editorjs--table.js" # @2.3.0
pin "embed" # @0.0.1
pin "buffer" # @2.0.1
pin "cookiejar" # @1.3.0
pin "debug" # @4.3.4
pin "events" # @2.0.1
pin "formidable" # @1.0.9
pin "fs" # @2.0.1
pin "http" # @2.0.1
pin "https" # @2.0.1
pin "methods" # @0.0.1
pin "mime" # @1.2.5
pin "ms" # @2.1.2
pin "path" # @2.0.1
pin "process" # @2.0.1
pin "qs" # @0.4.2
pin "querystring" # @2.0.1
pin "stream" # @2.0.1
pin "string_decoder" # @2.0.1
pin "superagent" # @0.8.1
pin "sys" # @2.0.1
pin "url" # @2.0.1
pin "util" # @2.0.1
pin "zlib" # @2.0.1
