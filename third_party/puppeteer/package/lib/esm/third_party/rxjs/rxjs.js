var Ir=function(r,t){return Ir=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])},Ir(r,t)};function S(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Ir(r,t);function e(){this.constructor=r}r.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}function Dr(r,t,e,o){function n(i){return i instanceof e?i:new e(function(f){f(i)})}return new(e||(e=Promise))(function(i,f){function a(p){try{u(o.next(p))}catch(h){f(h)}}function c(p){try{u(o.throw(p))}catch(h){f(h)}}function u(p){p.done?i(p.value):n(p.value).then(a,c)}u((o=o.apply(r,t||[])).next())})}function er(r,t){var e={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},o,n,i,f;return f={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(f[Symbol.iterator]=function(){return this}),f;function a(u){return function(p){return c([u,p])}}function c(u){if(o)throw new TypeError("Generator is already executing.");for(;f&&(f=0,u[0]&&(e=0)),e;)try{if(o=1,n&&(i=u[0]&2?n.return:u[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,u[1])).done)return i;switch(n=0,i&&(u=[u[0]&2,i.value]),u[0]){case 0:case 1:i=u;break;case 4:return e.label++,{value:u[1],done:!1};case 5:e.label++,n=u[1],u=[0];continue;case 7:u=e.ops.pop(),e.trys.pop();continue;default:if(i=e.trys,!(i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){e=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){e.label=u[1];break}if(u[0]===6&&e.label<i[1]){e.label=i[1],i=u;break}if(i&&e.label<i[2]){e.label=i[2],e.ops.push(u);break}i[2]&&e.ops.pop(),e.trys.pop();continue}u=t.call(r,e)}catch(p){u=[6,p],n=0}finally{o=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function I(r){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&r[t],o=0;if(e)return e.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&o>=r.length&&(r=void 0),{value:r&&r[o++],done:!r}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function w(r,t){var e=typeof Symbol=="function"&&r[Symbol.iterator];if(!e)return r;var o=e.call(r),n,i=[],f;try{for(;(t===void 0||t-- >0)&&!(n=o.next()).done;)i.push(n.value)}catch(a){f={error:a}}finally{try{n&&!n.done&&(e=o.return)&&e.call(o)}finally{if(f)throw f.error}}return i}function _(r,t,e){if(e||arguments.length===2)for(var o=0,n=t.length,i;o<n;o++)(i||!(o in t))&&(i||(i=Array.prototype.slice.call(t,0,o)),i[o]=t[o]);return r.concat(i||Array.prototype.slice.call(t))}function V(r){return this instanceof V?(this.v=r,this):new V(r)}function Yr(r,t,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=e.apply(r,t||[]),n,i=[];return n={},f("next"),f("throw"),f("return"),n[Symbol.asyncIterator]=function(){return this},n;function f(l){o[l]&&(n[l]=function(x){return new Promise(function(g,b){i.push([l,x,g,b])>1||a(l,x)})})}function a(l,x){try{c(o[l](x))}catch(g){h(i[0][3],g)}}function c(l){l.value instanceof V?Promise.resolve(l.value.v).then(u,p):h(i[0][2],l)}function u(l){a("next",l)}function p(l){a("throw",l)}function h(l,x){l(x),i.shift(),i.length&&a(i[0][0],i[0][1])}}function Nr(r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=r[Symbol.asyncIterator],e;return t?t.call(r):(r=typeof I=="function"?I(r):r[Symbol.iterator](),e={},o("next"),o("throw"),o("return"),e[Symbol.asyncIterator]=function(){return this},e);function o(i){e[i]=r[i]&&function(f){return new Promise(function(a,c){f=r[i](f),n(a,c,f.done,f.value)})}}function n(i,f,a,c){Promise.resolve(c).then(function(u){i({value:u,done:a})},f)}}function s(r){return typeof r=="function"}function q(r){var t=function(o){Error.call(o),o.stack=new Error().stack},e=r(t);return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var tr=q(function(r){return function(e){r(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(o,n){return n+1+") "+o.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function R(r,t){if(r){var e=r.indexOf(t);0<=e&&r.splice(e,1)}}var C=function(){function r(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return r.prototype.unsubscribe=function(){var t,e,o,n,i;if(!this.closed){this.closed=!0;var f=this._parentage;if(f)if(this._parentage=null,Array.isArray(f))try{for(var a=I(f),c=a.next();!c.done;c=a.next()){var u=c.value;u.remove(this)}}catch(b){t={error:b}}finally{try{c&&!c.done&&(e=a.return)&&e.call(a)}finally{if(t)throw t.error}}else f.remove(this);var p=this.initialTeardown;if(s(p))try{p()}catch(b){i=b instanceof tr?b.errors:[b]}var h=this._finalizers;if(h){this._finalizers=null;try{for(var l=I(h),x=l.next();!x.done;x=l.next()){var g=x.value;try{qr(g)}catch(b){i=i??[],b instanceof tr?i=_(_([],w(i)),w(b.errors)):i.push(b)}}}catch(b){o={error:b}}finally{try{x&&!x.done&&(n=l.return)&&n.call(l)}finally{if(o)throw o.error}}}if(i)throw new tr(i)}},r.prototype.add=function(t){var e;if(t&&t!==this)if(this.closed)qr(t);else{if(t instanceof r){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(t)}},r.prototype._hasParent=function(t){var e=this._parentage;return e===t||Array.isArray(e)&&e.includes(t)},r.prototype._addParent=function(t){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(t),e):e?[e,t]:t},r.prototype._removeParent=function(t){var e=this._parentage;e===t?this._parentage=null:Array.isArray(e)&&R(e,t)},r.prototype.remove=function(t){var e=this._finalizers;e&&R(e,t),t instanceof r&&t._removeParent(this)},r.EMPTY=function(){var t=new r;return t.closed=!0,t}(),r}();var Tr=C.EMPTY;function or(r){return r instanceof C||r&&"closed"in r&&s(r.remove)&&s(r.add)&&s(r.unsubscribe)}function qr(r){s(r)?r():r.unsubscribe()}var P={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var z={setTimeout:function(r,t){for(var e=[],o=2;o<arguments.length;o++)e[o-2]=arguments[o];var n=z.delegate;return n!=null&&n.setTimeout?n.setTimeout.apply(n,_([r,t],w(e))):setTimeout.apply(void 0,_([r,t],w(e)))},clearTimeout:function(r){var t=z.delegate;return((t==null?void 0:t.clearTimeout)||clearTimeout)(r)},delegate:void 0};function nr(r){z.setTimeout(function(){var t=P.onUnhandledError;if(t)t(r);else throw r})}function j(){}var zr=function(){return Pr("C",void 0,void 0)}();function Gr(r){return Pr("E",void 0,r)}function Hr(r){return Pr("N",r,void 0)}function Pr(r,t,e){return{kind:r,value:t,error:e}}var D=null;function G(r){if(P.useDeprecatedSynchronousErrorHandling){var t=!D;if(t&&(D={errorThrown:!1,error:null}),r(),t){var e=D,o=e.errorThrown,n=e.error;if(D=null,o)throw n}}else r()}function Jr(r){P.useDeprecatedSynchronousErrorHandling&&D&&(D.errorThrown=!0,D.error=r)}var X=function(r){S(t,r);function t(e){var o=r.call(this)||this;return o.isStopped=!1,e?(o.destination=e,or(e)&&e.add(o)):o.destination=De,o}return t.create=function(e,o,n){return new H(e,o,n)},t.prototype.next=function(e){this.isStopped?Fr(Hr(e),this):this._next(e)},t.prototype.error=function(e){this.isStopped?Fr(Gr(e),this):(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped?Fr(zr,this):(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,r.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){try{this.destination.error(e)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(C);var Ue=Function.prototype.bind;function jr(r,t){return Ue.call(r,t)}var We=function(){function r(t){this.partialObserver=t}return r.prototype.next=function(t){var e=this.partialObserver;if(e.next)try{e.next(t)}catch(o){ir(o)}},r.prototype.error=function(t){var e=this.partialObserver;if(e.error)try{e.error(t)}catch(o){ir(o)}else ir(t)},r.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(e){ir(e)}},r}(),H=function(r){S(t,r);function t(e,o,n){var i=r.call(this)||this,f;if(s(e)||!e)f={next:e??void 0,error:o??void 0,complete:n??void 0};else{var a;i&&P.useDeprecatedNextContext?(a=Object.create(e),a.unsubscribe=function(){return i.unsubscribe()},f={next:e.next&&jr(e.next,a),error:e.error&&jr(e.error,a),complete:e.complete&&jr(e.complete,a)}):f=e}return i.destination=new We(f),i}return t}(X);function ir(r){P.useDeprecatedSynchronousErrorHandling?Jr(r):nr(r)}function Ve(r){throw r}function Fr(r,t){var e=P.onStoppedNotification;e&&z.setTimeout(function(){return e(r,t)})}var De={closed:!0,next:j,error:Ve,complete:j};var J=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function E(r){return r}function Kr(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return kr(r)}function kr(r){return r.length===0?E:r.length===1?r[0]:function(e){return r.reduce(function(o,n){return n(o)},e)}}var v=function(){function r(t){t&&(this._subscribe=t)}return r.prototype.lift=function(t){var e=new r;return e.source=this,e.operator=t,e},r.prototype.subscribe=function(t,e,o){var n=this,i=Ne(t)?t:new H(t,e,o);return G(function(){var f=n,a=f.operator,c=f.source;i.add(a?a.call(i,c):c?n._subscribe(i):n._trySubscribe(i))}),i},r.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){t.error(e)}},r.prototype.forEach=function(t,e){var o=this;return e=Br(e),new e(function(n,i){var f=new H({next:function(a){try{t(a)}catch(c){i(c),f.unsubscribe()}},error:i,complete:n});o.subscribe(f)})},r.prototype._subscribe=function(t){var e;return(e=this.source)===null||e===void 0?void 0:e.subscribe(t)},r.prototype[J]=function(){return this},r.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return kr(t)(this)},r.prototype.toPromise=function(t){var e=this;return t=Br(t),new t(function(o,n){var i;e.subscribe(function(f){return i=f},function(f){return n(f)},function(){return o(i)})})},r.create=function(t){return new r(t)},r}();function Br(r){var t;return(t=r??P.Promise)!==null&&t!==void 0?t:Promise}function Ye(r){return r&&s(r.next)&&s(r.error)&&s(r.complete)}function Ne(r){return r&&r instanceof X||Ye(r)&&or(r)}function qe(r){return s(r==null?void 0:r.lift)}function d(r){return function(t){if(qe(t))return t.lift(function(e){try{return r(e,this)}catch(o){this.error(o)}});throw new TypeError("Unable to lift unknown Observable type")}}function m(r,t,e,o,n){return new ze(r,t,e,o,n)}var ze=function(r){S(t,r);function t(e,o,n,i,f,a){var c=r.call(this,e)||this;return c.onFinalize=f,c.shouldUnsubscribe=a,c._next=o?function(u){try{o(u)}catch(p){e.error(p)}}:r.prototype._next,c._error=i?function(u){try{i(u)}catch(p){e.error(p)}finally{this.unsubscribe()}}:r.prototype._error,c._complete=n?function(){try{n()}catch(u){e.error(u)}finally{this.unsubscribe()}}:r.prototype._complete,c}return t.prototype.unsubscribe=function(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var o=this.closed;r.prototype.unsubscribe.call(this),!o&&((e=this.onFinalize)===null||e===void 0||e.call(this))}},t}(X);var Qr=q(function(r){return function(){r(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}});var Mr=function(r){S(t,r);function t(){var e=r.call(this)||this;return e.closed=!1,e.currentObservers=null,e.observers=[],e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return t.prototype.lift=function(e){var o=new Xr(this,this);return o.operator=e,o},t.prototype._throwIfClosed=function(){if(this.closed)throw new Qr},t.prototype.next=function(e){var o=this;G(function(){var n,i;if(o._throwIfClosed(),!o.isStopped){o.currentObservers||(o.currentObservers=Array.from(o.observers));try{for(var f=I(o.currentObservers),a=f.next();!a.done;a=f.next()){var c=a.value;c.next(e)}}catch(u){n={error:u}}finally{try{a&&!a.done&&(i=f.return)&&i.call(f)}finally{if(n)throw n.error}}}})},t.prototype.error=function(e){var o=this;G(function(){if(o._throwIfClosed(),!o.isStopped){o.hasError=o.isStopped=!0,o.thrownError=e;for(var n=o.observers;n.length;)n.shift().error(e)}})},t.prototype.complete=function(){var e=this;G(function(){if(e._throwIfClosed(),!e.isStopped){e.isStopped=!0;for(var o=e.observers;o.length;)o.shift().complete()}})},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(e){return this._throwIfClosed(),r.prototype._trySubscribe.call(this,e)},t.prototype._subscribe=function(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)},t.prototype._innerSubscribe=function(e){var o=this,n=this,i=n.hasError,f=n.isStopped,a=n.observers;return i||f?Tr:(this.currentObservers=null,a.push(e),new C(function(){o.currentObservers=null,R(a,e)}))},t.prototype._checkFinalizedStatuses=function(e){var o=this,n=o.hasError,i=o.thrownError,f=o.isStopped;n?e.error(i):f&&e.complete()},t.prototype.asObservable=function(){var e=new v;return e.source=this,e},t.create=function(e,o){return new Xr(e,o)},t}(v);var Xr=function(r){S(t,r);function t(e,o){var n=r.call(this)||this;return n.destination=e,n.source=o,n}return t.prototype.next=function(e){var o,n;(n=(o=this.destination)===null||o===void 0?void 0:o.next)===null||n===void 0||n.call(o,e)},t.prototype.error=function(e){var o,n;(n=(o=this.destination)===null||o===void 0?void 0:o.error)===null||n===void 0||n.call(o,e)},t.prototype.complete=function(){var e,o;(o=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||o===void 0||o.call(e)},t.prototype._subscribe=function(e){var o,n;return(n=(o=this.source)===null||o===void 0?void 0:o.subscribe(e))!==null&&n!==void 0?n:Tr},t}(Mr);var Z={now:function(){return(Z.delegate||Date).now()},delegate:void 0};var Zr=function(r){S(t,r);function t(e,o,n){e===void 0&&(e=1/0),o===void 0&&(o=1/0),n===void 0&&(n=Z);var i=r.call(this)||this;return i._bufferSize=e,i._windowTime=o,i._timestampProvider=n,i._buffer=[],i._infiniteTimeWindow=!0,i._infiniteTimeWindow=o===1/0,i._bufferSize=Math.max(1,e),i._windowTime=Math.max(1,o),i}return t.prototype.next=function(e){var o=this,n=o.isStopped,i=o._buffer,f=o._infiniteTimeWindow,a=o._timestampProvider,c=o._windowTime;n||(i.push(e),!f&&i.push(a.now()+c)),this._trimBuffer(),r.prototype.next.call(this,e)},t.prototype._subscribe=function(e){this._throwIfClosed(),this._trimBuffer();for(var o=this._innerSubscribe(e),n=this,i=n._infiniteTimeWindow,f=n._buffer,a=f.slice(),c=0;c<a.length&&!e.closed;c+=i?1:2)e.next(a[c]);return this._checkFinalizedStatuses(e),o},t.prototype._trimBuffer=function(){var e=this,o=e._bufferSize,n=e._timestampProvider,i=e._buffer,f=e._infiniteTimeWindow,a=(f?1:2)*o;if(o<1/0&&a<i.length&&i.splice(0,i.length-a),!f){for(var c=n.now(),u=0,p=1;p<i.length&&i[p]<=c;p+=2)u=p;u&&i.splice(0,u+1)}},t}(Mr);var $r=function(r){S(t,r);function t(e,o){return r.call(this)||this}return t.prototype.schedule=function(e,o){return o===void 0&&(o=0),this},t}(C);var $={setInterval:function(r,t){for(var e=[],o=2;o<arguments.length;o++)e[o-2]=arguments[o];var n=$.delegate;return n!=null&&n.setInterval?n.setInterval.apply(n,_([r,t],w(e))):setInterval.apply(void 0,_([r,t],w(e)))},clearInterval:function(r){var t=$.delegate;return((t==null?void 0:t.clearInterval)||clearInterval)(r)},delegate:void 0};var re=function(r){S(t,r);function t(e,o){var n=r.call(this,e,o)||this;return n.scheduler=e,n.work=o,n.pending=!1,n}return t.prototype.schedule=function(e,o){var n;if(o===void 0&&(o=0),this.closed)return this;this.state=e;var i=this.id,f=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(f,i,o)),this.pending=!0,this.delay=o,this.id=(n=this.id)!==null&&n!==void 0?n:this.requestAsyncId(f,this.id,o),this},t.prototype.requestAsyncId=function(e,o,n){return n===void 0&&(n=0),$.setInterval(e.flush.bind(e,this),n)},t.prototype.recycleAsyncId=function(e,o,n){if(n===void 0&&(n=0),n!=null&&this.delay===n&&this.pending===!1)return o;o!=null&&$.clearInterval(o)},t.prototype.execute=function(e,o){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var n=this._execute(e,o);if(n)return n;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},t.prototype._execute=function(e,o){var n=!1,i;try{this.work(e)}catch(f){n=!0,i=f||new Error("Scheduled action threw falsy error")}if(n)return this.unsubscribe(),i},t.prototype.unsubscribe=function(){if(!this.closed){var e=this,o=e.id,n=e.scheduler,i=n.actions;this.work=this.state=this.scheduler=null,this.pending=!1,R(i,this),o!=null&&(this.id=this.recycleAsyncId(n,o,null)),this.delay=null,r.prototype.unsubscribe.call(this)}},t}($r);var Rr=function(){function r(t,e){e===void 0&&(e=r.now),this.schedulerActionCtor=t,this.now=e}return r.prototype.schedule=function(t,e,o){return e===void 0&&(e=0),new this.schedulerActionCtor(this,t).schedule(o,e)},r.now=Z.now,r}();var ee=function(r){S(t,r);function t(e,o){o===void 0&&(o=Rr.now);var n=r.call(this,e,o)||this;return n.actions=[],n._active=!1,n}return t.prototype.flush=function(e){var o=this.actions;if(this._active){o.push(e);return}var n;this._active=!0;do if(n=e.execute(e.state,e.delay))break;while(e=o.shift());if(this._active=!1,n){for(;e=o.shift();)e.unsubscribe();throw n}},t}(Rr);var Cr=new ee(re),te=Cr;var L=new v(function(r){return r.complete()});function fr(r){return r&&s(r.schedule)}function Lr(r){return r[r.length-1]}function ar(r){return s(Lr(r))?r.pop():void 0}function U(r){return fr(Lr(r))?r.pop():void 0}function oe(r,t){return typeof Lr(r)=="number"?r.pop():t}var K=function(r){return r&&typeof r.length=="number"&&typeof r!="function"};function ur(r){return s(r==null?void 0:r.then)}function cr(r){return s(r[J])}function pr(r){return Symbol.asyncIterator&&s(r==null?void 0:r[Symbol.asyncIterator])}function sr(r){return new TypeError("You provided "+(r!==null&&typeof r=="object"?"an invalid object":"'"+r+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function Ge(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var lr=Ge();function mr(r){return s(r==null?void 0:r[lr])}function dr(r){return Yr(this,arguments,function(){var e,o,n,i;return er(this,function(f){switch(f.label){case 0:e=r.getReader(),f.label=1;case 1:f.trys.push([1,,9,10]),f.label=2;case 2:return[4,V(e.read())];case 3:return o=f.sent(),n=o.value,i=o.done,i?[4,V(void 0)]:[3,5];case 4:return[2,f.sent()];case 5:return[4,V(n)];case 6:return[4,f.sent()];case 7:return f.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}})})}function hr(r){return s(r==null?void 0:r.getReader)}function y(r){if(r instanceof v)return r;if(r!=null){if(cr(r))return He(r);if(K(r))return Je(r);if(ur(r))return Ke(r);if(pr(r))return ne(r);if(mr(r))return Be(r);if(hr(r))return Qe(r)}throw sr(r)}function He(r){return new v(function(t){var e=r[J]();if(s(e.subscribe))return e.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Je(r){return new v(function(t){for(var e=0;e<r.length&&!t.closed;e++)t.next(r[e]);t.complete()})}function Ke(r){return new v(function(t){r.then(function(e){t.closed||(t.next(e),t.complete())},function(e){return t.error(e)}).then(null,nr)})}function Be(r){return new v(function(t){var e,o;try{for(var n=I(r),i=n.next();!i.done;i=n.next()){var f=i.value;if(t.next(f),t.closed)return}}catch(a){e={error:a}}finally{try{i&&!i.done&&(o=n.return)&&o.call(n)}finally{if(e)throw e.error}}t.complete()})}function ne(r){return new v(function(t){Xe(r,t).catch(function(e){return t.error(e)})})}function Qe(r){return ne(dr(r))}function Xe(r,t){var e,o,n,i;return Dr(this,void 0,void 0,function(){var f,a;return er(this,function(c){switch(c.label){case 0:c.trys.push([0,5,6,11]),e=Nr(r),c.label=1;case 1:return[4,e.next()];case 2:if(o=c.sent(),!!o.done)return[3,4];if(f=o.value,t.next(f),t.closed)return[2];c.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=c.sent(),n={error:a},[3,11];case 6:return c.trys.push([6,,9,10]),o&&!o.done&&(i=e.return)?[4,i.call(e)]:[3,8];case 7:c.sent(),c.label=8;case 8:return[3,10];case 9:if(n)throw n.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}})})}function T(r,t,e,o,n){o===void 0&&(o=0),n===void 0&&(n=!1);var i=t.schedule(function(){e(),n?r.add(this.schedule(null,o)):this.unsubscribe()},o);if(r.add(i),!n)return i}function vr(r,t){return t===void 0&&(t=0),d(function(e,o){e.subscribe(m(o,function(n){return T(o,r,function(){return o.next(n)},t)},function(){return T(o,r,function(){return o.complete()},t)},function(n){return T(o,r,function(){return o.error(n)},t)}))})}function yr(r,t){return t===void 0&&(t=0),d(function(e,o){o.add(r.schedule(function(){return e.subscribe(o)},t))})}function ie(r,t){return y(r).pipe(yr(t),vr(t))}function fe(r,t){return y(r).pipe(yr(t),vr(t))}function ae(r,t){return new v(function(e){var o=0;return t.schedule(function(){o===r.length?e.complete():(e.next(r[o++]),e.closed||this.schedule())})})}function ue(r,t){return new v(function(e){var o;return T(e,t,function(){o=r[lr](),T(e,t,function(){var n,i,f;try{n=o.next(),i=n.value,f=n.done}catch(a){e.error(a);return}f?e.complete():e.next(i)},0,!0)}),function(){return s(o==null?void 0:o.return)&&o.return()}})}function xr(r,t){if(!r)throw new Error("Iterable cannot be null");return new v(function(e){T(e,t,function(){var o=r[Symbol.asyncIterator]();T(e,t,function(){o.next().then(function(n){n.done?e.complete():e.next(n.value)})},0,!0)})})}function ce(r,t){return xr(dr(r),t)}function pe(r,t){if(r!=null){if(cr(r))return ie(r,t);if(K(r))return ae(r,t);if(ur(r))return fe(r,t);if(pr(r))return xr(r,t);if(mr(r))return ue(r,t);if(hr(r))return ce(r,t)}throw sr(r)}function F(r,t){return t?pe(r,t):y(r)}function se(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var e=U(r);return F(r,e)}var W=q(function(r){return function(){r(this),this.name="EmptyError",this.message="no elements in sequence"}});function le(r,t){var e=typeof t=="object";return new Promise(function(o,n){var i=!1,f;r.subscribe({next:function(a){f=a,i=!0},error:n,complete:function(){i?o(f):e?o(t.defaultValue):n(new W)}})})}function me(r,t){var e=typeof t=="object";return new Promise(function(o,n){var i=new H({next:function(f){o(f),i.unsubscribe()},error:n,complete:function(){e?o(t.defaultValue):n(new W)}});r.subscribe(i)})}function de(r){return r instanceof Date&&!isNaN(r)}function k(r,t){return d(function(e,o){var n=0;e.subscribe(m(o,function(i){o.next(r.call(t,i,n++))}))})}var Ze=Array.isArray;function $e(r,t){return Ze(t)?r.apply(void 0,_([],w(t))):r(t)}function br(r){return k(function(t){return $e(r,t)})}var rt=Array.isArray,et=Object.getPrototypeOf,tt=Object.prototype,ot=Object.keys;function he(r){if(r.length===1){var t=r[0];if(rt(t))return{args:t,keys:null};if(nt(t)){var e=ot(t);return{args:e.map(function(o){return t[o]}),keys:e}}}return{args:r,keys:null}}function nt(r){return r&&typeof r=="object"&&et(r)===tt}function ve(r,t){return r.reduce(function(e,o,n){return e[o]=t[n],e},{})}function gr(r,t,e,o,n,i,f,a){var c=[],u=0,p=0,h=!1,l=function(){h&&!c.length&&!u&&t.complete()},x=function(b){return u<o?g(b):c.push(b)},g=function(b){i&&t.next(b),u++;var A=!1;y(e(b,p++)).subscribe(m(t,function(M){n==null||n(M),i?x(M):t.next(M)},function(){A=!0},void 0,function(){if(A)try{u--;for(var M=function(){var rr=c.shift();f?T(t,f,function(){return g(rr)}):g(rr)};c.length&&u<o;)M();l()}catch(rr){t.error(rr)}}))};return r.subscribe(m(t,x,function(){h=!0,l()})),function(){a==null||a()}}function O(r,t,e){return e===void 0&&(e=1/0),s(t)?O(function(o,n){return k(function(i,f){return t(o,i,n,f)})(y(r(o,n)))},e):(typeof t=="number"&&(e=t),d(function(o,n){return gr(o,n,r,e)}))}function wr(r){return r===void 0&&(r=1/0),O(E,r)}function ye(){return wr(1)}function Y(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return ye()(F(r,U(r)))}function xe(r){return new v(function(t){y(r()).subscribe(t)})}function be(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var e=ar(r),o=he(r),n=o.args,i=o.keys,f=new v(function(a){var c=n.length;if(!c){a.complete();return}for(var u=new Array(c),p=c,h=c,l=function(g){var b=!1;y(n[g]).subscribe(m(a,function(A){b||(b=!0,h--),u[g]=A},function(){return p--},void 0,function(){(!p||!b)&&(h||a.next(i?ve(i,u):u),a.complete())}))},x=0;x<c;x++)l(x)});return e?f.pipe(br(e)):f}var it=["addListener","removeListener"],ft=["addEventListener","removeEventListener"],at=["on","off"];function Sr(r,t,e,o){if(s(e)&&(o=e,e=void 0),o)return Sr(r,t,e).pipe(br(o));var n=w(pt(r)?ft.map(function(a){return function(c){return r[a](t,c,e)}}):ut(r)?it.map(ge(r,t)):ct(r)?at.map(ge(r,t)):[],2),i=n[0],f=n[1];if(!i&&K(r))return O(function(a){return Sr(a,t,e)})(y(r));if(!i)throw new TypeError("Invalid event target");return new v(function(a){var c=function(){for(var u=[],p=0;p<arguments.length;p++)u[p]=arguments[p];return a.next(1<u.length?u:u[0])};return i(c),function(){return f(c)}})}function ge(r,t){return function(e){return function(o){return r[e](t,o)}}}function ut(r){return s(r.addListener)&&s(r.removeListener)}function ct(r){return s(r.on)&&s(r.off)}function pt(r){return s(r.addEventListener)&&s(r.removeEventListener)}function B(r,t,e){r===void 0&&(r=0),e===void 0&&(e=te);var o=-1;return t!=null&&(fr(t)?e=t:o=t),new v(function(n){var i=de(r)?+r-e.now():r;i<0&&(i=0);var f=0;return e.schedule(function(){n.closed||(n.next(f++),0<=o?this.schedule(void 0,o):n.complete())},i)})}function we(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var e=U(r),o=oe(r,1/0),n=r;return n.length?n.length===1?y(n[0]):wr(o)(F(n,e)):L}var Se=new v(j);var st=Array.isArray;function _r(r){return r.length===1&&st(r[0])?r[0]:r}function Q(r,t){return d(function(e,o){var n=0;e.subscribe(m(o,function(i){return r.call(t,i,n++)&&o.next(i)}))})}function _e(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return r=_r(r),r.length===1?y(r[0]):new v(Ur(r))}function Ur(r){return function(t){for(var e=[],o=function(i){e.push(y(r[i]).subscribe(m(t,function(f){if(e){for(var a=0;a<e.length;a++)a!==i&&e[a].unsubscribe();e=null}t.next(f)})))},n=0;e&&!t.closed&&n<r.length;n++)o(n)}}function Ee(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var e=ar(r),o=_r(r);return o.length?new v(function(n){var i=o.map(function(){return[]}),f=o.map(function(){return!1});n.add(function(){i=f=null});for(var a=function(u){y(o[u]).subscribe(m(n,function(p){if(i[u].push(p),i.every(function(l){return l.length})){var h=i.map(function(l){return l.shift()});n.next(e?e.apply(void 0,_([],w(h))):h),i.some(function(l,x){return!l.length&&f[x]})&&n.complete()}},function(){f[u]=!0,!i[u].length&&n.complete()}))},c=0;!n.closed&&c<o.length;c++)a(c);return function(){i=f=null}}):L}function Oe(r,t){return t===void 0&&(t=null),t=t??r,d(function(e,o){var n=[],i=0;e.subscribe(m(o,function(f){var a,c,u,p,h=null;i++%t===0&&n.push([]);try{for(var l=I(n),x=l.next();!x.done;x=l.next()){var g=x.value;g.push(f),r<=g.length&&(h=h??[],h.push(g))}}catch(M){a={error:M}}finally{try{x&&!x.done&&(c=l.return)&&c.call(l)}finally{if(a)throw a.error}}if(h)try{for(var b=I(h),A=b.next();!A.done;A=b.next()){var g=A.value;R(n,g),o.next(g)}}catch(M){u={error:M}}finally{try{A&&!A.done&&(p=b.return)&&p.call(b)}finally{if(u)throw u.error}}},function(){var f,a;try{for(var c=I(n),u=c.next();!u.done;u=c.next()){var p=u.value;o.next(p)}}catch(h){f={error:h}}finally{try{u&&!u.done&&(a=c.return)&&a.call(c)}finally{if(f)throw f.error}}o.complete()},void 0,function(){n=null}))})}function Wr(r){return d(function(t,e){var o=null,n=!1,i;o=t.subscribe(m(e,void 0,void 0,function(f){i=y(r(f,Wr(r)(t))),o?(o.unsubscribe(),o=null,i.subscribe(e)):n=!0})),n&&(o.unsubscribe(),o=null,i.subscribe(e))})}function Ae(r,t){return s(t)?O(r,t,1):O(r,1)}function Er(r){return d(function(t,e){var o=!1;t.subscribe(m(e,function(n){o=!0,e.next(n)},function(){o||e.next(r),e.complete()}))})}function N(r){return r<=0?function(){return L}:d(function(t,e){var o=0;t.subscribe(m(e,function(n){++o<=r&&(e.next(n),r<=o&&e.complete())}))})}function Or(){return d(function(r,t){r.subscribe(m(t,j))})}function Ie(r){return k(function(){return r})}function Vr(r,t){return t?function(e){return Y(t.pipe(N(1),Or()),e.pipe(Vr(r)))}:O(function(e,o){return y(r(e,o)).pipe(N(1),Ie(e))})}function Te(r,t){t===void 0&&(t=Cr);var e=B(r,t);return Vr(function(){return e})}function Ar(r){return r===void 0&&(r=lt),d(function(t,e){var o=!1;t.subscribe(m(e,function(n){o=!0,e.next(n)},function(){return o?e.complete():e.error(r())}))})}function lt(){return new W}function Pe(r,t){var e=arguments.length>=2;return function(o){return o.pipe(r?Q(function(n,i){return r(n,i,o)}):E,N(1),e?Er(t):Ar(function(){return new W}))}}function je(r,t,e){return e===void 0&&(e=1/0),d(function(o,n){var i=t;return gr(o,n,function(f,a){return r(i,f,a)},e,function(f){i=f},!1,void 0,function(){return i=null})})}function Fe(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return r.length?d(function(e,o){Ur(_([e],w(r)))(o)}):E}function ke(r){r===void 0&&(r=1/0);var t;r&&typeof r=="object"?t=r:t={count:r};var e=t.count,o=e===void 0?1/0:e,n=t.delay,i=t.resetOnSuccess,f=i===void 0?!1:i;return o<=0?E:d(function(a,c){var u=0,p,h=function(){var l=!1;p=a.subscribe(m(c,function(x){f&&(u=0),c.next(x)},void 0,function(x){if(u++<o){var g=function(){p?(p.unsubscribe(),p=null,h()):l=!0};if(n!=null){var b=typeof n=="number"?B(n):y(n(x,u)),A=m(c,function(){A.unsubscribe(),g()},function(){c.complete()});b.subscribe(A)}else g()}else c.error(x)})),l&&(p.unsubscribe(),p=null,h())};h()})}function Me(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var e=U(r);return d(function(o,n){(e?Y(r,o,e):Y(r,o)).subscribe(n)})}function Re(r,t){return d(function(e,o){var n=null,i=0,f=!1,a=function(){return f&&!n&&o.complete()};e.subscribe(m(o,function(c){n==null||n.unsubscribe();var u=0,p=i++;y(r(c,p)).subscribe(n=m(o,function(h){return o.next(t?t(c,h,p,u++):h)},function(){n=null,a()}))},function(){f=!0,a()}))})}function Ce(r){return d(function(t,e){y(r).subscribe(m(e,function(){return e.complete()},j)),!e.closed&&t.subscribe(e)})}function Le(r,t,e){var o=s(r)||t||e?{next:r,error:t,complete:e}:r;return o?d(function(n,i){var f;(f=o.subscribe)===null||f===void 0||f.call(o);var a=!0;n.subscribe(m(i,function(c){var u;(u=o.next)===null||u===void 0||u.call(o,c),i.next(c)},function(){var c;a=!1,(c=o.complete)===null||c===void 0||c.call(o),i.complete()},function(c){var u;a=!1,(u=o.error)===null||u===void 0||u.call(o,c),i.error(c)},function(){var c,u;a&&((c=o.unsubscribe)===null||c===void 0||c.call(o)),(u=o.finalize)===null||u===void 0||u.call(o)}))}):E}function ac(r){return O(t=>F(Promise.resolve(r(t))).pipe(Q(e=>e),k(()=>t)))}export{L as EMPTY,Se as NEVER,v as Observable,Zr as ReplaySubject,Oe as bufferCount,Wr as catchError,Y as concat,Ae as concatMap,Er as defaultIfEmpty,xe as defer,Te as delay,Q as filter,ac as filterAsync,Pe as first,me as firstValueFrom,be as forkJoin,F as from,Sr as fromEvent,E as identity,Or as ignoreElements,le as lastValueFrom,k as map,we as merge,O as mergeMap,je as mergeScan,j as noop,se as of,Kr as pipe,_e as race,Fe as raceWith,ke as retry,Me as startWith,Re as switchMap,N as take,Ce as takeUntil,Le as tap,Ar as throwIfEmpty,B as timer,Ee as zip};
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */