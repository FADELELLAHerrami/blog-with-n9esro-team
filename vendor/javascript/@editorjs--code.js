(function(){try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".ce-code__textarea{min-height:200px;font-family:Menlo,Monaco,Consolas,Courier New,monospace;color:#41314e;line-height:1.6em;font-size:12px;background:#f8f7fa;border:1px solid #f1f1f4;box-shadow:none;white-space:pre;word-wrap:normal;overflow-x:auto;resize:vertical}")),document.head.appendChild(e)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();function l(e,t){let a="";for(;a!=="\n"&&t>0;)t-=1,a=e.substr(t,1);return a==="\n"&&(t+=1),t}const e='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8L5 12L9 16"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8L19 12L15 16"/></svg>';
/**
 * CodeTool for Editor.js
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license MIT
 * @version 2.0.0
 */class d{
/**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
static get isReadOnlySupported(){return!0}
/**
   * Allow to press Enter inside the CodeTool textarea
   *
   * @returns {boolean}
   * @public
   */static get enableLineBreaks(){return!0}
/**
   * @typedef {object} CodeData — plugin saved data
   * @property {string} code - previously saved plugin code
   */
/**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {object} options - tool constricting options
   * @param {CodeData} options.data — previously saved plugin code
   * @param {object} options.config - user config for Tool
   * @param {object} options.api - Editor.js API
   * @param {boolean} options.readOnly - read only mode flag
   */constructor({data:e,config:t,api:a,readOnly:r}){this.api=a,this.readOnly=r,this.placeholder=this.api.i18n.t(t.placeholder||d.DEFAULT_PLACEHOLDER),this.CSS={baseClass:this.api.styles.block,input:this.api.styles.input,wrapper:"ce-code",textarea:"ce-code__textarea"},this.nodes={holder:null,textarea:null},this.data={code:e.code||""},this.nodes.holder=this.drawView()
/**
   * Create Tool's view
   *
   * @returns {HTMLElement}
   * @private
   */}drawView(){const e=document.createElement("div"),t=document.createElement("textarea");return e.classList.add(this.CSS.baseClass,this.CSS.wrapper),t.classList.add(this.CSS.textarea,this.CSS.input),t.textContent=this.data.code,t.placeholder=this.placeholder,this.readOnly&&(t.disabled=!0),e.appendChild(t),t.addEventListener("keydown",(e=>{switch(e.code){case"Tab":this.tabHandler(e);break}})),this.nodes.textarea=t,e
/**
   * Return Tool's view
   *
   * @returns {HTMLDivElement} this.nodes.holder - Code's wrapper
   * @public
   */}render(){return this.nodes.holder}
/**
   * Extract Tool's data from the view
   *
   * @param {HTMLDivElement} codeWrapper - CodeTool's wrapper, containing textarea with code
   * @returns {CodeData} - saved plugin code
   * @public
   */save(e){return{code:e.querySelector("textarea").value}}
/**
   * onPaste callback fired from Editor`s core
   *
   * @param {PasteEvent} event - event with pasted content
   */onPaste(e){const t=e.detail.data;this.data={code:t.textContent}}
/**
   * Returns Tool`s data from private property
   *
   * @returns {CodeData}
   */get data(){return this._data}
/**
   * Set Tool`s data to private property and update view
   *
   * @param {CodeData} data - saved tool data
   */set data(e){this._data=e,this.nodes.textarea&&(this.nodes.textarea.textContent=e.code)
/**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */}static get toolbox(){return{icon:e,title:"Code"}}
/**
   * Default placeholder for CodeTool's textarea
   *
   * @public
   * @returns {string}
   */static get DEFAULT_PLACEHOLDER(){return"Enter a code"}
/**
   *  Used by Editor.js paste handling API.
   *  Provides configuration to handle CODE tag.
   *
   * @static
   * @returns {{tags: string[]}}
   */static get pasteConfig(){return{tags:["pre"]}}
/**
   * Automatic sanitize config
   *
   * @returns {{code: boolean}}
   */static get sanitize(){return{code:!0}}
/**
   * Handles Tab key pressing (adds/removes indentations)
   *
   * @private
   * @param {KeyboardEvent} event - keydown
   * @returns {void}
   */tabHandler(e){e.stopPropagation(),e.preventDefault();const t=e.target,a=e.shiftKey,r=t.selectionStart,s=t.value,n="  ";let o;if(a){const e=l(s,r);if(s.substr(e,n.length)!==n)return;t.value=s.substring(0,e)+s.substring(e+n.length),o=r-n.length}else o=r+n.length,t.value=s.substring(0,r)+n+s.substring(r);t.setSelectionRange(o,o)}}export{d as default};

