(function(){try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.cdx-checklist{gap:6px;display:flex;flex-direction:column}.cdx-checklist__item{display:flex;box-sizing:content-box;align-items:flex-start}.cdx-checklist__item-text{outline:none;flex-grow:1;line-height:1.57em}.cdx-checklist__item-checkbox{width:22px;height:22px;display:flex;align-items:center;margin-right:8px;margin-top:calc(.785em - 11px);cursor:pointer}.cdx-checklist__item-checkbox svg{opacity:0;height:20px;width:20px;position:absolute;left:-1px;top:-1px;max-height:20px}@media (hover: hover){.cdx-checklist__item-checkbox:not(.cdx-checklist__item-checkbox--no-hover):hover .cdx-checklist__item-checkbox-check svg{opacity:1}}.cdx-checklist__item-checkbox-check{cursor:pointer;display:inline-block;flex-shrink:0;position:relative;width:20px;height:20px;box-sizing:border-box;margin-left:0;border-radius:5px;border:1px solid #C9C9C9;background:#fff}.cdx-checklist__item-checkbox-check:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:100%;background-color:#369fff;visibility:hidden;pointer-events:none;transform:scale(1);transition:transform .4s ease-out,opacity .4s}@media (hover: hover){.cdx-checklist__item--checked .cdx-checklist__item-checkbox:not(.cdx-checklist__item--checked .cdx-checklist__item-checkbox--no-hover):hover .cdx-checklist__item-checkbox-check{background:#0059AB;border-color:#0059ab}}.cdx-checklist__item--checked .cdx-checklist__item-checkbox-check{background:#369FFF;border-color:#369fff}.cdx-checklist__item--checked .cdx-checklist__item-checkbox-check svg{opacity:1}.cdx-checklist__item--checked .cdx-checklist__item-checkbox-check svg path{stroke:#fff}.cdx-checklist__item--checked .cdx-checklist__item-checkbox-check:before{opacity:0;visibility:visible;transform:scale(2.5)}')),document.head.appendChild(e)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();const e='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 12L10.4884 15.8372C10.5677 15.9245 10.705 15.9245 10.7844 15.8372L17 9"/></svg>',t='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9.2 12L11.0586 13.8586C11.1367 13.9367 11.2633 13.9367 11.3414 13.8586L14.7 10.5"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>';function d(){const e=document.activeElement,t=window.getSelection().getRangeAt(0),i=t.cloneRange();return i.selectNodeContents(e),i.setStart(t.endContainer,t.endOffset),i.extractContents()}function C(e){const t=document.createElement("div");return t.appendChild(e),t.innerHTML}function c(e,t=null,i={}){const s=document.createElement(e);Array.isArray(t)?s.classList.add(...t):t&&s.classList.add(t);for(const e in i)s[e]=i[e];return s}function m(e){return e.innerHTML.replace("<br>"," ").trim()}function p(e,t=!1,i=void 0){const s=document.createRange(),o=window.getSelection();s.selectNodeContents(e),i!==void 0&&(s.setStart(e,i),s.setEnd(e,i)),s.collapse(t),o.removeAllRanges(),o.addRange(s)}Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);Element.prototype.closest||(Element.prototype.closest=function(e){let t=this;if(!document.documentElement.contains(t))return null;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(t!==null&&t.nodeType===1);return null});class f{
/**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
static get isReadOnlySupported(){return!0}
/**
   * Allow to use native Enter behaviour
   *
   * @returns {boolean}
   * @public
   */static get enableLineBreaks(){return!0}
/**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */static get toolbox(){return{icon:t,title:"Checklist"}}
/**
   * Allow Checkbox Tool to be converted to/from other block
   *
   * @returns {{export: Function, import: Function}}
   */static get conversionConfig(){return{
/**
       * To create exported string from the checkbox, concatenate items by dot-symbol.
       *
       * @param {ChecklistData} data - checklist data to create a string from that
       * @returns {string}
       */
export:e=>e.items.map((({text:e})=>e)).join(". ")
/**
       * To create a checklist from other block's string, just put it at the first item
       *
       * @param {string} string - string to create list tool data from that
       * @returns {ChecklistData}
       */,import:e=>({items:[{text:e,checked:!1}]})}}
/**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {object} options - block constructor options
   * @param {ChecklistData} options.data - previously saved data
   * @param {object} options.config - user config for Tool
   * @param {object} options.api - Editor.js API
   * @param {boolean} options.readOnly - read only mode flag
   */constructor({data:e,config:t,api:i,readOnly:s}){this._elements={wrapper:null,items:[]},this.readOnly=s,this.api=i,this.data=e||{}
/**
   * Returns checklist tag with items
   *
   * @returns {Element}
   */}render(){return this._elements.wrapper=c("div",[this.CSS.baseBlock,this.CSS.wrapper]),this.data.items||(this.data.items=[{text:"",checked:!1}]),this.data.items.forEach((e=>{const t=this.createChecklistItem(e);this._elements.wrapper.appendChild(t)})),this.readOnly||(this._elements.wrapper.addEventListener("keydown",(e=>{const[t,i]=[13,8];switch(e.keyCode){case t:this.enterPressed(e);break;case i:this.backspace(e);break}}),!1),this._elements.wrapper.addEventListener("click",(e=>{this.toggleCheckbox(e)}))),this._elements.wrapper
/**
   * Return Checklist data
   *
   * @returns {ChecklistData}
   */}save(){let e=this.items.map((e=>{const t=this.getItemInput(e);return{text:m(t),checked:e.classList.contains(this.CSS.itemChecked)}}));return e=e.filter((e=>e.text.trim().length!==0)),{items:e}
/**
   * Validate data: check if Checklist has items
   *
   * @param {ChecklistData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */}validate(e){return!!e.items.length}
/**
   * Toggle checklist item state
   *
   * @param {MouseEvent} event - click
   * @returns {void}
   */toggleCheckbox(e){const t=e.target.closest(`.${this.CSS.item}`),i=t.querySelector(`.${this.CSS.checkboxContainer}`);i.contains(e.target)&&(t.classList.toggle(this.CSS.itemChecked),i.classList.add(this.CSS.noHover),i.addEventListener("mouseleave",(()=>this.removeSpecialHoverBehavior(i)),{once:!0}))}
/**
   * Create Checklist items
   *
   * @param {ChecklistItem} item - data.item
   * @returns {Element} checkListItem - new element of checklist
   */createChecklistItem(t={}){const i=c("div",this.CSS.item),s=c("span",this.CSS.checkbox),o=c("div",this.CSS.checkboxContainer),n=c("div",this.CSS.textField,{innerHTML:t.text?t.text:"",contentEditable:!this.readOnly});return t.checked&&i.classList.add(this.CSS.itemChecked),s.innerHTML=e,o.appendChild(s),i.appendChild(o),i.appendChild(n),i
/**
   * Append new elements to the list by pressing Enter
   *
   * @param {KeyboardEvent} event - keyboard event
   */}enterPressed(e){e.preventDefault();const t=this.items,i=document.activeElement.closest(`.${this.CSS.item}`);if(t.indexOf(i)===t.length-1&&m(this.getItemInput(i)).length===0){const e=this.api.blocks.getCurrentBlockIndex();i.remove(),this.api.blocks.insert(),this.api.caret.setToBlock(e+1);return}const s=d(),o=C(s),n=this.createChecklistItem({text:o,checked:!1});this._elements.wrapper.insertBefore(n,i.nextSibling),p(this.getItemInput(n),!0)
/**
   * Handle backspace
   *
   * @param {KeyboardEvent} event - keyboard event
   */}backspace(e){const t=e.target.closest(`.${this.CSS.item}`),i=this.items.indexOf(t),s=this.items[i-1];if(!s||!(window.getSelection().focusOffset===0))return;e.preventDefault();const o=d(),n=this.getItemInput(s),r=n.childNodes.length;n.appendChild(o),p(n,void 0,r),t.remove()
/**
   * Styles
   *
   * @private
   * @returns {object<string>}
   */}get CSS(){return{baseBlock:this.api.styles.block,wrapper:"cdx-checklist",item:"cdx-checklist__item",itemChecked:"cdx-checklist__item--checked",noHover:"cdx-checklist__item-checkbox--no-hover",checkbox:"cdx-checklist__item-checkbox-check",textField:"cdx-checklist__item-text",checkboxContainer:"cdx-checklist__item-checkbox"}}
/**
   * Return all items elements
   *
   * @returns {Element[]}
   */get items(){return Array.from(this._elements.wrapper.querySelectorAll(`.${this.CSS.item}`))}
/**
   * Removes class responsible for special hover behavior on an item
   * 
   * @private
   * @param {Element} el - item wrapper
   * @returns {Element}
   */removeSpecialHoverBehavior(e){e.classList.remove(this.CSS.noHover)}
/**
   * Find and return item's content editable element
   *
   * @private
   * @param {Element} el - item wrapper
   * @returns {Element}
   */getItemInput(e){return e.querySelector(`.${this.CSS.textField}`)}}export{f as default};

