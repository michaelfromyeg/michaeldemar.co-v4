(self.webpackChunkmichaeldemar_co=self.webpackChunkmichaeldemar_co||[]).push([[691],{9438:function(e,t,n){var r;e.exports=(r=n(7294),function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){e.exports=n(2)()},function(e,t){e.exports=r},function(e,t,n){"use strict";var r=n(3);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,o,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),o=n(0),a=n.n(o),s=function(e){return 0!==e};function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var i=h(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(a,e);var t,n,r,o=f(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),y(m(t=o.call(this,e)),"continueOpenCollapsible",(function(){var e=m(t).innerRef;t.setState({height:e.scrollHeight,transition:"height ".concat(t.props.transitionTime,"ms ").concat(t.props.easing),isClosed:!1,hasBeenOpened:!0,inTransition:s(e.scrollHeight),shouldOpenOnNextCycle:!1})})),y(m(t),"handleTriggerClick",(function(e){t.props.triggerDisabled||t.state.inTransition||(e.preventDefault(),t.props.handleTriggerClick?t.props.handleTriggerClick(t.props.accordionPosition):!0===t.state.isClosed?(t.openCollapsible(),t.props.onOpening(),t.props.onTriggerOpening()):(t.closeCollapsible(),t.props.onClosing(),t.props.onTriggerClosing()))})),y(m(t),"handleTransitionEnd",(function(e){e.target===t.innerRef&&(t.state.isClosed?(t.setState({inTransition:!1}),t.props.onClose()):(t.setState({height:"auto",overflow:t.props.overflowWhenOpen,inTransition:!1}),t.props.onOpen()))})),y(m(t),"setInnerRef",(function(e){return t.innerRef=e})),t.timeout=void 0,t.contentId="collapsible-content-".concat(Date.now()),t.triggerId=e.triggerElementProps.id||"collapsible-trigger-".concat(Date.now()),e.open?t.state={isClosed:!1,shouldSwitchAutoOnNextCycle:!1,height:"auto",transition:"none",hasBeenOpened:!0,overflow:e.overflowWhenOpen,inTransition:!1}:t.state={isClosed:!0,shouldSwitchAutoOnNextCycle:!1,height:0,transition:"height ".concat(e.transitionTime,"ms ").concat(e.easing),hasBeenOpened:!1,overflow:"hidden",inTransition:!1},t}return t=a,(n=[{key:"componentDidUpdate",value:function(e,t){var n=this;this.state.shouldOpenOnNextCycle&&this.continueOpenCollapsible(),"auto"!==t.height&&0!==t.height||!0!==this.state.shouldSwitchAutoOnNextCycle||(window.clearTimeout(this.timeout),this.timeout=window.setTimeout((function(){n.setState({height:0,overflow:"hidden",isClosed:!0,shouldSwitchAutoOnNextCycle:!1})}),50)),e.open!==this.props.open&&(!0===this.props.open?(this.openCollapsible(),this.props.onOpening()):(this.closeCollapsible(),this.props.onClosing()))}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.timeout)}},{key:"closeCollapsible",value:function(){var e=this.innerRef;this.setState({shouldSwitchAutoOnNextCycle:!0,height:e.scrollHeight,transition:"height ".concat(this.props.transitionCloseTime?this.props.transitionCloseTime:this.props.transitionTime,"ms ").concat(this.props.easing),inTransition:s(e.scrollHeight)})}},{key:"openCollapsible",value:function(){this.setState({inTransition:s(this.innerRef.scrollHeight),shouldOpenOnNextCycle:!0})}},{key:"renderNonClickableTriggerElement",value:function(){return this.props.triggerSibling&&"string"==typeof this.props.triggerSibling?i.a.createElement("span",{className:"".concat(this.props.classParentString,"__trigger-sibling")},this.props.triggerSibling):this.props.triggerSibling&&"function"==typeof this.props.triggerSibling?this.props.triggerSibling():this.props.triggerSibling?i.a.createElement(this.props.triggerSibling,null):null}},{key:"render",value:function(){var e=this,t={height:this.state.height,WebkitTransition:this.state.transition,msTransition:this.state.transition,transition:this.state.transition,overflow:this.state.overflow},n=this.state.isClosed?"is-closed":"is-open",r=this.props.triggerDisabled?"is-disabled":"",o=!1===this.state.isClosed&&void 0!==this.props.triggerWhenOpen?this.props.triggerWhenOpen:this.props.trigger,a=this.props.contentContainerTagName,s=this.props.triggerTagName,l=this.props.lazyRender&&!this.state.hasBeenOpened&&this.state.isClosed&&!this.state.inTransition?null:this.props.children,u=this.props,p=u.classParentString,f=u.contentOuterClassName,d=u.contentInnerClassName,m="".concat(p,"__trigger ").concat(n," ").concat(r," ").concat(this.state.isClosed?this.props.triggerClassName:this.props.triggerOpenedClassName),h="".concat(p," ").concat(this.state.isClosed?this.props.className:this.props.openedClassName),y="".concat(p,"__contentOuter ").concat(f),g="".concat(p,"__contentInner ").concat(d);return i.a.createElement(a,c({className:h.trim()},this.props.containerElementProps),i.a.createElement(s,c({id:this.triggerId,className:m.trim(),onClick:this.handleTriggerClick,style:this.props.triggerStyle&&this.props.triggerStyle,onKeyPress:function(t){var n=t.key;(" "===n&&"button"!==e.props.triggerTagName.toLowerCase()||"Enter"===n)&&e.handleTriggerClick(t)},tabIndex:this.props.tabIndex&&this.props.tabIndex,"aria-expanded":!this.state.isClosed,"aria-disabled":this.props.triggerDisabled,"aria-controls":this.contentId,role:"button"},this.props.triggerElementProps),o),this.renderNonClickableTriggerElement(),i.a.createElement("div",{id:this.contentId,className:y.trim(),style:t,onTransitionEnd:this.handleTransitionEnd,ref:this.setInnerRef,hidden:this.props.contentHiddenWhenClosed&&this.state.isClosed&&!this.state.inTransition,role:"region","aria-labelledby":this.triggerId},i.a.createElement("div",{className:g.trim()},l)))}}])&&u(t.prototype,n),r&&u(t,r),a}(r.Component);g.propTypes={transitionTime:a.a.number,transitionCloseTime:a.a.number,triggerTagName:a.a.string,easing:a.a.string,open:a.a.bool,containerElementProps:a.a.object,triggerElementProps:a.a.object,classParentString:a.a.string,className:a.a.string,openedClassName:a.a.string,triggerStyle:a.a.object,triggerClassName:a.a.string,triggerOpenedClassName:a.a.string,contentOuterClassName:a.a.string,contentInnerClassName:a.a.string,accordionPosition:a.a.oneOfType([a.a.string,a.a.number]),handleTriggerClick:a.a.func,onOpen:a.a.func,onClose:a.a.func,onOpening:a.a.func,onClosing:a.a.func,onTriggerOpening:a.a.func,onTriggerClosing:a.a.func,trigger:a.a.oneOfType([a.a.string,a.a.element]),triggerWhenOpen:a.a.oneOfType([a.a.string,a.a.element]),triggerDisabled:a.a.bool,lazyRender:a.a.bool,overflowWhenOpen:a.a.oneOf(["hidden","visible","auto","scroll","inherit","initial","unset"]),contentHiddenWhenClosed:a.a.bool,triggerSibling:a.a.oneOfType([a.a.element,a.a.func]),tabIndex:a.a.number,contentContainerTagName:a.a.string,children:a.a.oneOfType([a.a.string,a.a.element])},g.defaultProps={transitionTime:400,transitionCloseTime:null,triggerTagName:"span",easing:"linear",open:!1,classParentString:"Collapsible",triggerDisabled:!1,lazyRender:!1,overflowWhenOpen:"hidden",contentHiddenWhenClosed:!1,openedClassName:"",triggerStyle:null,triggerClassName:"",triggerOpenedClassName:"",contentOuterClassName:"",contentInnerClassName:"",className:"",triggerSibling:null,onOpen:function(){},onClose:function(){},onOpening:function(){},onClosing:function(){},onTriggerOpening:function(){},onTriggerClosing:function(){},tabIndex:null,contentContainerTagName:"div",triggerElementProps:{}},t.default=g}]))},8576:function(e,t,n){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),a=f(o),s=f(n(2)),l=f(n(10)),c=f(n(12)),u=f(n(13)),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(14));function f(e){return e&&e.__esModule?e:{default:e}}var d=["🔙","⏰"],m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={textLines:[],isDone:!1},n.onTypingDone=function(){n.mounted&&(n.setState({isDone:!0}),n.props.onTypingDone())},n.delayGenerator=function(e,t,r,i){var o=n.props.avgTypingDelay,a=n.props.stdTypingDelay;return n.props.delayGenerator(o,a,{line:e,lineIdx:t,character:r,charIdx:i,defDelayGenerator:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;return p.gaussianRnd(e,t)}})},n.typeLine=function(e,t){if(!n.mounted)return Promise.resolve();var r=e,i=n.props.onLineTyped;return p.isBackspaceElement(e)?(e.props.delay>0&&(n.introducedDelay=e.props.delay),r=String("🔙").repeat(e.props.count)):p.isDelayElement(e)&&(n.introducedDelay=e.props.ms,r="⏰"),new Promise((function(e,o){n.setState({textLines:n.state.textLines.concat([""])},(function(){p.eachPromise(r,n.typeCharacter,r,t).then((function(){return i(r,t)})).then(e).catch(o)}))}))},n.typeCharacter=function(e,t,r,i){if(!n.mounted)return Promise.resolve();var o=n.props.onCharacterTyped;return new Promise((function(a){var s=n.state.textLines.slice();p.sleep(n.introducedDelay).then((function(){n.introducedDelay=null;var l="🔙"===e;if("⏰"===e)a();else{if(l&&i>0){for(var c=i-1,u=s[c],p=c;p>=0&&(!(u.length>0)||d.includes(u[0]));p--)u=s[c=p];s[c]=u.substr(0,u.length-1)}else s[i]+=e;n.setState({textLines:s},(function(){var s=n.delayGenerator(r,i,e,t);o(e,t),setTimeout(a,s)}))}}))}))},n.mounted=!1,n.linesToType=[],n.introducedDelay=null,e.children&&(n.linesToType=p.extractTextFromElement(e.children)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){this.mounted=!0;var e=this.props,t=e.children,n=e.startDelay;t?n>0&&"undefined"!=typeof window?setTimeout(this.typeAllLines.bind(this),n):this.typeAllLines():this.onTypingDone()}},{key:"shouldComponentUpdate",value:function(e,t){if(t.textLines.length!==this.state.textLines.length)return!0;for(var n=0;n<t.textLines.length;n++){if(this.state.textLines[n]!==t.textLines[n])return!0}return this.state.isDone!==t.isDone}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"typeAllLines",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.linesToType;return p.eachPromise(t,this.typeLine).then((function(){return e.onTypingDone()}))}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.cursor,i=this.state.isDone,o=p.cloneElementWithSpecifiedText({element:this.props.children,textLines:this.state.textLines});return a.default.createElement("div",{className:"Typist "+t},o,a.default.createElement(l.default,r({isDone:i},n)))}}]),t}(o.Component);m.propTypes={children:s.default.node,className:s.default.string,avgTypingDelay:s.default.number,stdTypingDelay:s.default.number,startDelay:s.default.number,cursor:s.default.object,onCharacterTyped:s.default.func,onLineTyped:s.default.func,onTypingDone:s.default.func,delayGenerator:s.default.func},m.defaultProps={className:"",avgTypingDelay:70,stdTypingDelay:25,startDelay:0,cursor:{},onCharacterTyped:function(){},onLineTyped:function(){},onTypingDone:function(){},delayGenerator:p.gaussianRnd},t.default=m,m.Backspace=c.default,m.Delay=u.default},function(e,t){e.exports=n(7294)},function(e,t,n){e.exports=n(9)()},function(e,t,n){"use strict";var r=n(4),i=n(5),o=n(6),a=n(7),s=n(8);e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator;var l="<<anonymous>>",c={array:d("array"),bool:d("boolean"),func:d("function"),number:d("number"),object:d("object"),string:d("string"),symbol:d("symbol"),any:f(r.thatReturnsNull),arrayOf:function(e){return f((function(t,n,r,i,o){if("function"!=typeof e)return new p("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new p("Invalid "+i+" `"+o+"` of type `"+h(s)+"` supplied to `"+r+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,r,i,o+"["+l+"]",a);if(c instanceof Error)return c}return null}))},element:f((function(t,n,r,i,o){var a=t[n];return e(a)?null:new p("Invalid "+i+" `"+o+"` of type `"+h(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),instanceOf:function(e){return f((function(t,n,r,i,o){if(!(t[n]instanceof e)){var a=e.name||l;return new p("Invalid "+i+" `"+o+"` of type `"+(((s=t[n]).constructor&&s.constructor.name?s.constructor.name:l)+"` supplied to `")+r+"`, expected instance of `"+a+"`.")}var s;return null}))},node:f((function(e,t,n,r,i){return m(e[t])?null:new p("Invalid "+r+" `"+i+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return f((function(t,n,r,i,o){if("function"!=typeof e)return new p("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var s=t[n],l=h(s);if("object"!==l)return new p("Invalid "+i+" `"+o+"` of type `"+l+"` supplied to `"+r+"`, expected an object.");for(var c in s)if(s.hasOwnProperty(c)){var u=e(s,c,r,i,o+"."+c,a);if(u instanceof Error)return u}return null}))},oneOf:function(e){if(!Array.isArray(e))return r.thatReturnsNull;return f((function(t,n,r,i,o){for(var a=t[n],s=0;s<e.length;s++)if(u(a,e[s]))return null;return new p("Invalid "+i+" `"+o+"` of value `"+a+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}))},oneOfType:function(e){if(!Array.isArray(e))return r.thatReturnsNull;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return o(!1,"Invalid argument supplid to oneOfType. Expected an array of check functions, but received %s at index %s.",g(n),t),r.thatReturnsNull}return f((function(t,n,r,i,o){for(var s=0;s<e.length;s++)if(null==(0,e[s])(t,n,r,i,o,a))return null;return new p("Invalid "+i+" `"+o+"` supplied to `"+r+"`.")}))},shape:function(e){return f((function(t,n,r,i,o){var s=t[n],l=h(s);if("object"!==l)return new p("Invalid "+i+" `"+o+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var u=e[c];if(u){var f=u(s,c,r,i,o+"."+c,a);if(f)return f}}return null}))}};function u(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e){this.message=e,this.stack=""}function f(e){function n(n,r,o,s,c,u,f){(s=s||l,u=u||o,f!==a)&&(t&&i(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"));return null==r[o]?n?null===r[o]?new p("The "+c+" `"+u+"` is marked as required in `"+s+"`, but its value is `null`."):new p("The "+c+" `"+u+"` is marked as required in `"+s+"`, but its value is `undefined`."):null:e(r,o,s,c,u)}var r=n.bind(null,!1);return r.isRequired=n.bind(null,!0),r}function d(e){return f((function(t,n,r,i,o,a){var s=t[n];return h(s)!==e?new p("Invalid "+i+" `"+o+"` of type `"+y(s)+"` supplied to `"+r+"`, expected `"+e+"`."):null}))}function m(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(m);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!r)return!1;var i,o=r.call(t);if(r!==t.entries){for(;!(i=o.next()).done;)if(!m(i.value))return!1}else for(;!(i=o.next()).done;){var a=i.value;if(a&&!m(a[1]))return!1}return!0;default:return!1}}function h(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||"Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol}(t,e)?"symbol":t}function y(e){if(null==e)return""+e;var t=h(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function g(e){var t=y(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,c.checkPropTypes=s,c.PropTypes=c,c}},function(e,t){"use strict";function n(e){return function(){return e}}var r=function(){};r.thatReturns=n,r.thatReturnsFalse=n(!1),r.thatReturnsTrue=n(!0),r.thatReturnsNull=n(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,t){"use strict";e.exports=function(e,t,n,r,i,o,a,s){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,i,o,a,s],u=0;(l=new Error(t.replace(/%s/g,(function(){return c[u++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},function(e,t,n){"use strict";var r=n(4);e.exports=r},function(e,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";e.exports=function(e,t,n,r,i){}},function(e,t,n){"use strict";var r=n(4),i=n(5),o=n(7);e.exports=function(){function e(e,t,n,r,a,s){s!==o&&i(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),o=s(i),a=s(n(2));function s(e){return e&&e.__esModule?e:{default:e}}n(11);var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._isReRenderingCursor=!1,n.state={shouldRender:n.props.show},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentWillReceiveProps",value:function(e){var t=this;!this.props.isDone&&e.isDone&&this.props.hideWhenDone&&setTimeout((function(){return t.setState({shouldRender:!1})}),this.props.hideWhenDoneDelay)}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.show,n=e.isDone;t&&(n||this._isReRenderingCursor||this._reRenderCursor())}},{key:"_reRenderCursor",value:function(){var e=this;this._isReRenderingCursor=!0,this.setState({shouldRender:!1},(function(){e.setState({shouldRender:!0},(function(){e._isReRenderingCursor=!1}))}))}},{key:"render",value:function(){if(this.state.shouldRender){var e=this.props.blink?" Cursor--blinking":"";return o.default.createElement("span",{className:"Cursor"+e},this.props.element)}return null}}]),t}(i.Component);l.propTypes={blink:a.default.bool,show:a.default.bool,element:a.default.node,hideWhenDone:a.default.bool,hideWhenDoneDelay:a.default.number,isDone:a.default.bool},l.defaultProps={blink:!0,show:!0,element:"|",hideWhenDone:!1,hideWhenDoneDelay:1e3,isDone:!1},t.default=l},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(1)),i=o(n(2));function o(e){return e&&e.__esModule?e:{default:e}}var a=function(){return r.default.createElement("noscript",null)};a.componentName="Backspace",a.propTypes={count:i.default.number,delay:i.default.number},a.defaultProps={count:1,delay:0},t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(1)),i=o(n(2));function o(e){return e&&e.__esModule?e:{default:e}}var a=function(){return r.default.createElement("noscript",null)};a.componentName="Delay",a.propTypes={ms:i.default.number.isRequired},t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sleep=void 0;var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){i=!0,o=l}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.gaussianRnd=function(e,t){for(var n=0,r=0;r<12;r++)n+=Math.random();return n-=6,Math.round(n*t)+e},t.eachPromise=function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=function(e,n,i){return e.then((function(){return t.apply(void 0,[n,i].concat(r))}))};return Array.from(e).reduce(o,Promise.resolve())},t.exclude=s,t.isBackspaceElement=l,t.isDelayElement=c,t.extractTextFromElement=function(e){var t=e?[e]:[],n=[];for(;t.length>0;){var r=t.pop();if(a.default.isValidElement(r))l(r)||c(r)?n.unshift(r):a.default.Children.forEach(r.props.children,(function(e){t.push(e)}));else if(Array.isArray(r)){var i=!0,o=!1,s=void 0;try{for(var u,p=r[Symbol.iterator]();!(i=(u=p.next()).done);i=!0){var f=u.value;t.push(f)}}catch(d){o=!0,s=d}finally{try{!i&&p.return&&p.return()}finally{if(o)throw s}}}else n.unshift(r)}return n},t.cloneElement=u,t.cloneElementWithSpecifiedText=function(e){var t=e.element,n=e.textLines;if(!t)return;return p(t,n,0)[0]};var i,o=n(1),a=(i=o)&&i.__esModule?i:{default:i};t.sleep=function(e){return new Promise((function(t){return null!=e?setTimeout(t,e):t()}))};function s(e,t){var n={};for(var r in e)-1===t.indexOf(r)&&(n[r]=e[r]);return n}function l(e){return e&&e.type&&"Backspace"===e.type.componentName}function c(e){return e&&e.type&&"Delay"===e.type.componentName}function u(e,t){var n=e.type,r=s(e.props,["children"]),i=(new Date).getUTCMilliseconds()+Math.random()+Math.random();return r.key="Typist-element-"+n+"-"+i,a.default.createElement.apply(a.default,[n,r].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t)))}function p(e,t,n){if(n>=t.length)return[null,n];var i=n,o=function(e){var n=p(e,t,i),o=r(n,2),a=o[0],s=o[1];return i=s,a};return a.default.isValidElement(e)&&!(l(e)||c(e))?[u(e,a.default.Children.map(e.props.children,o)||[]),i]:Array.isArray(e)?[e.map(o),i]:[t[i],i+1]}}])},4521:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(7294),i=n(8576),o=n.n(i),a=n(166),s=n(4958),l=n(9438),c=n.n(l),u=n(5444),p=JSON.parse('{"b8":["bitgo","amazon","ubc-ta","samsung"],"q":["nominatr","vscode-puzzles","showrooms","rapviz"],"y$":["fiji-philanthropy","ams-food-bank","mlh-workshops"],"f3":["ubc","ib"]}'),f=n(7153),d=function(){var e=p.f3,t=f.f3.filter((function(t){return e.includes(t.id)}));return r.createElement("div",{className:"section"},r.createElement("h2",{className:"section-title"},"Education"," ",r.createElement("span",{role:"img","aria-label":"apple"},"🍎")),r.createElement("h5",{className:"section-redirect",style:{fontStyle:"oblique"}},"Learn more about my time at UBC ",r.createElement(u.Link,{to:"/blog"},"here"),"."),t.map((function(e,t){var n=r.createElement(r.Fragment,null,r.createElement("div",{className:"item"}),r.createElement("h3",{className:"entry-title"},e.degree," @ ",r.createElement("i",null,e.institution)," ",""));return r.createElement(c(),{key:t,trigger:n,transitionTime:300,easing:"ease-in-out"},r.createElement("div",{className:"entry",key:t},r.createElement("h5",null,e.location,"—",e.startDate," to ",e.endDate),r.createElement("ul",{className:"description"},r.createElement("li",null,e.degree),r.createElement("li",null,"Grade: ",e.gpa)),r.createElement("div",{className:"courselist"},e.courses.map((function(e,t){return r.createElement("div",{className:"course",key:t},e)})))))})))},m=function(){var e=p.b8,t=f.kw.filter((function(t){return e.includes(t.id)}));return r.createElement(r.Fragment,null,r.createElement("h2",{className:"section-title"},"Experience"," ",r.createElement("span",{role:"img","aria-label":"Hacker man"},"👨‍💻")),r.createElement("h5",{className:"section-redirect",style:{fontStyle:"oblique"}},"Read about my experiences in-depth ",r.createElement(u.Link,{to:"/blog"},"here"),"."),r.createElement("div",{className:"section"},t.map((function(e,t){var n=r.createElement(r.Fragment,null,r.createElement("div",{className:"item"}),r.createElement("h3",{className:"entry-title"},e.position," @ ",r.createElement("i",null,e.organization)," ",""));return r.createElement(c(),{key:t,trigger:n,transitionTime:300,easing:"ease-in-out"},r.createElement("div",{className:"entry",key:t},r.createElement("h5",null,e.location,"—",e.startDate," to"," ",e.endDate),r.createElement("ul",{className:"description"},e.highlights.map((function(e,t){return r.createElement("li",{key:t},e)}))),r.createElement("div",{className:"techstack"},e.technologies.map((function(e,t){return r.createElement("div",{key:t,className:"tech"},e)})))))}))))},h=function(){var e=p.q,t=f.q.filter((function(t){return e.includes(t.id)}));return r.createElement(r.Fragment,null,r.createElement("h2",{className:"section-title"},"Projects"," ",r.createElement("span",{role:"img","aria-label":"Construction"},"🏗️")),r.createElement("h5",{className:"section-redirect",style:{fontStyle:"oblique"}},"I also give each project a write-up! Read more about them"," ",r.createElement(u.Link,{to:"/projects"},"here"),"."),r.createElement("div",{className:"section"},t.map((function(e,t){var n=r.createElement(r.Fragment,null,r.createElement("div",{className:"item"}),r.createElement("h3",{className:"entry-title"},e.name,", ",r.createElement("i",null,e.summary)," ",""));return r.createElement(c(),{key:t,trigger:n,transitionTime:300,easing:"ease-in-out"},r.createElement("div",{className:"entry",key:t},r.createElement("h5",null,e.location,"—",e.date),r.createElement("ul",{className:"description"},e.highlights.map((function(e,t){return r.createElement("li",{key:t},e)})))))}))))},y=function(){var e=p.y$,t=f.y$.filter((function(t){return e.includes(t.id)}));return r.createElement(r.Fragment,null,r.createElement("h2",{className:"section-title"},"Activities"," ",r.createElement("span",{role:"img","aria-label":"Man running"},"🏃‍♂️")),r.createElement("h5",{className:"section-redirect",style:{fontStyle:"oblique"}},"Read more about ways ","I'm"," getting involved"," ",r.createElement(u.Link,{to:"/blog"},"here"),"."),r.createElement("div",{className:"section"},t.map((function(e,t){var n=r.createElement(r.Fragment,null,r.createElement("div",{className:"item"}),r.createElement("h3",{className:"entry-title"},e.position," @ ",r.createElement("i",null,e.organization)," ",""));return r.createElement(c(),{key:t,trigger:n,transitionTime:300,easing:"ease-in-out"},r.createElement("div",{className:"entry",key:t},r.createElement("h5",null,e.location,"—",e.startDate," to"," ",e.endDate),r.createElement("ul",{className:"description"},e.highlights.map((function(e,t){return r.createElement("li",{key:t},e)}))),e.skills&&r.createElement("div",{className:"techstack"},e.skills.map((function(e,t){return r.createElement("div",{key:t,className:"tech"},e)})))))}))))},g=n(5138),v=n(4204),b=function(){var e=r.createElement("a",{target:"_blank",href:"https://resume.michaeldemar.co",rel:"noreferrer"},"here"),t=r.createElement("p",{className:"redirects-bio"},"My name is Michael DeMarco and I am a ",v.U," "," Honours Computer Science and Data Science minor student at The University of British Columbia in Vancouver, BC. ","I'm"," interested in all things computing, including smart technology, distributed systems, and machine learning. To learn more about my background, keep scrolling to view an interactive version of my resume. If you would prefer the classic PDF style, click ",e,".");return r.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:(0,g.qZ)(30)}},r.createElement("h2",{className:"redirects-title"},"Hi, welcome to my website!"),t,r.createElement("p",{className:"redirects-bio"},"Have any questions or just want to chat? Feel free to grab a 30-minute slot (via Calendly) on my ",'"office hours"'," ",r.createElement("a",{href:"https://calendly.com/michaelfromyeg/office-hours",target:"_blank",rel:"noreferrer"},"here"),". You can also check out my free/busy calendar ",r.createElement("a",{href:"https://calendar.google.com/calendar/embed?src=michaelfromyeg%40gmail.com&ctz=America%2FVancouver",target:"_blank",rel:"noreferrer"},"here"),"."))},E=n(2330),T=n(1753),O=n.n(T),C=function(){var e=(0,r.useState)(0),t=e[0],n=e[1],i=["Michael DeMarco","an aspiring software developer","a UBC "+v.U,"excited to meet you!"],l=O();return r.createElement(r.Fragment,null,r.createElement(s.ZP,{location:s.tY.HOMEPAGE}),r.createElement(a.Z,{title:"Home"}),r.createElement("div",{className:"logo-text-wrapper"},r.createElement(l,{alt:"Michael's logo",className:"background-logo shadow"}),r.createElement("h1",{className:"title-text"},"Hi, ","I'm",r.createElement(o(),{className:"typist",onTypingDone:function(){n(t+1===i.length?0:t+1)},stdTypingDelay:25,key:t},">",i[t],r.createElement(o().Backspace,{count:i[t].length,delay:3e3})))),r.createElement("br",null),r.createElement("br",null),r.createElement(b,null),r.createElement("div",{className:"resume"},r.createElement(d,null),r.createElement(m,null),r.createElement(h,null),r.createElement(y,null),r.createElement(E.Z,null)))},w=function(){return r.createElement(C,null)}},1753:function(e,t,n){var r=n(7294);function i(e){return r.createElement("svg",e,[r.createElement("rect",{x:"509.3",y:"354.3",width:"51.8",height:"236.3",key:0}),r.createElement("path",{d:"M560.8,560.7v294.6c-0.1,62.2-12.4,102.7-47,132c-31.6,26-83.5,36.7-121.6,36.7l-7.3-46.1c32.4-2,60.8-9.4,77.8-24.7\n\tc17.3-16.7,25-38.6,26.5-97.8c0.2-7.3,0.3-15.3,0.3-23.9V619.9c0.9-20,4.1-39.9,9.5-59.2H560.8z",key:1}),r.createElement("rect",{x:"489.1",y:"141.4",width:"71.9",height:"268.9",key:2}),r.createElement("path",{d:"M524.7,91.7c29.4,0,47-21,46.1-45.5c0-26.1-17.6-46.3-44.5-46.3c-27.7,0-47,20.2-47,46.3C479.4,70.7,497,91.7,524.7,91.7z",key:3}),r.createElement("path",{d:"M977.8,909.5c29.4,0,47-21,46.1-45.5c0-26.1-17.6-46.3-44.5-46.3c-27.7,0-47,20.2-47,46.3\n\tC932.5,888.5,950.2,909.5,977.8,909.5z",key:4}),r.createElement("path",{d:"M879.6,800.5V309.9h-75.8v242.4h-1.7c-19-32.7-62.1-62.1-125.9-62.1c-74.7,0-141,44.8-170.6,122c-2.4,6.4-4.6,13-6.6,19.7\n\tc-5.4,19.3-8.6,39.2-9.5,59.2c-0.2,5-0.4,10-0.4,15.1v2c0,5.1,0.1,10,0.4,15c3.5,66.8,30.4,120.6,71.3,153.9\n\tc0.1,0.1,0.1,0.1,0.2,0.2c29.4,23.9,66.1,37.2,106.5,37.2c68.1,0,118.9-34.3,142.2-79.7h1.7l3.5,70.4h68\n\tC880.5,877.7,879.6,836.6,879.6,800.5z M803.8,735.1c0,11.8-0.9,21.8-3.5,31.9c-13.8,55.3-60.3,88-111.2,88\n\tc-81.9,0-123.3-67.9-123.3-150.1c0-89.7,46.6-156.9,125-156.9c56.9,0,98.3,38.6,109.5,85.6c2.6,9.2,3.5,21.8,3.5,31L803.8,735.1z",key:5}),r.createElement("path",{d:"M3.2,384c0-42-0.8-76.4-3.2-109.9h62.2l3.2,65.4h2.4c21.8-38.6,58.1-74.6,122.7-74.6c53.3,0,93.6,33.5,110.6,81.3h1.6\n\tc12.1-22.7,27.4-40.2,43.6-52.9c23.4-18.4,49.2-28.5,86.4-28.5c51.7,0,128.4,35.2,128.4,176.1v239h-69.4V450.2\n\tc0-78-27.5-125-84.8-125c-40.4,0-71.9,31-83.9,67.1c-3.7,11.9-5.6,24.4-5.7,36.9V680h-69.4V436.8c0-64.5-27.4-111.5-81.5-111.5\n\tc-44.4,0-76.7,36.9-88,73.8c-4,10.9-5.7,23.5-5.7,36V680H3.2V384z",key:6}),r.createElement("rect",{x:"489.2",y:"374.2",width:"59.3",height:"328.2",key:7})])}i.defaultProps={version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 1024 1024",style:{enableBackground:"new 0 0 1024 1024"},xmlSpace:"preserve"},e.exports=i,i.default=i}}]);
//# sourceMappingURL=component---src-pages-index-tsx-047891af47953391fbb3.js.map