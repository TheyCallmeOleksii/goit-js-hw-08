function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,g=function(){return l.Date.now()};function m(t,e,n){var o,r,i,f,a,u,c=0,l=!1,s=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=o,i=r;return o=r=void 0,c=e,f=t.apply(i,n)}function h(t){return c=t,a=setTimeout(O,e),l?y(t):f}function j(t){var n=t-u;return void 0===u||n>=e||n<0||s&&t-c>=i}function O(){var t=g();if(j(t))return w(t);a=setTimeout(O,function(t){var n=e-(t-u);return s?v(n,i-(t-c)):n}(t))}function w(t){return a=void 0,m&&o?y(t):(o=r=void 0,f)}function T(){var t=g(),n=j(t);if(o=arguments,r=this,u=t,n){if(void 0===a)return h(u);if(s)return a=setTimeout(O,e),y(u)}return void 0===a&&(a=setTimeout(O,e)),f}return e=b(e)||0,p(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,e):i,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=u=r=a=void 0},T.flush=function(){return void 0===a?f:w(g())},T}function p(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(p(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=p(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=i.test(t);return n||f.test(t)?a(t.slice(2),n?2:8):r.test(t)?NaN:+t}e=function(t,e,n){var o=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),m(t,e,{leading:o,maxWait:e,trailing:r})};const y=document.querySelector(".feedback-form");y.addEventListener("input",t(e)((function(t){h[t.target.name]=t.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(h))}),500)),y.addEventListener("submit",(function(t){t.preventDefault(),console.log(h),h={},localStorage.removeItem("feedback-form-state"),t.target.reset()}));!function(){try{const t=localStorage.getItem("feedback-form-state");if(!t)return;h=JSON.parse(t),Object.entries(h).forEach((([t,e])=>{y.elements[t].value=e}))}catch(t){console.log(t.message)}}();let h={};
//# sourceMappingURL=03-feedback.7ae8eb90.js.map
