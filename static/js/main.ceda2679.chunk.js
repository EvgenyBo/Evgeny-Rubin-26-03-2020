(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{67:function(e,t,a){e.exports=a(86)},72:function(e,t,a){},73:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(10),o=a.n(r),i=(a(72),a(57)),l=a(11),u=a(32),s=a(24);var m=function(){var e=function(e,t){var a=Object(n.useState)((function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(n){return console.log(n),t}})),c=Object(l.a)(a,2),r=c[0],o=c[1];return[r,function(t){try{var a=t instanceof Function?t(r):t;o(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(n){console.log(n)}}]}("dark-mode-enabled"),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e=window.document.body;a?e.classList.add("dark-mode"):e.classList.remove("dark-mode")}),[a]),[a,c]},d=(a(73),function(e){var t=e.darkMode,a=e.setDarkMode;return c.a.createElement("div",{className:"dark-mode-toggle"},c.a.createElement("button",{type:"button",onClick:function(){return a(!1)}},"\u2600"),c.a.createElement("span",{className:"toggle-control"},c.a.createElement("input",{className:"dmcheck",id:"dmcheck",type:"checkbox",checked:t,onChange:function(){return a(!t)}}),c.a.createElement("label",{htmlFor:"dmcheck"})),c.a.createElement("button",{type:"button",onClick:function(){return a(!0)}},"\u263e"))});var f=function(){var e=m(),t=Object(l.a)(e,2),a=t[0],n=t[1];return c.a.createElement("nav",{className:"navbar"},c.a.createElement("span",{className:"herolo"},"Herolo Weather Task"),c.a.createElement(u.b,{activeClassName:"active",to:"/home"},"Home"),c.a.createElement(u.b,{activeClassName:"active",to:"/favorites"},"Favorites"),c.a.createElement(d,{darkMode:a,setDarkMode:n}))};var h=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Page Not Found"))},y=a(128),p="qgv3w3Jeyjays9fwI9LjiufUOjaGY6HZ",v="http://dataservice.accuweather.com/";console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/home",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_KEY:"qgv3w3Jeyjays9fwI9LjiufUOjaGY6HZ"}).API_KEY);function E(e){return fetch(function(e){return"".concat(v,"locations/").concat("v1","/cities/autocomplete?apikey=").concat(p,"&q=").concat(e)}(e)).then((function(e){return e.json()})).then((function(e){return e.map((function(e){return{name:e.LocalizedName,key:e.Key}}))}))}function g(e,t){return fetch(function(e,t){return"".concat(v,"locations/").concat("v1","/cities/geoposition/search?apikey=").concat(p,"&q=").concat(e,",").concat(t)}(e,t)).then((function(e){return e.json()})).then((function(e){return{name:e.LocalizedName,key:e.Key}}))}function b(e){return fetch(function(e){return"".concat(v,"forecasts/").concat("v1","/daily/1day/").concat(e,"?apikey=").concat(p)}(e)).then((function(e){return e.json()})).then((function(e){return e.DailyForecasts[0]}))}function O(e){return fetch(function(e){return"".concat(v,"forecasts/").concat("v1","/daily/5day/").concat(e,"?apikey=").concat(p)}(e)).then((function(e){return e.json()})).then((function(e){return e.DailyForecasts}))}var k=a(58),j=a(129),N=a(130),C=a(127),w=function(e){var t=e.isSearchOpen,a=e.setIsSearchOpen,n=e.cities,r=e.loading,o=e.handleInputChange,i=e.setNewCity,l=e.defaultCity;return c.a.createElement(N.a,{id:"asynchronous-demo",style:{width:280},open:t,onOpen:function(){a(!0)},onClose:function(){a(!1)},getOptionSelected:function(e,t){return e.name===t.name},getOptionLabel:function(e){return e.name},options:n,onChange:function(e,t,a){i(t||l)},loading:r.current,renderInput:function(e){return c.a.createElement(j.a,Object.assign({},e,{label:"Chose City",variant:"outlined",onChange:o,InputProps:Object(k.a)({},e.InputProps,{endAdornment:c.a.createElement(c.a.Fragment,null,r.current?c.a.createElement(C.a,{color:"inherit",size:20}):null,e.InputProps.endAdornment)})}))}})},S=a(54),T=a(78),D=function(e){var t=e.data,a=e.degreeType,n=e.type,r=(e.cityName,new Date),o=1e3*t.EpochDate;r.setTime(o);var i=Math.round(t.Temperature.Minimum.Value),l=Math.round(5*(i-32)/9),u=Math.round(t.Temperature.Maximum.Value),s=Math.round(5*(u-32)/9),m=t.Day.Icon<10?"0".concat(t.Day.Icon):t.Day.Icon,d="https://developer.accuweather.com/sites/default/files/".concat(m,"-s.png"),f=t.Night.Icon<10?"0".concat(t.Night.Icon):t.Night.Icon,h="https://developer.accuweather.com/sites/default/files/".concat(f,"-s.png");return c.a.createElement("div",{className:"card"},c.a.createElement("h3",{className:"card-title"},"city"===n?t.cityName:T(r).format("dddd")),c.a.createElement("p",{className:"text-muted"},T(r).format("MMMM Do, h:mm a")),c.a.createElement("img",{src:d,alt:"Logo"}),c.a.createElement("h2",null,"Day ","celsius"===a?l+"\xb0C":i+"\xb0F"),c.a.createElement("img",{src:h,alt:"Logo"}),c.a.createElement("h2",null,"Night ","celsius"===a?s+"\xb0C":u+"\xb0F"),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",{className:"card-text"},t.Day.IconPhrase)))};a(80);var I=function(e){var t=e.cityNumber,a=e.degreeType,r=Object(n.useState)([]),o=Object(l.a)(r,2),i=o[0],u=o[1];return Object(n.useEffect)((function(){t&&O(t).then((function(e){u(e)}))}),[t]),c.a.createElement("div",{className:"dailyForecast"},c.a.createElement("div",{className:"dailyCards"},i.map((function(e,t){return c.a.createElement(D,{data:e,degreeType:a,key:t})}))))},F=function(e){var t=e.degreeType,a=e.updateForecastDegree;return c.a.createElement("div",{className:"degreeToggle"},c.a.createElement("div",{className:"form-check form-check-inline"},c.a.createElement("input",{className:"form-check-input",type:"radio",name:"degree-type",id:"celsius",value:"celsius",checked:"celsius"===t,onChange:a}),c.a.createElement("label",{className:"form-check-label",htmlFor:"celsius"},"\u2103")),c.a.createElement("div",{className:"form-check form-check-inline"},c.a.createElement("input",{className:"form-check-input",type:"radio",name:"degree-type",id:"farenheit",value:"fahrenheit",checked:"fahrenheit"===t,onChange:a}),c.a.createElement("label",{className:"form-check-label",htmlFor:"farenheit"},"\u2109")))},M=a(55),P=a.n(M),L=a(126),_=(a(81),function(){var e=Object(n.useContext)(W),t=e.favorites,a=e.defaultCity,r=e.setDefaultCity,o=e.updateFavorites,i=e.degreeType,u=e.setDegreeType,s=Object(S.usePosition)(!1,{enableHighAccuracy:!0}),m=s.latitude,d=s.longitude,f=Object(n.useState)(!1),h=Object(l.a)(f,2),p=h[0],v=h[1],b=Object(n.useState)([]),O=Object(l.a)(b,2),k=O[0],j=O[1],N=Object(n.useState)(""),C=Object(l.a)(N,2),T=C[0],D=C[1],M=Object(n.useState)(!1),_=Object(l.a)(M,2),x=_[0],A=_[1],H=Object(n.useState)(a),K=Object(l.a)(H,2),J=K[0],q=K[1],R=Object(n.useRef)(!1),U=Object(y.a)((function(e){E(e).then((function(e){R.current=!1,j(e)}))}),500),Y=Object(l.a)(U,1)[0];Object(n.useEffect)((function(){m&&g(m,d).then((function(e){r(e)}))}),[m,d,r,t]),Object(n.useEffect)((function(){T?(R.current=!0,Y(T)):(R.current=!1,j([]))}),[T,Y]),Object(n.useEffect)((function(){t.some((function(e){return e.key===J.key}))&&A(!0)}),[]),Object(n.useEffect)((function(){p||j([])}),[p]);return c.a.createElement("div",{className:"homeWeather"},c.a.createElement("div",{className:"CitySelector"},c.a.createElement(w,{isSearchOpen:p,setIsSearchOpen:v,cities:k,loading:R,defaultCity:a,handleInputChange:function(e){D(e.target.value)},setNewCity:function(e){t.some((function(t){return t.key===e.key}))?A(!0):A(!1),q(e)}})),J.name||a.name?[c.a.createElement(L.a,{key:0,onClick:function(){if(x){A(!1);var e=J.name?J:a;o(t,void 0,e)}else{A(!0);var n=J.name?J:a;o(t,n)}},color:x?"secondary":"inherit","aria-label":"add an alarm"},c.a.createElement(P.a,null),c.a.createElement("div",{className:"currentCity"},J.name||a.name)),c.a.createElement("div",{key:2,className:"fiveDay"},"5-Day Forecast."),c.a.createElement(F,{key:1,degreeType:i,updateForecastDegree:function(e){u(e.target.value)}}),c.a.createElement(I,{key:3,cityNumber:J.key||a.key,degreeType:i})]:c.a.createElement("div",{className:"currentCity"},"Loading my city... (Allow Location)"))}),x=a(45),A=a.n(x),H=a(56);a(85);var K=function(){var e=Object(n.useContext)(W),t=e.favorites,a=(e.updateFavorites,e.degreeType),r=e.setDegreeType,o=Object(n.useState)([]),i=Object(l.a)(o,2),u=i[0],s=i[1];return Object(n.useEffect)((function(){var e=[];Promise.all(t.map(function(){var t=Object(H.a)(A.a.mark((function t(a,n){var c;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(a.key);case 2:(c=t.sent).cityName=a.name,e[n]=c;case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}())).then((function(){s(e)}))}),[]),c.a.createElement("div",{className:"favorites"},t.length>0?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{key:2,className:"todayTitle"},"Today's Forecast."),u.length>0&&c.a.createElement(F,{key:1,degreeType:a,updateForecastDegree:function(e){r(e.target.value)}}),c.a.createElement("div",{className:"dailyForecast"},c.a.createElement("div",{className:"dailyCards"},u.map((function(e,t){return c.a.createElement(D,{type:"city",data:e,degreeType:a,key:t})}))))):c.a.createElement("div",{key:2,className:"addCity"},"Add city to favorites in the Home screen."))},W=c.a.createContext(null),J=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)({}),m=Object(l.a)(o,2),d=m[0],y=m[1],p=Object(n.useState)("fahrenheit"),v=Object(l.a)(p,2),E=v[0],g=v[1];return c.a.createElement(W.Provider,{value:{favorites:a,defaultCity:d,updateFavorites:function(e,t,a){t&&r([].concat(Object(i.a)(e),[t])),a&&r(e.filter((function(e){return e.key!==a.key})))},setDefaultCity:y,degreeType:E,setDegreeType:g}},c.a.createElement(u.a,null,c.a.createElement("div",null,c.a.createElement(f,null),c.a.createElement(s.c,null,c.a.createElement(s.a,{exact:!0,path:"/",component:_}),c.a.createElement(s.a,{path:"/home",component:_}),c.a.createElement(s.a,{path:"/favorites",component:K}),c.a.createElement(s.a,{component:h})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[67,1,2]]]);
//# sourceMappingURL=main.ceda2679.chunk.js.map