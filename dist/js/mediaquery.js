/*! Formstone v0.0.1 [mediaquery.js] 2014-12-08 | MIT License | formstone.it */

!function(a,b){"use strict";function c(b){b=b||{};for(var c in u)u.hasOwnProperty(c)&&(n[c]=b[c]?a.merge(b[c],n[c]):n[c]);n=a.extend(n,b),n.minWidth.sort(h),n.maxWidth.sort(g),n.minHeight.sort(h),n.maxHeight.sort(g);for(var d in u)if(u.hasOwnProperty(d)){t[d]={};for(var f in n[d])if(n[d].hasOwnProperty(f)){var i=window.matchMedia("("+u[d]+": "+(1/0===n[d][f]?1e5:n[d][f])+n.unit+")");i.addListener(e),t[d][n[d][f]]=i}}e()}function d(){r={unit:n.unit};for(var a in u)if(u.hasOwnProperty(a))for(var b in t[a])if(t[a].hasOwnProperty(b)&&t[a][b].matches){var c="Infinity"===b?1/0:parseInt(b,10);a.indexOf("max")>-1?(!r[a]||c<r[a])&&(r[a]=c):(!r[a]||c>r[a])&&(r[a]=c)}}function e(){d(),p.trigger(o.mqChange,[r])}function f(a){var b=i(a.media),c=s[b],d=a.matches?o.enter:o.leave;if(c.active||!c.active&&a.matches){for(var e in c[d])c[d].hasOwnProperty(e)&&c[d][e].apply(c.mq);c.active=!0}}function g(a,b){return b-a}function h(a,b){return a-b}function i(a){return a.replace(/[^a-z0-9\s]/gi,"").replace(/[_\s]/g,"")}function j(){return r}function k(a,b){var c=i(a);s[c]||(s[c]={mq:q.matchMedia(a),active:!0,enter:[],leave:[]},s[c].mq.addListener(f));for(var d in b)b.hasOwnProperty(d)&&s[c].hasOwnProperty(d)&&s[c][d].push(b[d]);f(s[c].mq)}function l(a){var b=i(a);s[b]&&(s[b].mq.removeListener(f),s=s.splice(s.indexOf(s[b]),1))}var m=b.Plugin("mediaquery",{utilities:{_initialize:c,state:j,bind:k,unbind:l},events:{mqChange:"mqchange"}}),n={minWidth:[0],maxWidth:[1/0],minHeight:[0],maxHeight:[1/0],unit:"px"},o=a.extend(m.events,{enter:"enter",leave:"leave"}),p=b.$window,q=p[0],r=null,s=[],t={},u={minWidth:"min-width",maxWidth:"max-width",minHeight:"min-height",maxHeight:"max-height"}}(jQuery,Formstone);