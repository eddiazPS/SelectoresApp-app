import{A as k,B as m,C as j,D as p,E as le,F as d,G as u,H as Ie,I as G,J as ue,K as c,L as q,M as de,N as E,O as Se,P as Ne,Q as Oe,R as ce,U as xe,V as Pe,W as ke,X as je,Y as Ge,a as g,b as _,ba as he,c as be,d as se,e as S,f as Ae,g as Ee,h as Me,i as H,j as N,k as L,l as A,m as $,n as C,o as V,p as Fe,q as O,r as we,s as D,t as h,u as ae,v as W,w as x,x as P,y as f,z as a}from"./chunk-G5CH5WYA.js";var ze=(()=>{let e=class e{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}};e.\u0275fac=function(r){return new(r||e)(a(k),a(x))},e.\u0275dir=h({type:e});let i=e;return i})(),me=(()=>{let e=class e extends ze{};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=W(e)))(o||e)}})(),e.\u0275dir=h({type:e,features:[m]});let i=e;return i})(),ie=new V("");var Ft={provide:ie,useExisting:A(()=>Ze),multi:!0};function wt(){let i=ce()?ce().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var It=new V(""),Ze=(()=>{let e=class e extends ze{constructor(t,r,o){super(t,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!wt())}writeValue(t){let r=t??"";this.setProperty("value",r)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}};e.\u0275fac=function(r){return new(r||e)(a(k),a(x),a(It,8))},e.\u0275dir=h({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&G("input",function(l){return o._handleInput(l.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(l){return o._compositionEnd(l.target.value)})},features:[E([Ft]),m]});let i=e;return i})();function y(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}function Xe(i){return i!=null&&typeof i.length=="number"}var Ye=new V(""),Je=new V(""),St=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,F=class{static min(e){return Nt(e)}static max(e){return Ot(e)}static required(e){return xt(e)}static requiredTrue(e){return Pt(e)}static email(e){return kt(e)}static minLength(e){return jt(e)}static maxLength(e){return Gt(e)}static pattern(e){return Tt(e)}static nullValidator(e){return Ke(e)}static compose(e){return rt(e)}static composeAsync(e){return st(e)}};function Nt(i){return e=>{if(y(e.value)||y(i))return null;let n=parseFloat(e.value);return!isNaN(n)&&n<i?{min:{min:i,actual:e.value}}:null}}function Ot(i){return e=>{if(y(e.value)||y(i))return null;let n=parseFloat(e.value);return!isNaN(n)&&n>i?{max:{max:i,actual:e.value}}:null}}function xt(i){return y(i.value)?{required:!0}:null}function Pt(i){return i.value===!0?null:{required:!0}}function kt(i){return y(i.value)||St.test(i.value)?null:{email:!0}}function jt(i){return e=>y(e.value)||!Xe(e.value)?null:e.value.length<i?{minlength:{requiredLength:i,actualLength:e.value.length}}:null}function Gt(i){return e=>Xe(e.value)&&e.value.length>i?{maxlength:{requiredLength:i,actualLength:e.value.length}}:null}function Tt(i){if(!i)return Ke;let e,n;return typeof i=="string"?(n="",i.charAt(0)!=="^"&&(n+="^"),n+=i,i.charAt(i.length-1)!=="$"&&(n+="$"),e=new RegExp(n)):(n=i.toString(),e=i),t=>{if(y(t.value))return null;let r=t.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}function Ke(i){return null}function Qe(i){return i!=null}function et(i){return Oe(i)?be(i):i}function tt(i){let e={};return i.forEach(n=>{e=n!=null?g(g({},e),n):e}),Object.keys(e).length===0?null:e}function it(i,e){return e.map(n=>n(i))}function Bt(i){return!i.validate}function nt(i){return i.map(e=>Bt(e)?e:n=>e.validate(n))}function rt(i){if(!i)return null;let e=i.filter(Qe);return e.length==0?null:function(n){return tt(it(n,e))}}function ot(i){return i!=null?rt(nt(i)):null}function st(i){if(!i)return null;let e=i.filter(Qe);return e.length==0?null:function(n){let t=it(n,e).map(et);return Ee(t).pipe(S(tt))}}function at(i){return i!=null?st(nt(i)):null}function Te(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function lt(i){return i._rawValidators}function ut(i){return i._rawAsyncValidators}function fe(i){return i?Array.isArray(i)?i:[i]:[]}function X(i,e){return Array.isArray(i)?i.includes(e):i===e}function Be(i,e){let n=fe(e);return fe(i).forEach(r=>{X(n,r)||n.push(r)}),n}function Re(i,e){return fe(e).filter(n=>!X(i,n))}var Y=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=ot(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=at(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},w=class extends Y{get formDirective(){return null}get path(){return null}},R=class extends Y{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},J=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Rt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Ti=_(g({},Rt),{"[class.ng-submitted]":"isSubmitted"}),dt=(()=>{let e=class e extends J{constructor(t){super(t)}};e.\u0275fac=function(r){return new(r||e)(a(R,2))},e.\u0275dir=h({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&le("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[m]});let i=e;return i})(),ct=(()=>{let e=class e extends J{constructor(t){super(t)}};e.\u0275fac=function(r){return new(r||e)(a(w,10))},e.\u0275dir=h({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&le("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[m]});let i=e;return i})();var T="VALID",z="INVALID",M="PENDING",B="DISABLED";function ye(i){return(ne(i)?i.validators:i)||null}function Ut(i){return Array.isArray(i)?ot(i):i||null}function ve(i,e){return(ne(e)?e.asyncValidators:i)||null}function Ht(i){return Array.isArray(i)?at(i):i||null}function ne(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function ht(i,e,n){let t=i.controls;if(!(e?Object.keys(t):t).length)throw new L(1e3,"");if(!t[n])throw new L(1001,"")}function ft(i,e,n){i._forEachChild((t,r)=>{if(n[r]===void 0)throw new L(1002,"")})}var I=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===T}get invalid(){return this.status===z}get pending(){return this.status==M}get disabled(){return this.status===B}get enabled(){return this.status!==B}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Be(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Be(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Re(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Re(e,this._rawAsyncValidators))}hasValidator(e){return X(this._rawValidators,e)}hasAsyncValidator(e){return X(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=M,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=B,this.errors=null,this._forEachChild(t=>{t.disable(_(g({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(_(g({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(t=>t(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=T,this._forEachChild(t=>{t.enable(_(g({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(_(g({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===T||this.status===M)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?B:T}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=M,this._hasOwnPendingAsyncValidator=!0;let n=et(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(t=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(t,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((t,r)=>t&&t._find(r),this)}getError(e,n){let t=n?this.get(n):this;return t&&t.errors?t.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new P,this.statusChanges=new P}_calculateStatus(){return this._allControlsDisabled()?B:this.errors?z:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(M)?M:this._anyControlsHaveStatus(z)?z:T}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){ne(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Ut(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Ht(this._rawAsyncValidators)}},K=class extends I{constructor(e,n,t){super(ye(n),ve(t,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,t={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){ft(this,!0,e),Object.keys(e).forEach(t=>{ht(this,!0,t),this.controls[t].setValue(e[t],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(t=>{let r=this.controls[t];r&&r.patchValue(e[t],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((t,r)=>{t.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,t)=>(e[t]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,t)=>t._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let t=this.controls[n];t&&e(t,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,t]of Object.entries(this.controls))if(this.contains(n)&&e(t))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,t,r)=>((t.enabled||this.disabled)&&(n[r]=t.value),n))}_reduceChildren(e,n){let t=e;return this._forEachChild((r,o)=>{t=n(t,r,o)}),t}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var pe=class extends K{};var pt=new V("CallSetDisabledState",{providedIn:"root",factory:()=>_e}),_e="always";function Lt(i,e){return[...e.path,i]}function Ue(i,e,n=_e){Ce(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),Wt(i,e),zt(i,e),qt(i,e),$t(i,e)}function He(i,e,n=!0){let t=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(t),e.valueAccessor.registerOnTouched(t)),ee(i,e),i&&(e._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function Q(i,e){i.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function $t(i,e){if(e.valueAccessor.setDisabledState){let n=t=>{e.valueAccessor.setDisabledState(t)};i.registerOnDisabledChange(n),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(n)})}}function Ce(i,e){let n=lt(i);e.validator!==null?i.setValidators(Te(n,e.validator)):typeof n=="function"&&i.setValidators([n]);let t=ut(i);e.asyncValidator!==null?i.setAsyncValidators(Te(t,e.asyncValidator)):typeof t=="function"&&i.setAsyncValidators([t]);let r=()=>i.updateValueAndValidity();Q(e._rawValidators,r),Q(e._rawAsyncValidators,r)}function ee(i,e){let n=!1;if(i!==null){if(e.validator!==null){let r=lt(i);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==e.validator);o.length!==r.length&&(n=!0,i.setValidators(o))}}if(e.asyncValidator!==null){let r=ut(i);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==e.asyncValidator);o.length!==r.length&&(n=!0,i.setAsyncValidators(o))}}}let t=()=>{};return Q(e._rawValidators,t),Q(e._rawAsyncValidators,t),n}function Wt(i,e){e.valueAccessor.registerOnChange(n=>{i._pendingValue=n,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&gt(i,e)})}function qt(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&gt(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function gt(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function zt(i,e){let n=(t,r)=>{e.valueAccessor.writeValue(t),r&&e.viewToModelUpdate(t)};i.registerOnChange(n),e._registerOnDestroy(()=>{i._unregisterOnChange(n)})}function Zt(i,e){i==null,Ce(i,e)}function Xt(i,e){return ee(i,e)}function Yt(i,e){if(!i.hasOwnProperty("model"))return!1;let n=i.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function Jt(i){return Object.getPrototypeOf(i.constructor)===me}function Kt(i,e){i._syncPendingControls(),e.forEach(n=>{let t=n.control;t.updateOn==="submit"&&t._pendingChange&&(n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function Qt(i,e){if(!e)return null;Array.isArray(e);let n,t,r;return e.forEach(o=>{o.constructor===Ze?n=o:Jt(o)?t=o:r=o}),r||t||n||null}function ei(i,e){let n=i.indexOf(e);n>-1&&i.splice(n,1)}function Le(i,e){let n=i.indexOf(e);n>-1&&i.splice(n,1)}function $e(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var Z=class extends I{constructor(e=null,n,t){super(ye(n),ve(t,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ne(n)&&(n.nonNullable||n.initialValueIsDefault)&&($e(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Le(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Le(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){$e(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var ti=i=>i instanceof Z;var mt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=h({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let i=e;return i})();var yt=new V("");var ii={provide:w,useExisting:A(()=>Ve)},Ve=(()=>{let e=class e extends w{constructor(t,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new P,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(ee(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let r=this.form.get(t.path);return Ue(r,t,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),r}getControl(t){return this.form.get(t.path)}removeControl(t){He(t.control||null,t,!1),ei(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,r){this.form.get(t.path).setValue(r)}onSubmit(t){return this.submitted=!0,Kt(this.form,this.directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{let r=t.control,o=this.form.get(t.path);r!==o&&(He(r||null,t),ti(o)&&(Ue(o,t,this.callSetDisabledState),t.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let r=this.form.get(t.path);Zt(r,t),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let r=this.form.get(t.path);r&&Xt(r,t)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){Ce(this.form,this),this._oldForm&&ee(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(a(Ye,10),a(Je,10),a(pt,8))},e.\u0275dir=h({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,o){r&1&&G("submit",function(l){return o.onSubmit(l)})("reset",function(){return o.onReset()})},inputs:{form:[O.None,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[E([ii]),m,ae]});let i=e;return i})();var ni={provide:R,useExisting:A(()=>De)},De=(()=>{let e=class e extends R{set isDisabled(t){}constructor(t,r,o,s,l){super(),this._ngModelWarningConfig=l,this._added=!1,this.name=null,this.update=new P,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=Qt(this,s)}ngOnChanges(t){this._added||this._setUpControl(),Yt(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return Lt(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(a(w,13),a(Ye,10),a(Je,10),a(ie,10),a(yt,8))},e.\u0275dir=h({type:e,selectors:[["","formControlName",""]],inputs:{name:[O.None,"formControlName","name"],isDisabled:[O.None,"disabled","isDisabled"],model:[O.None,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[E([ni]),m,ae]});let i=e;return i})(),ri={provide:ie,useExisting:A(()=>re),multi:!0};function vt(i,e){return i==null?`${e}`:(e&&typeof e=="object"&&(e="Object"),`${i}: ${e}`.slice(0,50))}function oi(i){return i.split(":")[0]}var re=(()=>{let e=class e extends me{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){this.value=t;let r=this._getOptionId(t),o=vt(r,t);this.setProperty("value",o)}registerOnChange(t){this.onChange=r=>{this.value=this._getOptionValue(r),t(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(t){for(let r of this._optionMap.keys())if(this._compareWith(this._optionMap.get(r),t))return r;return null}_getOptionValue(t){let r=oi(t);return this._optionMap.has(r)?this._optionMap.get(r):t}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=W(e)))(o||e)}})(),e.\u0275dir=h({type:e,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(r,o){r&1&&G("change",function(l){return o.onChange(l.target.value)})("blur",function(){return o.onTouched()})},inputs:{compareWith:"compareWith"},features:[E([ri]),m]});let i=e;return i})(),_t=(()=>{let e=class e{constructor(t,r,o){this._element=t,this._renderer=r,this._select=o,this._select&&(this.id=this._select._registerOption())}set ngValue(t){this._select!=null&&(this._select._optionMap.set(this.id,t),this._setElementValue(vt(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._setElementValue(t),this._select&&this._select.writeValue(this._select.value)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}};e.\u0275fac=function(r){return new(r||e)(a(x),a(k),a(re,9))},e.\u0275dir=h({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}});let i=e;return i})(),si={provide:ie,useExisting:A(()=>Ct),multi:!0};function We(i,e){return i==null?`${e}`:(typeof e=="string"&&(e=`'${e}'`),e&&typeof e=="object"&&(e="Object"),`${i}: ${e}`.slice(0,50))}function ai(i){return i.split(":")[0]}var Ct=(()=>{let e=class e extends me{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){this.value=t;let r;if(Array.isArray(t)){let o=t.map(s=>this._getOptionId(s));r=(s,l)=>{s._setSelected(o.indexOf(l.toString())>-1)}}else r=(o,s)=>{o._setSelected(!1)};this._optionMap.forEach(r)}registerOnChange(t){this.onChange=r=>{let o=[],s=r.selectedOptions;if(s!==void 0){let l=s;for(let v=0;v<l.length;v++){let U=l[v],oe=this._getOptionValue(U.value);o.push(oe)}}else{let l=r.options;for(let v=0;v<l.length;v++){let U=l[v];if(U.selected){let oe=this._getOptionValue(U.value);o.push(oe)}}}this.value=o,t(o)}}_registerOption(t){let r=(this._idCounter++).toString();return this._optionMap.set(r,t),r}_getOptionId(t){for(let r of this._optionMap.keys())if(this._compareWith(this._optionMap.get(r)._value,t))return r;return null}_getOptionValue(t){let r=ai(t);return this._optionMap.has(r)?this._optionMap.get(r)._value:t}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=W(e)))(o||e)}})(),e.\u0275dir=h({type:e,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(r,o){r&1&&G("change",function(l){return o.onChange(l.target)})("blur",function(){return o.onTouched()})},inputs:{compareWith:"compareWith"},features:[E([si]),m]});let i=e;return i})(),Vt=(()=>{let e=class e{constructor(t,r,o){this._element=t,this._renderer=r,this._select=o,this._select&&(this.id=this._select._registerOption(this))}set ngValue(t){this._select!=null&&(this._value=t,this._setElementValue(We(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._select?(this._value=t,this._setElementValue(We(this.id,t)),this._select.writeValue(this._select.value)):this._setElementValue(t)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}_setSelected(t){this._renderer.setProperty(this._element.nativeElement,"selected",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}};e.\u0275fac=function(r){return new(r||e)(a(x),a(k),a(Ct,9))},e.\u0275dir=h({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}});let i=e;return i})();var li=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=D({type:e}),e.\u0275inj=C({});let i=e;return i})(),ge=class extends I{constructor(e,n,t){super(ye(n),ve(t,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,n={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}insert(e,n,t={}){this.controls.splice(e,0,n),this._registerControl(n),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(e,n={}){let t=this._adjustIndex(e);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:n.emitEvent})}setControl(e,n,t={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),n&&(this.controls.splice(r,0,n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,n={}){ft(this,!1,e),e.forEach((t,r)=>{ht(this,!1,r),this.at(r).setValue(t,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(e.forEach((t,r)=>{this.at(r)&&this.at(r).patchValue(t,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e=[],n={}){this._forEachChild((t,r)=>{t.reset(e[r],{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(n=>n._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((n,t)=>t._syncPendingControls()?!0:n,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((n,t)=>{e(n,t)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(n=>n.enabled&&e(n))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function qe(i){return!!i&&(i.asyncValidators!==void 0||i.validators!==void 0||i.updateOn!==void 0)}var Dt=(()=>{let e=class e{constructor(){this.useNonNullable=!1}get nonNullable(){let t=new e;return t.useNonNullable=!0,t}group(t,r=null){let o=this._reduceControls(t),s={};return qe(r)?s=r:r!==null&&(s.validators=r.validator,s.asyncValidators=r.asyncValidator),new K(o,s)}record(t,r=null){let o=this._reduceControls(t);return new pe(o,r)}control(t,r,o){let s={};return this.useNonNullable?(qe(r)?s=r:(s.validators=r,s.asyncValidators=o),new Z(t,_(g({},s),{nonNullable:!0}))):new Z(t,r,o)}array(t,r,o){let s=t.map(l=>this._createControl(l));return new ge(s,r,o)}_reduceControls(t){let r={};return Object.keys(t).forEach(o=>{r[o]=this._createControl(t[o])}),r}_createControl(t){if(t instanceof Z)return t;if(t instanceof I)return t;if(Array.isArray(t)){let r=t[0],o=t.length>1?t[1]:null,s=t.length>2?t[2]:null;return this.control(r,o,s)}else return this.control(t)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=$({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var bt=(()=>{let e=class e{static withConfig(t){return{ngModule:e,providers:[{provide:yt,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:pt,useValue:t.callSetDisabledState??_e}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=D({type:e}),e.\u0275inj=C({imports:[li]});let i=e;return i})();var b=function(i){return i.Africa="Africa",i.Americas="Americas",i.Asia="Asia",i.Europe="Europe",i.Oceania="Oceania",i}(b||{});var At=(()=>{let e=class e{constructor(t){this.http=t,this.baseUrl="https://restcountries.com/v3.1",this._regions=[b.Africa,b.Americas,b.Asia,b.Europe,b.Oceania]}get regions(){return[...this._regions]}getCountriesByRegion(t){if(!t)return se([]);let r=`${this.baseUrl}/region/${t}?fields=cca3,name,borders`;return this.http.get(r).pipe(S(o=>o.map(s=>({name:s.name.common,cca3:s.cca3,borders:s.borders??[]}))))}getCountryByAlphaCode(t){let r=`${this.baseUrl}/alpha/${t}?fields=cca3,name,borders`;return this.http.get(r).pipe(S(o=>({name:o.name.common,cca3:o.cca3,borders:o.borders??[]})))}getCountryBordersByCodes(t){if(!t||t.length===0)return se([]);let r=[];return t.forEach(o=>{let s=this.getCountryByAlphaCode(o);r.push(s)}),Ae(r)}};e.\u0275fac=function(r){return new(r||e)(Fe(Ge))},e.\u0275prov=$({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();function ci(i,e){if(i&1&&(d(0,"option",9),c(1),u()),i&2){let n=e.$implicit;p("value",n),f(),q(n)}}function hi(i,e){if(i&1&&(d(0,"option",9),c(1),u()),i&2){let n=e.$implicit;p("value",n.cca3),f(),q(n.name)}}function fi(i,e){if(i&1&&(d(0,"div",2)(1,"div",3)(2,"label",4),c(3,"Pa\xEDs:"),u(),d(4,"select",10)(5,"option",6),c(6,"-- Seleccione Pa\xEDs --"),u(),j(7,hi,2,2,"option",7),u()()()),i&2){let n=ue();f(7),p("ngForOf",n.countriesByRegion)}}function pi(i,e){if(i&1&&(d(0,"option",9),c(1),u()),i&2){let n=e.$implicit;p("value",n.cca3),f(),q(n.name)}}function gi(i,e){if(i&1&&(d(0,"div",2)(1,"div",3)(2,"label",4),c(3,"Fronteras:"),u(),d(4,"select",11)(5,"option",6),c(6,"-- Seleccione la frontera --"),u(),j(7,pi,2,2,"option",7),u()()()),i&2){let n=ue();f(7),p("ngForOf",n.borders)}}var Et=(()=>{let e=class e{constructor(t,r){this.fb=t,this.countriesService=r,this.countriesByRegion=[],this.borders=[],this.myForm=this.fb.group({region:["",F.required],country:["",F.required],border:["",F.required]})}ngOnInit(){this.onRegionChanged(),this.onCountryChanged()}get regions(){return this.countriesService.regions}onRegionChanged(){this.myForm.get("region").valueChanges.pipe(N(()=>this.myForm.get("country").setValue("")),N(()=>this.borders=[]),H(t=>this.countriesService.getCountriesByRegion(t))).subscribe(t=>{this.countriesByRegion=t})}onCountryChanged(){this.myForm.get("country").valueChanges.pipe(N(()=>this.myForm.get("border").setValue("")),Me(t=>t.length>0),H(t=>this.countriesService.getCountryByAlphaCode(t)),N(t=>console.log(t)),H(t=>this.countriesService.getCountryBordersByCodes(t.borders))).subscribe(t=>{this.borders=t})}};e.\u0275fac=function(r){return new(r||e)(a(Dt),a(At))},e.\u0275cmp=we({type:e,selectors:[["app-selector-page"]],decls:21,vars:8,consts:[[1,"mt-3"],[3,"formGroup"],[1,"row","mb-3"],[1,"col"],[1,"form-label"],["formControlName","region",1,"form-control"],["value",""],[3,"value",4,"ngFor","ngForOf"],["class","row mb-3",4,"ngIf"],[3,"value"],["formControlName","country",1,"form-control"],["formControlName","border",1,"form-control"]],template:function(r,o){r&1&&(d(0,"h1",0),c(1,"Selectores anidados"),u(),Ie(2,"hr"),d(3,"form",1)(4,"div",2)(5,"div",3)(6,"label",4),c(7,"Continente:"),u(),d(8,"select",5)(9,"option",6),c(10,"-- Seleccione Continente --"),u(),j(11,ci,2,2,"option",7),u()()(),j(12,fi,8,1,"div",8)(13,gi,8,1,"div",8),u(),d(14,"h3"),c(15,"Formulario"),u(),d(16,"code"),c(17),Se(18,"json"),u(),d(19,"p"),c(20),u()),r&2&&(f(3),p("formGroup",o.myForm),f(8),p("ngForOf",o.regions),f(),p("ngIf",o.countriesByRegion.length>0),f(),p("ngIf",o.borders.length>0),f(4),de(" ",Ne(18,6,o.myForm.value),`
`),f(3),de(" is form valid: ",o.myForm.valid,`
`))},dependencies:[xe,Pe,mt,_t,Vt,re,dt,ct,Ve,De,ke]});let i=e;return i})();var mi=[{path:"",children:[{path:"selector",component:Et},{path:"**",redirectTo:"selector"}]}],Mt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=D({type:e}),e.\u0275inj=C({imports:[he.forChild(mi),he]});let i=e;return i})();var rn=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=D({type:e}),e.\u0275inj=C({imports:[je,Mt,bt]});let i=e;return i})();export{rn as CountriesModule};
