(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"1jwa":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return g})),r.d(t,"renderToDom",(function(){return O}));r("xtjI"),r("4DPX"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi"),r("E5k/");var o=r("q1tI"),n=r("i8i4"),i=r("+qjn"),c=r("QJ+7"),a=r.n(c);var p=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){return o.createElement("div",{className:"control-panel"},o.createElement("h3",null,"Zoom to Bounding Box"),o.createElement("p",null,"Click on a San Fransisco Neighborhood to zoom in."),o.createElement("div",{className:"source-link"},o.createElement("a",{href:"https://github.com/visgl/react-map-gl/tree/5.2-release/examples/zoom-to-bounds",target:"_new"},"View Code ↗")))},n}(o.PureComponent),s=r("fjjH");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=u(u({},s),{},{sources:u({},s.sources),layers:s.layers.slice()});b.sources["sf-neighborhoods"]={type:"geojson",data:"https://raw.githubusercontent.com/uber/react-map-gl/master/examples/.data/feature-example-sf.json"},b.layers.push({id:"sf-neighborhoods-fill",source:"sf-neighborhoods",type:"fill",paint:{"fill-outline-color":"#0040c8","fill-color":"#fff","fill-opacity":0}},{id:"sf-neighborhoods-outline",source:"sf-neighborhoods",type:"line",paint:{"line-width":2,"line-color":"#0080ef"}});var d=b;function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this)._updateViewport=function(e){r.setState({viewport:e})},r._onClick=function(e){var t=e.features[0];if(t){var o=a()(t),n=o[0],c=o[1],p=o[2],s=o[3],l=new i.WebMercatorViewport(r.state.viewport).fitBounds([[n,c],[p,s]],{padding:40}),u=l.longitude,f=l.latitude,b=l.zoom;r.setState({viewport:y(y({},r.state.viewport),{},{longitude:u,latitude:f,zoom:b,transitionInterpolator:new i.LinearInterpolator({around:[e.offsetCenter.x,e.offsetCenter.y]}),transitionDuration:1e3})})}},r.state={viewport:{latitude:37.785164,longitude:-122.4,zoom:11,bearing:0,pitch:0},popupInfo:null},r._map=o.createRef(),r}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.state.viewport;return o.createElement(i.default,Object.assign({ref:this._map,mapStyle:d,interactiveLayerIds:["sf-neighborhoods-fill"]},e,{width:"100%",height:"100%",onClick:this._onClick,onViewportChange:this._updateViewport,mapboxApiAccessToken:""}),o.createElement(p,{containerComponent:this.props.containerComponent}))},n}(o.Component);function O(e){Object(n.render)(o.createElement(g,null),e)}}}]);