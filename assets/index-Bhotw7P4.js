(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uo="172",Ol=0,Po=1,Bl=2,Hc=1,Gc=2,wn=3,Vn=0,Be=1,Me=2,Hn=0,Gi=1,gr=2,Lo=3,Io=4,zl=5,oi=100,kl=101,Hl=102,Gl=103,Vl=104,Wl=200,Xl=201,ql=202,Yl=203,va=204,xa=205,Zl=206,$l=207,Jl=208,jl=209,Kl=210,Ql=211,th=212,eh=213,nh=214,Ma=0,ya=1,Sa=2,Xi=3,Ea=4,wa=5,Ta=6,ba=7,Vc=0,ih=1,sh=2,Gn=0,rh=1,ah=2,oh=3,Wc=4,ch=5,lh=6,hh=7,Xc=300,qi=301,Yi=302,Aa=303,Ca=304,wr=306,Ms=1e3,li=1001,Ra=1002,ln=1003,uh=1004,Is=1005,pn=1006,Dr=1007,hi=1008,Rn=1009,qc=1010,Yc=1011,ys=1012,fo=1013,ui=1014,Tn=1015,Ts=1016,po=1017,mo=1018,Zi=1020,Zc=35902,$c=1021,Jc=1022,on=1023,jc=1024,Kc=1025,Vi=1026,$i=1027,Qc=1028,go=1029,tl=1030,_o=1031,vo=1033,hr=33776,ur=33777,dr=33778,fr=33779,Pa=35840,La=35841,Ia=35842,Da=35843,Ua=36196,Na=37492,Fa=37496,Oa=37808,Ba=37809,za=37810,ka=37811,Ha=37812,Ga=37813,Va=37814,Wa=37815,Xa=37816,qa=37817,Ya=37818,Za=37819,$a=37820,Ja=37821,pr=36492,ja=36494,Ka=36495,el=36283,Qa=36284,to=36285,eo=36286,dh=3200,fh=3201,nl=0,ph=1,kn="",Ve="srgb",Ji="srgb-linear",_r="linear",he="srgb",vi=7680,Do=519,mh=512,gh=513,_h=514,il=515,vh=516,xh=517,Mh=518,yh=519,no=35044,Uo="300 es",bn=2e3,vr=2001;class Qi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let No=1234567;const ps=Math.PI/180,ji=180/Math.PI;function mn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[s&255]+Pe[s>>8&255]+Pe[s>>16&255]+Pe[s>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function Jt(s,t,e){return Math.max(t,Math.min(e,s))}function xo(s,t){return(s%t+t)%t}function Sh(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Eh(s,t,e){return s!==t?(e-s)/(t-s):0}function ms(s,t,e){return(1-e)*s+e*t}function wh(s,t,e,n){return ms(s,t,1-Math.exp(-e*n))}function Th(s,t=1){return t-Math.abs(xo(s,t*2)-t)}function bh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Ah(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Ch(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Rh(s,t){return s+Math.random()*(t-s)}function Ph(s){return s*(.5-Math.random())}function Lh(s){s!==void 0&&(No=s);let t=No+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ih(s){return s*ps}function Dh(s){return s*ji}function Uh(s){return(s&s-1)===0&&s!==0}function Nh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Fh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Oh(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*h,c*u,c*f,o*l);break;case"YZY":s.set(c*f,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*f,o*h,o*l);break;case"XZX":s.set(o*h,c*g,c*p,o*l);break;case"YXY":s.set(c*p,o*h,c*g,o*l);break;case"ZYZ":s.set(c*g,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function an(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ce(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const xi={DEG2RAD:ps,RAD2DEG:ji,generateUUID:mn,clamp:Jt,euclideanModulo:xo,mapLinear:Sh,inverseLerp:Eh,lerp:ms,damp:wh,pingpong:Th,smoothstep:bh,smootherstep:Ah,randInt:Ch,randFloat:Rh,randFloatSpread:Ph,seededRandom:Lh,degToRad:Ih,radToDeg:Dh,isPowerOfTwo:Uh,ceilPowerOfTwo:Nh,floorPowerOfTwo:Fh,setQuaternionFromProperEuler:Oh,normalize:ce,denormalize:an};class ct{constructor(t=0,e=0){ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zt{constructor(t,e,n,i,r,a,o,c,l){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l)}set(t,e,n,i,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],_=i[0],m=i[3],d=i[6],C=i[1],E=i[4],M=i[7],A=i[2],P=i[5],L=i[8];return r[0]=a*_+o*C+c*A,r[3]=a*m+o*E+c*P,r[6]=a*d+o*M+c*L,r[1]=l*_+h*C+u*A,r[4]=l*m+h*E+u*P,r[7]=l*d+h*M+u*L,r[2]=f*_+p*C+g*A,r[5]=f*m+p*E+g*P,r[8]=f*d+p*M+g*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,f=o*c-h*r,p=l*r-a*c,g=e*u+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*l-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=f*_,t[4]=(h*e-i*c)*_,t[5]=(i*r-o*e)*_,t[6]=p*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ur.makeScale(t,e)),this}rotate(t){return this.premultiply(Ur.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ur.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ur=new Zt;function sl(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function xr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Bh(){const s=xr("canvas");return s.style.display="block",s}const Fo={};function Bi(s){s in Fo||(Fo[s]=!0,console.warn(s))}function zh(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function kh(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Hh(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Oo=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bo=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gh(){const s={enabled:!0,workingColorSpace:Ji,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===he&&(i.r=An(i.r),i.g=An(i.g),i.b=An(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===he&&(i.r=Wi(i.r),i.g=Wi(i.g),i.b=Wi(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===kn?_r:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ji]:{primaries:t,whitePoint:n,transfer:_r,toXYZ:Oo,fromXYZ:Bo,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:t,whitePoint:n,transfer:he,toXYZ:Oo,fromXYZ:Bo,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}}),s}const se=Gh();function An(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Wi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Mi;class Vh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Mi===void 0&&(Mi=xr("canvas")),Mi.width=t.width,Mi.height=t.height;const n=Mi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Mi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=xr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=An(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(An(e[n]/255)*255):e[n]=An(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Wh=0;class rl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=mn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Nr(i[a].image)):r.push(Nr(i[a]))}else r=Nr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Nr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Vh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xh=0;class ze extends Qi{constructor(t=ze.DEFAULT_IMAGE,e=ze.DEFAULT_MAPPING,n=li,i=li,r=pn,a=hi,o=on,c=Rn,l=ze.DEFAULT_ANISOTROPY,h=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=mn(),this.name="",this.source=new rl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ms:t.x=t.x-Math.floor(t.x);break;case li:t.x=t.x<0?0:1;break;case Ra:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ms:t.y=t.y-Math.floor(t.y);break;case li:t.y=t.y<0?0:1;break;case Ra:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=Xc;ze.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,i=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],g=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(l+1)/2,M=(p+1)/2,A=(d+1)/2,P=(h+f)/4,L=(u+_)/4,U=(g+m)/4;return E>M&&E>A?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=P/n,r=L/n):M>A?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=P/i,r=U/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=L/r,i=U/r),this.set(n,i,r,e),this}let C=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(C)<.001&&(C=1),this.x=(m-g)/C,this.y=(u-_)/C,this.z=(f-h)/C,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qh extends Qi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new ze(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new rl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class di extends qh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class al extends ze{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yh extends ze{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bs{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const f=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==f||l!==p||h!==g){let m=1-o;const d=c*f+l*p+h*g+u*_,C=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){const A=Math.sqrt(E),P=Math.atan2(A,d*C);m=Math.sin(m*P)/A,o=Math.sin(o*P)/A}const M=o*C;if(c=c*m+f*M,l=l*m+p*M,h=h*m+g*M,u=u*m+_*M,m===1-o){const A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+c*p-l*f,t[e+1]=c*g+h*f+l*u-o*p,t[e+2]=l*g+h*p+o*f-c*u,t[e+3]=h*g-o*u-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),f=c(n/2),p=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"YZX":this._x=f*h*u+l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u-f*p*g;break;case"XZY":this._x=f*h*u-l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+l)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Fr.copy(this).projectOnVector(t),this.sub(Fr)}reflect(t){return this.sub(Fr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fr=new D,zo=new bs;class As{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,en):en.fromBufferAttribute(r,a),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ds.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ds.copy(n.boundingBox)),Ds.applyMatrix4(t.matrixWorld),this.union(Ds)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(is),Us.subVectors(this.max,is),yi.subVectors(t.a,is),Si.subVectors(t.b,is),Ei.subVectors(t.c,is),Dn.subVectors(Si,yi),Un.subVectors(Ei,Si),jn.subVectors(yi,Ei);let e=[0,-Dn.z,Dn.y,0,-Un.z,Un.y,0,-jn.z,jn.y,Dn.z,0,-Dn.x,Un.z,0,-Un.x,jn.z,0,-jn.x,-Dn.y,Dn.x,0,-Un.y,Un.x,0,-jn.y,jn.x,0];return!Or(e,yi,Si,Ei,Us)||(e=[1,0,0,0,1,0,0,0,1],!Or(e,yi,Si,Ei,Us))?!1:(Ns.crossVectors(Dn,Un),e=[Ns.x,Ns.y,Ns.z],Or(e,yi,Si,Ei,Us))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const xn=[new D,new D,new D,new D,new D,new D,new D,new D],en=new D,Ds=new As,yi=new D,Si=new D,Ei=new D,Dn=new D,Un=new D,jn=new D,is=new D,Us=new D,Ns=new D,Kn=new D;function Or(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Kn.fromArray(s,r);const o=i.x*Math.abs(Kn.x)+i.y*Math.abs(Kn.y)+i.z*Math.abs(Kn.z),c=t.dot(Kn),l=e.dot(Kn),h=n.dot(Kn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Zh=new As,ss=new D,Br=new D;class Cs{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Zh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ss.subVectors(t,this.center);const e=ss.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ss,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Br.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ss.copy(t.center).add(Br)),this.expandByPoint(ss.copy(t.center).sub(Br))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new D,zr=new D,Fs=new D,Nn=new D,kr=new D,Os=new D,Hr=new D;class Mo{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mn.copy(this.origin).addScaledVector(this.direction,e),Mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){zr.copy(t).add(e).multiplyScalar(.5),Fs.copy(e).sub(t).normalize(),Nn.copy(this.origin).sub(zr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Fs),o=Nn.dot(this.direction),c=-Nn.dot(Fs),l=Nn.lengthSq(),h=Math.abs(1-a*a);let u,f,p,g;if(h>0)if(u=a*c-o,f=a*o-c,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,p=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(zr).addScaledVector(Fs,f),p}intersectSphere(t,e){Mn.subVectors(t.center,this.origin);const n=Mn.dot(this.direction),i=Mn.dot(Mn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Mn)!==null}intersectTriangle(t,e,n,i,r){kr.subVectors(e,t),Os.subVectors(n,t),Hr.crossVectors(kr,Os);let a=this.direction.dot(Hr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Nn.subVectors(this.origin,t);const c=o*this.direction.dot(Os.crossVectors(Nn,Os));if(c<0)return null;const l=o*this.direction.dot(kr.cross(Nn));if(l<0||c+l>a)return null;const h=-o*Nn.dot(Hr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,n,i,r,a,o,c,l,h,u,f,p,g,_,m){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l,h,u,f,p,g,_,m)}set(t,e,n,i,r,a,o,c,l,h,u,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/wi.setFromMatrixColumn(t,0).length(),r=1/wi.setFromMatrixColumn(t,1).length(),a=1/wi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,p=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=f-_*l,e[9]=-o*c,e[2]=_-f*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){const f=c*h,p=c*u,g=l*h,_=l*u;e[0]=f+_*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*h,p=c*u,g=l*h,_=l*u;e[0]=f-_*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*h,p=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=g*l-p,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,p=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-f*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=a*c,p=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($h,t,Jh)}lookAt(t,e,n){const i=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),Fn.crossVectors(n,Xe),Fn.lengthSq()===0&&(Math.abs(n.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),Fn.crossVectors(n,Xe)),Fn.normalize(),Bs.crossVectors(Xe,Fn),i[0]=Fn.x,i[4]=Bs.x,i[8]=Xe.x,i[1]=Fn.y,i[5]=Bs.y,i[9]=Xe.y,i[2]=Fn.z,i[6]=Bs.z,i[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],C=n[3],E=n[7],M=n[11],A=n[15],P=i[0],L=i[4],U=i[8],w=i[12],x=i[1],I=i[5],V=i[9],H=i[13],X=i[2],$=i[6],N=i[10],z=i[14],G=i[3],st=i[7],ut=i[11],Et=i[15];return r[0]=a*P+o*x+c*X+l*G,r[4]=a*L+o*I+c*$+l*st,r[8]=a*U+o*V+c*N+l*ut,r[12]=a*w+o*H+c*z+l*Et,r[1]=h*P+u*x+f*X+p*G,r[5]=h*L+u*I+f*$+p*st,r[9]=h*U+u*V+f*N+p*ut,r[13]=h*w+u*H+f*z+p*Et,r[2]=g*P+_*x+m*X+d*G,r[6]=g*L+_*I+m*$+d*st,r[10]=g*U+_*V+m*N+d*ut,r[14]=g*w+_*H+m*z+d*Et,r[3]=C*P+E*x+M*X+A*G,r[7]=C*L+E*I+M*$+A*st,r[11]=C*U+E*V+M*N+A*ut,r[15]=C*w+E*H+M*z+A*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+r*c*u-i*l*u-r*o*f+n*l*f+i*o*p-n*c*p)+_*(+e*c*p-e*l*f+r*a*f-i*a*p+i*l*h-r*c*h)+m*(+e*l*u-e*o*p-r*a*u+n*a*p+r*o*h-n*l*h)+d*(-i*o*h-e*c*u+e*o*f+i*a*u-n*a*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],C=u*m*l-_*f*l+_*c*p-o*m*p-u*c*d+o*f*d,E=g*f*l-h*m*l-g*c*p+a*m*p+h*c*d-a*f*d,M=h*_*l-g*u*l+g*o*p-a*_*p-h*o*d+a*u*d,A=g*u*c-h*_*c-g*o*f+a*_*f+h*o*m-a*u*m,P=e*C+n*E+i*M+r*A;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/P;return t[0]=C*L,t[1]=(_*f*r-u*m*r-_*i*p+n*m*p+u*i*d-n*f*d)*L,t[2]=(o*m*r-_*c*r+_*i*l-n*m*l-o*i*d+n*c*d)*L,t[3]=(u*c*r-o*f*r-u*i*l+n*f*l+o*i*p-n*c*p)*L,t[4]=E*L,t[5]=(h*m*r-g*f*r+g*i*p-e*m*p-h*i*d+e*f*d)*L,t[6]=(g*c*r-a*m*r-g*i*l+e*m*l+a*i*d-e*c*d)*L,t[7]=(a*f*r-h*c*r+h*i*l-e*f*l-a*i*p+e*c*p)*L,t[8]=M*L,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*d-e*u*d)*L,t[10]=(a*_*r-g*o*r+g*n*l-e*_*l-a*n*d+e*o*d)*L,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*p-e*o*p)*L,t[12]=A*L,t[13]=(h*_*i-g*u*i+g*n*f-e*_*f-h*n*m+e*u*m)*L,t[14]=(g*o*i-a*_*i-g*n*c+e*_*c+a*n*m-e*o*m)*L,t[15]=(a*u*i-h*o*i+h*n*c-e*u*c-a*n*f+e*o*f)*L,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,f=r*l,p=r*h,g=r*u,_=a*h,m=a*u,d=o*u,C=c*l,E=c*h,M=c*u,A=n.x,P=n.y,L=n.z;return i[0]=(1-(_+d))*A,i[1]=(p+M)*A,i[2]=(g-E)*A,i[3]=0,i[4]=(p-M)*P,i[5]=(1-(f+d))*P,i[6]=(m+C)*P,i[7]=0,i[8]=(g+E)*L,i[9]=(m-C)*L,i[10]=(1-(f+_))*L,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=wi.set(i[0],i[1],i[2]).length();const a=wi.set(i[4],i[5],i[6]).length(),o=wi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],nn.copy(this);const l=1/r,h=1/a,u=1/o;return nn.elements[0]*=l,nn.elements[1]*=l,nn.elements[2]*=l,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=u,nn.elements[9]*=u,nn.elements[10]*=u,e.setFromRotationMatrix(nn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=bn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let p,g;if(o===bn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===vr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=bn){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(a-r),f=(e+t)*l,p=(n+i)*h;let g,_;if(o===bn)g=(a+r)*u,_=-2*u;else if(o===vr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const wi=new D,nn=new fe,$h=new D(0,0,0),Jh=new D(1,1,1),Fn=new D,Bs=new D,Xe=new D,ko=new fe,Ho=new bs;class gn{constructor(t=0,e=0,n=0,i=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ko.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ko,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ho.setFromEuler(this),this.setFromQuaternion(Ho,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class ol{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jh=0;const Go=new D,Ti=new bs,yn=new fe,zs=new D,rs=new D,Kh=new D,Qh=new bs,Vo=new D(1,0,0),Wo=new D(0,1,0),Xo=new D(0,0,1),qo={type:"added"},tu={type:"removed"},bi={type:"childadded",child:null},Gr={type:"childremoved",child:null};class we extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=we.DEFAULT_UP.clone();const t=new D,e=new gn,n=new bs,i=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new fe},normalMatrix:{value:new Zt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=we.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ol,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.premultiply(Ti),this}rotateX(t){return this.rotateOnAxis(Vo,t)}rotateY(t){return this.rotateOnAxis(Wo,t)}rotateZ(t){return this.rotateOnAxis(Xo,t)}translateOnAxis(t,e){return Go.copy(t).applyQuaternion(this.quaternion),this.position.add(Go.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vo,t)}translateY(t){return this.translateOnAxis(Wo,t)}translateZ(t){return this.translateOnAxis(Xo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?zs.copy(t):zs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(rs,zs,this.up):yn.lookAt(zs,rs,this.up),this.quaternion.setFromRotationMatrix(yn),i&&(yn.extractRotation(i.matrixWorld),Ti.setFromRotationMatrix(yn),this.quaternion.premultiply(Ti.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qo),bi.child=t,this.dispatchEvent(bi),bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tu),Gr.child=t,this.dispatchEvent(Gr),Gr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qo),bi.child=t,this.dispatchEvent(bi),bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,t,Kh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,Qh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}we.DEFAULT_UP=new D(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new D,Sn=new D,Vr=new D,En=new D,Ai=new D,Ci=new D,Yo=new D,Wr=new D,Xr=new D,qr=new D,Yr=new ue,Zr=new ue,$r=new ue;class Ke{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),sn.subVectors(t,e),i.cross(sn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){sn.subVectors(i,e),Sn.subVectors(n,e),Vr.subVectors(t,e);const a=sn.dot(sn),o=sn.dot(Sn),c=sn.dot(Vr),l=Sn.dot(Sn),h=Sn.dot(Vr),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(l*c-o*h)*f,g=(a*h-o*c)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,En)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,En.x),c.addScaledVector(a,En.y),c.addScaledVector(o,En.z),c)}static getInterpolatedAttribute(t,e,n,i,r,a){return Yr.setScalar(0),Zr.setScalar(0),$r.setScalar(0),Yr.fromBufferAttribute(t,e),Zr.fromBufferAttribute(t,n),$r.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Yr,r.x),a.addScaledVector(Zr,r.y),a.addScaledVector($r,r.z),a}static isFrontFacing(t,e,n,i){return sn.subVectors(n,e),Sn.subVectors(t,e),sn.cross(Sn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),sn.cross(Sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ke.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ke.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Ke.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Ke.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ke.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;Ai.subVectors(i,n),Ci.subVectors(r,n),Wr.subVectors(t,n);const c=Ai.dot(Wr),l=Ci.dot(Wr);if(c<=0&&l<=0)return e.copy(n);Xr.subVectors(t,i);const h=Ai.dot(Xr),u=Ci.dot(Xr);if(h>=0&&u<=h)return e.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Ai,a);qr.subVectors(t,r);const p=Ai.dot(qr),g=Ci.dot(qr);if(g>=0&&p<=g)return e.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Ci,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Yo.subVectors(r,i),o=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(Yo,o);const d=1/(m+_+f);return a=_*d,o=f*d,e.copy(n).addScaledVector(Ai,a).addScaledVector(Ci,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const cl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},ks={h:0,s:0,l:0};function Jr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=se.workingColorSpace){if(t=xo(t,1),e=Jt(e,0,1),n=Jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Jr(a,r,t+1/3),this.g=Jr(a,r,t),this.b=Jr(a,r,t-1/3)}return se.toWorkingColorSpace(this,i),this}setStyle(t,e=Ve){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){const n=cl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=An(t.r),this.g=An(t.g),this.b=An(t.b),this}copyLinearToSRGB(t){return this.r=Wi(t.r),this.g=Wi(t.g),this.b=Wi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return se.fromWorkingColorSpace(Le.copy(this),t),Math.round(Jt(Le.r*255,0,255))*65536+Math.round(Jt(Le.g*255,0,255))*256+Math.round(Jt(Le.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace(Le.copy(this),e);const n=Le.r,i=Le.g,r=Le.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=Ve){se.fromWorkingColorSpace(Le.copy(this),t);const e=Le.r,n=Le.g,i=Le.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(On),this.setHSL(On.h+t,On.s+e,On.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(On),t.getHSL(ks);const n=ms(On.h,ks.h,e),i=ms(On.s,ks.s,e),r=ms(On.l,ks.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Le=new Ht;Ht.NAMES=cl;let eu=0;class Xn extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=mn(),this.name="",this.type="Material",this.blending=Gi,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=va,this.blendDst=xa,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Do,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vi,this.stencilZFail=vi,this.stencilZPass=vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(n.blending=this.blending),this.side!==Vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==va&&(n.blendSrc=this.blendSrc),this.blendDst!==xa&&(n.blendDst=this.blendDst),this.blendEquation!==oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Do&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Cn extends Xn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=Vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ee=new D,Hs=new ct;class Qe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=no,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Hs.fromBufferAttribute(this,e),Hs.applyMatrix3(t),this.setXY(e,Hs.x,Hs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=an(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=an(e,this.array)),e}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=an(e,this.array)),e}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=an(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=an(e,this.array)),e}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),i=ce(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),i=ce(i,this.array),r=ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==no&&(t.usage=this.usage),t}}class ll extends Qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class hl extends Qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class de extends Qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let nu=0;const $e=new fe,jr=new we,Ri=new D,qe=new As,as=new As,Re=new D;class Ce extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=mn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sl(t)?hl:ll)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $e.makeRotationFromQuaternion(t),this.applyMatrix4($e),this}rotateX(t){return $e.makeRotationX(t),this.applyMatrix4($e),this}rotateY(t){return $e.makeRotationY(t),this.applyMatrix4($e),this}rotateZ(t){return $e.makeRotationZ(t),this.applyMatrix4($e),this}translate(t,e,n){return $e.makeTranslation(t,e,n),this.applyMatrix4($e),this}scale(t,e,n){return $e.makeScale(t,e,n),this.applyMatrix4($e),this}lookAt(t){return jr.lookAt(t),jr.updateMatrix(),this.applyMatrix4(jr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ri).negate(),this.translate(Ri.x,Ri.y,Ri.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new de(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new As);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];as.setFromBufferAttribute(o),this.morphTargetsRelative?(Re.addVectors(qe.min,as.min),qe.expandByPoint(Re),Re.addVectors(qe.max,as.max),qe.expandByPoint(Re)):(qe.expandByPoint(as.min),qe.expandByPoint(as.max))}qe.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Re.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Re));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Re.fromBufferAttribute(o,l),c&&(Ri.fromBufferAttribute(t,l),Re.add(Ri)),i=Math.max(i,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let U=0;U<n.count;U++)o[U]=new D,c[U]=new D;const l=new D,h=new D,u=new D,f=new ct,p=new ct,g=new ct,_=new D,m=new D;function d(U,w,x){l.fromBufferAttribute(n,U),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,x),f.fromBufferAttribute(r,U),p.fromBufferAttribute(r,w),g.fromBufferAttribute(r,x),h.sub(l),u.sub(l),p.sub(f),g.sub(f);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(I),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(I),o[U].add(_),o[w].add(_),o[x].add(_),c[U].add(m),c[w].add(m),c[x].add(m))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let U=0,w=C.length;U<w;++U){const x=C[U],I=x.start,V=x.count;for(let H=I,X=I+V;H<X;H+=3)d(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const E=new D,M=new D,A=new D,P=new D;function L(U){A.fromBufferAttribute(i,U),P.copy(A);const w=o[U];E.copy(w),E.sub(A.multiplyScalar(A.dot(w))).normalize(),M.crossVectors(P,w);const I=M.dot(c[U])<0?-1:1;a.setXYZW(U,E.x,E.y,E.z,I)}for(let U=0,w=C.length;U<w;++U){const x=C[U],I=x.start,V=x.count;for(let H=I,X=I+V;H<X;H+=3)L(t.getX(H+0)),L(t.getX(H+1)),L(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new D,r=new D,a=new D,o=new D,c=new D,l=new D,h=new D,u=new D;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*h;for(let d=0;d<h;d++)f[g++]=l[p++]}return new Qe(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ce,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const f=l[h],p=t(f,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zo=new fe,Qn=new Mo,Gs=new Cs,$o=new D,Vs=new D,Ws=new D,Xs=new D,Kr=new D,qs=new D,Jo=new D,Ys=new D;class _t extends we{constructor(t=new Ce,e=new Cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){qs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(Kr.fromBufferAttribute(u,t),a?qs.addScaledVector(Kr,h):qs.addScaledVector(Kr.sub(e),h))}e.add(qs)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(r),Qn.copy(t.ray).recast(t.near),!(Gs.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(Gs,$o)===null||Qn.origin.distanceToSquared($o)>(t.far-t.near)**2))&&(Zo.copy(r).invert(),Qn.copy(t.ray).applyMatrix4(Zo),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],C=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=C,A=E;M<A;M+=3){const P=o.getX(M),L=o.getX(M+1),U=o.getX(M+2);i=Zs(this,d,t,n,l,h,u,P,L,U),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const C=o.getX(m),E=o.getX(m+1),M=o.getX(m+2);i=Zs(this,a,t,n,l,h,u,C,E,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],C=Math.max(m.start,p.start),E=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=C,A=E;M<A;M+=3){const P=M,L=M+1,U=M+2;i=Zs(this,d,t,n,l,h,u,P,L,U),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const C=m,E=m+1,M=m+2;i=Zs(this,a,t,n,l,h,u,C,E,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function iu(s,t,e,n,i,r,a,o){let c;if(t.side===Be?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===Vn,o),c===null)return null;Ys.copy(o),Ys.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Ys);return l<e.near||l>e.far?null:{distance:l,point:Ys.clone(),object:s}}function Zs(s,t,e,n,i,r,a,o,c,l){s.getVertexPosition(o,Vs),s.getVertexPosition(c,Ws),s.getVertexPosition(l,Xs);const h=iu(s,t,e,n,Vs,Ws,Xs,Jo);if(h){const u=new D;Ke.getBarycoord(Jo,Vs,Ws,Xs,u),i&&(h.uv=Ke.getInterpolatedAttribute(i,o,c,l,u,new ct)),r&&(h.uv1=Ke.getInterpolatedAttribute(r,o,c,l,u,new ct)),a&&(h.normal=Ke.getInterpolatedAttribute(a,o,c,l,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new D,materialIndex:0};Ke.getNormal(Vs,Ws,Xs,f.normal),h.face=f,h.barycoord=u}return h}class Te extends Ce{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new de(l,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(u,2));function g(_,m,d,C,E,M,A,P,L,U,w){const x=M/L,I=A/U,V=M/2,H=A/2,X=P/2,$=L+1,N=U+1;let z=0,G=0;const st=new D;for(let ut=0;ut<N;ut++){const Et=ut*I-H;for(let Bt=0;Bt<$;Bt++){const Gt=Bt*x-V;st[_]=Gt*C,st[m]=Et*E,st[d]=X,l.push(st.x,st.y,st.z),st[_]=0,st[m]=0,st[d]=P>0?1:-1,h.push(st.x,st.y,st.z),u.push(Bt/L),u.push(1-ut/U),z+=1}}for(let ut=0;ut<U;ut++)for(let Et=0;Et<L;Et++){const Bt=f+Et+$*ut,Gt=f+Et+$*(ut+1),Y=f+(Et+1)+$*(ut+1),nt=f+(Et+1)+$*ut;c.push(Bt,Gt,nt),c.push(Gt,Y,nt),G+=6}o.addGroup(p,G,w),p+=G,f+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Te(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ki(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ne(s){const t={};for(let e=0;e<s.length;e++){const n=Ki(s[e]);for(const i in n)t[i]=n[i]}return t}function su(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ul(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}const ru={clone:Ki,merge:Ne};var au=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ou=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends Xn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=au,this.fragmentShader=ou,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ki(t.uniforms),this.uniformsGroups=su(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class dl extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new D,jo=new ct,Ko=new ct;class Ie extends dl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ji*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ji*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z)}getViewSize(t,e){return this.getViewBounds(t,jo,Ko),e.subVectors(Ko,jo)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ps*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Pi=-90,Li=1;class cu extends we{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ie(Pi,Li,t,e);i.layers=this.layers,this.add(i);const r=new Ie(Pi,Li,t,e);r.layers=this.layers,this.add(r);const a=new Ie(Pi,Li,t,e);a.layers=this.layers,this.add(a);const o=new Ie(Pi,Li,t,e);o.layers=this.layers,this.add(o);const c=new Ie(Pi,Li,t,e);c.layers=this.layers,this.add(c);const l=new Ie(Pi,Li,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class fl extends ze{constructor(t,e,n,i,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:qi,super(t,e,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class lu extends di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new fl(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:pn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Te(5,5,5),r=new Wn({name:"CubemapFromEquirect",uniforms:Ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:Hn});r.uniforms.tEquirect.value=e;const a=new _t(i,r),o=e.minFilter;return e.minFilter===hi&&(e.minFilter=pn),new cu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}class yo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ht(t),this.density=e}clone(){return new yo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class pl extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class hu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=no,this.updateRanges=[],this.version=0,this.uuid=mn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ue=new D;class Mr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=an(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ce(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=an(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=an(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=an(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=an(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),i=ce(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),i=ce(i,this.array),r=ce(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Mr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ml extends Xn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ii;const os=new D,Di=new D,Ui=new D,Ni=new ct,cs=new ct,gl=new fe,$s=new D,ls=new D,Js=new D,Qo=new ct,Qr=new ct,tc=new ct;class uu extends we{constructor(t=new ml){if(super(),this.isSprite=!0,this.type="Sprite",Ii===void 0){Ii=new Ce;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new hu(e,5);Ii.setIndex([0,1,2,0,2,3]),Ii.setAttribute("position",new Mr(n,3,0,!1)),Ii.setAttribute("uv",new Mr(n,2,3,!1))}this.geometry=Ii,this.material=t,this.center=new ct(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Di.setFromMatrixScale(this.matrixWorld),gl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ui.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Di.multiplyScalar(-Ui.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;js($s.set(-.5,-.5,0),Ui,a,Di,i,r),js(ls.set(.5,-.5,0),Ui,a,Di,i,r),js(Js.set(.5,.5,0),Ui,a,Di,i,r),Qo.set(0,0),Qr.set(1,0),tc.set(1,1);let o=t.ray.intersectTriangle($s,ls,Js,!1,os);if(o===null&&(js(ls.set(-.5,.5,0),Ui,a,Di,i,r),Qr.set(0,1),o=t.ray.intersectTriangle($s,Js,ls,!1,os),o===null))return;const c=t.ray.origin.distanceTo(os);c<t.near||c>t.far||e.push({distance:c,point:os.clone(),uv:Ke.getInterpolation(os,$s,ls,Js,Qo,Qr,tc,new ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function js(s,t,e,n,i,r){Ni.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(cs.x=r*Ni.x-i*Ni.y,cs.y=i*Ni.x+r*Ni.y):cs.copy(Ni),s.copy(t),s.x+=cs.x,s.y+=cs.y,s.applyMatrix4(gl)}const ta=new D,du=new D,fu=new Zt;class si{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ta.subVectors(n,e).cross(du.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ta),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||fu.getNormalMatrix(t),i=this.coplanarPoint(ta).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ti=new Cs,Ks=new D;class So{constructor(t=new si,e=new si,n=new si,i=new si,r=new si,a=new si){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],p=i[8],g=i[9],_=i[10],m=i[11],d=i[12],C=i[13],E=i[14],M=i[15];if(n[0].setComponents(c-r,f-l,m-p,M-d).normalize(),n[1].setComponents(c+r,f+l,m+p,M+d).normalize(),n[2].setComponents(c+a,f+h,m+g,M+C).normalize(),n[3].setComponents(c-a,f-h,m-g,M-C).normalize(),n[4].setComponents(c-o,f-u,m-_,M-E).normalize(),e===bn)n[5].setComponents(c+o,f+u,m+_,M+E).normalize();else if(e===vr)n[5].setComponents(o,u,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(t){return ti.center.set(0,0,0),ti.radius=.7071067811865476,ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ks.x=i.normal.x>0?t.max.x:t.min.x,Ks.y=i.normal.y>0?t.max.y:t.min.y,Ks.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ks)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _l extends Xn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const yr=new D,Sr=new D,ec=new fe,hs=new Mo,Qs=new Cs,ea=new D,nc=new D;class pu extends we{constructor(t=new Ce,e=new _l){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)yr.fromBufferAttribute(e,i-1),Sr.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=yr.distanceTo(Sr);t.setAttribute("lineDistance",new de(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(i),Qs.radius+=r,t.ray.intersectsSphere(Qs)===!1)return;ec.copy(i).invert(),hs.copy(t.ray).applyMatrix4(ec);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=l){const d=h.getX(_),C=h.getX(_+1),E=tr(this,t,hs,c,d,C);E&&e.push(E)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),d=tr(this,t,hs,c,_,m);d&&e.push(d)}}else{const p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=l){const d=tr(this,t,hs,c,_,_+1);d&&e.push(d)}if(this.isLineLoop){const _=tr(this,t,hs,c,g-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function tr(s,t,e,n,i,r){const a=s.geometry.attributes.position;if(yr.fromBufferAttribute(a,i),Sr.fromBufferAttribute(a,r),e.distanceSqToSegment(yr,Sr,ea,nc)>n)return;ea.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ea);if(!(c<t.near||c>t.far))return{distance:c,point:nc.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}class vl extends Xn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ic=new fe,io=new Mo,er=new Cs,nr=new D;class mu extends we{constructor(t=new Ce,e=new vl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere),er.applyMatrix4(i),er.radius+=r,t.ray.intersectsSphere(er)===!1)return;ic.copy(i).invert(),io.copy(t.ray).applyMatrix4(ic);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=f,_=p;g<_;g++){const m=l.getX(g);nr.fromBufferAttribute(u,m),sc(nr,m,c,i,t,e,this)}}else{const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,_=p;g<_;g++)nr.fromBufferAttribute(u,g),sc(nr,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function sc(s,t,e,n,i,r,a){const o=io.distanceSqToPoint(s);if(o<e){const c=new D;io.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Vt extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}}class gu extends ze{constructor(t,e,n,i,r,a,o,c,l){super(t,e,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xl extends ze{constructor(t,e,n,i,r,a,o,c,l,h=Vi){if(h!==Vi&&h!==$i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Vi&&(n=ui),n===void 0&&h===$i&&(n=Zi),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ln,this.minFilter=c!==void 0?c:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class _n{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const h=n[i],f=n[i+1]-h,p=(a-h)/f;return(i+p)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=e||(a.isVector2?new ct:new D);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,i=[],r=[],a=[],o=new D,c=new fe;for(let p=0;p<=t;p++){const g=p/t;i[p]=this.getTangentAt(g,new D)}r[0]=new D,a[0]=new D;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Jt(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(i[p],r[p])}if(e===!0){let p=Math.acos(Jt(r[0].dot(r[t]),-1,1));p/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],p*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Eo extends _n{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new ct){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*u+this.aX,l=f*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class _u extends Eo{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function wo(){let s=0,t=0,e=0,n=0;function i(r,a,o,c){s=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let f=(a-r)/l-(o-r)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,p*=h,i(a,o,f,p)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const ir=new D,na=new wo,ia=new wo,sa=new wo;class Ml extends _n{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new D){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(ir.subVectors(i[0],i[1]).add(i[0]),l=ir);const u=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(ir.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=ir),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),na.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,_,m),ia.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,_,m),sa.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(na.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),ia.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),sa.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(na.calc(c),ia.calc(c),sa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new D().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function rc(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,c=s*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*s+e}function vu(s,t){const e=1-s;return e*e*t}function xu(s,t){return 2*(1-s)*s*t}function Mu(s,t){return s*s*t}function gs(s,t,e,n){return vu(s,t)+xu(s,e)+Mu(s,n)}function yu(s,t){const e=1-s;return e*e*e*t}function Su(s,t){const e=1-s;return 3*e*e*s*t}function Eu(s,t){return 3*(1-s)*s*s*t}function wu(s,t){return s*s*s*t}function _s(s,t,e,n,i){return yu(s,t)+Su(s,e)+Eu(s,n)+wu(s,i)}class yl extends _n{constructor(t=new ct,e=new ct,n=new ct,i=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ct){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(_s(t,i.x,r.x,a.x,o.x),_s(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Tu extends _n{constructor(t=new D,e=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new D){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(_s(t,i.x,r.x,a.x,o.x),_s(t,i.y,r.y,a.y,o.y),_s(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Sl extends _n{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bu extends _n{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class El extends _n{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(gs(t,i.x,r.x,a.x),gs(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wl extends _n{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(gs(t,i.x,r.x,a.x),gs(t,i.y,r.y,a.y),gs(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tl extends _n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(rc(o,c.x,l.x,h.x,u.x),rc(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ct().fromArray(i))}return this}}var Er=Object.freeze({__proto__:null,ArcCurve:_u,CatmullRomCurve3:Ml,CubicBezierCurve:yl,CubicBezierCurve3:Tu,EllipseCurve:Eo,LineCurve:Sl,LineCurve3:bu,QuadraticBezierCurve:El,QuadraticBezierCurve3:wl,SplineCurve:Tl});class Au extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Er[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Er[i.type]().fromJSON(i))}return this}}class so extends Au{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Sl(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new El(this.currentPoint.clone(),new ct(t,e),new ct(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new yl(this.currentPoint.clone(),new ct(t,e),new ct(n,i),new ct(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Tl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,a,o,c),this}absellipse(t,e,n,i,r,a,o,c){const l=new Eo(t,e,n,i,r,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class To extends Ce{constructor(t=[new ct(0,-.5),new ct(.5,0),new ct(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Jt(i,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/e,u=new D,f=new ct,p=new D,g=new D,_=new D;let m=0,d=0;for(let C=0;C<=t.length-1;C++)switch(C){case 0:m=t[C+1].x-t[C].x,d=t[C+1].y-t[C].y,p.x=d*1,p.y=-m,p.z=d*0,_.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[C+1].x-t[C].x,d=t[C+1].y-t[C].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),c.push(p.x,p.y,p.z),_.copy(g)}for(let C=0;C<=e;C++){const E=n+C*h*i,M=Math.sin(E),A=Math.cos(E);for(let P=0;P<=t.length-1;P++){u.x=t[P].x*M,u.y=t[P].y,u.z=t[P].x*A,a.push(u.x,u.y,u.z),f.x=C/e,f.y=P/(t.length-1),o.push(f.x,f.y);const L=c[3*P+0]*M,U=c[3*P+1],w=c[3*P+0]*A;l.push(L,U,w)}}for(let C=0;C<e;C++)for(let E=0;E<t.length-1;E++){const M=E+C*t.length,A=M,P=M+t.length,L=M+t.length+1,U=M+1;r.push(A,P,U),r.push(L,U,P)}this.setIndex(r),this.setAttribute("position",new de(a,3)),this.setAttribute("uv",new de(o,2)),this.setAttribute("normal",new de(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new To(t.points,t.segments,t.phiStart,t.phiLength)}}class bo extends To{constructor(t=1,e=1,n=4,i=8){const r=new so;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new bo(t.radius,t.length,t.capSegments,t.radialSegments)}}class Tr extends Ce{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new D,h=new ct;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const p=n+u/e*i;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new de(a,3)),this.setAttribute("normal",new de(o,3)),this.setAttribute("uv",new de(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ee extends Ce{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],p=[];let g=0;const _=[],m=n/2;let d=0;C(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new de(u,3)),this.setAttribute("normal",new de(f,3)),this.setAttribute("uv",new de(p,2));function C(){const M=new D,A=new D;let P=0;const L=(e-t)/n;for(let U=0;U<=r;U++){const w=[],x=U/r,I=x*(e-t)+t;for(let V=0;V<=i;V++){const H=V/i,X=H*c+o,$=Math.sin(X),N=Math.cos(X);A.x=I*$,A.y=-x*n+m,A.z=I*N,u.push(A.x,A.y,A.z),M.set($,L,N).normalize(),f.push(M.x,M.y,M.z),p.push(H,1-x),w.push(g++)}_.push(w)}for(let U=0;U<i;U++)for(let w=0;w<r;w++){const x=_[w][U],I=_[w+1][U],V=_[w+1][U+1],H=_[w][U+1];(t>0||w!==0)&&(h.push(x,I,H),P+=3),(e>0||w!==r-1)&&(h.push(I,V,H),P+=3)}l.addGroup(d,P,0),d+=P}function E(M){const A=g,P=new ct,L=new D;let U=0;const w=M===!0?t:e,x=M===!0?1:-1;for(let V=1;V<=i;V++)u.push(0,m*x,0),f.push(0,x,0),p.push(.5,.5),g++;const I=g;for(let V=0;V<=i;V++){const X=V/i*c+o,$=Math.cos(X),N=Math.sin(X);L.x=w*N,L.y=m*x,L.z=w*$,u.push(L.x,L.y,L.z),f.push(0,x,0),P.x=$*.5+.5,P.y=N*.5*x+.5,p.push(P.x,P.y),g++}for(let V=0;V<i;V++){const H=A+V,X=I+V;M===!0?h.push(X,X+1,H):h.push(X+1,X,H),U+=3}l.addGroup(d,U,M===!0?1:2),d+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ee(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fe extends ee{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Fe(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class bl extends so{constructor(t){super(t),this.uuid=mn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new so().fromJSON(i))}return this}}const Cu={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Al(s,0,i,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,f,p;if(n&&(r=Du(s,t,r,e)),s.length>80*e){o=l=s[0],c=h=s[1];for(let g=e;g<i;g+=e)u=s[g],f=s[g+1],u<o&&(o=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);p=Math.max(l-o,h-c),p=p!==0?32767/p:0}return Ss(r,a,e,o,c,p,0),a}};function Al(s,t,e,n,i){let r,a;if(i===Wu(s,t,e,n)>0)for(r=t;r<e;r+=n)a=ac(r,s[r],s[r+1],a);else for(r=e-n;r>=t;r-=n)a=ac(r,s[r],s[r+1],a);return a&&br(a,a.next)&&(ws(a),a=a.next),a}function fi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(br(e,e.next)||ve(e.prev,e,e.next)===0)){if(ws(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ss(s,t,e,n,i,r,a){if(!s)return;!a&&r&&Bu(s,n,i,r);let o=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?Pu(s,n,i,r):Ru(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),ws(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=Lu(fi(s),t,e),Ss(s,t,e,n,i,r,2)):a===2&&Iu(s,t,e,n,i,r):Ss(fi(s),t,e,n,i,r,1);break}}}function Ru(s){const t=s.prev,e=s,n=s.next;if(ve(t,e,n)>=0)return!1;const i=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,f=i>r?i>a?i:a:r>a?r:a,p=o>c?o>l?o:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=p&&zi(i,o,r,c,a,l,g.x,g.y)&&ve(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Pu(s,t,e,n){const i=s.prev,r=s,a=s.next;if(ve(i,r,a)>=0)return!1;const o=i.x,c=r.x,l=a.x,h=i.y,u=r.y,f=a.y,p=o<c?o<l?o:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,_=o>c?o>l?o:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,d=ro(p,g,t,e,n),C=ro(_,m,t,e,n);let E=s.prevZ,M=s.nextZ;for(;E&&E.z>=d&&M&&M.z<=C;){if(E.x>=p&&E.x<=_&&E.y>=g&&E.y<=m&&E!==i&&E!==a&&zi(o,h,c,u,l,f,E.x,E.y)&&ve(E.prev,E,E.next)>=0||(E=E.prevZ,M.x>=p&&M.x<=_&&M.y>=g&&M.y<=m&&M!==i&&M!==a&&zi(o,h,c,u,l,f,M.x,M.y)&&ve(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;E&&E.z>=d;){if(E.x>=p&&E.x<=_&&E.y>=g&&E.y<=m&&E!==i&&E!==a&&zi(o,h,c,u,l,f,E.x,E.y)&&ve(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;M&&M.z<=C;){if(M.x>=p&&M.x<=_&&M.y>=g&&M.y<=m&&M!==i&&M!==a&&zi(o,h,c,u,l,f,M.x,M.y)&&ve(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Lu(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!br(i,r)&&Cl(i,n,n.next,r)&&Es(i,r)&&Es(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),ws(n),ws(n.next),n=s=r),n=n.next}while(n!==s);return fi(n)}function Iu(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Hu(a,o)){let c=Rl(a,o);a=fi(a,a.next),c=fi(c,c.next),Ss(a,t,e,n,i,r,0),Ss(c,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Du(s,t,e,n){const i=[];let r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:s.length,l=Al(s,o,c,n,!1),l===l.next&&(l.steiner=!0),i.push(ku(l));for(i.sort(Uu),r=0;r<i.length;r++)e=Nu(i[r],e);return e}function Uu(s,t){return s.x-t.x}function Nu(s,t){const e=Fu(s,t);if(!e)return t;const n=Rl(e,s);return fi(n,n.next),fi(e,e.next)}function Fu(s,t){let e=t,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===r))return i}e=e.next}while(e!==t);if(!i)return null;const o=i,c=i.x,l=i.y;let h=1/0,u;e=i;do r>=e.x&&e.x>=c&&r!==e.x&&zi(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Es(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&Ou(i,e)))&&(i=e,h=u)),e=e.next;while(e!==o);return i}function Ou(s,t){return ve(s.prev,s,t.prev)<0&&ve(t.next,s,s.next)<0}function Bu(s,t,e,n){let i=s;do i.z===0&&(i.z=ro(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,zu(i)}function zu(s){let t,e,n,i,r,a,o,c,l=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,l*=2}while(a>1);return s}function ro(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function ku(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function zi(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function Hu(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Gu(s,t)&&(Es(s,t)&&Es(t,s)&&Vu(s,t)&&(ve(s.prev,s,t.prev)||ve(s,t.prev,t))||br(s,t)&&ve(s.prev,s,s.next)>0&&ve(t.prev,t,t.next)>0)}function ve(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function br(s,t){return s.x===t.x&&s.y===t.y}function Cl(s,t,e,n){const i=rr(ve(s,t,e)),r=rr(ve(s,t,n)),a=rr(ve(e,n,s)),o=rr(ve(e,n,t));return!!(i!==r&&a!==o||i===0&&sr(s,e,t)||r===0&&sr(s,n,t)||a===0&&sr(e,s,n)||o===0&&sr(e,t,n))}function sr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function rr(s){return s>0?1:s<0?-1:0}function Gu(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Cl(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Es(s,t){return ve(s.prev,s,s.next)<0?ve(s,t,s.next)>=0&&ve(s,s.prev,t)>=0:ve(s,t,s.prev)<0||ve(s,s.next,t)<0}function Vu(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Rl(s,t){const e=new ao(s.i,s.x,s.y),n=new ao(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ac(s,t,e,n){const i=new ao(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ws(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function ao(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Wu(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class vs{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return vs.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];oc(t),cc(n,t);let a=t.length;e.forEach(oc);for(let c=0;c<e.length;c++)i.push(a),a+=e[c].length,cc(n,e[c]);const o=Cu.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function oc(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function cc(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Ao extends Ce{constructor(t=new bl([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new de(i,3)),this.setAttribute("uv",new de(r,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,C=e.UVGenerator!==void 0?e.UVGenerator:Xu;let E,M=!1,A,P,L,U;d&&(E=d.getSpacedPoints(h),M=!0,f=!1,A=d.computeFrenetFrames(h,!1),P=new D,L=new D,U=new D),f||(m=0,p=0,g=0,_=0);const w=o.extractPoints(l);let x=w.shape;const I=w.holes;if(!vs.isClockWise(x)){x=x.reverse();for(let j=0,at=I.length;j<at;j++){const b=I[j];vs.isClockWise(b)&&(I[j]=b.reverse())}}const H=vs.triangulateShape(x,I),X=x;for(let j=0,at=I.length;j<at;j++){const b=I[j];x=x.concat(b)}function $(j,at,b){return at||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(at,b)}const N=x.length,z=H.length;function G(j,at,b){let It,et,Tt;const ot=j.x-at.x,rt=j.y-at.y,Mt=b.x-j.x,T=b.y-j.y,v=ot*ot+rt*rt,k=ot*T-rt*Mt;if(Math.abs(k)>Number.EPSILON){const J=Math.sqrt(v),Q=Math.sqrt(Mt*Mt+T*T),Z=at.x-rt/J,wt=at.y+ot/J,pt=b.x-T/Q,At=b.y+Mt/Q,jt=((pt-Z)*T-(At-wt)*Mt)/(ot*T-rt*Mt);It=Z+ot*jt-j.x,et=wt+rt*jt-j.y;const it=It*It+et*et;if(it<=2)return new ct(It,et);Tt=Math.sqrt(it/2)}else{let J=!1;ot>Number.EPSILON?Mt>Number.EPSILON&&(J=!0):ot<-Number.EPSILON?Mt<-Number.EPSILON&&(J=!0):Math.sign(rt)===Math.sign(T)&&(J=!0),J?(It=-rt,et=ot,Tt=Math.sqrt(v)):(It=ot,et=rt,Tt=Math.sqrt(v/2))}return new ct(It/Tt,et/Tt)}const st=[];for(let j=0,at=X.length,b=at-1,It=j+1;j<at;j++,b++,It++)b===at&&(b=0),It===at&&(It=0),st[j]=G(X[j],X[b],X[It]);const ut=[];let Et,Bt=st.concat();for(let j=0,at=I.length;j<at;j++){const b=I[j];Et=[];for(let It=0,et=b.length,Tt=et-1,ot=It+1;It<et;It++,Tt++,ot++)Tt===et&&(Tt=0),ot===et&&(ot=0),Et[It]=G(b[It],b[Tt],b[ot]);ut.push(Et),Bt=Bt.concat(Et)}for(let j=0;j<m;j++){const at=j/m,b=p*Math.cos(at*Math.PI/2),It=g*Math.sin(at*Math.PI/2)+_;for(let et=0,Tt=X.length;et<Tt;et++){const ot=$(X[et],st[et],It);lt(ot.x,ot.y,-b)}for(let et=0,Tt=I.length;et<Tt;et++){const ot=I[et];Et=ut[et];for(let rt=0,Mt=ot.length;rt<Mt;rt++){const T=$(ot[rt],Et[rt],It);lt(T.x,T.y,-b)}}}const Gt=g+_;for(let j=0;j<N;j++){const at=f?$(x[j],Bt[j],Gt):x[j];M?(L.copy(A.normals[0]).multiplyScalar(at.x),P.copy(A.binormals[0]).multiplyScalar(at.y),U.copy(E[0]).add(L).add(P),lt(U.x,U.y,U.z)):lt(at.x,at.y,0)}for(let j=1;j<=h;j++)for(let at=0;at<N;at++){const b=f?$(x[at],Bt[at],Gt):x[at];M?(L.copy(A.normals[j]).multiplyScalar(b.x),P.copy(A.binormals[j]).multiplyScalar(b.y),U.copy(E[j]).add(L).add(P),lt(U.x,U.y,U.z)):lt(b.x,b.y,u/h*j)}for(let j=m-1;j>=0;j--){const at=j/m,b=p*Math.cos(at*Math.PI/2),It=g*Math.sin(at*Math.PI/2)+_;for(let et=0,Tt=X.length;et<Tt;et++){const ot=$(X[et],st[et],It);lt(ot.x,ot.y,u+b)}for(let et=0,Tt=I.length;et<Tt;et++){const ot=I[et];Et=ut[et];for(let rt=0,Mt=ot.length;rt<Mt;rt++){const T=$(ot[rt],Et[rt],It);M?lt(T.x,T.y+E[h-1].y,E[h-1].x+b):lt(T.x,T.y,u+b)}}}Y(),nt();function Y(){const j=i.length/3;if(f){let at=0,b=N*at;for(let It=0;It<z;It++){const et=H[It];Ut(et[2]+b,et[1]+b,et[0]+b)}at=h+m*2,b=N*at;for(let It=0;It<z;It++){const et=H[It];Ut(et[0]+b,et[1]+b,et[2]+b)}}else{for(let at=0;at<z;at++){const b=H[at];Ut(b[2],b[1],b[0])}for(let at=0;at<z;at++){const b=H[at];Ut(b[0]+N*h,b[1]+N*h,b[2]+N*h)}}n.addGroup(j,i.length/3-j,0)}function nt(){const j=i.length/3;let at=0;Ct(X,at),at+=X.length;for(let b=0,It=I.length;b<It;b++){const et=I[b];Ct(et,at),at+=et.length}n.addGroup(j,i.length/3-j,1)}function Ct(j,at){let b=j.length;for(;--b>=0;){const It=b;let et=b-1;et<0&&(et=j.length-1);for(let Tt=0,ot=h+m*2;Tt<ot;Tt++){const rt=N*Tt,Mt=N*(Tt+1),T=at+It+rt,v=at+et+rt,k=at+et+Mt,J=at+It+Mt;zt(T,v,k,J)}}}function lt(j,at,b){c.push(j),c.push(at),c.push(b)}function Ut(j,at,b){kt(j),kt(at),kt(b);const It=i.length/3,et=C.generateTopUV(n,i,It-3,It-2,It-1);qt(et[0]),qt(et[1]),qt(et[2])}function zt(j,at,b,It){kt(j),kt(at),kt(It),kt(at),kt(b),kt(It);const et=i.length/3,Tt=C.generateSideWallUV(n,i,et-6,et-3,et-2,et-1);qt(Tt[0]),qt(Tt[1]),qt(Tt[3]),qt(Tt[1]),qt(Tt[2]),qt(Tt[3])}function kt(j){i.push(c[j*3+0]),i.push(c[j*3+1]),i.push(c[j*3+2])}function qt(j){r.push(j.x),r.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return qu(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Er[i.type]().fromJSON(i)),new Ao(n,t.options)}}const Xu={generateTopUV:function(s,t,e,n,i){const r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new ct(r,a),new ct(o,c),new ct(l,h)]},generateSideWallUV:function(s,t,e,n,i,r){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],p=t[i*3+1],g=t[i*3+2],_=t[r*3],m=t[r*3+1],d=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new ct(a,1-c),new ct(l,1-u),new ct(f,1-g),new ct(_,1-d)]:[new ct(o,1-c),new ct(h,1-u),new ct(p,1-g),new ct(m,1-d)]}};function qu(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Oe extends Ce{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=t/o,f=e/c,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){const C=d*f-a;for(let E=0;E<l;E++){const M=E*u-r;g.push(M,-C,0),_.push(0,0,1),m.push(E/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let C=0;C<o;C++){const E=C+l*d,M=C+l*(d+1),A=C+1+l*(d+1),P=C+1+l*d;p.push(E,M,P),p.push(M,A,P)}this.setIndex(p),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(_,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oe(t.width,t.height,t.widthSegments,t.heightSegments)}}class ie extends Ce{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new D,f=new D,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){const C=[],E=d/n;let M=0;d===0&&a===0?M=.5/e:d===n&&c===Math.PI&&(M=-.5/e);for(let A=0;A<=e;A++){const P=A/e;u.x=-t*Math.cos(i+P*r)*Math.sin(a+E*o),u.y=t*Math.cos(a+E*o),u.z=t*Math.sin(i+P*r)*Math.sin(a+E*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(P+M,1-E),C.push(l++)}h.push(C)}for(let d=0;d<n;d++)for(let C=0;C<e;C++){const E=h[d][C+1],M=h[d][C],A=h[d+1][C],P=h[d+1][C+1];(d!==0||a>0)&&p.push(E,M,P),(d!==n-1||c<Math.PI)&&p.push(M,A,P)}this.setIndex(p),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(_,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ie(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class cn extends Ce{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],h=new D,u=new D,f=new D;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const _=g/i*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const _=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,d=(i+1)*(p-1)+g,C=(i+1)*p+g;a.push(_,m,C),a.push(m,d,C)}this.setIndex(a),this.setAttribute("position",new de(o,3)),this.setAttribute("normal",new de(c,3)),this.setAttribute("uv",new de(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Co extends Ce{constructor(t=new wl(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new D,c=new D,l=new ct;let h=new D;const u=[],f=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new de(u,3)),this.setAttribute("normal",new de(f,3)),this.setAttribute("uv",new de(p,2));function _(){for(let E=0;E<e;E++)m(E);m(r===!1?e:0),C(),d()}function m(E){h=t.getPointAt(E/e,h);const M=a.normals[E],A=a.binormals[E];for(let P=0;P<=i;P++){const L=P/i*Math.PI*2,U=Math.sin(L),w=-Math.cos(L);c.x=w*M.x+U*A.x,c.y=w*M.y+U*A.y,c.z=w*M.z+U*A.z,c.normalize(),f.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function d(){for(let E=1;E<=e;E++)for(let M=1;M<=i;M++){const A=(i+1)*(E-1)+(M-1),P=(i+1)*E+(M-1),L=(i+1)*E+M,U=(i+1)*(E-1)+M;g.push(A,P,U),g.push(P,L,U)}}function C(){for(let E=0;E<=e;E++)for(let M=0;M<=i;M++)l.x=E/e,l.y=M/i,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Co(new Er[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class ht extends Xn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Yu extends ht{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Zu extends Xn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class $u extends Xn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ar extends we{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Ju extends Ar{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ra=new fe,lc=new D,hc=new D;class Pl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new So,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;lc.setFromMatrixPosition(t.matrixWorld),e.position.copy(lc),hc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hc),e.updateMatrixWorld(),ra.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ra),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ra)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ju extends Pl{constructor(){super(new Ie(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=ji*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Ku extends Ar{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new ju}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const uc=new fe,us=new D,aa=new D;class Qu extends Pl{constructor(){super(new Ie(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),us.setFromMatrixPosition(t.matrixWorld),n.position.copy(us),aa.copy(n.position),aa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(aa),n.updateMatrixWorld(),i.makeTranslation(-us.x,-us.y,-us.z),uc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uc)}}class rn extends Ar{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Qu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class td extends dl{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ed extends Ar{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class nd extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class id{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=dc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=dc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function dc(){return performance.now()}function fc(s,t,e,n){const i=sd(n);switch(e){case $c:return s*t;case jc:return s*t;case Kc:return s*t*2;case Qc:return s*t/i.components*i.byteLength;case go:return s*t/i.components*i.byteLength;case tl:return s*t*2/i.components*i.byteLength;case _o:return s*t*2/i.components*i.byteLength;case Jc:return s*t*3/i.components*i.byteLength;case on:return s*t*4/i.components*i.byteLength;case vo:return s*t*4/i.components*i.byteLength;case hr:case ur:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case dr:case fr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case La:case Da:return Math.max(s,16)*Math.max(t,8)/4;case Pa:case Ia:return Math.max(s,8)*Math.max(t,8)/2;case Ua:case Na:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Fa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Oa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ba:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case za:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ka:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ga:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Va:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Wa:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Xa:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case qa:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ya:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Za:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case $a:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ja:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case pr:case ja:case Ka:return Math.ceil(s/4)*Math.ceil(t/4)*16;case el:case Qa:return Math.ceil(s/4)*Math.ceil(t/4)*8;case to:case eo:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sd(s){switch(s){case Rn:case qc:return{byteLength:1,components:1};case ys:case Yc:case Ts:return{byteLength:2,components:1};case po:case mo:return{byteLength:2,components:4};case ui:case fo:case Tn:return{byteLength:4,components:1};case Zc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uo);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ll(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function rd(s){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=s.SHORT;else if(l instanceof Uint32Array)p=s.UNSIGNED_INT;else if(l instanceof Int32Array)p=s.INT;else if(l instanceof Int8Array)p=s.BYTE;else if(l instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var ad=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,od=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ld=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ud=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,md=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_d=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Md=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Td=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Rd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Pd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ld=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Id=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ud=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Od=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$d=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Kd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Qd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ef=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,af=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,of=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,df=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ff=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_f=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ef=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Tf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Pf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,If=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Df=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Uf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ff=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Of=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Vf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$f=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ep=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ap=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,op=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,up=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_p=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ep=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ap=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ip=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Up=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Np=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Op=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$t={alphahash_fragment:ad,alphahash_pars_fragment:od,alphamap_fragment:cd,alphamap_pars_fragment:ld,alphatest_fragment:hd,alphatest_pars_fragment:ud,aomap_fragment:dd,aomap_pars_fragment:fd,batching_pars_vertex:pd,batching_vertex:md,begin_vertex:gd,beginnormal_vertex:_d,bsdfs:vd,iridescence_fragment:xd,bumpmap_pars_fragment:Md,clipping_planes_fragment:yd,clipping_planes_pars_fragment:Sd,clipping_planes_pars_vertex:Ed,clipping_planes_vertex:wd,color_fragment:Td,color_pars_fragment:bd,color_pars_vertex:Ad,color_vertex:Cd,common:Rd,cube_uv_reflection_fragment:Pd,defaultnormal_vertex:Ld,displacementmap_pars_vertex:Id,displacementmap_vertex:Dd,emissivemap_fragment:Ud,emissivemap_pars_fragment:Nd,colorspace_fragment:Fd,colorspace_pars_fragment:Od,envmap_fragment:Bd,envmap_common_pars_fragment:zd,envmap_pars_fragment:kd,envmap_pars_vertex:Hd,envmap_physical_pars_fragment:Kd,envmap_vertex:Gd,fog_vertex:Vd,fog_pars_vertex:Wd,fog_fragment:Xd,fog_pars_fragment:qd,gradientmap_pars_fragment:Yd,lightmap_pars_fragment:Zd,lights_lambert_fragment:$d,lights_lambert_pars_fragment:Jd,lights_pars_begin:jd,lights_toon_fragment:Qd,lights_toon_pars_fragment:tf,lights_phong_fragment:ef,lights_phong_pars_fragment:nf,lights_physical_fragment:sf,lights_physical_pars_fragment:rf,lights_fragment_begin:af,lights_fragment_maps:of,lights_fragment_end:cf,logdepthbuf_fragment:lf,logdepthbuf_pars_fragment:hf,logdepthbuf_pars_vertex:uf,logdepthbuf_vertex:df,map_fragment:ff,map_pars_fragment:pf,map_particle_fragment:mf,map_particle_pars_fragment:gf,metalnessmap_fragment:_f,metalnessmap_pars_fragment:vf,morphinstance_vertex:xf,morphcolor_vertex:Mf,morphnormal_vertex:yf,morphtarget_pars_vertex:Sf,morphtarget_vertex:Ef,normal_fragment_begin:wf,normal_fragment_maps:Tf,normal_pars_fragment:bf,normal_pars_vertex:Af,normal_vertex:Cf,normalmap_pars_fragment:Rf,clearcoat_normal_fragment_begin:Pf,clearcoat_normal_fragment_maps:Lf,clearcoat_pars_fragment:If,iridescence_pars_fragment:Df,opaque_fragment:Uf,packing:Nf,premultiplied_alpha_fragment:Ff,project_vertex:Of,dithering_fragment:Bf,dithering_pars_fragment:zf,roughnessmap_fragment:kf,roughnessmap_pars_fragment:Hf,shadowmap_pars_fragment:Gf,shadowmap_pars_vertex:Vf,shadowmap_vertex:Wf,shadowmask_pars_fragment:Xf,skinbase_vertex:qf,skinning_pars_vertex:Yf,skinning_vertex:Zf,skinnormal_vertex:$f,specularmap_fragment:Jf,specularmap_pars_fragment:jf,tonemapping_fragment:Kf,tonemapping_pars_fragment:Qf,transmission_fragment:tp,transmission_pars_fragment:ep,uv_pars_fragment:np,uv_pars_vertex:ip,uv_vertex:sp,worldpos_vertex:rp,background_vert:ap,background_frag:op,backgroundCube_vert:cp,backgroundCube_frag:lp,cube_vert:hp,cube_frag:up,depth_vert:dp,depth_frag:fp,distanceRGBA_vert:pp,distanceRGBA_frag:mp,equirect_vert:gp,equirect_frag:_p,linedashed_vert:vp,linedashed_frag:xp,meshbasic_vert:Mp,meshbasic_frag:yp,meshlambert_vert:Sp,meshlambert_frag:Ep,meshmatcap_vert:wp,meshmatcap_frag:Tp,meshnormal_vert:bp,meshnormal_frag:Ap,meshphong_vert:Cp,meshphong_frag:Rp,meshphysical_vert:Pp,meshphysical_frag:Lp,meshtoon_vert:Ip,meshtoon_frag:Dp,points_vert:Up,points_frag:Np,shadow_vert:Fp,shadow_frag:Op,sprite_vert:Bp,sprite_frag:zp},mt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},fn={basic:{uniforms:Ne([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Ne([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Ne([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Ne([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Ne([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Ne([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Ne([mt.points,mt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Ne([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Ne([mt.common,mt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Ne([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Ne([mt.sprite,mt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Ne([mt.common,mt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Ne([mt.lights,mt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};fn.physical={uniforms:Ne([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const ar={r:0,b:0,g:0},ei=new gn,kp=new fe;function Hp(s,t,e,n,i,r,a){const o=new Ht(0);let c=r===!0?0:1,l,h,u=null,f=0,p=null;function g(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?e:t).get(M)),M}function _(E){let M=!1;const A=g(E);A===null?d(o,c):A&&A.isColor&&(d(A,1),M=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(E,M){const A=g(M);A&&(A.isCubeTexture||A.mapping===wr)?(h===void 0&&(h=new _t(new Te(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:Ki(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,L,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ei.copy(M.backgroundRotation),ei.x*=-1,ei.y*=-1,ei.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(kp.makeRotationFromEuler(ei)),h.material.toneMapped=se.getTransfer(A.colorSpace)!==he,(u!==A||f!==A.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=A,f=A.version,p=s.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new _t(new Oe(2,2),new Wn({name:"BackgroundMaterial",uniforms:Ki(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=se.getTransfer(A.colorSpace)!==he,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||f!==A.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,u=A,f=A.version,p=s.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function d(E,M){E.getRGB(ar,ul(s)),n.buffers.color.setClear(ar.r,ar.g,ar.b,M,a)}function C(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(E,M=1){o.set(E),c=M,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,d(o,c)},render:_,addToRenderList:m,dispose:C}}function Gp(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,a=!1;function o(x,I,V,H,X){let $=!1;const N=u(H,V,I);r!==N&&(r=N,l(r.object)),$=p(x,H,V,X),$&&g(x,H,V,X),X!==null&&t.update(X,s.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,M(x,I,V,H),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return s.createVertexArray()}function l(x){return s.bindVertexArray(x)}function h(x){return s.deleteVertexArray(x)}function u(x,I,V){const H=V.wireframe===!0;let X=n[x.id];X===void 0&&(X={},n[x.id]=X);let $=X[I.id];$===void 0&&($={},X[I.id]=$);let N=$[H];return N===void 0&&(N=f(c()),$[H]=N),N}function f(x){const I=[],V=[],H=[];for(let X=0;X<e;X++)I[X]=0,V[X]=0,H[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:V,attributeDivisors:H,object:x,attributes:{},index:null}}function p(x,I,V,H){const X=r.attributes,$=I.attributes;let N=0;const z=V.getAttributes();for(const G in z)if(z[G].location>=0){const ut=X[G];let Et=$[G];if(Et===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(Et=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(Et=x.instanceColor)),ut===void 0||ut.attribute!==Et||Et&&ut.data!==Et.data)return!0;N++}return r.attributesNum!==N||r.index!==H}function g(x,I,V,H){const X={},$=I.attributes;let N=0;const z=V.getAttributes();for(const G in z)if(z[G].location>=0){let ut=$[G];ut===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(ut=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(ut=x.instanceColor));const Et={};Et.attribute=ut,ut&&ut.data&&(Et.data=ut.data),X[G]=Et,N++}r.attributes=X,r.attributesNum=N,r.index=H}function _(){const x=r.newAttributes;for(let I=0,V=x.length;I<V;I++)x[I]=0}function m(x){d(x,0)}function d(x,I){const V=r.newAttributes,H=r.enabledAttributes,X=r.attributeDivisors;V[x]=1,H[x]===0&&(s.enableVertexAttribArray(x),H[x]=1),X[x]!==I&&(s.vertexAttribDivisor(x,I),X[x]=I)}function C(){const x=r.newAttributes,I=r.enabledAttributes;for(let V=0,H=I.length;V<H;V++)I[V]!==x[V]&&(s.disableVertexAttribArray(V),I[V]=0)}function E(x,I,V,H,X,$,N){N===!0?s.vertexAttribIPointer(x,I,V,X,$):s.vertexAttribPointer(x,I,V,H,X,$)}function M(x,I,V,H){_();const X=H.attributes,$=V.getAttributes(),N=I.defaultAttributeValues;for(const z in $){const G=$[z];if(G.location>=0){let st=X[z];if(st===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(st=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(st=x.instanceColor)),st!==void 0){const ut=st.normalized,Et=st.itemSize,Bt=t.get(st);if(Bt===void 0)continue;const Gt=Bt.buffer,Y=Bt.type,nt=Bt.bytesPerElement,Ct=Y===s.INT||Y===s.UNSIGNED_INT||st.gpuType===fo;if(st.isInterleavedBufferAttribute){const lt=st.data,Ut=lt.stride,zt=st.offset;if(lt.isInstancedInterleavedBuffer){for(let kt=0;kt<G.locationSize;kt++)d(G.location+kt,lt.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let kt=0;kt<G.locationSize;kt++)m(G.location+kt);s.bindBuffer(s.ARRAY_BUFFER,Gt);for(let kt=0;kt<G.locationSize;kt++)E(G.location+kt,Et/G.locationSize,Y,ut,Ut*nt,(zt+Et/G.locationSize*kt)*nt,Ct)}else{if(st.isInstancedBufferAttribute){for(let lt=0;lt<G.locationSize;lt++)d(G.location+lt,st.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let lt=0;lt<G.locationSize;lt++)m(G.location+lt);s.bindBuffer(s.ARRAY_BUFFER,Gt);for(let lt=0;lt<G.locationSize;lt++)E(G.location+lt,Et/G.locationSize,Y,ut,Et*nt,Et/G.locationSize*lt*nt,Ct)}}else if(N!==void 0){const ut=N[z];if(ut!==void 0)switch(ut.length){case 2:s.vertexAttrib2fv(G.location,ut);break;case 3:s.vertexAttrib3fv(G.location,ut);break;case 4:s.vertexAttrib4fv(G.location,ut);break;default:s.vertexAttrib1fv(G.location,ut)}}}}C()}function A(){U();for(const x in n){const I=n[x];for(const V in I){const H=I[V];for(const X in H)h(H[X].object),delete H[X];delete I[V]}delete n[x]}}function P(x){if(n[x.id]===void 0)return;const I=n[x.id];for(const V in I){const H=I[V];for(const X in H)h(H[X].object),delete H[X];delete I[V]}delete n[x.id]}function L(x){for(const I in n){const V=n[I];if(V[x.id]===void 0)continue;const H=V[x.id];for(const X in H)h(H[X].object),delete H[X];delete V[x.id]}}function U(){w(),a=!0,r!==i&&(r=i,l(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:U,resetDefaultState:w,dispose:A,releaseStatesOfGeometry:P,releaseStatesOfProgram:L,initAttributes:_,enableAttribute:m,disableUnusedAttributes:C}}function Vp(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function c(l,h,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Wp(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(L){return!(L!==on&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const U=L===Ts&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==Rn&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Tn&&!U)}function c(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),d=s.getParameter(s.MAX_VERTEX_ATTRIBS),C=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,P=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:C,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:A,maxSamples:P}}function Xp(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new si,o=new Zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const C=r?0:n,E=C*4;let M=d.clippingState||null;c.value=M,M=h(g,f,E,p);for(let A=0;A!==E;++A)M[A]=e[A];d.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=C}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const d=p+_*4,C=f.matrixWorldInverse;o.getNormalMatrix(C),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,M=p;E!==_;++E,M+=4)a.copy(u[E]).applyMatrix4(C,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function qp(s){let t=new WeakMap;function e(a,o){return o===Aa?a.mapping=qi:o===Ca&&(a.mapping=Yi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Aa||o===Ca)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new lu(c.height);return l.fromEquirectangularTexture(s,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const ki=4,pc=[.125,.215,.35,.446,.526,.582],ci=20,oa=new td,mc=new Ht;let ca=null,la=0,ha=0,ua=!1;const ri=(1+Math.sqrt(5))/2,Fi=1/ri,gc=[new D(-ri,Fi,0),new D(ri,Fi,0),new D(-Fi,0,ri),new D(Fi,0,ri),new D(0,ri,-Fi),new D(0,ri,Fi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class oo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ca=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ca,la,ha),this._renderer.xr.enabled=ua,t.scissorTest=!1,or(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qi||t.mapping===Yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ca=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Ts,format:on,colorSpace:Ji,depthBuffer:!1},i=_c(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_c(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yp(r)),this._blurMaterial=Zp(r,t,e)}return i}_compileMaterial(t){const e=new _t(this._lodPlanes[0],t);this._renderer.compile(e,oa)}_sceneToCubeUV(t,e,n,i){const o=new Ie(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(mc),h.toneMapping=Gn,h.autoClear=!1;const p=new Cn({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),g=new _t(new Te,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(mc),_=!0);for(let d=0;d<6;d++){const C=d%3;C===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):C===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));const E=this._cubeSize;or(i,C*E,d>2?E:0,E,E),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===qi||t.mapping===Yi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vc());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new _t(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;or(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,oa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=gc[(i-r-1)%gc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new _t(this._lodPlanes[i],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ci-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ci;m>ci&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ci}`);const d=[];let C=0;for(let L=0;L<ci;++L){const U=L/_,w=Math.exp(-U*U/2);d.push(w),L===0?C+=w:L<m&&(C+=2*w)}for(let L=0;L<d.length;L++)d[L]=d[L]/C;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-n;const M=this._sizeLods[i],A=3*M*(i>E-ki?i-E+ki:0),P=4*(this._cubeSize-M);or(e,A,P,3*M,2*M),c.setRenderTarget(e),c.render(u,oa)}}function Yp(s){const t=[],e=[],n=[];let i=s;const r=s-ki+1+pc.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-ki?c=pc[a-s+ki-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,d=1,C=new Float32Array(_*g*p),E=new Float32Array(m*g*p),M=new Float32Array(d*g*p);for(let P=0;P<p;P++){const L=P%3*2/3-1,U=P>2?0:-1,w=[L,U,0,L+2/3,U,0,L+2/3,U+1,0,L,U,0,L+2/3,U+1,0,L,U+1,0];C.set(w,_*g*P),E.set(f,m*g*P);const x=[P,P,P,P,P,P];M.set(x,d*g*P)}const A=new Ce;A.setAttribute("position",new Qe(C,_)),A.setAttribute("uv",new Qe(E,m)),A.setAttribute("faceIndex",new Qe(M,d)),t.push(A),i>ki&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function _c(s,t,e){const n=new di(s,t,e);return n.texture.mapping=wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function or(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Zp(s,t,e){const n=new Float32Array(ci),i=new D(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:ci,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function vc(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function xc(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Ro(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $p(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Aa||c===Ca,h=c===qi||c===Yi;if(l||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new oo(s)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return l&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new oo(s)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Jp(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Bi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function jp(s,t,e,n){const i={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const p in f)t.update(f[p],s.ARRAY_BUFFER)}function l(u){const f=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const C=p.array;_=p.version;for(let E=0,M=C.length;E<M;E+=3){const A=C[E+0],P=C[E+1],L=C[E+2];f.push(A,P,P,L,L,A)}}else if(g!==void 0){const C=g.array;_=g.version;for(let E=0,M=C.length/3-1;E<M;E+=3){const A=E+0,P=E+1,L=E+2;f.push(A,P,P,L,L,A)}}else return;const m=new(sl(f)?hl:ll)(f,1);m.version=_;const d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Kp(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,p){s.drawElements(n,p,r,f*a),e.update(p,n,1)}function l(f,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,f*a,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function u(f,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/a,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,g);let d=0;for(let C=0;C<g;C++)d+=p[C]*_[C];e.update(d,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Qp(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function tm(s,t,e){const n=new WeakMap,i=new ue;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let x=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var p=x;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],C=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let A=o.attributes.position.count*M,P=1;A>t.maxTextureSize&&(P=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const L=new Float32Array(A*P*4*u),U=new al(L,A,P,u);U.type=Tn,U.needsUpdate=!0;const w=M*4;for(let I=0;I<u;I++){const V=d[I],H=C[I],X=E[I],$=A*P*4*I;for(let N=0;N<V.count;N++){const z=N*w;g===!0&&(i.fromBufferAttribute(V,N),L[$+z+0]=i.x,L[$+z+1]=i.y,L[$+z+2]=i.z,L[$+z+3]=0),_===!0&&(i.fromBufferAttribute(H,N),L[$+z+4]=i.x,L[$+z+5]=i.y,L[$+z+6]=i.z,L[$+z+7]=0),m===!0&&(i.fromBufferAttribute(X,N),L[$+z+8]=i.x,L[$+z+9]=i.y,L[$+z+10]=i.z,L[$+z+11]=X.itemSize===4?i.w:1)}}f={count:u,texture:U,size:new ct(A,P)},n.set(o,f),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function em(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}const Il=new ze,Mc=new xl(1,1),Dl=new al,Ul=new Yh,Nl=new fl,yc=[],Sc=[],Ec=new Float32Array(16),wc=new Float32Array(9),Tc=new Float32Array(4);function ts(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=yc[i];if(r===void 0&&(r=new Float32Array(i),yc[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function be(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ae(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Cr(s,t){let e=Sc[t];e===void 0&&(e=new Int32Array(t),Sc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function nm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function im(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;s.uniform2fv(this.addr,t),Ae(e,t)}}function sm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;s.uniform3fv(this.addr,t),Ae(e,t)}}function rm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;s.uniform4fv(this.addr,t),Ae(e,t)}}function am(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(be(e,n))return;Tc.set(n),s.uniformMatrix2fv(this.addr,!1,Tc),Ae(e,n)}}function om(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(be(e,n))return;wc.set(n),s.uniformMatrix3fv(this.addr,!1,wc),Ae(e,n)}}function cm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(be(e,n))return;Ec.set(n),s.uniformMatrix4fv(this.addr,!1,Ec),Ae(e,n)}}function lm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function hm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;s.uniform2iv(this.addr,t),Ae(e,t)}}function um(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;s.uniform3iv(this.addr,t),Ae(e,t)}}function dm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;s.uniform4iv(this.addr,t),Ae(e,t)}}function fm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function pm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;s.uniform2uiv(this.addr,t),Ae(e,t)}}function mm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;s.uniform3uiv(this.addr,t),Ae(e,t)}}function gm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;s.uniform4uiv(this.addr,t),Ae(e,t)}}function _m(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Mc.compareFunction=il,r=Mc):r=Il,e.setTexture2D(t||r,i)}function vm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ul,i)}function xm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Nl,i)}function Mm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Dl,i)}function ym(s){switch(s){case 5126:return nm;case 35664:return im;case 35665:return sm;case 35666:return rm;case 35674:return am;case 35675:return om;case 35676:return cm;case 5124:case 35670:return lm;case 35667:case 35671:return hm;case 35668:case 35672:return um;case 35669:case 35673:return dm;case 5125:return fm;case 36294:return pm;case 36295:return mm;case 36296:return gm;case 35678:case 36198:case 36298:case 36306:case 35682:return _m;case 35679:case 36299:case 36307:return vm;case 35680:case 36300:case 36308:case 36293:return xm;case 36289:case 36303:case 36311:case 36292:return Mm}}function Sm(s,t){s.uniform1fv(this.addr,t)}function Em(s,t){const e=ts(t,this.size,2);s.uniform2fv(this.addr,e)}function wm(s,t){const e=ts(t,this.size,3);s.uniform3fv(this.addr,e)}function Tm(s,t){const e=ts(t,this.size,4);s.uniform4fv(this.addr,e)}function bm(s,t){const e=ts(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Am(s,t){const e=ts(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Cm(s,t){const e=ts(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Rm(s,t){s.uniform1iv(this.addr,t)}function Pm(s,t){s.uniform2iv(this.addr,t)}function Lm(s,t){s.uniform3iv(this.addr,t)}function Im(s,t){s.uniform4iv(this.addr,t)}function Dm(s,t){s.uniform1uiv(this.addr,t)}function Um(s,t){s.uniform2uiv(this.addr,t)}function Nm(s,t){s.uniform3uiv(this.addr,t)}function Fm(s,t){s.uniform4uiv(this.addr,t)}function Om(s,t,e){const n=this.cache,i=t.length,r=Cr(e,i);be(n,r)||(s.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Il,r[a])}function Bm(s,t,e){const n=this.cache,i=t.length,r=Cr(e,i);be(n,r)||(s.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Ul,r[a])}function zm(s,t,e){const n=this.cache,i=t.length,r=Cr(e,i);be(n,r)||(s.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Nl,r[a])}function km(s,t,e){const n=this.cache,i=t.length,r=Cr(e,i);be(n,r)||(s.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Dl,r[a])}function Hm(s){switch(s){case 5126:return Sm;case 35664:return Em;case 35665:return wm;case 35666:return Tm;case 35674:return bm;case 35675:return Am;case 35676:return Cm;case 5124:case 35670:return Rm;case 35667:case 35671:return Pm;case 35668:case 35672:return Lm;case 35669:case 35673:return Im;case 5125:return Dm;case 36294:return Um;case 36295:return Nm;case 36296:return Fm;case 35678:case 36198:case 36298:case 36306:case 35682:return Om;case 35679:case 36299:case 36307:return Bm;case 35680:case 36300:case 36308:case 36293:return zm;case 36289:case 36303:case 36311:case 36292:return km}}class Gm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ym(e.type)}}class Vm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Hm(e.type)}}class Wm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const da=/(\w+)(\])?(\[|\.)?/g;function bc(s,t){s.seq.push(t),s.map[t.id]=t}function Xm(s,t,e){const n=s.name,i=n.length;for(da.lastIndex=0;;){const r=da.exec(n),a=da.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){bc(e,l===void 0?new Gm(o,s,t):new Vm(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Wm(o),bc(e,u)),e=u}}}class mr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Xm(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Ac(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const qm=37297;let Ym=0;function Zm(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Cc=new Zt;function $m(s){se._getMatrix(Cc,se.workingColorSpace,s);const t=`mat3( ${Cc.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(s)){case _r:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Rc(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Zm(s.getShaderSource(t),a)}else return i}function Jm(s,t){const e=$m(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function jm(s,t){let e;switch(t){case rh:e="Linear";break;case ah:e="Reinhard";break;case oh:e="Cineon";break;case Wc:e="ACESFilmic";break;case lh:e="AgX";break;case hh:e="Neutral";break;case ch:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const cr=new D;function Km(){se.getLuminanceCoefficients(cr);const s=cr.x.toFixed(4),t=cr.y.toFixed(4),e=cr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fs).join(`
`)}function t0(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function e0(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function fs(s){return s!==""}function Pc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const n0=/^[ \t]*#include +<([\w\d./]+)>/gm;function co(s){return s.replace(n0,s0)}const i0=new Map;function s0(s,t){let e=$t[t];if(e===void 0){const n=i0.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return co(e)}const r0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ic(s){return s.replace(r0,a0)}function a0(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Dc(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function o0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Hc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Gc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===wn&&(t="SHADOWMAP_TYPE_VSM"),t}function c0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case qi:case Yi:t="ENVMAP_TYPE_CUBE";break;case wr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function l0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Yi:t="ENVMAP_MODE_REFRACTION";break}return t}function h0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Vc:t="ENVMAP_BLENDING_MULTIPLY";break;case ih:t="ENVMAP_BLENDING_MIX";break;case sh:t="ENVMAP_BLENDING_ADD";break}return t}function u0(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function d0(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=o0(e),l=c0(e),h=l0(e),u=h0(e),f=u0(e),p=Qm(e),g=t0(r),_=i.createProgram();let m,d,C=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fs).join(`
`),d.length>0&&(d+=`
`)):(m=[Dc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fs).join(`
`),d=[Dc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gn?"#define TONE_MAPPING":"",e.toneMapping!==Gn?$t.tonemapping_pars_fragment:"",e.toneMapping!==Gn?jm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,Jm("linearToOutputTexel",e.outputColorSpace),Km(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fs).join(`
`)),a=co(a),a=Pc(a,e),a=Lc(a,e),o=co(o),o=Pc(o,e),o=Lc(o,e),a=Ic(a),o=Ic(o),e.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Uo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Uo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=C+m+a,M=C+d+o,A=Ac(i,i.VERTEX_SHADER,E),P=Ac(i,i.FRAGMENT_SHADER,M);i.attachShader(_,A),i.attachShader(_,P),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function L(I){if(s.debug.checkShaderErrors){const V=i.getProgramInfoLog(_).trim(),H=i.getShaderInfoLog(A).trim(),X=i.getShaderInfoLog(P).trim();let $=!0,N=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,A,P);else{const z=Rc(i,A,"vertex"),G=Rc(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+V+`
`+z+`
`+G)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(H===""||X==="")&&(N=!1);N&&(I.diagnostics={runnable:$,programLog:V,vertexShader:{log:H,prefix:m},fragmentShader:{log:X,prefix:d}})}i.deleteShader(A),i.deleteShader(P),U=new mr(i,_),w=e0(i,_)}let U;this.getUniforms=function(){return U===void 0&&L(this),U};let w;this.getAttributes=function(){return w===void 0&&L(this),w};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,qm)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ym++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=P,this}let f0=0;class p0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new m0(t),e.set(t,n)),n}}class m0{constructor(t){this.id=f0++,this.code=t,this.usedTimes=0}}function g0(s,t,e,n,i,r,a){const o=new ol,c=new p0,l=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,x,I,V,H){const X=V.fog,$=H.geometry,N=w.isMeshStandardMaterial?V.environment:null,z=(w.isMeshStandardMaterial?e:t).get(w.envMap||N),G=z&&z.mapping===wr?z.image.height:null,st=g[w.type];w.precision!==null&&(p=i.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const ut=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Et=ut!==void 0?ut.length:0;let Bt=0;$.morphAttributes.position!==void 0&&(Bt=1),$.morphAttributes.normal!==void 0&&(Bt=2),$.morphAttributes.color!==void 0&&(Bt=3);let Gt,Y,nt,Ct;if(st){const re=fn[st];Gt=re.vertexShader,Y=re.fragmentShader}else Gt=w.vertexShader,Y=w.fragmentShader,c.update(w),nt=c.getVertexShaderID(w),Ct=c.getFragmentShaderID(w);const lt=s.getRenderTarget(),Ut=s.state.buffers.depth.getReversed(),zt=H.isInstancedMesh===!0,kt=H.isBatchedMesh===!0,qt=!!w.map,j=!!w.matcap,at=!!z,b=!!w.aoMap,It=!!w.lightMap,et=!!w.bumpMap,Tt=!!w.normalMap,ot=!!w.displacementMap,rt=!!w.emissiveMap,Mt=!!w.metalnessMap,T=!!w.roughnessMap,v=w.anisotropy>0,k=w.clearcoat>0,J=w.dispersion>0,Q=w.iridescence>0,Z=w.sheen>0,wt=w.transmission>0,pt=v&&!!w.anisotropyMap,At=k&&!!w.clearcoatMap,jt=k&&!!w.clearcoatNormalMap,it=k&&!!w.clearcoatRoughnessMap,vt=Q&&!!w.iridescenceMap,Nt=Q&&!!w.iridescenceThicknessMap,Ft=Z&&!!w.sheenColorMap,Rt=Z&&!!w.sheenRoughnessMap,Qt=!!w.specularMap,Wt=!!w.specularColorMap,ae=!!w.specularIntensityMap,O=wt&&!!w.transmissionMap,gt=wt&&!!w.thicknessMap,W=!!w.gradientMap,q=!!w.alphaMap,xt=w.alphaTest>0,yt=!!w.alphaHash,Xt=!!w.extensions;let me=Gn;w.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(me=s.toneMapping);const xe={shaderID:st,shaderType:w.type,shaderName:w.name,vertexShader:Gt,fragmentShader:Y,defines:w.defines,customVertexShaderID:nt,customFragmentShaderID:Ct,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:kt,batchingColor:kt&&H._colorsTexture!==null,instancing:zt,instancingColor:zt&&H.instanceColor!==null,instancingMorph:zt&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:lt===null?s.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Ji,alphaToCoverage:!!w.alphaToCoverage,map:qt,matcap:j,envMap:at,envMapMode:at&&z.mapping,envMapCubeUVHeight:G,aoMap:b,lightMap:It,bumpMap:et,normalMap:Tt,displacementMap:f&&ot,emissiveMap:rt,normalMapObjectSpace:Tt&&w.normalMapType===ph,normalMapTangentSpace:Tt&&w.normalMapType===nl,metalnessMap:Mt,roughnessMap:T,anisotropy:v,anisotropyMap:pt,clearcoat:k,clearcoatMap:At,clearcoatNormalMap:jt,clearcoatRoughnessMap:it,dispersion:J,iridescence:Q,iridescenceMap:vt,iridescenceThicknessMap:Nt,sheen:Z,sheenColorMap:Ft,sheenRoughnessMap:Rt,specularMap:Qt,specularColorMap:Wt,specularIntensityMap:ae,transmission:wt,transmissionMap:O,thicknessMap:gt,gradientMap:W,opaque:w.transparent===!1&&w.blending===Gi&&w.alphaToCoverage===!1,alphaMap:q,alphaTest:xt,alphaHash:yt,combine:w.combine,mapUv:qt&&_(w.map.channel),aoMapUv:b&&_(w.aoMap.channel),lightMapUv:It&&_(w.lightMap.channel),bumpMapUv:et&&_(w.bumpMap.channel),normalMapUv:Tt&&_(w.normalMap.channel),displacementMapUv:ot&&_(w.displacementMap.channel),emissiveMapUv:rt&&_(w.emissiveMap.channel),metalnessMapUv:Mt&&_(w.metalnessMap.channel),roughnessMapUv:T&&_(w.roughnessMap.channel),anisotropyMapUv:pt&&_(w.anisotropyMap.channel),clearcoatMapUv:At&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:jt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&_(w.sheenRoughnessMap.channel),specularMapUv:Qt&&_(w.specularMap.channel),specularColorMapUv:Wt&&_(w.specularColorMap.channel),specularIntensityMapUv:ae&&_(w.specularIntensityMap.channel),transmissionMapUv:O&&_(w.transmissionMap.channel),thicknessMapUv:gt&&_(w.thicknessMap.channel),alphaMapUv:q&&_(w.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Tt||v),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!$.attributes.uv&&(qt||q),fog:!!X,useFog:w.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ut,skinning:H.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Bt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:me,decodeVideoTexture:qt&&w.map.isVideoTexture===!0&&se.getTransfer(w.map.colorSpace)===he,decodeVideoTextureEmissive:rt&&w.emissiveMap.isVideoTexture===!0&&se.getTransfer(w.emissiveMap.colorSpace)===he,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Me,flipSided:w.side===Be,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Xt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&w.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return xe.vertexUv1s=l.has(1),xe.vertexUv2s=l.has(2),xe.vertexUv3s=l.has(3),l.clear(),xe}function d(w){const x=[];if(w.shaderID?x.push(w.shaderID):(x.push(w.customVertexShaderID),x.push(w.customFragmentShaderID)),w.defines!==void 0)for(const I in w.defines)x.push(I),x.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(C(x,w),E(x,w),x.push(s.outputColorSpace)),x.push(w.customProgramCacheKey),x.join()}function C(w,x){w.push(x.precision),w.push(x.outputColorSpace),w.push(x.envMapMode),w.push(x.envMapCubeUVHeight),w.push(x.mapUv),w.push(x.alphaMapUv),w.push(x.lightMapUv),w.push(x.aoMapUv),w.push(x.bumpMapUv),w.push(x.normalMapUv),w.push(x.displacementMapUv),w.push(x.emissiveMapUv),w.push(x.metalnessMapUv),w.push(x.roughnessMapUv),w.push(x.anisotropyMapUv),w.push(x.clearcoatMapUv),w.push(x.clearcoatNormalMapUv),w.push(x.clearcoatRoughnessMapUv),w.push(x.iridescenceMapUv),w.push(x.iridescenceThicknessMapUv),w.push(x.sheenColorMapUv),w.push(x.sheenRoughnessMapUv),w.push(x.specularMapUv),w.push(x.specularColorMapUv),w.push(x.specularIntensityMapUv),w.push(x.transmissionMapUv),w.push(x.thicknessMapUv),w.push(x.combine),w.push(x.fogExp2),w.push(x.sizeAttenuation),w.push(x.morphTargetsCount),w.push(x.morphAttributeCount),w.push(x.numDirLights),w.push(x.numPointLights),w.push(x.numSpotLights),w.push(x.numSpotLightMaps),w.push(x.numHemiLights),w.push(x.numRectAreaLights),w.push(x.numDirLightShadows),w.push(x.numPointLightShadows),w.push(x.numSpotLightShadows),w.push(x.numSpotLightShadowsWithMaps),w.push(x.numLightProbes),w.push(x.shadowMapType),w.push(x.toneMapping),w.push(x.numClippingPlanes),w.push(x.numClipIntersection),w.push(x.depthPacking)}function E(w,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),w.push(o.mask)}function M(w){const x=g[w.type];let I;if(x){const V=fn[x];I=ru.clone(V.uniforms)}else I=w.uniforms;return I}function A(w,x){let I;for(let V=0,H=h.length;V<H;V++){const X=h[V];if(X.cacheKey===x){I=X,++I.usedTimes;break}}return I===void 0&&(I=new d0(s,x,w,r),h.push(I)),I}function P(w){if(--w.usedTimes===0){const x=h.indexOf(w);h[x]=h[h.length-1],h.pop(),w.destroy()}}function L(w){c.remove(w)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:A,releaseProgram:P,releaseShaderCache:L,programs:h,dispose:U}}function _0(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function v0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Uc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Nc(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,f,p,g,_,m){let d=s[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),t++,d}function o(u,f,p,g,_,m){const d=a(u,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):e.push(d)}function c(u,f,p,g,_,m){const d=a(u,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):e.unshift(d)}function l(u,f){e.length>1&&e.sort(u||v0),n.length>1&&n.sort(f||Uc),i.length>1&&i.sort(f||Uc)}function h(){for(let u=t,f=s.length;u<f;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function x0(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Nc,s.set(n,[a])):i>=r.length?(a=new Nc,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function M0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Ht};break;case"SpotLight":e={position:new D,direction:new D,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function y0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let S0=0;function E0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function w0(s){const t=new M0,e=y0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const i=new D,r=new fe,a=new fe;function o(l){let h=0,u=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,C=0,E=0,M=0,A=0,P=0,L=0;l.sort(E0);for(let w=0,x=l.length;w<x;w++){const I=l[w],V=I.color,H=I.intensity,X=I.distance,$=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=V.r*H,u+=V.g*H,f+=V.b*H;else if(I.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(I.sh.coefficients[N],H);L++}else if(I.isDirectionalLight){const N=t.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const z=I.shadow,G=e.get(I);G.shadowIntensity=z.intensity,G.shadowBias=z.bias,G.shadowNormalBias=z.normalBias,G.shadowRadius=z.radius,G.shadowMapSize=z.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=I.shadow.matrix,C++}n.directional[p]=N,p++}else if(I.isSpotLight){const N=t.get(I);N.position.setFromMatrixPosition(I.matrixWorld),N.color.copy(V).multiplyScalar(H),N.distance=X,N.coneCos=Math.cos(I.angle),N.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),N.decay=I.decay,n.spot[_]=N;const z=I.shadow;if(I.map&&(n.spotLightMap[A]=I.map,A++,z.updateMatrices(I),I.castShadow&&P++),n.spotLightMatrix[_]=z.matrix,I.castShadow){const G=e.get(I);G.shadowIntensity=z.intensity,G.shadowBias=z.bias,G.shadowNormalBias=z.normalBias,G.shadowRadius=z.radius,G.shadowMapSize=z.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=$,M++}_++}else if(I.isRectAreaLight){const N=t.get(I);N.color.copy(V).multiplyScalar(H),N.halfWidth.set(I.width*.5,0,0),N.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=N,m++}else if(I.isPointLight){const N=t.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity),N.distance=I.distance,N.decay=I.decay,I.castShadow){const z=I.shadow,G=e.get(I);G.shadowIntensity=z.intensity,G.shadowBias=z.bias,G.shadowNormalBias=z.normalBias,G.shadowRadius=z.radius,G.shadowMapSize=z.mapSize,G.shadowCameraNear=z.camera.near,G.shadowCameraFar=z.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=I.shadow.matrix,E++}n.point[g]=N,g++}else if(I.isHemisphereLight){const N=t.get(I);N.skyColor.copy(I.color).multiplyScalar(H),N.groundColor.copy(I.groundColor).multiplyScalar(H),n.hemi[d]=N,d++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const U=n.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==m||U.hemiLength!==d||U.numDirectionalShadows!==C||U.numPointShadows!==E||U.numSpotShadows!==M||U.numSpotMaps!==A||U.numLightProbes!==L)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=M+A-P,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=L,U.directionalLength=p,U.pointLength=g,U.spotLength=_,U.rectAreaLength=m,U.hemiLength=d,U.numDirectionalShadows=C,U.numPointShadows=E,U.numSpotShadows=M,U.numSpotMaps=A,U.numLightProbes=L,n.version=S0++)}function c(l,h){let u=0,f=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let d=0,C=l.length;d<C;d++){const E=l[d];if(E.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),u++}else if(E.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function Fc(s){const t=new w0(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function T0(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new Fc(s),t.set(i,[o])):r>=a.length?(o=new Fc(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const b0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function C0(s,t,e){let n=new So;const i=new ct,r=new ct,a=new ue,o=new Zu({depthPacking:fh}),c=new $u,l={},h=e.maxTextureSize,u={[Vn]:Be,[Be]:Vn,[Me]:Me},f=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:b0,fragmentShader:A0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ce;g.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _t(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hc;let d=this.type;this.render=function(P,L,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const w=s.getRenderTarget(),x=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),V=s.state;V.setBlending(Hn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const H=d!==wn&&this.type===wn,X=d===wn&&this.type!==wn;for(let $=0,N=P.length;$<N;$++){const z=P[$],G=z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const st=G.getFrameExtents();if(i.multiply(st),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/st.x),i.x=r.x*st.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/st.y),i.y=r.y*st.y,G.mapSize.y=r.y)),G.map===null||H===!0||X===!0){const Et=this.type!==wn?{minFilter:ln,magFilter:ln}:{};G.map!==null&&G.map.dispose(),G.map=new di(i.x,i.y,Et),G.map.texture.name=z.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const ut=G.getViewportCount();for(let Et=0;Et<ut;Et++){const Bt=G.getViewport(Et);a.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),V.viewport(a),G.updateMatrices(z,Et),n=G.getFrustum(),M(L,U,G.camera,z,this.type)}G.isPointLightShadow!==!0&&this.type===wn&&C(G,U),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,s.setRenderTarget(w,x,I)};function C(P,L){const U=t.update(_);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new di(i.x,i.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(L,null,U,f,_,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(L,null,U,p,_,null)}function E(P,L,U,w){let x=null;const I=U.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(I!==void 0)x=I;else if(x=U.isPointLight===!0?c:o,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const V=x.uuid,H=L.uuid;let X=l[V];X===void 0&&(X={},l[V]=X);let $=X[H];$===void 0&&($=x.clone(),X[H]=$,L.addEventListener("dispose",A)),x=$}if(x.visible=L.visible,x.wireframe=L.wireframe,w===wn?x.side=L.shadowSide!==null?L.shadowSide:L.side:x.side=L.shadowSide!==null?L.shadowSide:u[L.side],x.alphaMap=L.alphaMap,x.alphaTest=L.alphaTest,x.map=L.map,x.clipShadows=L.clipShadows,x.clippingPlanes=L.clippingPlanes,x.clipIntersection=L.clipIntersection,x.displacementMap=L.displacementMap,x.displacementScale=L.displacementScale,x.displacementBias=L.displacementBias,x.wireframeLinewidth=L.wireframeLinewidth,x.linewidth=L.linewidth,U.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const V=s.properties.get(x);V.light=U}return x}function M(P,L,U,w,x){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&x===wn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,P.matrixWorld);const H=t.update(P),X=P.material;if(Array.isArray(X)){const $=H.groups;for(let N=0,z=$.length;N<z;N++){const G=$[N],st=X[G.materialIndex];if(st&&st.visible){const ut=E(P,st,w,x);P.onBeforeShadow(s,P,L,U,H,ut,G),s.renderBufferDirect(U,null,H,ut,P,G),P.onAfterShadow(s,P,L,U,H,ut,G)}}}else if(X.visible){const $=E(P,X,w,x);P.onBeforeShadow(s,P,L,U,H,$,null),s.renderBufferDirect(U,null,H,$,P,null),P.onAfterShadow(s,P,L,U,H,$,null)}}const V=P.children;for(let H=0,X=V.length;H<X;H++)M(V[H],L,U,w,x)}function A(P){P.target.removeEventListener("dispose",A);for(const U in l){const w=l[U],x=P.target.uuid;x in w&&(w[x].dispose(),delete w[x])}}}const R0={[Ma]:ya,[Sa]:Ta,[Ea]:ba,[Xi]:wa,[ya]:Ma,[Ta]:Sa,[ba]:Ea,[wa]:Xi};function P0(s,t){function e(){let O=!1;const gt=new ue;let W=null;const q=new ue(0,0,0,0);return{setMask:function(xt){W!==xt&&!O&&(s.colorMask(xt,xt,xt,xt),W=xt)},setLocked:function(xt){O=xt},setClear:function(xt,yt,Xt,me,xe){xe===!0&&(xt*=me,yt*=me,Xt*=me),gt.set(xt,yt,Xt,me),q.equals(gt)===!1&&(s.clearColor(xt,yt,Xt,me),q.copy(gt))},reset:function(){O=!1,W=null,q.set(-1,0,0,0)}}}function n(){let O=!1,gt=!1,W=null,q=null,xt=null;return{setReversed:function(yt){if(gt!==yt){const Xt=t.get("EXT_clip_control");gt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT);const me=xt;xt=null,this.setClear(me)}gt=yt},getReversed:function(){return gt},setTest:function(yt){yt?lt(s.DEPTH_TEST):Ut(s.DEPTH_TEST)},setMask:function(yt){W!==yt&&!O&&(s.depthMask(yt),W=yt)},setFunc:function(yt){if(gt&&(yt=R0[yt]),q!==yt){switch(yt){case Ma:s.depthFunc(s.NEVER);break;case ya:s.depthFunc(s.ALWAYS);break;case Sa:s.depthFunc(s.LESS);break;case Xi:s.depthFunc(s.LEQUAL);break;case Ea:s.depthFunc(s.EQUAL);break;case wa:s.depthFunc(s.GEQUAL);break;case Ta:s.depthFunc(s.GREATER);break;case ba:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}q=yt}},setLocked:function(yt){O=yt},setClear:function(yt){xt!==yt&&(gt&&(yt=1-yt),s.clearDepth(yt),xt=yt)},reset:function(){O=!1,W=null,q=null,xt=null,gt=!1}}}function i(){let O=!1,gt=null,W=null,q=null,xt=null,yt=null,Xt=null,me=null,xe=null;return{setTest:function(re){O||(re?lt(s.STENCIL_TEST):Ut(s.STENCIL_TEST))},setMask:function(re){gt!==re&&!O&&(s.stencilMask(re),gt=re)},setFunc:function(re,ke,tn){(W!==re||q!==ke||xt!==tn)&&(s.stencilFunc(re,ke,tn),W=re,q=ke,xt=tn)},setOp:function(re,ke,tn){(yt!==re||Xt!==ke||me!==tn)&&(s.stencilOp(re,ke,tn),yt=re,Xt=ke,me=tn)},setLocked:function(re){O=re},setClear:function(re){xe!==re&&(s.clearStencil(re),xe=re)},reset:function(){O=!1,gt=null,W=null,q=null,xt=null,yt=null,Xt=null,me=null,xe=null}}}const r=new e,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,C=null,E=null,M=null,A=null,P=null,L=new Ht(0,0,0),U=0,w=!1,x=null,I=null,V=null,H=null,X=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,z=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(G)[1]),N=z>=1):G.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),N=z>=2);let st=null,ut={};const Et=s.getParameter(s.SCISSOR_BOX),Bt=s.getParameter(s.VIEWPORT),Gt=new ue().fromArray(Et),Y=new ue().fromArray(Bt);function nt(O,gt,W,q){const xt=new Uint8Array(4),yt=s.createTexture();s.bindTexture(O,yt),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Xt=0;Xt<W;Xt++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(gt,0,s.RGBA,1,1,q,0,s.RGBA,s.UNSIGNED_BYTE,xt):s.texImage2D(gt+Xt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xt);return yt}const Ct={};Ct[s.TEXTURE_2D]=nt(s.TEXTURE_2D,s.TEXTURE_2D,1),Ct[s.TEXTURE_CUBE_MAP]=nt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ct[s.TEXTURE_2D_ARRAY]=nt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ct[s.TEXTURE_3D]=nt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),lt(s.DEPTH_TEST),a.setFunc(Xi),et(!1),Tt(Po),lt(s.CULL_FACE),b(Hn);function lt(O){h[O]!==!0&&(s.enable(O),h[O]=!0)}function Ut(O){h[O]!==!1&&(s.disable(O),h[O]=!1)}function zt(O,gt){return u[O]!==gt?(s.bindFramebuffer(O,gt),u[O]=gt,O===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=gt),O===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=gt),!0):!1}function kt(O,gt){let W=p,q=!1;if(O){W=f.get(gt),W===void 0&&(W=[],f.set(gt,W));const xt=O.textures;if(W.length!==xt.length||W[0]!==s.COLOR_ATTACHMENT0){for(let yt=0,Xt=xt.length;yt<Xt;yt++)W[yt]=s.COLOR_ATTACHMENT0+yt;W.length=xt.length,q=!0}}else W[0]!==s.BACK&&(W[0]=s.BACK,q=!0);q&&s.drawBuffers(W)}function qt(O){return g!==O?(s.useProgram(O),g=O,!0):!1}const j={[oi]:s.FUNC_ADD,[kl]:s.FUNC_SUBTRACT,[Hl]:s.FUNC_REVERSE_SUBTRACT};j[Gl]=s.MIN,j[Vl]=s.MAX;const at={[Wl]:s.ZERO,[Xl]:s.ONE,[ql]:s.SRC_COLOR,[va]:s.SRC_ALPHA,[Kl]:s.SRC_ALPHA_SATURATE,[Jl]:s.DST_COLOR,[Zl]:s.DST_ALPHA,[Yl]:s.ONE_MINUS_SRC_COLOR,[xa]:s.ONE_MINUS_SRC_ALPHA,[jl]:s.ONE_MINUS_DST_COLOR,[$l]:s.ONE_MINUS_DST_ALPHA,[Ql]:s.CONSTANT_COLOR,[th]:s.ONE_MINUS_CONSTANT_COLOR,[eh]:s.CONSTANT_ALPHA,[nh]:s.ONE_MINUS_CONSTANT_ALPHA};function b(O,gt,W,q,xt,yt,Xt,me,xe,re){if(O===Hn){_===!0&&(Ut(s.BLEND),_=!1);return}if(_===!1&&(lt(s.BLEND),_=!0),O!==zl){if(O!==m||re!==w){if((d!==oi||M!==oi)&&(s.blendEquation(s.FUNC_ADD),d=oi,M=oi),re)switch(O){case Gi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gr:s.blendFunc(s.ONE,s.ONE);break;case Lo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Io:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Gi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Lo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Io:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}C=null,E=null,A=null,P=null,L.set(0,0,0),U=0,m=O,w=re}return}xt=xt||gt,yt=yt||W,Xt=Xt||q,(gt!==d||xt!==M)&&(s.blendEquationSeparate(j[gt],j[xt]),d=gt,M=xt),(W!==C||q!==E||yt!==A||Xt!==P)&&(s.blendFuncSeparate(at[W],at[q],at[yt],at[Xt]),C=W,E=q,A=yt,P=Xt),(me.equals(L)===!1||xe!==U)&&(s.blendColor(me.r,me.g,me.b,xe),L.copy(me),U=xe),m=O,w=!1}function It(O,gt){O.side===Me?Ut(s.CULL_FACE):lt(s.CULL_FACE);let W=O.side===Be;gt&&(W=!W),et(W),O.blending===Gi&&O.transparent===!1?b(Hn):b(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const q=O.stencilWrite;o.setTest(q),q&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),rt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?lt(s.SAMPLE_ALPHA_TO_COVERAGE):Ut(s.SAMPLE_ALPHA_TO_COVERAGE)}function et(O){x!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),x=O)}function Tt(O){O!==Ol?(lt(s.CULL_FACE),O!==I&&(O===Po?s.cullFace(s.BACK):O===Bl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ut(s.CULL_FACE),I=O}function ot(O){O!==V&&(N&&s.lineWidth(O),V=O)}function rt(O,gt,W){O?(lt(s.POLYGON_OFFSET_FILL),(H!==gt||X!==W)&&(s.polygonOffset(gt,W),H=gt,X=W)):Ut(s.POLYGON_OFFSET_FILL)}function Mt(O){O?lt(s.SCISSOR_TEST):Ut(s.SCISSOR_TEST)}function T(O){O===void 0&&(O=s.TEXTURE0+$-1),st!==O&&(s.activeTexture(O),st=O)}function v(O,gt,W){W===void 0&&(st===null?W=s.TEXTURE0+$-1:W=st);let q=ut[W];q===void 0&&(q={type:void 0,texture:void 0},ut[W]=q),(q.type!==O||q.texture!==gt)&&(st!==W&&(s.activeTexture(W),st=W),s.bindTexture(O,gt||Ct[O]),q.type=O,q.texture=gt)}function k(){const O=ut[st];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function J(){try{s.compressedTexImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{s.texSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function wt(){try{s.texSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function At(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function jt(){try{s.texStorage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(){try{s.texStorage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function vt(){try{s.texImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Nt(){try{s.texImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ft(O){Gt.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),Gt.copy(O))}function Rt(O){Y.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),Y.copy(O))}function Qt(O,gt){let W=l.get(gt);W===void 0&&(W=new WeakMap,l.set(gt,W));let q=W.get(O);q===void 0&&(q=s.getUniformBlockIndex(gt,O.name),W.set(O,q))}function Wt(O,gt){const q=l.get(gt).get(O);c.get(gt)!==q&&(s.uniformBlockBinding(gt,q,O.__bindingPointIndex),c.set(gt,q))}function ae(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},st=null,ut={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,C=null,E=null,M=null,A=null,P=null,L=new Ht(0,0,0),U=0,w=!1,x=null,I=null,V=null,H=null,X=null,Gt.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:lt,disable:Ut,bindFramebuffer:zt,drawBuffers:kt,useProgram:qt,setBlending:b,setMaterial:It,setFlipSided:et,setCullFace:Tt,setLineWidth:ot,setPolygonOffset:rt,setScissorTest:Mt,activeTexture:T,bindTexture:v,unbindTexture:k,compressedTexImage2D:J,compressedTexImage3D:Q,texImage2D:vt,texImage3D:Nt,updateUBOMapping:Qt,uniformBlockBinding:Wt,texStorage2D:jt,texStorage3D:it,texSubImage2D:Z,texSubImage3D:wt,compressedTexSubImage2D:pt,compressedTexSubImage3D:At,scissor:Ft,viewport:Rt,reset:ae}}function L0(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ct,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return p?new OffscreenCanvas(T,v):xr("canvas")}function _(T,v,k){let J=1;const Q=Mt(T);if((Q.width>k||Q.height>k)&&(J=k/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Z=Math.floor(J*Q.width),wt=Math.floor(J*Q.height);u===void 0&&(u=g(Z,wt));const pt=v?g(Z,wt):u;return pt.width=Z,pt.height=wt,pt.getContext("2d").drawImage(T,0,0,Z,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Z+"x"+wt+")."),pt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function m(T){return T.generateMipmaps}function d(T){s.generateMipmap(T)}function C(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(T,v,k,J,Q=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Z=v;if(v===s.RED&&(k===s.FLOAT&&(Z=s.R32F),k===s.HALF_FLOAT&&(Z=s.R16F),k===s.UNSIGNED_BYTE&&(Z=s.R8)),v===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.R8UI),k===s.UNSIGNED_SHORT&&(Z=s.R16UI),k===s.UNSIGNED_INT&&(Z=s.R32UI),k===s.BYTE&&(Z=s.R8I),k===s.SHORT&&(Z=s.R16I),k===s.INT&&(Z=s.R32I)),v===s.RG&&(k===s.FLOAT&&(Z=s.RG32F),k===s.HALF_FLOAT&&(Z=s.RG16F),k===s.UNSIGNED_BYTE&&(Z=s.RG8)),v===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RG8UI),k===s.UNSIGNED_SHORT&&(Z=s.RG16UI),k===s.UNSIGNED_INT&&(Z=s.RG32UI),k===s.BYTE&&(Z=s.RG8I),k===s.SHORT&&(Z=s.RG16I),k===s.INT&&(Z=s.RG32I)),v===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),k===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),k===s.UNSIGNED_INT&&(Z=s.RGB32UI),k===s.BYTE&&(Z=s.RGB8I),k===s.SHORT&&(Z=s.RGB16I),k===s.INT&&(Z=s.RGB32I)),v===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),k===s.UNSIGNED_INT&&(Z=s.RGBA32UI),k===s.BYTE&&(Z=s.RGBA8I),k===s.SHORT&&(Z=s.RGBA16I),k===s.INT&&(Z=s.RGBA32I)),v===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),v===s.RGBA){const wt=Q?_r:se.getTransfer(J);k===s.FLOAT&&(Z=s.RGBA32F),k===s.HALF_FLOAT&&(Z=s.RGBA16F),k===s.UNSIGNED_BYTE&&(Z=wt===he?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function M(T,v){let k;return T?v===null||v===ui||v===Zi?k=s.DEPTH24_STENCIL8:v===Tn?k=s.DEPTH32F_STENCIL8:v===ys&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ui||v===Zi?k=s.DEPTH_COMPONENT24:v===Tn?k=s.DEPTH_COMPONENT32F:v===ys&&(k=s.DEPTH_COMPONENT16),k}function A(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==ln&&T.minFilter!==pn?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function P(T){const v=T.target;v.removeEventListener("dispose",P),U(v),v.isVideoTexture&&h.delete(v)}function L(T){const v=T.target;v.removeEventListener("dispose",L),x(v)}function U(T){const v=n.get(T);if(v.__webglInit===void 0)return;const k=T.source,J=f.get(k);if(J){const Q=J[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&w(T),Object.keys(J).length===0&&f.delete(k)}n.remove(T)}function w(T){const v=n.get(T);s.deleteTexture(v.__webglTexture);const k=T.source,J=f.get(k);delete J[v.__cacheKey],a.memory.textures--}function x(T){const v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(v.__webglFramebuffer[J]))for(let Q=0;Q<v.__webglFramebuffer[J].length;Q++)s.deleteFramebuffer(v.__webglFramebuffer[J][Q]);else s.deleteFramebuffer(v.__webglFramebuffer[J]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[J])}else{if(Array.isArray(v.__webglFramebuffer))for(let J=0;J<v.__webglFramebuffer.length;J++)s.deleteFramebuffer(v.__webglFramebuffer[J]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let J=0;J<v.__webglColorRenderbuffer.length;J++)v.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[J]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const k=T.textures;for(let J=0,Q=k.length;J<Q;J++){const Z=n.get(k[J]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(k[J])}n.remove(T)}let I=0;function V(){I=0}function H(){const T=I;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),I+=1,T}function X(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function $(T,v){const k=n.get(T);if(T.isVideoTexture&&ot(T),T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){const J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(k,T,v);return}}e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+v)}function N(T,v){const k=n.get(T);if(T.version>0&&k.__version!==T.version){Y(k,T,v);return}e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+v)}function z(T,v){const k=n.get(T);if(T.version>0&&k.__version!==T.version){Y(k,T,v);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+v)}function G(T,v){const k=n.get(T);if(T.version>0&&k.__version!==T.version){nt(k,T,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+v)}const st={[Ms]:s.REPEAT,[li]:s.CLAMP_TO_EDGE,[Ra]:s.MIRRORED_REPEAT},ut={[ln]:s.NEAREST,[uh]:s.NEAREST_MIPMAP_NEAREST,[Is]:s.NEAREST_MIPMAP_LINEAR,[pn]:s.LINEAR,[Dr]:s.LINEAR_MIPMAP_NEAREST,[hi]:s.LINEAR_MIPMAP_LINEAR},Et={[mh]:s.NEVER,[yh]:s.ALWAYS,[gh]:s.LESS,[il]:s.LEQUAL,[_h]:s.EQUAL,[Mh]:s.GEQUAL,[vh]:s.GREATER,[xh]:s.NOTEQUAL};function Bt(T,v){if(v.type===Tn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===pn||v.magFilter===Dr||v.magFilter===Is||v.magFilter===hi||v.minFilter===pn||v.minFilter===Dr||v.minFilter===Is||v.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,st[v.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,st[v.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,st[v.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,ut[v.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,ut[v.minFilter]),v.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,Et[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===ln||v.minFilter!==Is&&v.minFilter!==hi||v.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Gt(T,v){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",P));const J=v.source;let Q=f.get(J);Q===void 0&&(Q={},f.set(J,Q));const Z=X(v);if(Z!==T.__cacheKey){Q[Z]===void 0&&(Q[Z]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Q[Z].usedTimes++;const wt=Q[T.__cacheKey];wt!==void 0&&(Q[T.__cacheKey].usedTimes--,wt.usedTimes===0&&w(v)),T.__cacheKey=Z,T.__webglTexture=Q[Z].texture}return k}function Y(T,v,k){let J=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=s.TEXTURE_3D);const Q=Gt(T,v),Z=v.source;e.bindTexture(J,T.__webglTexture,s.TEXTURE0+k);const wt=n.get(Z);if(Z.version!==wt.__version||Q===!0){e.activeTexture(s.TEXTURE0+k);const pt=se.getPrimaries(se.workingColorSpace),At=v.colorSpace===kn?null:se.getPrimaries(v.colorSpace),jt=v.colorSpace===kn||pt===At?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let it=_(v.image,!1,i.maxTextureSize);it=rt(v,it);const vt=r.convert(v.format,v.colorSpace),Nt=r.convert(v.type);let Ft=E(v.internalFormat,vt,Nt,v.colorSpace,v.isVideoTexture);Bt(J,v);let Rt;const Qt=v.mipmaps,Wt=v.isVideoTexture!==!0,ae=wt.__version===void 0||Q===!0,O=Z.dataReady,gt=A(v,it);if(v.isDepthTexture)Ft=M(v.format===$i,v.type),ae&&(Wt?e.texStorage2D(s.TEXTURE_2D,1,Ft,it.width,it.height):e.texImage2D(s.TEXTURE_2D,0,Ft,it.width,it.height,0,vt,Nt,null));else if(v.isDataTexture)if(Qt.length>0){Wt&&ae&&e.texStorage2D(s.TEXTURE_2D,gt,Ft,Qt[0].width,Qt[0].height);for(let W=0,q=Qt.length;W<q;W++)Rt=Qt[W],Wt?O&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,Rt.width,Rt.height,vt,Nt,Rt.data):e.texImage2D(s.TEXTURE_2D,W,Ft,Rt.width,Rt.height,0,vt,Nt,Rt.data);v.generateMipmaps=!1}else Wt?(ae&&e.texStorage2D(s.TEXTURE_2D,gt,Ft,it.width,it.height),O&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,it.width,it.height,vt,Nt,it.data)):e.texImage2D(s.TEXTURE_2D,0,Ft,it.width,it.height,0,vt,Nt,it.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Wt&&ae&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,Ft,Qt[0].width,Qt[0].height,it.depth);for(let W=0,q=Qt.length;W<q;W++)if(Rt=Qt[W],v.format!==on)if(vt!==null)if(Wt){if(O)if(v.layerUpdates.size>0){const xt=fc(Rt.width,Rt.height,v.format,v.type);for(const yt of v.layerUpdates){const Xt=Rt.data.subarray(yt*xt/Rt.data.BYTES_PER_ELEMENT,(yt+1)*xt/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,yt,Rt.width,Rt.height,1,vt,Xt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,Rt.width,Rt.height,it.depth,vt,Rt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,W,Ft,Rt.width,Rt.height,it.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?O&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,Rt.width,Rt.height,it.depth,vt,Nt,Rt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,W,Ft,Rt.width,Rt.height,it.depth,0,vt,Nt,Rt.data)}else{Wt&&ae&&e.texStorage2D(s.TEXTURE_2D,gt,Ft,Qt[0].width,Qt[0].height);for(let W=0,q=Qt.length;W<q;W++)Rt=Qt[W],v.format!==on?vt!==null?Wt?O&&e.compressedTexSubImage2D(s.TEXTURE_2D,W,0,0,Rt.width,Rt.height,vt,Rt.data):e.compressedTexImage2D(s.TEXTURE_2D,W,Ft,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?O&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,Rt.width,Rt.height,vt,Nt,Rt.data):e.texImage2D(s.TEXTURE_2D,W,Ft,Rt.width,Rt.height,0,vt,Nt,Rt.data)}else if(v.isDataArrayTexture)if(Wt){if(ae&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,Ft,it.width,it.height,it.depth),O)if(v.layerUpdates.size>0){const W=fc(it.width,it.height,v.format,v.type);for(const q of v.layerUpdates){const xt=it.data.subarray(q*W/it.data.BYTES_PER_ELEMENT,(q+1)*W/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,q,it.width,it.height,1,vt,Nt,xt)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,vt,Nt,it.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ft,it.width,it.height,it.depth,0,vt,Nt,it.data);else if(v.isData3DTexture)Wt?(ae&&e.texStorage3D(s.TEXTURE_3D,gt,Ft,it.width,it.height,it.depth),O&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,vt,Nt,it.data)):e.texImage3D(s.TEXTURE_3D,0,Ft,it.width,it.height,it.depth,0,vt,Nt,it.data);else if(v.isFramebufferTexture){if(ae)if(Wt)e.texStorage2D(s.TEXTURE_2D,gt,Ft,it.width,it.height);else{let W=it.width,q=it.height;for(let xt=0;xt<gt;xt++)e.texImage2D(s.TEXTURE_2D,xt,Ft,W,q,0,vt,Nt,null),W>>=1,q>>=1}}else if(Qt.length>0){if(Wt&&ae){const W=Mt(Qt[0]);e.texStorage2D(s.TEXTURE_2D,gt,Ft,W.width,W.height)}for(let W=0,q=Qt.length;W<q;W++)Rt=Qt[W],Wt?O&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,vt,Nt,Rt):e.texImage2D(s.TEXTURE_2D,W,Ft,vt,Nt,Rt);v.generateMipmaps=!1}else if(Wt){if(ae){const W=Mt(it);e.texStorage2D(s.TEXTURE_2D,gt,Ft,W.width,W.height)}O&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,vt,Nt,it)}else e.texImage2D(s.TEXTURE_2D,0,Ft,vt,Nt,it);m(v)&&d(J),wt.__version=Z.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function nt(T,v,k){if(v.image.length!==6)return;const J=Gt(T,v),Q=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+k);const Z=n.get(Q);if(Q.version!==Z.__version||J===!0){e.activeTexture(s.TEXTURE0+k);const wt=se.getPrimaries(se.workingColorSpace),pt=v.colorSpace===kn?null:se.getPrimaries(v.colorSpace),At=v.colorSpace===kn||wt===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const jt=v.isCompressedTexture||v.image[0].isCompressedTexture,it=v.image[0]&&v.image[0].isDataTexture,vt=[];for(let q=0;q<6;q++)!jt&&!it?vt[q]=_(v.image[q],!0,i.maxCubemapSize):vt[q]=it?v.image[q].image:v.image[q],vt[q]=rt(v,vt[q]);const Nt=vt[0],Ft=r.convert(v.format,v.colorSpace),Rt=r.convert(v.type),Qt=E(v.internalFormat,Ft,Rt,v.colorSpace),Wt=v.isVideoTexture!==!0,ae=Z.__version===void 0||J===!0,O=Q.dataReady;let gt=A(v,Nt);Bt(s.TEXTURE_CUBE_MAP,v);let W;if(jt){Wt&&ae&&e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,Qt,Nt.width,Nt.height);for(let q=0;q<6;q++){W=vt[q].mipmaps;for(let xt=0;xt<W.length;xt++){const yt=W[xt];v.format!==on?Ft!==null?Wt?O&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,xt,0,0,yt.width,yt.height,Ft,yt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,xt,Qt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,xt,0,0,yt.width,yt.height,Ft,Rt,yt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,xt,Qt,yt.width,yt.height,0,Ft,Rt,yt.data)}}}else{if(W=v.mipmaps,Wt&&ae){W.length>0&&gt++;const q=Mt(vt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,Qt,q.width,q.height)}for(let q=0;q<6;q++)if(it){Wt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,vt[q].width,vt[q].height,Ft,Rt,vt[q].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Qt,vt[q].width,vt[q].height,0,Ft,Rt,vt[q].data);for(let xt=0;xt<W.length;xt++){const Xt=W[xt].image[q].image;Wt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,xt+1,0,0,Xt.width,Xt.height,Ft,Rt,Xt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,xt+1,Qt,Xt.width,Xt.height,0,Ft,Rt,Xt.data)}}else{Wt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Ft,Rt,vt[q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Qt,Ft,Rt,vt[q]);for(let xt=0;xt<W.length;xt++){const yt=W[xt];Wt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,xt+1,0,0,Ft,Rt,yt.image[q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,xt+1,Qt,Ft,Rt,yt.image[q])}}}m(v)&&d(s.TEXTURE_CUBE_MAP),Z.__version=Q.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Ct(T,v,k,J,Q,Z){const wt=r.convert(k.format,k.colorSpace),pt=r.convert(k.type),At=E(k.internalFormat,wt,pt,k.colorSpace),jt=n.get(v),it=n.get(k);if(it.__renderTarget=v,!jt.__hasExternalTextures){const vt=Math.max(1,v.width>>Z),Nt=Math.max(1,v.height>>Z);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,Z,At,vt,Nt,v.depth,0,wt,pt,null):e.texImage2D(Q,Z,At,vt,Nt,0,wt,pt,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),Tt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,Q,it.__webglTexture,0,et(v)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,Q,it.__webglTexture,Z),e.bindFramebuffer(s.FRAMEBUFFER,null)}function lt(T,v,k){if(s.bindRenderbuffer(s.RENDERBUFFER,T),v.depthBuffer){const J=v.depthTexture,Q=J&&J.isDepthTexture?J.type:null,Z=M(v.stencilBuffer,Q),wt=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=et(v);Tt(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt,Z,v.width,v.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,Z,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,Z,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,wt,s.RENDERBUFFER,T)}else{const J=v.textures;for(let Q=0;Q<J.length;Q++){const Z=J[Q],wt=r.convert(Z.format,Z.colorSpace),pt=r.convert(Z.type),At=E(Z.internalFormat,wt,pt,Z.colorSpace),jt=et(v);k&&Tt(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,jt,At,v.width,v.height):Tt(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,jt,At,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,At,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ut(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(v.depthTexture);J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$(v.depthTexture,0);const Q=J.__webglTexture,Z=et(v);if(v.depthTexture.format===Vi)Tt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(v.depthTexture.format===$i)Tt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function zt(T){const v=n.get(T),k=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const J=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),J){const Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,J.removeEventListener("dispose",Q)};J.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=J}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ut(v.__webglFramebuffer,T)}else if(k){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]===void 0)v.__webglDepthbuffer[J]=s.createRenderbuffer(),lt(v.__webglDepthbuffer[J],T,!1);else{const Q=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),lt(v.__webglDepthbuffer,T,!1);else{const J=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,Q)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function kt(T,v,k){const J=n.get(T);v!==void 0&&Ct(J.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&zt(T)}function qt(T){const v=T.texture,k=n.get(T),J=n.get(v);T.addEventListener("dispose",L);const Q=T.textures,Z=T.isWebGLCubeRenderTarget===!0,wt=Q.length>1;if(wt||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=v.version,a.memory.textures++),Z){k.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[pt]=[];for(let At=0;At<v.mipmaps.length;At++)k.__webglFramebuffer[pt][At]=s.createFramebuffer()}else k.__webglFramebuffer[pt]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let pt=0;pt<v.mipmaps.length;pt++)k.__webglFramebuffer[pt]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(wt)for(let pt=0,At=Q.length;pt<At;pt++){const jt=n.get(Q[pt]);jt.__webglTexture===void 0&&(jt.__webglTexture=s.createTexture(),a.memory.textures++)}if(T.samples>0&&Tt(T)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let pt=0;pt<Q.length;pt++){const At=Q[pt];k.__webglColorRenderbuffer[pt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[pt]);const jt=r.convert(At.format,At.colorSpace),it=r.convert(At.type),vt=E(At.internalFormat,jt,it,At.colorSpace,T.isXRRenderTarget===!0),Nt=et(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt,vt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,k.__webglColorRenderbuffer[pt])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),lt(k.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),Bt(s.TEXTURE_CUBE_MAP,v);for(let pt=0;pt<6;pt++)if(v.mipmaps&&v.mipmaps.length>0)for(let At=0;At<v.mipmaps.length;At++)Ct(k.__webglFramebuffer[pt][At],T,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,At);else Ct(k.__webglFramebuffer[pt],T,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);m(v)&&d(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let pt=0,At=Q.length;pt<At;pt++){const jt=Q[pt],it=n.get(jt);e.bindTexture(s.TEXTURE_2D,it.__webglTexture),Bt(s.TEXTURE_2D,jt),Ct(k.__webglFramebuffer,T,jt,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,0),m(jt)&&d(s.TEXTURE_2D)}e.unbindTexture()}else{let pt=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(pt=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(pt,J.__webglTexture),Bt(pt,v),v.mipmaps&&v.mipmaps.length>0)for(let At=0;At<v.mipmaps.length;At++)Ct(k.__webglFramebuffer[At],T,v,s.COLOR_ATTACHMENT0,pt,At);else Ct(k.__webglFramebuffer,T,v,s.COLOR_ATTACHMENT0,pt,0);m(v)&&d(pt),e.unbindTexture()}T.depthBuffer&&zt(T)}function j(T){const v=T.textures;for(let k=0,J=v.length;k<J;k++){const Q=v[k];if(m(Q)){const Z=C(T),wt=n.get(Q).__webglTexture;e.bindTexture(Z,wt),d(Z),e.unbindTexture()}}}const at=[],b=[];function It(T){if(T.samples>0){if(Tt(T)===!1){const v=T.textures,k=T.width,J=T.height;let Q=s.COLOR_BUFFER_BIT;const Z=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,wt=n.get(T),pt=v.length>1;if(pt)for(let At=0;At<v.length;At++)e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let At=0;At<v.length;At++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),pt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,wt.__webglColorRenderbuffer[At]);const jt=n.get(v[At]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,jt,0)}s.blitFramebuffer(0,0,k,J,0,0,k,J,Q,s.NEAREST),c===!0&&(at.length=0,b.length=0,at.push(s.COLOR_ATTACHMENT0+At),T.depthBuffer&&T.resolveDepthBuffer===!1&&(at.push(Z),b.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,b)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,at))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pt)for(let At=0;At<v.length;At++){e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,wt.__webglColorRenderbuffer[At]);const jt=n.get(v[At]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,jt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const v=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function et(T){return Math.min(i.maxSamples,T.samples)}function Tt(T){const v=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ot(T){const v=a.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function rt(T,v){const k=T.colorSpace,J=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==Ji&&k!==kn&&(se.getTransfer(k)===he?(J!==on||Q!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),v}function Mt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=V,this.setTexture2D=$,this.setTexture2DArray=N,this.setTexture3D=z,this.setTextureCube=G,this.rebindTextures=kt,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Tt}function I0(s,t){function e(n,i=kn){let r;const a=se.getTransfer(i);if(n===Rn)return s.UNSIGNED_BYTE;if(n===po)return s.UNSIGNED_SHORT_4_4_4_4;if(n===mo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Zc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===qc)return s.BYTE;if(n===Yc)return s.SHORT;if(n===ys)return s.UNSIGNED_SHORT;if(n===fo)return s.INT;if(n===ui)return s.UNSIGNED_INT;if(n===Tn)return s.FLOAT;if(n===Ts)return s.HALF_FLOAT;if(n===$c)return s.ALPHA;if(n===Jc)return s.RGB;if(n===on)return s.RGBA;if(n===jc)return s.LUMINANCE;if(n===Kc)return s.LUMINANCE_ALPHA;if(n===Vi)return s.DEPTH_COMPONENT;if(n===$i)return s.DEPTH_STENCIL;if(n===Qc)return s.RED;if(n===go)return s.RED_INTEGER;if(n===tl)return s.RG;if(n===_o)return s.RG_INTEGER;if(n===vo)return s.RGBA_INTEGER;if(n===hr||n===ur||n===dr||n===fr)if(a===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pa||n===La||n===Ia||n===Da)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Pa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===La)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ia)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ua||n===Na||n===Fa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ua||n===Na)return a===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fa)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Oa||n===Ba||n===za||n===ka||n===Ha||n===Ga||n===Va||n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===$a||n===Ja)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Oa)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ba)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===za)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ka)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ha)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ga)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Va)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wa)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xa)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qa)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ya)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Za)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$a)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ja)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pr||n===ja||n===Ka)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===pr)return a===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ja)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ka)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===el||n===Qa||n===to||n===eo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===pr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Qa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===to)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===eo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const D0={type:"move"};class fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),d=this._getHandJoint(l,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(D0)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Vt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const U0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,N0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class F0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new ze,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Wn({vertexShader:U0,fragmentShader:N0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _t(new Oe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class O0 extends Qi{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,g=null;const _=new F0,m=e.getContextAttributes();let d=null,C=null;const E=[],M=[],A=new ct;let P=null;const L=new Ie;L.viewport=new ue;const U=new Ie;U.viewport=new ue;const w=[L,U],x=new nd;let I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let nt=E[Y];return nt===void 0&&(nt=new fa,E[Y]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Y){let nt=E[Y];return nt===void 0&&(nt=new fa,E[Y]=nt),nt.getGripSpace()},this.getHand=function(Y){let nt=E[Y];return nt===void 0&&(nt=new fa,E[Y]=nt),nt.getHandSpace()};function H(Y){const nt=M.indexOf(Y.inputSource);if(nt===-1)return;const Ct=E[nt];Ct!==void 0&&(Ct.update(Y.inputSource,Y.frame,l||a),Ct.dispatchEvent({type:Y.type,data:Y.inputSource}))}function X(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",$);for(let Y=0;Y<E.length;Y++){const nt=M[Y];nt!==null&&(M[Y]=null,E[Y].disconnect(nt))}I=null,V=null,_.reset(),t.setRenderTarget(d),p=null,f=null,u=null,i=null,C=null,Gt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(d=t.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",X),i.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(A),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let Ct=null,lt=null,Ut=null;m.depth&&(Ut=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ct=m.stencil?$i:Vi,lt=m.stencil?Zi:ui);const zt={colorFormat:e.RGBA8,depthFormat:Ut,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(zt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),C=new di(f.textureWidth,f.textureHeight,{format:on,type:Rn,depthTexture:new xl(f.textureWidth,f.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const Ct={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,Ct),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),C=new di(p.framebufferWidth,p.framebufferHeight,{format:on,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}C.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Gt.setContext(i),Gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(Y){for(let nt=0;nt<Y.removed.length;nt++){const Ct=Y.removed[nt],lt=M.indexOf(Ct);lt>=0&&(M[lt]=null,E[lt].disconnect(Ct))}for(let nt=0;nt<Y.added.length;nt++){const Ct=Y.added[nt];let lt=M.indexOf(Ct);if(lt===-1){for(let zt=0;zt<E.length;zt++)if(zt>=M.length){M.push(Ct),lt=zt;break}else if(M[zt]===null){M[zt]=Ct,lt=zt;break}if(lt===-1)break}const Ut=E[lt];Ut&&Ut.connect(Ct)}}const N=new D,z=new D;function G(Y,nt,Ct){N.setFromMatrixPosition(nt.matrixWorld),z.setFromMatrixPosition(Ct.matrixWorld);const lt=N.distanceTo(z),Ut=nt.projectionMatrix.elements,zt=Ct.projectionMatrix.elements,kt=Ut[14]/(Ut[10]-1),qt=Ut[14]/(Ut[10]+1),j=(Ut[9]+1)/Ut[5],at=(Ut[9]-1)/Ut[5],b=(Ut[8]-1)/Ut[0],It=(zt[8]+1)/zt[0],et=kt*b,Tt=kt*It,ot=lt/(-b+It),rt=ot*-b;if(nt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(rt),Y.translateZ(ot),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ut[10]===-1)Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const Mt=kt+ot,T=qt+ot,v=et-rt,k=Tt+(lt-rt),J=j*qt/T*Mt,Q=at*qt/T*Mt;Y.projectionMatrix.makePerspective(v,k,J,Q,Mt,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function st(Y,nt){nt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(nt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let nt=Y.near,Ct=Y.far;_.texture!==null&&(_.depthNear>0&&(nt=_.depthNear),_.depthFar>0&&(Ct=_.depthFar)),x.near=U.near=L.near=nt,x.far=U.far=L.far=Ct,(I!==x.near||V!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),I=x.near,V=x.far),L.layers.mask=Y.layers.mask|2,U.layers.mask=Y.layers.mask|4,x.layers.mask=L.layers.mask|U.layers.mask;const lt=Y.parent,Ut=x.cameras;st(x,lt);for(let zt=0;zt<Ut.length;zt++)st(Ut[zt],lt);Ut.length===2?G(x,L,U):x.projectionMatrix.copy(L.projectionMatrix),ut(Y,x,lt)};function ut(Y,nt,Ct){Ct===null?Y.matrix.copy(nt.matrixWorld):(Y.matrix.copy(Ct.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(nt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ji*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let Et=null;function Bt(Y,nt){if(h=nt.getViewerPose(l||a),g=nt,h!==null){const Ct=h.views;p!==null&&(t.setRenderTargetFramebuffer(C,p.framebuffer),t.setRenderTarget(C));let lt=!1;Ct.length!==x.cameras.length&&(x.cameras.length=0,lt=!0);for(let zt=0;zt<Ct.length;zt++){const kt=Ct[zt];let qt=null;if(p!==null)qt=p.getViewport(kt);else{const at=u.getViewSubImage(f,kt);qt=at.viewport,zt===0&&(t.setRenderTargetTextures(C,at.colorTexture,f.ignoreDepthValues?void 0:at.depthStencilTexture),t.setRenderTarget(C))}let j=w[zt];j===void 0&&(j=new Ie,j.layers.enable(zt),j.viewport=new ue,w[zt]=j),j.matrix.fromArray(kt.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(kt.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(qt.x,qt.y,qt.width,qt.height),zt===0&&(x.matrix.copy(j.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),lt===!0&&x.cameras.push(j)}const Ut=i.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")){const zt=u.getDepthInformation(Ct[0]);zt&&zt.isValid&&zt.texture&&_.init(t,zt,i.renderState)}}for(let Ct=0;Ct<E.length;Ct++){const lt=M[Ct],Ut=E[Ct];lt!==null&&Ut!==void 0&&Ut.update(lt,nt,l||a)}Et&&Et(Y,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const Gt=new Ll;Gt.setAnimationLoop(Bt),this.setAnimationLoop=function(Y){Et=Y},this.dispose=function(){}}}const ni=new gn,B0=new fe;function z0(s,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,ul(s)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,C,E,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,C,E):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Be&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Be&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const C=t.get(d),E=C.envMap,M=C.envMapRotation;E&&(m.envMap.value=E,ni.copy(M),ni.x*=-1,ni.y*=-1,ni.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),m.envMapRotation.value.setFromMatrix4(B0.makeRotationFromEuler(ni)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,C,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*C,m.scale.value=E*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,C){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Be&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=C.texture,m.transmissionSamplerSize.value.set(C.width,C.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const C=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(C.matrixWorld),m.nearDistance.value=C.shadow.camera.near,m.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function k0(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(C,E){const M=E.program;n.uniformBlockBinding(C,M)}function l(C,E){let M=i[C.id];M===void 0&&(g(C),M=h(C),i[C.id]=M,C.addEventListener("dispose",m));const A=E.program;n.updateUBOMapping(C,A);const P=t.render.frame;r[C.id]!==P&&(f(C),r[C.id]=P)}function h(C){const E=u();C.__bindingPointIndex=E;const M=s.createBuffer(),A=C.__size,P=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,A,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,M),M}function u(){for(let C=0;C<o;C++)if(a.indexOf(C)===-1)return a.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(C){const E=i[C.id],M=C.uniforms,A=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let P=0,L=M.length;P<L;P++){const U=Array.isArray(M[P])?M[P]:[M[P]];for(let w=0,x=U.length;w<x;w++){const I=U[w];if(p(I,P,w,A)===!0){const V=I.__offset,H=Array.isArray(I.value)?I.value:[I.value];let X=0;for(let $=0;$<H.length;$++){const N=H[$],z=_(N);typeof N=="number"||typeof N=="boolean"?(I.__data[0]=N,s.bufferSubData(s.UNIFORM_BUFFER,V+X,I.__data)):N.isMatrix3?(I.__data[0]=N.elements[0],I.__data[1]=N.elements[1],I.__data[2]=N.elements[2],I.__data[3]=0,I.__data[4]=N.elements[3],I.__data[5]=N.elements[4],I.__data[6]=N.elements[5],I.__data[7]=0,I.__data[8]=N.elements[6],I.__data[9]=N.elements[7],I.__data[10]=N.elements[8],I.__data[11]=0):(N.toArray(I.__data,X),X+=z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,V,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(C,E,M,A){const P=C.value,L=E+"_"+M;if(A[L]===void 0)return typeof P=="number"||typeof P=="boolean"?A[L]=P:A[L]=P.clone(),!0;{const U=A[L];if(typeof P=="number"||typeof P=="boolean"){if(U!==P)return A[L]=P,!0}else if(U.equals(P)===!1)return U.copy(P),!0}return!1}function g(C){const E=C.uniforms;let M=0;const A=16;for(let L=0,U=E.length;L<U;L++){const w=Array.isArray(E[L])?E[L]:[E[L]];for(let x=0,I=w.length;x<I;x++){const V=w[x],H=Array.isArray(V.value)?V.value:[V.value];for(let X=0,$=H.length;X<$;X++){const N=H[X],z=_(N),G=M%A,st=G%z.boundary,ut=G+st;M+=st,ut!==0&&A-ut<z.storage&&(M+=A-ut),V.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=z.storage}}}const P=M%A;return P>0&&(M+=A-P),C.__size=M,C.__cache={},this}function _(C){const E={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(E.boundary=4,E.storage=4):C.isVector2?(E.boundary=8,E.storage=8):C.isVector3||C.isColor?(E.boundary=16,E.storage=12):C.isVector4?(E.boundary=16,E.storage=16):C.isMatrix3?(E.boundary=48,E.storage=48):C.isMatrix4?(E.boundary=64,E.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),E}function m(C){const E=C.target;E.removeEventListener("dispose",m);const M=a.indexOf(E.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function d(){for(const C in i)s.deleteBuffer(i[C]);a=[],i={},r={}}return{bind:c,update:l,dispose:d}}class H0{constructor(t={}){const{canvas:e=Bh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const C=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ve,this.toneMapping=Gn,this.toneMappingExposure=1;const M=this;let A=!1,P=0,L=0,U=null,w=-1,x=null;const I=new ue,V=new ue;let H=null;const X=new Ht(0);let $=0,N=e.width,z=e.height,G=1,st=null,ut=null;const Et=new ue(0,0,N,z),Bt=new ue(0,0,N,z);let Gt=!1;const Y=new So;let nt=!1,Ct=!1;this.transmissionResolutionScale=1;const lt=new fe,Ut=new fe,zt=new D,kt=new ue,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let j=!1;function at(){return U===null?G:1}let b=n;function It(y,S){return e.getContext(y,S)}try{const y={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${uo}`),e.addEventListener("webglcontextlost",q,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",yt,!1),b===null){const S="webgl2";if(b=It(S,y),b===null)throw It(S)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let et,Tt,ot,rt,Mt,T,v,k,J,Q,Z,wt,pt,At,jt,it,vt,Nt,Ft,Rt,Qt,Wt,ae,O;function gt(){et=new Jp(b),et.init(),Wt=new I0(b,et),Tt=new Wp(b,et,t,Wt),ot=new P0(b,et),Tt.reverseDepthBuffer&&f&&ot.buffers.depth.setReversed(!0),rt=new Qp(b),Mt=new _0,T=new L0(b,et,ot,Mt,Tt,Wt,rt),v=new qp(M),k=new $p(M),J=new rd(b),ae=new Gp(b,J),Q=new jp(b,J,rt,ae),Z=new em(b,Q,J,rt),Ft=new tm(b,Tt,T),it=new Xp(Mt),wt=new g0(M,v,k,et,Tt,ae,it),pt=new z0(M,Mt),At=new x0,jt=new T0(et),Nt=new Hp(M,v,k,ot,Z,p,c),vt=new C0(M,Z,Tt),O=new k0(b,rt,Tt,ot),Rt=new Vp(b,et,rt),Qt=new Kp(b,et,rt),rt.programs=wt.programs,M.capabilities=Tt,M.extensions=et,M.properties=Mt,M.renderLists=At,M.shadowMap=vt,M.state=ot,M.info=rt}gt();const W=new O0(M,b);this.xr=W,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const y=et.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=et.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(y){y!==void 0&&(G=y,this.setSize(N,z,!1))},this.getSize=function(y){return y.set(N,z)},this.setSize=function(y,S,R=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=y,z=S,e.width=Math.floor(y*G),e.height=Math.floor(S*G),R===!0&&(e.style.width=y+"px",e.style.height=S+"px"),this.setViewport(0,0,y,S)},this.getDrawingBufferSize=function(y){return y.set(N*G,z*G).floor()},this.setDrawingBufferSize=function(y,S,R){N=y,z=S,G=R,e.width=Math.floor(y*R),e.height=Math.floor(S*R),this.setViewport(0,0,y,S)},this.getCurrentViewport=function(y){return y.copy(I)},this.getViewport=function(y){return y.copy(Et)},this.setViewport=function(y,S,R,B){y.isVector4?Et.set(y.x,y.y,y.z,y.w):Et.set(y,S,R,B),ot.viewport(I.copy(Et).multiplyScalar(G).round())},this.getScissor=function(y){return y.copy(Bt)},this.setScissor=function(y,S,R,B){y.isVector4?Bt.set(y.x,y.y,y.z,y.w):Bt.set(y,S,R,B),ot.scissor(V.copy(Bt).multiplyScalar(G).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(y){ot.setScissorTest(Gt=y)},this.setOpaqueSort=function(y){st=y},this.setTransparentSort=function(y){ut=y},this.getClearColor=function(y){return y.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(y=!0,S=!0,R=!0){let B=0;if(y){let F=!1;if(U!==null){const K=U.texture.format;F=K===vo||K===_o||K===go}if(F){const K=U.texture.type,tt=K===Rn||K===ui||K===ys||K===Zi||K===po||K===mo,dt=Nt.getClearColor(),ft=Nt.getClearAlpha(),Ot=dt.r,Pt=dt.g,Dt=dt.b;tt?(g[0]=Ot,g[1]=Pt,g[2]=Dt,g[3]=ft,b.clearBufferuiv(b.COLOR,0,g)):(_[0]=Ot,_[1]=Pt,_[2]=Dt,_[3]=ft,b.clearBufferiv(b.COLOR,0,_))}else B|=b.COLOR_BUFFER_BIT}S&&(B|=b.DEPTH_BUFFER_BIT),R&&(B|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",q,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),Nt.dispose(),At.dispose(),jt.dispose(),Mt.dispose(),v.dispose(),k.dispose(),Z.dispose(),ae.dispose(),O.dispose(),wt.dispose(),W.dispose(),W.removeEventListener("sessionstart",Pn),W.removeEventListener("sessionend",es),un.stop()};function q(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const y=rt.autoReset,S=vt.enabled,R=vt.autoUpdate,B=vt.needsUpdate,F=vt.type;gt(),rt.autoReset=y,vt.enabled=S,vt.autoUpdate=R,vt.needsUpdate=B,vt.type=F}function yt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Xt(y){const S=y.target;S.removeEventListener("dispose",Xt),me(S)}function me(y){xe(y),Mt.remove(y)}function xe(y){const S=Mt.get(y).programs;S!==void 0&&(S.forEach(function(R){wt.releaseProgram(R)}),y.isShaderMaterial&&wt.releaseShaderCache(y))}this.renderBufferDirect=function(y,S,R,B,F,K){S===null&&(S=qt);const tt=F.isMesh&&F.matrixWorld.determinant()<0,dt=Pr(y,S,R,B,F);ot.setMaterial(B,tt);let ft=R.index,Ot=1;if(B.wireframe===!0){if(ft=Q.getWireframeAttribute(R),ft===void 0)return;Ot=2}const Pt=R.drawRange,Dt=R.attributes.position;let Yt=Pt.start*Ot,te=(Pt.start+Pt.count)*Ot;K!==null&&(Yt=Math.max(Yt,K.start*Ot),te=Math.min(te,(K.start+K.count)*Ot)),ft!==null?(Yt=Math.max(Yt,0),te=Math.min(te,ft.count)):Dt!=null&&(Yt=Math.max(Yt,0),te=Math.min(te,Dt.count));const oe=te-Yt;if(oe<0||oe===1/0)return;ae.setup(F,B,dt,R,ft);let le,ne=Rt;if(ft!==null&&(le=J.get(ft),ne=Qt,ne.setIndex(le)),F.isMesh)B.wireframe===!0?(ot.setLineWidth(B.wireframeLinewidth*at()),ne.setMode(b.LINES)):ne.setMode(b.TRIANGLES);else if(F.isLine){let Lt=B.linewidth;Lt===void 0&&(Lt=1),ot.setLineWidth(Lt*at()),F.isLineSegments?ne.setMode(b.LINES):F.isLineLoop?ne.setMode(b.LINE_LOOP):ne.setMode(b.LINE_STRIP)}else F.isPoints?ne.setMode(b.POINTS):F.isSprite&&ne.setMode(b.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ne.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))ne.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Lt=F._multiDrawStarts,ge=F._multiDrawCounts,Kt=F._multiDrawCount,pe=ft?J.get(ft).bytesPerElement:1,_i=Mt.get(B).currentProgram.getUniforms();for(let We=0;We<Kt;We++)_i.setValue(b,"_gl_DrawID",We),ne.render(Lt[We]/pe,ge[We])}else if(F.isInstancedMesh)ne.renderInstances(Yt,oe,F.count);else if(R.isInstancedBufferGeometry){const Lt=R._maxInstanceCount!==void 0?R._maxInstanceCount:1/0,ge=Math.min(R.instanceCount,Lt);ne.renderInstances(Yt,oe,ge)}else ne.render(Yt,oe)};function re(y,S,R){y.transparent===!0&&y.side===Me&&y.forceSinglePass===!1?(y.side=Be,y.needsUpdate=!0,Zn(y,S,R),y.side=Vn,y.needsUpdate=!0,Zn(y,S,R),y.side=Me):Zn(y,S,R)}this.compile=function(y,S,R=null){R===null&&(R=y),d=jt.get(R),d.init(S),E.push(d),R.traverseVisible(function(F){F.isLight&&F.layers.test(S.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),y!==R&&y.traverseVisible(function(F){F.isLight&&F.layers.test(S.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights();const B=new Set;return y.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const K=F.material;if(K)if(Array.isArray(K))for(let tt=0;tt<K.length;tt++){const dt=K[tt];re(dt,R,F),B.add(dt)}else re(K,R,F),B.add(K)}),E.pop(),d=null,B},this.compileAsync=function(y,S,R=null){const B=this.compile(y,S,R);return new Promise(F=>{function K(){if(B.forEach(function(tt){Mt.get(tt).currentProgram.isReady()&&B.delete(tt)}),B.size===0){F(y);return}setTimeout(K,10)}et.get("KHR_parallel_shader_compile")!==null?K():setTimeout(K,10)})};let ke=null;function tn(y){ke&&ke(y)}function Pn(){un.stop()}function es(){un.start()}const un=new Ll;un.setAnimationLoop(tn),typeof self<"u"&&un.setContext(self),this.setAnimationLoop=function(y){ke=y,W.setAnimationLoop(y),y===null?un.stop():un.start()},W.addEventListener("sessionstart",Pn),W.addEventListener("sessionend",es),this.render=function(y,S){if(S!==void 0&&S.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),S.parent===null&&S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(S),S=W.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,S,U),d=jt.get(y,E.length),d.init(S),E.push(d),Ut.multiplyMatrices(S.projectionMatrix,S.matrixWorldInverse),Y.setFromProjectionMatrix(Ut),Ct=this.localClippingEnabled,nt=it.init(this.clippingPlanes,Ct),m=At.get(y,C.length),m.init(),C.push(m),W.enabled===!0&&W.isPresenting===!0){const K=M.xr.getDepthSensingMesh();K!==null&&qn(K,S,-1/0,M.sortObjects)}qn(y,S,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(st,ut),j=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,j&&Nt.addToRenderList(m,y),this.info.render.frame++,nt===!0&&it.beginShadows();const R=d.state.shadowsArray;vt.render(R,y,S),nt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,F=m.transmissive;if(d.setupLights(),S.isArrayCamera){const K=S.cameras;if(F.length>0)for(let tt=0,dt=K.length;tt<dt;tt++){const ft=K[tt];Ln(B,F,y,ft)}j&&Nt.render(y);for(let tt=0,dt=K.length;tt<dt;tt++){const ft=K[tt];pi(m,y,ft,ft.viewport)}}else F.length>0&&Ln(B,F,y,S),j&&Nt.render(y),pi(m,y,S);U!==null&&L===0&&(T.updateMultisampleRenderTarget(U),T.updateRenderTargetMipmap(U)),y.isScene===!0&&y.onAfterRender(M,y,S),ae.resetDefaultState(),w=-1,x=null,E.pop(),E.length>0?(d=E[E.length-1],nt===!0&&it.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,C.pop(),C.length>0?m=C[C.length-1]:m=null};function qn(y,S,R,B){if(y.visible===!1)return;if(y.layers.test(S.layers)){if(y.isGroup)R=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(S);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Y.intersectsSprite(y)){B&&kt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ut);const tt=Z.update(y),dt=y.material;dt.visible&&m.push(y,tt,dt,R,kt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Y.intersectsObject(y))){const tt=Z.update(y),dt=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),kt.copy(y.boundingSphere.center)):(tt.boundingSphere===null&&tt.computeBoundingSphere(),kt.copy(tt.boundingSphere.center)),kt.applyMatrix4(y.matrixWorld).applyMatrix4(Ut)),Array.isArray(dt)){const ft=tt.groups;for(let Ot=0,Pt=ft.length;Ot<Pt;Ot++){const Dt=ft[Ot],Yt=dt[Dt.materialIndex];Yt&&Yt.visible&&m.push(y,tt,Yt,R,kt.z,Dt)}}else dt.visible&&m.push(y,tt,dt,R,kt.z,null)}}const K=y.children;for(let tt=0,dt=K.length;tt<dt;tt++)qn(K[tt],S,R,B)}function pi(y,S,R,B){const F=y.opaque,K=y.transmissive,tt=y.transparent;d.setupLightsView(R),nt===!0&&it.setGlobalState(M.clippingPlanes,R),B&&ot.viewport(I.copy(B)),F.length>0&&vn(F,S,R),K.length>0&&vn(K,S,R),tt.length>0&&vn(tt,S,R),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function Ln(y,S,R,B){if((R.isScene===!0?R.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[B.id]===void 0&&(d.state.transmissionRenderTarget[B.id]=new di(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?Ts:Rn,minFilter:hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));const K=d.state.transmissionRenderTarget[B.id],tt=B.viewport||I;K.setSize(tt.z*M.transmissionResolutionScale,tt.w*M.transmissionResolutionScale);const dt=M.getRenderTarget();M.setRenderTarget(K),M.getClearColor(X),$=M.getClearAlpha(),$<1&&M.setClearColor(16777215,.5),M.clear(),j&&Nt.render(R);const ft=M.toneMapping;M.toneMapping=Gn;const Ot=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),d.setupLightsView(B),nt===!0&&it.setGlobalState(M.clippingPlanes,B),vn(y,R,B),T.updateMultisampleRenderTarget(K),T.updateRenderTargetMipmap(K),et.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let Dt=0,Yt=S.length;Dt<Yt;Dt++){const te=S[Dt],oe=te.object,le=te.geometry,ne=te.material,Lt=te.group;if(ne.side===Me&&oe.layers.test(B.layers)){const ge=ne.side;ne.side=Be,ne.needsUpdate=!0,Yn(oe,R,B,le,ne,Lt),ne.side=ge,ne.needsUpdate=!0,Pt=!0}}Pt===!0&&(T.updateMultisampleRenderTarget(K),T.updateRenderTargetMipmap(K))}M.setRenderTarget(dt),M.setClearColor(X,$),Ot!==void 0&&(B.viewport=Ot),M.toneMapping=ft}function vn(y,S,R){const B=S.isScene===!0?S.overrideMaterial:null;for(let F=0,K=y.length;F<K;F++){const tt=y[F],dt=tt.object,ft=tt.geometry,Ot=B===null?tt.material:B,Pt=tt.group;dt.layers.test(R.layers)&&Yn(dt,S,R,ft,Ot,Pt)}}function Yn(y,S,R,B,F,K){y.onBeforeRender(M,S,R,B,F,K),y.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),F.onBeforeRender(M,S,R,B,y,K),F.transparent===!0&&F.side===Me&&F.forceSinglePass===!1?(F.side=Be,F.needsUpdate=!0,M.renderBufferDirect(R,S,B,F,y,K),F.side=Vn,F.needsUpdate=!0,M.renderBufferDirect(R,S,B,F,y,K),F.side=Me):M.renderBufferDirect(R,S,B,F,y,K),y.onAfterRender(M,S,R,B,F,K)}function Zn(y,S,R){S.isScene!==!0&&(S=qt);const B=Mt.get(y),F=d.state.lights,K=d.state.shadowsArray,tt=F.state.version,dt=wt.getParameters(y,F.state,K,S,R),ft=wt.getProgramCacheKey(dt);let Ot=B.programs;B.environment=y.isMeshStandardMaterial?S.environment:null,B.fog=S.fog,B.envMap=(y.isMeshStandardMaterial?k:v).get(y.envMap||B.environment),B.envMapRotation=B.environment!==null&&y.envMap===null?S.environmentRotation:y.envMapRotation,Ot===void 0&&(y.addEventListener("dispose",Xt),Ot=new Map,B.programs=Ot);let Pt=Ot.get(ft);if(Pt!==void 0){if(B.currentProgram===Pt&&B.lightsStateVersion===tt)return $n(y,dt),Pt}else dt.uniforms=wt.getUniforms(y),y.onBeforeCompile(dt,M),Pt=wt.acquireProgram(dt,ft),Ot.set(ft,Pt),B.uniforms=dt.uniforms;const Dt=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Dt.clippingPlanes=it.uniform),$n(y,dt),B.needsLights=Ps(y),B.lightsStateVersion=tt,B.needsLights&&(Dt.ambientLightColor.value=F.state.ambient,Dt.lightProbe.value=F.state.probe,Dt.directionalLights.value=F.state.directional,Dt.directionalLightShadows.value=F.state.directionalShadow,Dt.spotLights.value=F.state.spot,Dt.spotLightShadows.value=F.state.spotShadow,Dt.rectAreaLights.value=F.state.rectArea,Dt.ltc_1.value=F.state.rectAreaLTC1,Dt.ltc_2.value=F.state.rectAreaLTC2,Dt.pointLights.value=F.state.point,Dt.pointLightShadows.value=F.state.pointShadow,Dt.hemisphereLights.value=F.state.hemi,Dt.directionalShadowMap.value=F.state.directionalShadowMap,Dt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Dt.spotShadowMap.value=F.state.spotShadowMap,Dt.spotLightMatrix.value=F.state.spotLightMatrix,Dt.spotLightMap.value=F.state.spotLightMap,Dt.pointShadowMap.value=F.state.pointShadowMap,Dt.pointShadowMatrix.value=F.state.pointShadowMatrix),B.currentProgram=Pt,B.uniformsList=null,Pt}function mi(y){if(y.uniformsList===null){const S=y.currentProgram.getUniforms();y.uniformsList=mr.seqWithValue(S.seq,y.uniforms)}return y.uniformsList}function $n(y,S){const R=Mt.get(y);R.outputColorSpace=S.outputColorSpace,R.batching=S.batching,R.batchingColor=S.batchingColor,R.instancing=S.instancing,R.instancingColor=S.instancingColor,R.instancingMorph=S.instancingMorph,R.skinning=S.skinning,R.morphTargets=S.morphTargets,R.morphNormals=S.morphNormals,R.morphColors=S.morphColors,R.morphTargetsCount=S.morphTargetsCount,R.numClippingPlanes=S.numClippingPlanes,R.numIntersection=S.numClipIntersection,R.vertexAlphas=S.vertexAlphas,R.vertexTangents=S.vertexTangents,R.toneMapping=S.toneMapping}function Pr(y,S,R,B,F){S.isScene!==!0&&(S=qt),T.resetTextureUnits();const K=S.fog,tt=B.isMeshStandardMaterial?S.environment:null,dt=U===null?M.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ji,ft=(B.isMeshStandardMaterial?k:v).get(B.envMap||tt),Ot=B.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,Pt=!!R.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Dt=!!R.morphAttributes.position,Yt=!!R.morphAttributes.normal,te=!!R.morphAttributes.color;let oe=Gn;B.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(oe=M.toneMapping);const le=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,ne=le!==void 0?le.length:0,Lt=Mt.get(B),ge=d.state.lights;if(nt===!0&&(Ct===!0||y!==x)){const De=y===x&&B.id===w;it.setState(B,y,De)}let Kt=!1;B.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==ge.state.version||Lt.outputColorSpace!==dt||F.isBatchedMesh&&Lt.batching===!1||!F.isBatchedMesh&&Lt.batching===!0||F.isBatchedMesh&&Lt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Lt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Lt.instancing===!1||!F.isInstancedMesh&&Lt.instancing===!0||F.isSkinnedMesh&&Lt.skinning===!1||!F.isSkinnedMesh&&Lt.skinning===!0||F.isInstancedMesh&&Lt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Lt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Lt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Lt.instancingMorph===!1&&F.morphTexture!==null||Lt.envMap!==ft||B.fog===!0&&Lt.fog!==K||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==it.numPlanes||Lt.numIntersection!==it.numIntersection)||Lt.vertexAlphas!==Ot||Lt.vertexTangents!==Pt||Lt.morphTargets!==Dt||Lt.morphNormals!==Yt||Lt.morphColors!==te||Lt.toneMapping!==oe||Lt.morphTargetsCount!==ne)&&(Kt=!0):(Kt=!0,Lt.__version=B.version);let pe=Lt.currentProgram;Kt===!0&&(pe=Zn(B,S,F));let _i=!1,We=!1,ns=!1;const _e=pe.getUniforms(),Ye=Lt.uniforms;if(ot.useProgram(pe.program)&&(_i=!0,We=!0,ns=!0),B.id!==w&&(w=B.id,We=!0),_i||x!==y){ot.buffers.depth.getReversed()?(lt.copy(y.projectionMatrix),kh(lt),Hh(lt),_e.setValue(b,"projectionMatrix",lt)):_e.setValue(b,"projectionMatrix",y.projectionMatrix),_e.setValue(b,"viewMatrix",y.matrixWorldInverse);const He=_e.map.cameraPosition;He!==void 0&&He.setValue(b,zt.setFromMatrixPosition(y.matrixWorld)),Tt.logarithmicDepthBuffer&&_e.setValue(b,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&_e.setValue(b,"isOrthographic",y.isOrthographicCamera===!0),x!==y&&(x=y,We=!0,ns=!0)}if(F.isSkinnedMesh){_e.setOptional(b,F,"bindMatrix"),_e.setOptional(b,F,"bindMatrixInverse");const De=F.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),_e.setValue(b,"boneTexture",De.boneTexture,T))}F.isBatchedMesh&&(_e.setOptional(b,F,"batchingTexture"),_e.setValue(b,"batchingTexture",F._matricesTexture,T),_e.setOptional(b,F,"batchingIdTexture"),_e.setValue(b,"batchingIdTexture",F._indirectTexture,T),_e.setOptional(b,F,"batchingColorTexture"),F._colorsTexture!==null&&_e.setValue(b,"batchingColorTexture",F._colorsTexture,T));const Ze=R.morphAttributes;if((Ze.position!==void 0||Ze.normal!==void 0||Ze.color!==void 0)&&Ft.update(F,R,pe),(We||Lt.receiveShadow!==F.receiveShadow)&&(Lt.receiveShadow=F.receiveShadow,_e.setValue(b,"receiveShadow",F.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Ye.envMap.value=ft,Ye.flipEnvMap.value=ft.isCubeTexture&&ft.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&S.environment!==null&&(Ye.envMapIntensity.value=S.environmentIntensity),We&&(_e.setValue(b,"toneMappingExposure",M.toneMappingExposure),Lt.needsLights&&gi(Ye,ns),K&&B.fog===!0&&pt.refreshFogUniforms(Ye,K),pt.refreshMaterialUniforms(Ye,B,G,z,d.state.transmissionRenderTarget[y.id]),mr.upload(b,mi(Lt),Ye,T)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(mr.upload(b,mi(Lt),Ye,T),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&_e.setValue(b,"center",F.center),_e.setValue(b,"modelViewMatrix",F.modelViewMatrix),_e.setValue(b,"normalMatrix",F.normalMatrix),_e.setValue(b,"modelMatrix",F.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const De=B.uniformsGroups;for(let He=0,Ir=De.length;He<Ir;He++){const Jn=De[He];O.update(Jn,pe),O.bind(Jn,pe)}}return pe}function gi(y,S){y.ambientLightColor.needsUpdate=S,y.lightProbe.needsUpdate=S,y.directionalLights.needsUpdate=S,y.directionalLightShadows.needsUpdate=S,y.pointLights.needsUpdate=S,y.pointLightShadows.needsUpdate=S,y.spotLights.needsUpdate=S,y.spotLightShadows.needsUpdate=S,y.rectAreaLights.needsUpdate=S,y.hemisphereLights.needsUpdate=S}function Ps(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(y,S,R){Mt.get(y.texture).__webglTexture=S,Mt.get(y.depthTexture).__webglTexture=R;const B=Mt.get(y);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=R===void 0,B.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,S){const R=Mt.get(y);R.__webglFramebuffer=S,R.__useDefaultFramebuffer=S===void 0};const Ls=b.createFramebuffer();this.setRenderTarget=function(y,S=0,R=0){U=y,P=S,L=R;let B=!0,F=null,K=!1,tt=!1;if(y){const ft=Mt.get(y);if(ft.__useDefaultFramebuffer!==void 0)ot.bindFramebuffer(b.FRAMEBUFFER,null),B=!1;else if(ft.__webglFramebuffer===void 0)T.setupRenderTarget(y);else if(ft.__hasExternalTextures)T.rebindTextures(y,Mt.get(y.texture).__webglTexture,Mt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Dt=y.depthTexture;if(ft.__boundDepthTexture!==Dt){if(Dt!==null&&Mt.has(Dt)&&(y.width!==Dt.image.width||y.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(y)}}const Ot=y.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(tt=!0);const Pt=Mt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Pt[S])?F=Pt[S][R]:F=Pt[S],K=!0):y.samples>0&&T.useMultisampledRTT(y)===!1?F=Mt.get(y).__webglMultisampledFramebuffer:Array.isArray(Pt)?F=Pt[R]:F=Pt,I.copy(y.viewport),V.copy(y.scissor),H=y.scissorTest}else I.copy(Et).multiplyScalar(G).floor(),V.copy(Bt).multiplyScalar(G).floor(),H=Gt;if(R!==0&&(F=Ls),ot.bindFramebuffer(b.FRAMEBUFFER,F)&&B&&ot.drawBuffers(y,F),ot.viewport(I),ot.scissor(V),ot.setScissorTest(H),K){const ft=Mt.get(y.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+S,ft.__webglTexture,R)}else if(tt){const ft=Mt.get(y.texture),Ot=S;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,ft.__webglTexture,R,Ot)}else if(y!==null&&R!==0){const ft=Mt.get(y.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,ft.__webglTexture,R)}w=-1},this.readRenderTargetPixels=function(y,S,R,B,F,K,tt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=Mt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&tt!==void 0&&(dt=dt[tt]),dt){ot.bindFramebuffer(b.FRAMEBUFFER,dt);try{const ft=y.texture,Ot=ft.format,Pt=ft.type;if(!Tt.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}S>=0&&S<=y.width-B&&R>=0&&R<=y.height-F&&b.readPixels(S,R,B,F,Wt.convert(Ot),Wt.convert(Pt),K)}finally{const ft=U!==null?Mt.get(U).__webglFramebuffer:null;ot.bindFramebuffer(b.FRAMEBUFFER,ft)}}},this.readRenderTargetPixelsAsync=async function(y,S,R,B,F,K,tt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=Mt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&tt!==void 0&&(dt=dt[tt]),dt){const ft=y.texture,Ot=ft.format,Pt=ft.type;if(!Tt.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Tt.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(S>=0&&S<=y.width-B&&R>=0&&R<=y.height-F){ot.bindFramebuffer(b.FRAMEBUFFER,dt);const Dt=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Dt),b.bufferData(b.PIXEL_PACK_BUFFER,K.byteLength,b.STREAM_READ),b.readPixels(S,R,B,F,Wt.convert(Ot),Wt.convert(Pt),0);const Yt=U!==null?Mt.get(U).__webglFramebuffer:null;ot.bindFramebuffer(b.FRAMEBUFFER,Yt);const te=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await zh(b,te,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Dt),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,K),b.deleteBuffer(Dt),b.deleteSync(te),K}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,S=null,R=0){y.isTexture!==!0&&(Bi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),S=arguments[0]||null,y=arguments[1]);const B=Math.pow(2,-R),F=Math.floor(y.image.width*B),K=Math.floor(y.image.height*B),tt=S!==null?S.x:0,dt=S!==null?S.y:0;T.setTexture2D(y,0),b.copyTexSubImage2D(b.TEXTURE_2D,R,0,0,tt,dt,F,K),ot.unbindTexture()};const In=b.createFramebuffer(),Lr=b.createFramebuffer();this.copyTextureToTexture=function(y,S,R=null,B=null,F=0,K=null){y.isTexture!==!0&&(Bi("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,y=arguments[1],S=arguments[2],K=arguments[3]||0,R=null),K===null&&(F!==0?(Bi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),K=F,F=0):K=0);let tt,dt,ft,Ot,Pt,Dt,Yt,te,oe;const le=y.isCompressedTexture?y.mipmaps[K]:y.image;if(R!==null)tt=R.max.x-R.min.x,dt=R.max.y-R.min.y,ft=R.isBox3?R.max.z-R.min.z:1,Ot=R.min.x,Pt=R.min.y,Dt=R.isBox3?R.min.z:0;else{const Ze=Math.pow(2,-F);tt=Math.floor(le.width*Ze),dt=Math.floor(le.height*Ze),y.isDataArrayTexture?ft=le.depth:y.isData3DTexture?ft=Math.floor(le.depth*Ze):ft=1,Ot=0,Pt=0,Dt=0}B!==null?(Yt=B.x,te=B.y,oe=B.z):(Yt=0,te=0,oe=0);const ne=Wt.convert(S.format),Lt=Wt.convert(S.type);let ge;S.isData3DTexture?(T.setTexture3D(S,0),ge=b.TEXTURE_3D):S.isDataArrayTexture||S.isCompressedArrayTexture?(T.setTexture2DArray(S,0),ge=b.TEXTURE_2D_ARRAY):(T.setTexture2D(S,0),ge=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,S.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,S.unpackAlignment);const Kt=b.getParameter(b.UNPACK_ROW_LENGTH),pe=b.getParameter(b.UNPACK_IMAGE_HEIGHT),_i=b.getParameter(b.UNPACK_SKIP_PIXELS),We=b.getParameter(b.UNPACK_SKIP_ROWS),ns=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,le.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,le.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ot),b.pixelStorei(b.UNPACK_SKIP_ROWS,Pt),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Dt);const _e=y.isDataArrayTexture||y.isData3DTexture,Ye=S.isDataArrayTexture||S.isData3DTexture;if(y.isDepthTexture){const Ze=Mt.get(y),De=Mt.get(S),He=Mt.get(Ze.__renderTarget),Ir=Mt.get(De.__renderTarget);ot.bindFramebuffer(b.READ_FRAMEBUFFER,He.__webglFramebuffer),ot.bindFramebuffer(b.DRAW_FRAMEBUFFER,Ir.__webglFramebuffer);for(let Jn=0;Jn<ft;Jn++)_e&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Mt.get(y).__webglTexture,F,Dt+Jn),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Mt.get(S).__webglTexture,K,oe+Jn)),b.blitFramebuffer(Ot,Pt,tt,dt,Yt,te,tt,dt,b.DEPTH_BUFFER_BIT,b.NEAREST);ot.bindFramebuffer(b.READ_FRAMEBUFFER,null),ot.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(F!==0||y.isRenderTargetTexture||Mt.has(y)){const Ze=Mt.get(y),De=Mt.get(S);ot.bindFramebuffer(b.READ_FRAMEBUFFER,In),ot.bindFramebuffer(b.DRAW_FRAMEBUFFER,Lr);for(let He=0;He<ft;He++)_e?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Ze.__webglTexture,F,Dt+He):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Ze.__webglTexture,F),Ye?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,De.__webglTexture,K,oe+He):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,De.__webglTexture,K),F!==0?b.blitFramebuffer(Ot,Pt,tt,dt,Yt,te,tt,dt,b.COLOR_BUFFER_BIT,b.NEAREST):Ye?b.copyTexSubImage3D(ge,K,Yt,te,oe+He,Ot,Pt,tt,dt):b.copyTexSubImage2D(ge,K,Yt,te,Ot,Pt,tt,dt);ot.bindFramebuffer(b.READ_FRAMEBUFFER,null),ot.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else Ye?y.isDataTexture||y.isData3DTexture?b.texSubImage3D(ge,K,Yt,te,oe,tt,dt,ft,ne,Lt,le.data):S.isCompressedArrayTexture?b.compressedTexSubImage3D(ge,K,Yt,te,oe,tt,dt,ft,ne,le.data):b.texSubImage3D(ge,K,Yt,te,oe,tt,dt,ft,ne,Lt,le):y.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,K,Yt,te,tt,dt,ne,Lt,le.data):y.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,K,Yt,te,le.width,le.height,ne,le.data):b.texSubImage2D(b.TEXTURE_2D,K,Yt,te,tt,dt,ne,Lt,le);b.pixelStorei(b.UNPACK_ROW_LENGTH,Kt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,pe),b.pixelStorei(b.UNPACK_SKIP_PIXELS,_i),b.pixelStorei(b.UNPACK_SKIP_ROWS,We),b.pixelStorei(b.UNPACK_SKIP_IMAGES,ns),K===0&&S.generateMipmaps&&b.generateMipmap(ge),ot.unbindTexture()},this.copyTextureToTexture3D=function(y,S,R=null,B=null,F=0){return y.isTexture!==!0&&(Bi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),R=arguments[0]||null,B=arguments[1]||null,y=arguments[2],S=arguments[3],F=arguments[4]||0),Bi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,S,R,B,F)},this.initRenderTarget=function(y){Mt.get(y).__webglFramebuffer===void 0&&T.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?T.setTextureCube(y,0):y.isData3DTexture?T.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?T.setTexture2DArray(y,0):T.setTexture2D(y,0),ot.unbindTexture()},this.resetState=function(){P=0,L=0,U=null,ot.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}}class G0 extends pl{constructor(){super();const t=new Te;t.deleteAttribute("uv");const e=new ht({side:Be}),n=new ht,i=new rn(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new _t(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new _t(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new _t(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const c=new _t(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new _t(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new _t(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new _t(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const f=new _t(t,Oi(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const p=new _t(t,Oi(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const g=new _t(t,Oi(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new _t(t,Oi(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new _t(t,Oi(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const d=new _t(t,Oi(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Oi(s){const t=new Cn;return t.color.setScalar(s),t}function ye(s,t){const e=document.createElement("canvas");return e.width=s,e.height=t,e}function Se(s,{repeat:t=[1,1],srgb:e=!0,anisotropy:n=4}={}){const i=new gu(s);return i.wrapS=i.wrapT=Ms,i.repeat.set(t[0],t[1]),i.anisotropy=n,e&&(i.colorSpace=Ve),i.needsUpdate=!0,i}function Rs(s,t,e,n=.08,i=.08){const r=s.getImageData(0,0,t,e),a=r.data;for(let o=0;o<a.length;o+=4){const c=(Math.random()-.5)*255*n;a[o]=Math.max(0,Math.min(255,a[o]+c)),a[o+1]=Math.max(0,Math.min(255,a[o+1]+c)),a[o+2]=Math.max(0,Math.min(255,a[o+2]+c)),i>0&&(a[o+3]=Math.min(255,a[o+3]))}s.putImageData(r,0,0)}function hn(s,t,e,n=40,i="rgba(25,20,12,0.12)"){for(let r=0;r<n;r++){const a=Math.random()*t,o=Math.random()*e,c=6+Math.random()*60,l=s.createRadialGradient(a,o,0,a,o,c);l.addColorStop(0,i),l.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=l,s.fillRect(a-c,o-c,c*2,c*2)}}function Rr(s,t,e,n=24,i="rgba(230,220,190,0.08)"){s.strokeStyle=i,s.lineWidth=.6+Math.random()*1.4;for(let r=0;r<n;r++){s.beginPath();const a=Math.random()*t,o=Math.random()*e;s.moveTo(a,o),s.lineTo(a+(Math.random()-.5)*80,o+(Math.random()-.2)*28),s.stroke()}}function V0(s){const e=ye(512,512),n=e.getContext("2d");n.fillStyle="#b8ad92",n.fillRect(0,0,512,512);const i=512/4;for(let r=0;r<4;r++)for(let a=0;a<4;a++){const o=(a+r)%2===0;n.fillStyle=o?"#191b19":"#d3c7a6",n.fillRect(a*i,r*i,i,i),n.fillStyle="rgba(255,255,255,0.035)",n.fillRect(a*i+2,r*i+2,i-4,2)}n.strokeStyle="rgba(9,10,8,.55)",n.lineWidth=4;for(let r=0;r<=4;r++)n.beginPath(),n.moveTo(r*i,0),n.lineTo(r*i,512),n.stroke(),n.beginPath(),n.moveTo(0,r*i),n.lineTo(512,r*i),n.stroke();return hn(n,512,512,65,"rgba(24,19,10,.23)"),Rr(n,512,512,48),Rs(n,512,512,.07),Se(e,{repeat:[8,8],anisotropy:s.capabilities.getMaxAnisotropy()})}function W0(s){const t=ye(512,512),e=t.getContext("2d");e.fillStyle="#5e5546",e.fillRect(0,0,512,512);for(let n=0;n<3500;n++){const i=70+Math.random()*40;e.fillStyle=`rgba(${i},${i-5},${i-15},${Math.random()*.1})`,e.fillRect(Math.random()*512,Math.random()*512,1+Math.random()*4,1+Math.random()*4)}return e.fillStyle="#3d352b",e.fillRect(0,415,512,12),e.fillStyle="rgba(195,173,129,.13)",e.fillRect(0,404,512,4),hn(e,512,512,45,"rgba(12,10,6,.25)"),Rr(e,512,512,30,"rgba(220,200,160,.06)"),Rs(e,512,512,.04),Se(t,{repeat:[5,3],anisotropy:s.capabilities.getMaxAnisotropy()})}function X0(s){const t=ye(512,512),e=t.getContext("2d");e.fillStyle="#777164",e.fillRect(0,0,512,512);const n=170;for(let i=0;i<4;i++)for(let r=0;r<4;r++)e.fillStyle=(r+i)%2?"#6f695d":"#7c7567",e.fillRect(r*n,i*n,n,n),e.strokeStyle="rgba(20,18,14,.4)",e.lineWidth=3,e.strokeRect(r*n,i*n,n,n);return hn(e,512,512,24,"rgba(25,20,10,.2)"),Se(t,{repeat:[8,8],anisotropy:s.capabilities.getMaxAnisotropy()})}function q0(s,t="#4c4d48"){const e=ye(256,256),n=e.getContext("2d");n.fillStyle=t,n.fillRect(0,0,256,256),n.strokeStyle="rgba(255,255,255,.11)",n.lineWidth=1;for(let i=0;i<35;i++){const r=Math.random()*256;n.beginPath(),n.moveTo(0,r),n.lineTo(256,r+(Math.random()-.5)*5),n.stroke()}return Rr(n,256,256,50,"rgba(255,255,255,.12)"),hn(n,256,256,18,"rgba(26,16,6,.25)"),Rs(n,256,256,.1),Se(e,{repeat:[2,2],anisotropy:s.capabilities.getMaxAnisotropy()})}function Y0(s,t="#6a4831"){const e=ye(256,256),n=e.getContext("2d");n.fillStyle=t,n.fillRect(0,0,256,256);for(let i=0;i<8e3;i++){const r=Math.random()*.17;n.strokeStyle=Math.random()>.5?`rgba(255,235,205,${r})`:`rgba(15,8,4,${r})`,n.beginPath();const a=Math.random()*256,o=Math.random()*256;n.moveTo(a,o),n.lineTo(a+(Math.random()-.5)*5,o+2+Math.random()*7),n.stroke()}return hn(n,256,256,10,"rgba(20,10,4,.18)"),Se(e,{repeat:[2,2],anisotropy:s.capabilities.getMaxAnisotropy()})}function Fl(s,t="#4b1733"){const e=ye(512,512),n=e.getContext("2d"),i=n.createLinearGradient(0,0,512,0);for(let r=0;r<=20;r++){const a=r/20,o=Math.sin(a*Math.PI*18)*.5+.5;i.addColorStop(a,`rgb(${75+o*38},${20+o*14},${48+o*24})`)}n.fillStyle=i,n.fillRect(0,0,512,512),n.fillStyle="rgba(0,0,0,.18)";for(let r=8;r<512;r+=25)n.fillRect(r,0,5,512);return hn(n,512,512,30,"rgba(0,0,0,.3)"),Rs(n,512,512,.06),Se(e,{repeat:[4,1],anisotropy:s.capabilities.getMaxAnisotropy()})}function ii(s,t="freddy"){const i=ye(512,720),r=i.getContext("2d"),a=r.createLinearGradient(0,0,0,720);a.addColorStop(0,t==="chica"?"#d8aa28":t==="foxy"?"#70231d":"#a67c45"),a.addColorStop(1,t==="chica"?"#7f5d0d":t==="foxy"?"#35100e":"#5d3e28"),r.fillStyle=a,r.fillRect(0,0,512,720),r.save(),r.translate(512/2,720*.62);for(let l=0;l<20;l++)r.rotate(Math.PI/10),r.fillStyle=l%2?"rgba(255,243,202,.1)":"rgba(47,20,10,.07)",r.beginPath(),r.moveTo(0,0),r.lineTo(-90,-600),r.lineTo(90,-600),r.closePath(),r.fill();r.restore();const o=512/2;if(t==="freddy")r.fillStyle="#4b2d1d",r.beginPath(),r.ellipse(o,366,150,182,0,0,Math.PI*2),r.fill(),r.beginPath(),r.ellipse(o-124,226,54,66,-.2,0,Math.PI*2),r.fill(),r.beginPath(),r.ellipse(o+124,226,54,66,.2,0,Math.PI*2),r.fill(),r.fillStyle="#b07c4f",r.beginPath(),r.ellipse(o,442,96,76,0,0,Math.PI*2),r.fill(),r.fillStyle="#141312",r.beginPath(),r.ellipse(o,300,92,22,0,0,Math.PI*2),r.fill(),r.fillRect(o-58,215,116,86),r.fillStyle="#f3ebd6",r.beginPath(),r.arc(o-48,348,19,0,Math.PI*2),r.arc(o+48,348,19,0,Math.PI*2),r.fill(),r.fillStyle="#16110d",r.beginPath(),r.arc(o-48,350,9,0,Math.PI*2),r.arc(o+48,350,9,0,Math.PI*2),r.fill();else if(t==="bonnie")r.fillStyle="#59417e",r.beginPath(),r.ellipse(o,385,142,174,0,0,Math.PI*2),r.fill(),r.beginPath(),r.ellipse(o-94,178,40,143,-.16,0,Math.PI*2),r.fill(),r.beginPath(),r.ellipse(o+94,178,40,143,.16,0,Math.PI*2),r.fill(),r.fillStyle="#c7a6d6",r.beginPath(),r.ellipse(o-93,183,17,105,-.16,0,Math.PI*2),r.fill(),r.beginPath(),r.ellipse(o+93,183,17,105,.16,0,Math.PI*2),r.fill(),r.fillStyle="#a888bb",r.beginPath(),r.ellipse(o,452,82,57,0,0,Math.PI*2),r.fill(),r.fillStyle="#fff7df",r.beginPath(),r.arc(o-46,356,23,0,Math.PI*2),r.arc(o+46,356,23,0,Math.PI*2),r.fill(),r.fillStyle="#9e2330",r.beginPath(),r.arc(o-46,358,10,0,Math.PI*2),r.arc(o+46,358,10,0,Math.PI*2),r.fill();else if(t==="chica"){r.fillStyle="#d6b02c",r.beginPath(),r.ellipse(o,385,145,170,0,0,Math.PI*2),r.fill(),r.fillStyle="#e3c043",r.beginPath(),r.ellipse(o,465,84,49,0,0,Math.PI*2),r.fill(),r.fillStyle="#d56e1e",r.beginPath(),r.moveTo(o-58,426),r.lineTo(o+58,426),r.lineTo(o,482),r.closePath(),r.fill(),r.fillStyle="#f7efd8",r.beginPath(),r.arc(o-52,350,24,0,Math.PI*2),r.arc(o+52,350,24,0,Math.PI*2),r.fill(),r.fillStyle="#8a4b9d",r.beginPath(),r.arc(o-52,352,11,0,Math.PI*2),r.arc(o+52,352,11,0,Math.PI*2),r.fill(),r.strokeStyle="#e0be4a",r.lineWidth=12;for(let l=-3;l<=3;l++)r.beginPath(),r.moveTo(o+l*18,224),r.lineTo(o+l*22,165),r.stroke()}else r.fillStyle="#862a21",r.beginPath(),r.ellipse(o,380,138,175,0,0,Math.PI*2),r.fill(),r.beginPath(),r.moveTo(o-122,258),r.lineTo(o-153,126),r.lineTo(o-43,216),r.closePath(),r.fill(),r.beginPath(),r.moveTo(o+122,258),r.lineTo(o+153,126),r.lineTo(o+43,216),r.closePath(),r.fill(),r.fillStyle="#c46a42",r.beginPath(),r.ellipse(o+12,445,96,55,.05,0,Math.PI*2),r.fill(),r.fillStyle="#17110e",r.fillRect(o-118,321,82,56),r.strokeStyle="#6e1b17",r.lineWidth=8,r.beginPath(),r.moveTo(o-118,321),r.lineTo(o-36,377),r.stroke(),r.fillStyle="#f4e8ce",r.beginPath(),r.arc(o+60,347,22,0,Math.PI*2),r.fill(),r.fillStyle="#d0b84e",r.beginPath(),r.arc(o+60,349,8,0,Math.PI*2),r.fill();const c=t==="freddy"?"FREDDY FAZBEAR":t==="bonnie"?"BONNIE":t==="chica"?"CHICA":"FOXY THE PIRATE";return r.textAlign="center",r.fillStyle="rgba(30,10,6,.58)",r.fillRect(0,42,512,102),r.font="700 62px Impact, Arial Black, sans-serif",r.fillStyle="#fff4cf",r.shadowColor="#38100a",r.shadowBlur=0,r.shadowOffsetY=6,r.fillText(c,o,117),r.shadowOffsetY=0,r.font="22px Georgia, serif",r.fillStyle="rgba(255,244,207,.8)",r.fillText("FREDDY FAZBEAR’S PIZZA",o,660),r.fillStyle="rgba(225,210,160,.52)",r.save(),r.translate(30,50),r.rotate(-.4),r.fillRect(-28,-14,120,28),r.restore(),r.save(),r.translate(476,662),r.rotate(.35),r.fillRect(-28,-14,120,28),r.restore(),hn(r,512,720,26,"rgba(20,12,5,.23)"),Rr(r,512,720,20,"rgba(255,240,200,.12)"),Rs(r,512,720,.04),Se(i,{anisotropy:s.capabilities.getMaxAnisotropy()})}function Z0(s){const n=ye(1024,512),i=n.getContext("2d"),r=i.createLinearGradient(0,0,0,512);r.addColorStop(0,"#281037"),r.addColorStop(.55,"#451443"),r.addColorStop(1,"#120916"),i.fillStyle=r,i.fillRect(0,0,1024,512);for(let o=0;o<140;o++){const c=Math.random()*1024,l=Math.random()*512*.8,h=Math.random()*4+1;i.fillStyle=`rgba(255,${180+Math.random()*60},${80+Math.random()*60},${.3+Math.random()*.7})`,i.beginPath(),i.arc(c,l,h,0,Math.PI*2),i.fill()}i.textAlign="center",i.font="700 88px Impact, Arial Black, sans-serif",i.fillStyle="#f6d97b",i.shadowColor="#ff8b27",i.shadowBlur=28,i.fillText("FREDDY & FRIENDS",1024/2,190),i.font="700 50px Impact, Arial Black, sans-serif",i.shadowBlur=12,i.fillStyle="#f1ead7",i.fillText("LET’S EAT!",1024/2,265),i.shadowBlur=0;const a=42;for(let o=0;o<1024;o+=a)for(let c=0;c<2;c++)i.fillStyle=(o/a+c)%2?"#d9cba9":"#17131a",i.fillRect(o,512-a*2+c*a,a,a);return hn(i,1024,512,25,"rgba(0,0,0,.3)"),Se(n,{anisotropy:s.capabilities.getMaxAnisotropy()})}function $0(s){const t=ye(512,400),e=t.getContext("2d");e.clearRect(0,0,512,400),e.fillStyle="#f0e4c5",e.beginPath(),e.arc(256,220,205,Math.PI,0),e.lineTo(461,360),e.quadraticCurveTo(256,430,51,360),e.closePath(),e.fill(),e.strokeStyle="#bc9d60",e.lineWidth=9,e.stroke(),e.textAlign="center",e.font="700 68px Impact, Arial Black, sans-serif",e.fillStyle="#b03a42",e.fillText("LET’S EAT!!!",256,246);for(let n=0;n<16;n++)e.fillStyle=["#d39c2f","#b43a3a","#4b8b68","#5f4c93"][n%4],e.beginPath(),e.arc(60+n*26,300+Math.sin(n)*9,7,0,Math.PI*2),e.fill();return Se(t,{anisotropy:s.capabilities.getMaxAnisotropy()})}function J0(s){const t=ye(1024,256),e=t.getContext("2d");return e.clearRect(0,0,1024,256),e.textAlign="center",e.font="700 108px Impact, Arial Black, sans-serif",e.fillStyle="#e4c155",e.shadowColor="#9a3512",e.shadowBlur=18,e.shadowOffsetY=8,e.fillText("FREDDY FAZBEAR'S",512,112),e.shadowBlur=10,e.fillStyle="#f1e5c4",e.font="700 84px Impact, Arial Black, sans-serif",e.fillText("PIZZA",512,201),Se(t,{anisotropy:s.capabilities.getMaxAnisotropy()})}function j0(s){const t=ye(512,320),e=t.getContext("2d");return e.fillStyle="#d9cba8",e.fillRect(0,0,512,320),e.strokeStyle="#4b3927",e.lineWidth=10,e.strokeRect(10,10,492,300),e.textAlign="center",e.fillStyle="#a3262b",e.font="700 78px Impact, Arial Black, sans-serif",e.fillText("SORRY!",256,104),e.fillStyle="#30261c",e.font="700 35px Arial, sans-serif",e.fillText("OUT OF ORDER",256,165),e.font="25px Georgia, serif",e.fillText("PIRATE COVE",256,212),e.fillStyle="#5e4b32",e.font="italic 24px Georgia, serif",e.fillText("— Freddy Fazbear’s Pizza —",256,264),hn(e,512,320,10,"rgba(40,25,10,.2)"),Se(t,{anisotropy:s.capabilities.getMaxAnisotropy()})}function K0(s){const t=ye(512,320),e=t.getContext("2d");e.fillStyle="#06110e",e.fillRect(0,0,512,320),e.fillStyle="rgba(70,255,185,.08)";for(let n=0;n<320;n+=4)e.fillRect(0,n,512,1);e.strokeStyle="rgba(94,255,195,.55)",e.lineWidth=2;for(let n=0;n<8;n++)e.beginPath(),e.moveTo(30,40+n*34),e.lineTo(150+Math.random()*300,40+n*34),e.stroke();return e.fillStyle="rgba(110,255,195,.8)",e.font="24px monospace",e.fillText("SECURITY SYSTEM",30,22),e.fillText("● REC  01:24:12",350,300),hn(e,512,320,8,"rgba(0,0,0,.25)"),Se(t)}function lr(s,t=0){const e=ye(384,512),n=e.getContext("2d");if(n.fillStyle="#e7ddc4",n.fillRect(0,0,384,512),n.strokeStyle="#4d4637",n.lineWidth=5,t%3===0)n.beginPath(),n.arc(192,230,90,0,Math.PI*2),n.stroke(),n.beginPath(),n.arc(158,210,12,0,Math.PI*2),n.arc(226,210,12,0,Math.PI*2),n.stroke(),n.beginPath(),n.arc(192,250,40,.1,Math.PI-.1),n.stroke(),n.beginPath(),n.moveTo(155,142),n.lineTo(130,74),n.lineTo(182,128),n.moveTo(229,142),n.lineTo(254,74),n.lineTo(202,128),n.stroke(),n.fillStyle="#7a4a2b",n.font="44px Comic Sans MS, cursive",n.fillText("FREDDY",62,430),n.fillStyle="#d2b43e",n.beginPath(),n.arc(80,100,25,0,Math.PI*2),n.fill();else if(t%3===1){const i=["#b1393e","#3f81a7","#b9932f","#3f8a61"];for(let r=0;r<4;r++)n.strokeStyle=i[r],n.beginPath(),n.moveTo(36+r*85,260),n.lineTo(36+r*85,90),n.lineTo(72+r*85,130),n.lineTo(108+r*85,90),n.stroke();n.fillStyle="#3c3930",n.font="37px Comic Sans MS, cursive",n.fillText("MY FRIENDS",30,350),n.fillStyle="#b1393e",n.beginPath(),n.arc(320,70,32,0,Math.PI*2),n.fill()}else n.strokeStyle="#5c4682",n.lineWidth=8,n.beginPath(),n.ellipse(190,220,90,110,0,0,Math.PI*2),n.stroke(),n.beginPath(),n.ellipse(150,100,24,90,-.2,0,Math.PI*2),n.ellipse(230,100,24,90,.2,0,Math.PI*2),n.stroke(),n.fillStyle="#5c4682",n.beginPath(),n.arc(160,225,12,0,Math.PI*2),n.arc(220,225,12,0,Math.PI*2),n.fill(),n.fillStyle="#3c3930",n.font="40px Comic Sans MS, cursive",n.fillText("BONNIE",98,440);for(let i=0;i<300;i++)n.fillStyle=`rgba(80,70,50,${Math.random()*.035})`,n.fillRect(Math.random()*384,Math.random()*512,2,2);return Se(e)}function Oc(s){const t=ye(512,512),e=t.getContext("2d");return e.fillStyle="#e0d4b5",e.fillRect(0,0,512,512),e.strokeStyle="#b62d2d",e.lineWidth=18,e.strokeRect(16,16,480,480),e.fillStyle="#b62d2d",e.beginPath(),e.moveTo(256,60),e.lineTo(450,400),e.lineTo(62,400),e.closePath(),e.fill(),e.fillStyle="#f0e6cc",e.textAlign="center",e.font="700 132px Impact, sans-serif",e.fillText("!",256,350),e.fillStyle="#34291c",e.font="700 42px Impact, sans-serif",e.fillText("EMPLOYEES ONLY",256,458),e.font="20px Arial, sans-serif",e.fillText("FREDDY FAZBEAR’S PIZZA",256,490),hn(e,512,512,15,"rgba(30,20,8,.23)"),Se(t)}function Q0(s){const t=ye(512,512),e=t.getContext("2d");e.fillStyle="#bca57c",e.fillRect(0,0,512,512),e.translate(256,256);for(let n=0;n<16;n++)e.rotate(Math.PI/8),e.fillStyle=n%2?"#c58a55":"#b97847",e.beginPath(),e.arc(0,0,140,-.2,.2),e.lineTo(0,0),e.fill();e.fillStyle="#d6b053";for(let n=-2;n<=2;n++)for(let i=-2;i<=2;i++)(n+i)%3&&(e.beginPath(),e.arc(n*52+Math.sin(i)*10,i*52,19,0,Math.PI*2),e.fill());e.fillStyle="#a63c2e";for(let n=0;n<12;n++){const i=Math.random()*Math.PI*2,r=Math.random()*120;e.beginPath(),e.arc(Math.cos(i)*r,Math.sin(i)*r,9,0,Math.PI*2),e.fill()}return e.fillStyle="rgba(40,20,8,.18)",e.font="700 34px Impact, sans-serif",e.textAlign="center",e.fillText("FREDDY'S PIZZA",0,185),Se(t)}const tg=Math.PI*2;function St(s,t,e=[0,0,0],n=[1,1,1]){const i=new _t(s,t);return i.position.set(...e),i.scale.set(...n),i.castShadow=!0,i.receiveShadow=!0,i}function zn(s,t,e=8,n=16){return new bo(s,t,e,n)}function Bc(s,t,e,n,i=.28,r=6,a=!0){const o=new Vt,c=i/r;for(let l=0;l<r;l++){const h=St(new Te(c*.72,.075,.08),t,[-i/2+c*(l+.5),a?0:-.055,0],[1,1,1]);h.rotation.x=a?.04:-.04,o.add(h)}return o.position.set(0,e,n),s.add(o),o}function eg(s,t,e,n,i,r=1){for(let a=0;a<3;a++){const o=St(zn(.025,.13,4,8),t,[e+(a-1)*.055,n-.12,i+.03],[1,1,1]);o.rotation.x=-.22,s.add(o)}}function ng(s){const t=new Vt,e=St(new Fe(.13,.24,4),s,[-.12,0,0]);e.rotation.z=Math.PI/2,e.scale.set(1,1,.55);const n=St(new Fe(.13,.24,4),s,[.12,0,0]);return n.rotation.z=-Math.PI/2,n.scale.set(1,1,.55),t.add(e,n),t.add(St(new ie(.065,12,8),s,[0,0,0])),t}function ig(s,t){const e=new Vt,n=St(new ee(.37,.4,.045,28),s,[0,0,0]),i=St(new ee(.2,.235,.33,24),s,[0,.18,0]),r=St(new ee(.238,.238,.055,24),t,[0,.055,0]);return e.add(n,i,r),e}function sg(s,t,e){const n=new Vt,i=new bl;i.moveTo(0,.3),i.bezierCurveTo(-.24,.3,-.35,.12,-.25,-.02),i.bezierCurveTo(-.38,-.2,-.24,-.42,0,-.34),i.bezierCurveTo(.24,-.42,.38,-.2,.25,-.02),i.bezierCurveTo(.35,.12,.24,.3,0,.3);const r=new Ao(i,{depth:.09,bevelEnabled:!0,bevelSize:.025,bevelThickness:.018,bevelSegments:2}),a=St(r,s,[0,0,0],[1,1,1]);a.rotation.x=Math.PI/2,n.add(a);const o=St(new ee(.09,.09,.015,20),t,[0,-.04,.07]);o.rotation.x=Math.PI/2,n.add(o);const c=St(new Te(.09,.65,.055),t,[0,.62,.05]);n.add(c);const l=St(new Te(.14,.17,.07),s,[0,1.02,.05]);n.add(l);for(let h=0;h<5;h++){const u=St(new ee(.004,.004,1.3,4),e,[-.032+h*.016,.47,.095]);n.add(u)}for(let h=0;h<4;h++){const u=St(new ee(.011,.011,.09,6),e,[-.065+h%2*.13,.96+Math.floor(h/2)*.1,.05]);u.rotation.z=Math.PI/2,n.add(u)}return n}function rg(s){const t=new Vt,e=St(new ee(.095,.075,.14,18,1,!0),new ht({color:"#d4859b",roughness:.7,side:Me}),[0,0,0]);t.add(e);const n=St(new ee(.085,.085,.07,18),new ht({color:"#9b6238",roughness:.9}),[0,.1,0]);t.add(n);const i=new ht({color:"#f0c7d1",roughness:.7});for(let o=0;o<5;o++){const c=.045+o*.009,l=.14+o*.045,h=St(new ie(c,12,9),i,[0,l,0]);t.add(h)}const r=St(new ie(.035,12,8),new ht({color:"#a92024",roughness:.45}),[0,.38,0]);t.add(r);const a=new Cn({color:"#17120b"});return t.add(St(new ie(.018,8,6),a,[-.03,.2,.075])),t.add(St(new ie(.018,8,6),a,[.03,.2,.075])),t}function ag(s){const t=new Vt,e=St(new ee(.075,.07,.17,12),s,[0,.02,0]);t.add(e);const n=St(new cn(.115,.026,8,28,Math.PI*1.35),s,[0,-.16,.01]);return n.rotation.z=Math.PI*.35,n.rotation.y=Math.PI/2,t.add(n),t}function og(s,t){const e=new Vt;return e.add(St(new ee(.028,.032,.28,10),s,[0,0,0])),e.add(St(new ie(.075,12,9),t,[0,.18,0])),e.add(St(new cn(.079,.009,6,16),s,[0,.18,0])),e}function cg(s){const t=new Vt,e=St(new ie(.102,18,14),s.eyeWhite,[0,0,0],[1,1,.75]),n=St(new ie(.058,16,12),s.iris,[0,0,.071],[1,1,.55]),i=St(new ie(.025,12,8),s.pupil,[0,0,.098],[1,1,.45]),r=St(new ie(.009,8,6),s.glint,[-.014,.018,.119]);return t.add(e,n,i,r),t}function lg(s,t="freddy",e=new Map){const n={freddy:{fur:"#5a3824",belly:"#a87850",accent:"#171716",iris:"#4f7fa5",scale:1.02,feet:"#4b2e1e"},bonnie:{fur:"#5d4488",belly:"#b295c8",accent:"#8f2434",iris:"#a54278",scale:1,feet:"#47326a"},chica:{fur:"#d1a72d",belly:"#e3c85c",accent:"#d06720",iris:"#87529d",scale:.98,feet:"#c66a22"},foxy:{fur:"#7e2b23",belly:"#b56747",accent:"#2e1b16",iris:"#d1b14c",scale:1.01,feet:"#5b1b16"}},i=n[t]||n.freddy,r=`${t}-fur`;let a=e.get(r);a||(a=Y0(s,i.fur),e.set(r,a));const o={fur:new ht({color:i.fur,map:a,roughness:.94,metalness:.02}),furLight:new ht({color:i.belly,map:a,roughness:.92}),accent:new ht({color:i.accent,roughness:.72}),feet:new ht({color:i.feet,map:a,roughness:.95}),endo:new ht({color:"#3d4143",metalness:.78,roughness:.34}),dark:new ht({color:"#171513",roughness:.64}),mouth:new ht({color:"#240d0d",roughness:.8}),teeth:new ht({color:"#e4ddc6",roughness:.5}),eyeWhite:new ht({color:"#f1ead6",roughness:.28,emissive:new Ht("#7d745f"),emissiveIntensity:.12}),iris:new ht({color:i.iris,roughness:.3,emissive:new Ht(i.iris),emissiveIntensity:.28}),pupil:new ht({color:"#090807",roughness:.2}),glint:new Cn({color:"#fffbe8"}),plastic:new ht({color:"#292725",roughness:.5,metalness:.18}),red:new ht({color:"#781f21",roughness:.7})},c=new Vt,l=new Vt;c.add(l);const h={type:t,materials:o},u=[];for(const N of[-1,1]){const z=new Vt;z.position.set(N*.235,1.02,0);const G=St(zn(.17,.36,6,14),o.fur,[0,-.27,0],[1,1,.95]);z.add(G);const st=St(new ie(.14,14,10),o.endo,[0,-.56,0]);z.add(st);const ut=St(zn(.135,.32,6,12),o.fur,[0,-.78,0]);z.add(ut);const Et=St(new ee(.1,.09,.12,10),o.endo,[0,-1,0]);z.add(Et);const Bt=St(new Te(.29,.18,.48),o.feet,[0,-1.045,.13]);Bt.geometry.translate(0,0,0);const Gt=St(new ie(.155,14,8),o.feet,[0,-1.045,.355],[1,.58,.9]);z.add(Bt,Gt);for(let Y=0;Y<3;Y++){const nt=St(new Fe(.026,.13,7),o.endo,[(-1+Y)*.075,-1.1,.48]);nt.rotation.x=Math.PI/2,z.add(nt)}l.add(z),u.push(z)}h.legs=u;const f=St(new Te(.68,.28,.46),o.fur,[0,1.13,0]);f.geometry=new Te(.68,.28,.46),l.add(f);const p=St(new ie(.31,18,12),o.fur,[0,1.16,0],[1,.7,.8]);l.add(p);const g=new Vt;g.position.y=1.56,l.add(g),h.torso=g;const _=St(zn(.43,.5,8,20),o.fur,[0,0,0],[1,1,.76]);g.add(_);const m=St(new ie(.37,20,14),o.furLight,[0,-.07,.24],[.86,1.03,.42]);g.add(m);const d=St(new cn(.34,.012,6,28,Math.PI*1.2),o.endo,[0,-.32,.2]);d.rotation.x=Math.PI/2,g.add(d);for(let N=0;N<3;N++){const z=St(new ee(.03,.03,.022,12),o.plastic,[0,-.03-N*.13,.39]);z.rotation.x=Math.PI/2,g.add(z)}const C=[];for(const N of[-1,1]){const z=new Vt;z.position.set(N*.49,.34,0),z.rotation.z=N*-.14,g.add(z);const G=St(new ie(.145,14,10),o.endo,[0,0,0]);z.add(G);const st=St(zn(.135,.34,6,14),o.fur,[0,-.26,0]);z.add(st);const ut=new Vt;ut.position.y=-.53,z.add(ut),ut.add(St(new ie(.12,12,9),o.endo,[0,0,0]));const Et=St(zn(.12,.32,6,12),o.fur,[0,-.25,0]);ut.add(Et);const Bt=St(new ee(.082,.076,.1,10),o.endo,[0,-.44,0]);ut.add(Bt);const Gt=new Vt;if(Gt.position.set(0,-.53,.01),ut.add(Gt),t==="foxy"&&N===-1)Gt.add(ag(o.endo));else{const Y=St(new ie(.11,14,10),o.fur,[0,0,0],[.8,1.15,.65]);Gt.add(Y),eg(Gt,o.fur,0,0,0,N)}C.push({shoulder:z,elbow:ut,hand:Gt,side:N})}h.arms=C;const E=ng(t==="chica"?o.accent:t==="bonnie"?o.red:o.plastic);if(E.position.set(0,1.93,.35),E.scale.setScalar(t==="freddy"?1.25:1.05),l.add(E),t==="chica"){const N=new _t(new Oe(.62,.5),new ht({map:$0(s),roughness:.9,transparent:!0,side:Me}));N.position.set(0,1.4,.475),N.rotation.x=-.1,l.add(N),h.bib=N}const M=St(new ee(.15,.17,.22,12),o.endo,[0,1.97,0]);l.add(M);const A=new Vt;A.position.set(0,2.19,0),l.add(A),h.head=A;const P=St(new ie(.35,24,18),o.fur,[0,0,0],[1,.98,.94]);A.add(P);const L=St(new ie(.31,18,12),o.fur,[0,.12,-.02],[1,.65,.95]);if(A.add(L),t==="bonnie"){for(const N of[-1,1]){const z=new Vt;z.position.set(N*.24,.28,0),z.rotation.z=N*.13,z.add(St(zn(.105,.4,6,12),o.fur,[0,.23,0],[.9,1,.7]));const G=St(zn(.062,.31,6,10),o.furLight,[0,.25,.045],[.78,1,.3]);z.add(G),A.add(z)}h.ears=A.children.filter(N=>N.type==="Group")}else if(t==="freddy"){for(const z of[-1,1]){const G=St(new ie(.13,16,12),o.fur,[z*.29,.26,0],[1,1,.65]);A.add(G);const st=St(new ie(.073,12,9),o.furLight,[z*.29,.26,.065],[1,1,.35]);A.add(st)}const N=ig(o.plastic,o.accent);N.position.set(0,.31,0),N.rotation.z=-.06,A.add(N),h.hat=N}else if(t==="chica"){for(let z=-2;z<=2;z++){const G=St(new Fe(.045,.3+Math.abs(z)*-.03,7),o.fur,[z*.065,.34,-.01]);G.rotation.z=z*-.14,A.add(G)}const N=St(new Fe(.06,.34,8),o.fur,[.08,.33,.03]);N.rotation.z=-.3,A.add(N)}else if(t==="foxy")for(const N of[-1,1]){const z=St(new Fe(.125,.38,7),o.fur,[N*.245,.3,0]);z.rotation.z=N*-.17,A.add(z);const G=St(new Fe(.057,.24,6),o.furLight,[N*.25,.31,.05]);G.rotation.z=N*-.17,A.add(G)}const U=St(new ie(.27,20,14),o.furLight,[0,-.11,.26],t==="foxy"?[1.12,.74,1.15]:[1.02,.72,.92]);A.add(U);const w=St(new ie(.205,18,12),o.mouth,[0,-.2,.29],[1.02,.34,.72]);A.add(w);const x=new Vt;x.position.set(0,-.17,.17),A.add(x);const I=St(new ie(.24,18,12),o.furLight,[0,-.1,.09],[1,.34,.8]);x.add(I);const V=St(new ie(.192,14,10),o.mouth,[0,-.015,.1],[1,.18,.74]);x.add(V),Bc(x,o.teeth,-.045,.2,.31,t==="foxy"?7:6,!0),Bc(A,o.teeth,-.2,.38,.3,t==="foxy"?7:6,!1),h.jaw=x;const H=St(new ie(.085,14,10),o.plastic,[0,.005,.51],[1.12,.8,.86]);if(A.add(H),t==="freddy"){const N=St(new cn(.086,.018,6,16),o.endo,[0,.005,.47]);N.rotation.x=Math.PI/2,A.add(N)}if(t==="chica"){const N=St(new Fe(.17,.3,4),o.accent,[0,-.045,.47]);N.rotation.x=Math.PI/2+.25,N.rotation.y=Math.PI/4,N.scale.set(1.15,1,.55),A.add(N);const z=St(new Fe(.15,.24,4),o.accent,[0,-.16,.45]);z.rotation.x=Math.PI/2+.2,z.rotation.y=Math.PI/4,z.scale.set(1.05,.8,.5),x.add(z)}const X=[];for(const N of[-1,1]){const z=cg(o);z.position.set(N*.125,.09,.3),z.scale.setScalar(t==="foxy"?.9:1),A.add(z),X.push(z);const G=St(new Te(.17,.038,.065),o.fur,[N*.125,.22,.3]);G.rotation.z=N*-.11,A.add(G)}if(h.eyes=X,t==="foxy"){const N=St(new Tr(.13,20),o.dark,[.125,.09,.411]);N.scale.set(1.1,1.1,1),A.add(N);const z=St(new Te(.56,.035,.025),o.dark,[0,.13,.34]);z.rotation.z=-.12,A.add(z);const G=new ht({color:"#3e1511",roughness:.9});for(let st=0;st<3;st++){const ut=St(new Te(.018,.12,.02),G,[-.22+st*.035,-.12,.45]);ut.rotation.z=.4,A.add(ut)}}if(t==="bonnie"){const N=sg(o.red,o.dark,o.endo);N.position.set(.57,1.28,.28),N.rotation.set(-.12,-.15,-.25),N.scale.setScalar(.8),l.add(N),h.guitar=N}else if(t==="freddy"){const N=og(o.endo,o.dark);N.position.set(.64,1.15,.38),N.rotation.z=-.35,l.add(N),h.mic=N}else if(t==="chica"){const N=rg();N.position.set(.67,1.16,.36),N.scale.setScalar(.95),l.add(N),h.cupcake=N}else if(t==="foxy"){const N=new _t(new Oe(.42,.3),new ht({color:"#34202c",roughness:.9,side:Me}));N.position.set(0,1.8,.31),N.rotation.x=-.35,l.add(N)}const $=St(new cn(.285,.009,5,20,Math.PI),o.endo,[0,-.18,.33]);return $.rotation.x=Math.PI/2,g.add($),c.scale.setScalar(i.scale),c.userData={type:t,parts:h,baseScale:i.scale,phase:Math.random()*tg,eyeGlow:t==="foxy"?"#e8c24c":t==="chica"?"#b078d3":"#7fb2df",location:"stage"},c}function pa(s,t=0){var n,i;const e=(i=(n=s==null?void 0:s.userData)==null?void 0:n.parts)==null?void 0:i.jaw;e&&(e.rotation.x=t*.62)}function hg(s,t,e="idle",n=1){if(!s)return;const{parts:i,phase:r}=s.userData,a=i.head,o=i.arms,c=t+r,l=Math.sin(c*1.9)*.012;i.torso.position.y=1.56+l,a&&(a.rotation.y=Math.sin(c*.43)*.14+Math.sin(c*1.3)*.02,a.rotation.z=Math.sin(c*.61)*.025),o&&o.forEach((h,u)=>{const f=Math.sin(c*.8+u*1.8)*.03;h.shoulder.rotation.x=f,h.shoulder.rotation.z=h.side*-.14+Math.sin(c*.55+u)*.015,h.elbow.rotation.x=.08+Math.sin(c*.75+u)*.02}),e==="door"?(a&&(a.rotation.y=Math.sin(c*.7)*.28),i.jaw&&pa(s,.08+Math.abs(Math.sin(c*1.6))*.1),s.position.y=Math.sin(c*2.3)*.008):e==="run"?(a&&(a.rotation.z=Math.sin(c*15)*.09),i.legs&&i.legs.forEach((h,u)=>{h.rotation.x=Math.sin(c*9+u*Math.PI)*.38}),o&&o.forEach((h,u)=>{h.shoulder.rotation.x=Math.sin(c*9+u*Math.PI+.4)*.55})):e==="scare"?(a&&(a.rotation.z=Math.sin(c*28)*.12,a.rotation.x=Math.sin(c*34)*.08),i.jaw&&pa(s,.82+Math.sin(c*25)*.14),i.eyes&&i.eyes.forEach((h,u)=>{h.rotation.z=Math.sin(c*40+u)*.14})):e==="stage"&&(a&&(a.rotation.x=Math.sin(c*.34)*.035),i.jaw&&pa(s,.02)),n!==1&&o&&o.forEach(h=>h.shoulder.rotation.x*=n)}function je(s,t=1){var e,n;if((n=(e=s==null?void 0:s.userData)==null?void 0:e.parts)!=null&&n.eyes)for(const i of s.userData.parts.eyes){const r=i.children[1];r!=null&&r.material&&(r.material.emissiveIntensity=.28+t*2.6)}}const Hi=(s,t,e)=>new D(s,t,e);function dn(s,t,e){const n=s.clone();return n.needsUpdate=!0,n.wrapS=n.wrapT=Ms,n.repeat.set(t,e),n}function bt(s,t,e,n,i=[0,0,0]){const r=new _t(new Te(...t),n);return r.position.set(...e),r.rotation.set(...i),r.castShadow=!0,r.receiveShadow=!0,s.add(r),r}function ai(s,t,e,n,i=[0,0,0]){const r=new _t(new Oe(...t),n);return r.position.set(...e),r.rotation.set(...i),r.receiveShadow=!0,s.add(r),r}function Je(s,t,e,n,i=1.1,r=1.55){const a=new ht({map:t,roughness:.82,side:Me});return ai(s,[i,r],e,a,n)}function ma(s,t,e,n=4.18,i="#d9d2bb"){const r=new Vt;r.position.set(t,n,e),bt(r,[1.25,.07,.32],[0,0,0],new ht({color:"#3a3932",roughness:.55,metalness:.4}));const a=bt(r,[1.1,.025,.22],[0,-.045,0],new ht({color:i,emissive:new Ht(i),emissiveIntensity:2.4,roughness:.22}));return r.userData.glow=a,s.add(r),r}function ga(s,t,e,n=0,i=null){const r=new Vt;r.position.set(t,0,e),r.rotation.y=n;const a=i||new ht({color:"#5a2d31",roughness:.82}),o=new ht({color:"#2a2926",metalness:.6,roughness:.4});bt(r,[.55,.08,.5],[0,.58,0],a),bt(r,[.55,.62,.07],[0,.89,-.23],a,[.12,0,0]);for(const c of[-1,1])for(const l of[-1,1]){const h=new _t(new ee(.022,.025,.56,8),o);h.position.set(c*.22,.29,l*.2),r.add(h)}return s.add(r),r}function ug(s,t,e,n=1.05){const i=new Vt;i.position.set(t,0,e);const r=fg(),a=new ht({map:r,roughness:.82,side:Me}),o=new _t(new ee(n,n,.075,32),a);o.position.y=.95,o.castShadow=o.receiveShadow=!0,i.add(o);const c=new _t(new ee(n,n*.98,.34,32,1,!0),a);c.position.y=.77,i.add(c);const l=new ht({color:"#3b3934",metalness:.6,roughness:.4}),h=new _t(new ee(.07,.11,.74,10),l);h.position.y=.37,i.add(h);const u=new _t(new ee(.34,.4,.055,16),l);u.position.y=.03,i.add(u);const f=new _t(new ee(.31,.31,.04,24),new ht({map:Q0(),roughness:.8}));f.position.set(-.1,1,0),i.add(f);const p=new ht({color:"#b99c69",roughness:.9});bt(i,[.6,.1,.6],[.46,1.02,.22],p,[0,.25,0]);for(let g=0;g<4;g++){const _=new _t(new Fe(.1,.35,8),new ht({color:["#b63a37","#d1a030","#4d7d94","#6a4c8b"][g],roughness:.75}));_.position.set(Math.cos(g*2)*.52,1.18,Math.sin(g*2)*.52),i.add(_)}return i.add(dg(.28,-.32,.04)),s.add(i),i}function dg(s,t,e){const n=new _t(new ee(s,s*.88,.025,20),new ht({color:"#d6cdba",roughness:.45}));return n.position.set(t,1.005,e),n}function fg(){const s=ye(256,256),t=s.getContext("2d");t.fillStyle="#b23a3c",t.fillRect(0,0,256,256);for(let n=0;n<8;n++)for(let i=0;i<8;i++)(n+i)%2===0&&(t.fillStyle="rgba(235,220,190,.18)",t.fillRect(n*32,i*32,32,32));return t.fillStyle="rgba(230,215,190,.65)",t.font="18px Georgia, serif",t.textAlign="center",t.fillText("FREDDY’S",128,132),Se(s,{repeat:[1,1]})}function pg(s,t,e,n,i){const r=new Vt;r.position.set(t,e,n);const a=new _t(new ie(.18,16,12),new ht({color:i,roughness:.34}));a.scale.set(1,1.25,1),a.castShadow=!0,r.add(a);const o=new _t(new Fe(.045,.07,6),new ht({color:i,roughness:.4}));o.position.y=-.25,o.rotation.z=Math.PI,r.add(o);const c=new Ce().setFromPoints([Hi(0,-.26,0),Hi(0,-2.2,0)]),l=new pu(c,new _l({color:"#a79980",transparent:!0,opacity:.5}));return r.add(l),r.userData.phase=Math.random()*5,s.add(r),r}function mg(s,t,e,n=0){const i=new Vt;i.position.set(s,t,e),i.rotation.y=n;const r=new _t(new Te(.2,.16,.42),new ht({color:"#242522",roughness:.46,metalness:.42}));r.position.z=-.08,i.add(r);const a=new _t(new ee(.07,.08,.12,12),new ht({color:"#0d0d0c",roughness:.2,metalness:.7}));a.rotation.x=Math.PI/2,a.position.set(0,0,-.32),i.add(a);const o=new _t(new ie(.015,8,6),new Cn({color:"#ff2a24"}));return o.position.set(.065,.075,-.28),i.add(o),i.userData.led=o,i}function xs(s,t,e,n,i){const r=new Oe(s,t,28,2),a=r.attributes.position;for(let l=0;l<a.count;l++){const h=a.getX(l);a.setZ(l,Math.sin(h*3.1)*.1+Math.cos(h*1.4)*.08)}r.computeVertexNormals();const o=new ht({map:e,roughness:.9,side:Me}),c=new _t(r,o);return c.position.set(n,t/2,i),c.castShadow=!0,c}function gg(s,t,e){const n=new Vt,i=Fl(s,"#3b1231");i.repeat.set(3,1);const r=xs(2.72,3.8,i,0,0);r.position.x=-1.36,r.material.emissive=new Ht("#1b0717"),r.material.emissiveIntensity=.9;const a=xs(2.72,3.8,i,0,0);return a.position.x=1.36,a.material.emissive=new Ht("#1b0717"),a.material.emissiveIntensity=.9,n.add(r,a),n.position.set(t,0,e),n.userData={left:r,right:a},n}function _g(s,t){const e=new Map,n={characters:{},doors:{},lights:{},cams:{},props:{},interactives:[]},i=V0(s),r=W0(s),a=X0(s),o=q0(s),c=Fl(s),l=Z0(s),h=K0(),u=new ht({map:dn(i,3,3),color:"#bdb39a",roughness:.72,metalness:.04}),f=new ht({map:dn(i,10,10),color:"#b7ad96",roughness:.76}),p=new ht({map:dn(r,2.4,1.4),color:"#9b907e",roughness:.9}),g=new ht({map:dn(r,2.4,1.4),color:"#6a6256",roughness:.95}),_=new ht({map:dn(a,3,3),color:"#777166",roughness:.9}),m=new ht({map:dn(o,1,1),color:"#5c5d57",metalness:.68,roughness:.45}),d=new ht({color:"#242420",roughness:.55,metalness:.58}),C=new ht({color:"#2a2119",roughness:.74,metalness:.15}),E=new ht({color:"#090807",roughness:.86}),M=new ht({color:"#3a0d0b",roughness:.6,metalness:.2}),A=new Vt;n.office=A,t.add(A);const P=ai(A,[8.6,8.6],[0,0,13.2],u,[-Math.PI/2,0,0]);P.receiveShadow=!0,bt(A,[8.6,.14,8.6],[0,4.3,13.2],_),bt(A,[8.6,4.3,.18],[0,2.15,17.45],p),bt(A,[1.05,.7,.055],[1.9,1.75,17.33],m);for(let S=0;S<7;S++)bt(A,[.92,.018,.03],[1.9,1.48+S*.09,17.29],d);Je(A,Oc(),[-2.35,2.65,17.33],[0,Math.PI,0],.78,.78),Je(A,lr(s,0),[-.85,1.95,17.33],[0,Math.PI,0],.48,.64),Je(A,lr(s,1),[.2,1.98,17.33],[0,Math.PI,0],.48,.64),bt(A,[1.55,4.3,.2],[-3.5,2.15,9.02],p),bt(A,[1.55,4.3,.2],[3.5,2.15,9.02],p),bt(A,[5.55,1.1,.2],[0,.55,9.02],g),bt(A,[5.55,.84,.2],[0,3.88,9.02],g);const L=new _t(new Oe(5.45,2.34),new Yu({color:"#93a9a7",transparent:!0,opacity:.12,roughness:.08,metalness:.3,side:Me}));L.position.set(0,2.22,9.03),A.add(L);for(let S=-2;S<=2;S++)bt(A,[.035,2.35,.035],[S*1.08,2.22,9.13],d);for(let S=0;S<3;S++)bt(A,[5.45,.03,.03],[0,1.38+S*.83,9.13],d);bt(A,[5.55,.12,.34],[0,1.07,9.05],C),bt(A,[5.55,.12,.34],[0,3.38,9.05],C);for(const S of[-1,1])bt(A,[.2,4.3,1.7],[S*4.3,2.15,9.87],p),bt(A,[.2,4.3,4.22],[S*4.3,2.15,15.34],p),bt(A,[.2,1.15,2.25],[S*4.3,3.72,11.85],g),bt(A,[.26,2.68,.13],[S*4.3,1.34,10.72],C),bt(A,[.26,2.68,.13],[S*4.3,1.34,12.98],C),bt(A,[.26,.14,2.4],[S*4.3,2.74,11.85],C);bt(A,[8.5,.08,.12],[0,.04,9.1],C),bt(A,[8.5,.1,.1],[0,4.12,9.12],C);for(let S=0;S<6;S++){const R=new _t(new ee(.012,.012,1.5+Math.random(),5),E);R.position.set(-2.8+S*1.1,4.05,12.2+Math.random()*3),R.rotation.z=(Math.random()-.5)*.15,A.add(R)}for(const S of[-1,1]){const R=S<0?"left":"right",B=new Vt;B.position.set(S*4.2,1.4,11.85);const F=dn(o,.8,1.6),K=new _t(new Te(.12,2.62,2.32),new ht({map:F,color:"#4a4c48",metalness:.7,roughness:.5}));K.position.y=0,K.castShadow=!0,B.add(K);for(let oe=0;oe<6;oe++)bt(B,[.035,.055,2.03],[S*.07,-.92+oe*.37,0],d);bt(B,[.08,.13,.32],[S*.08,.62,-.83],M),B.userData.panel=K,A.add(B),n.doors[R]={group:B,panel:K,amount:0,target:0,lightMesh:null,lamp:null};const tt=new Vt;tt.position.set(S*4.05,1.38,13.55),tt.rotation.y=S*-Math.PI/2,bt(tt,[.3,.82,.1],[0,0,0],m);const dt=new _t(new ee(.055,.055,.035,14),new ht({color:"#a1201d",emissive:"#5b0d0c",emissiveIntensity:.7,roughness:.4}));dt.rotation.x=Math.PI/2,dt.position.set(0,.2,.07),tt.add(dt);const ft=new _t(new ee(.055,.055,.035,14),new ht({color:"#d9c68f",emissive:"#594a27",emissiveIntensity:.5,roughness:.4}));ft.rotation.x=Math.PI/2,ft.position.set(0,-.16,.07),tt.add(ft);const Ot=ye(256,128),Pt=Ot.getContext("2d");Pt.fillStyle="#171613",Pt.fillRect(0,0,256,128),Pt.strokeStyle="#a6946b",Pt.lineWidth=5,Pt.strokeRect(6,6,244,116),Pt.fillStyle="#d8c494",Pt.textAlign="center",Pt.font="700 32px Arial, sans-serif",Pt.fillText("DOOR",128,54),Pt.fillText("LIGHT",128,102);const Dt=new _t(new Oe(.22,.11),new Cn({map:Se(Ot)}));Dt.position.set(0,-.52,.055),tt.add(Dt),A.add(tt),n.doors[R].buttonPanel=tt,n.doors[R].button=dt,n.doors[R].lightButton=ft;const Yt=new Vt;Yt.position.set(S*4.1,3.06,11.85);const te=new _t(new ie(.075,12,8),new ht({color:"#2b0908",emissive:"#ff1f16",emissiveIntensity:.2,roughness:.3}));Yt.add(te),Yt.add(new _t(new cn(.1,.02,6,16),d)),A.add(Yt),n.doors[R].lightMesh=te}for(const S of[-1,1]){const R=new Vt,B=S*6.1;ai(R,[4.2,5.6],[B,0,12.1],u,[-Math.PI/2,0,0]),bt(R,[4.2,4.3,.18],[B,2.15,14.85],g),bt(R,[.18,4.3,5.6],[S*8.2,2.15,12.1],g),bt(R,[4.2,.16,5.6],[B,4.3,12.1],_),Je(R,ii(s,S<0?"bonnie":"chica"),[S*8.08,2.3,12.2],[0,S<0?Math.PI/2:-Math.PI/2,0],.85,1.2);const F=new rn(16758379,0,7.5,2);F.position.set(S*3.65,2.72,11.85),R.add(F);const K=ma(R,B,12.1,4.16,"#ffd9a0");K.userData.glow.visible=!1,n.lights[S<0?"leftHall":"rightHall"]={light:F,fixture:K,flicker:Math.random()*10};const tt=new ht({color:"#6e5332",roughness:.9});if(S<0)bt(R,[.75,.32,.7],[-7.3,.16,13.6],tt,[0,.2,0]),bt(R,[.7,.5,.65],[-7.1,.5,13.35],tt,[0,-.14,0]),bt(R,[.5,.45,.5],[-7.32,.24,14.2],tt,[0,.1,0]);else{bt(R,[.9,.14,.55],[7.2,.75,10.25],m,[0,0,-.12]);for(const dt of[-.35,.35])bt(R,[.05,.7,.05],[7.2+dt,.38,10.25],d)}t.add(R)}const U=new Vt;U.position.set(0,0,14.4);const w=new ht({color:"#32271e",roughness:.64,metalness:.06});bt(U,[3.9,.14,1.18],[0,1.02,0],w),bt(U,[3.75,.85,.08],[0,.56,-.5],w),bt(U,[.12,1,1],[-1.85,.52,0],d),bt(U,[.12,1,1],[1.85,.52,0],d),bt(U,[3.3,.04,.8],[0,.06,0],d);for(let S=0;S<3;S++)bt(U,[1.08,.21,.045],[-.62,.76-S*.25,-.51],C);for(let S=0;S<3;S++)bt(U,[.22,.025,.04],[-.62,.76-S*.25,-.54],new ht({color:"#b49454",metalness:.8,roughness:.3}));A.add(U);const x=new Vt;x.position.set(-1.12,1.1,14.31);const I=new ht({color:"#77776f",metalness:.7,roughness:.34});bt(x,[.3,.055,.3],[0,0,0],I);const V=new _t(new ee(.025,.035,.35,10),I);V.position.y=.18,x.add(V);const H=new Vt;H.position.y=.38,H.rotation.x=-.1;const X=new _t(new cn(.27,.014,6,28),I);H.add(X);for(let S=0;S<8;S++){const R=new _t(new cn(.27,.0055,4,20,Math.PI),I);R.rotation.z=S*Math.PI/8,H.add(R)}const $=new Vt;for(let S=0;S<3;S++){const R=new _t(new Te(.19,.055,.022),new ht({color:"#a8a294",roughness:.55,metalness:.15}));R.position.x=Math.cos(S*Math.PI*2/3)*.12,R.position.y=Math.sin(S*Math.PI*2/3)*.12,R.rotation.z=S*Math.PI*2/3,$.add(R)}H.add($);const N=new _t(new ee(.085,.12,.18,12),I);N.rotation.x=Math.PI/2,N.position.z=-.1,H.add(N),x.add(H),A.add(x),n.props.fan=$;const z=new Vt;z.position.set(.95,1.05,14.25),z.rotation.y=-.1,z.scale.setScalar(.7),bt(z,[.92,.64,.5],[0,.34,0],new ht({color:"#252620",roughness:.5,metalness:.35}));const G=new ht({map:h,emissive:new Ht("#5affc3"),emissiveIntensity:.35,emissiveMap:h,roughness:.22}),st=ai(z,[.75,.48],[0,.37,.257],G);st.rotation.y=0,n.props.screen=st,bt(z,[.26,.18,.25],[0,.03,0],d),A.add(z),bt(A,[.85,.035,.28],[.35,1.11,15.07],new ht({color:"#262520",roughness:.7}),[0,-.08,0]);for(let S=0;S<6;S++)for(let R=0;R<3;R++)bt(A,[.1,.018,.04],[-.02+S*.12,1.135,15.01+R*.07],new ht({color:"#4f4b41",roughness:.6}));const ut=new ht({color:"#cfc4a4",roughness:.92,side:Me});for(let S=0;S<5;S++){const R=ai(A,[.42,.55],[-.24+Math.random()*.38,1.104,14.27+Math.random()*.3],ut,[-Math.PI/2,0,Math.random()*1.2]);R.material=new ht({map:lr(s,S),roughness:.93,side:Me})}const Et=new _t(new ee(.075,.06,.17,14),new ht({color:"#c8c1aa",roughness:.5}));Et.position.set(.4,1.2,14.28),A.add(Et);const Bt=new _t(new cn(.048,.012,6,12,Math.PI),Et.material);Bt.position.set(.47,1.2,14.28),Bt.rotation.y=Math.PI/2,A.add(Bt);const Gt=new Vt;Gt.position.set(-.4,1.14,14.7),Gt.rotation.set(0,.5,Math.PI/2),Gt.add(new _t(new ee(.045,.055,.32,12),d));const Y=new _t(new ee(.062,.06,.04,12),new ht({color:"#d9cfa8",emissive:"#665c34",emissiveIntensity:.4}));Y.position.y=.18,Gt.add(Y),A.add(Gt);const nt=new Vt;nt.position.set(-1.65,1.08,13.95),bt(nt,[.2,.04,.2],[0,0,0],d);const Ct=new _t(new ee(.015,.015,.58,8),d);Ct.position.y=.3,Ct.rotation.z=-.18,nt.add(Ct);const lt=new _t(new Fe(.18,.22,20,1,!0),new ht({color:"#4e5b42",roughness:.5,metalness:.4,side:Me}));lt.position.set(.1,.61,0),lt.rotation.z=Math.PI+.15,nt.add(lt);const Ut=new _t(new ie(.055,12,8),new ht({color:"#fff3c0",emissive:"#ffdf93",emissiveIntensity:3}));Ut.position.set(.1,.54,0),nt.add(Ut),A.add(nt);const zt=new rn(16763517,7.5,5.5,2);zt.position.set(-1.52,1.7,13.98),t.add(zt),n.lights.lamp=zt,n.props.lampGlow=Ut,Je(A,ii(s,"freddy"),[-2.25,2.25,17.3],[0,Math.PI,0],1.05,1.48),Je(A,ii(s,"chica"),[2.95,2.25,17.3],[0,Math.PI,0],.95,1.34),Je(A,lr(s,2),[4.18,2.3,15.3],[0,-Math.PI/2,0],.55,.73),Je(A,Oc(),[-4.18,2.6,15.75],[0,Math.PI/2,0],.72,.72);const kt=new ht({color:"#24231e",roughness:.45,metalness:.3}),qt=new Vt;qt.position.set(0,3.62,9.16),qt.add(new _t(new ee(.25,.25,.08,24),kt)),qt.children[0].rotation.x=Math.PI/2;const j=new _t(new Tr(.21,24),new ht({color:"#cfc4a5",roughness:.8}));j.position.z=.046,qt.add(j);const at=bt(qt,[.015,.12,.012],[0,.05,.058],E),b=bt(qt,[.09,.012,.012],[.035,0,.058],E);qt.userData.hands=[at,b],A.add(qt),n.props.clock=qt;const It=ma(A,0,13,4.19,"#e5ddc5"),et=new rn(16767136,11,10,2);et.position.set(0,3.65,13),t.add(et),n.lights.office={light:et,fixture:It,base:11,flicker:0};const Tt=new rn(16720916,0,8,2);Tt.position.set(0,3.7,15.8),t.add(Tt),n.lights.emergency=Tt;const ot=new _t(new ie(.08,12,8),new ht({color:"#420b08",emissive:"#ff2112",emissiveIntensity:0}));ot.position.set(0,3.72,17.27),A.add(ot),n.props.emergencyBulb=ot;const rt=new Vt;t.add(rt);const Mt=ai(rt,[29,27.5],[0,0,-4.5],f,[-Math.PI/2,0,0]);Mt.receiveShadow=!0,bt(rt,[29,.12,27.5],[0,4.5,-4.5],_),bt(rt,[.2,4.5,27.5],[-14.5,2.25,-4.5],p),bt(rt,[.2,4.5,27.5],[14.5,2.25,-4.5],p),bt(rt,[9,4.5,.22],[-9.95,2.25,9],g),bt(rt,[9,4.5,.22],[9.95,2.25,9],g),bt(rt,[4.5,1.5,.22],[0,3.75,9],g),bt(rt,[4.5,.7,.22],[0,.35,9],g),bt(rt,[29,4.5,.22],[0,2.25,-18.2],p);const T=new _t(new Oe(16.5,5.2),new ht({map:l,emissive:new Ht("#321843"),emissiveIntensity:.3,roughness:.8}));T.position.set(0,2.9,-18.06),rt.add(T),bt(rt,[16.9,.18,.3],[0,5.32,-18],C),bt(rt,[15.6,.55,5.2],[0,.275,-15.35],new ht({color:"#271723",roughness:.65})),bt(rt,[15.8,.1,.18],[0,.55,-12.72],new ht({color:"#a78342",metalness:.55,roughness:.32}));for(let S=0;S<14;S++){const R=new _t(new ie(.045,8,6),new Cn({color:S%2?"#ffd170":"#ff8a50"}));R.position.set(-7.2+S*1.1,.63,-12.62),rt.add(R)}const v=xs(4.7,4.25,dn(c,2.4,1),-7,0);v.position.set(-8.2,2.13,-17.9),rt.add(v);const k=xs(4.7,4.25,dn(c,2.4,1),8.2,0);k.position.x=8.2,rt.add(k);const J=xs(15.6,.85,dn(c,5,1),0,0);J.position.set(0,4.75,-17.84),rt.add(J);const Q=new _t(new Oe(10.5,2.6),new ht({map:J0(s),transparent:!0,emissive:new Ht("#d69136"),emissiveIntensity:.55,roughness:.6}));Q.position.set(0,4.55,-17.78),rt.add(Q);for(const S of[-8.2,0,8.2])for(const R of[-5,2.5])ma(rt,S,R,4.41,"#e7dfc8");for(const S of[-1,1])for(let R=0;R<3;R++){const B=new rn(16760434,2.8,5,2);B.position.set(S*13.95,2.85,-10+R*6.2),rt.add(B);const F=new _t(new Fe(.24,.32,12,1,!0),new ht({color:"#5e4430",metalness:.4,roughness:.5,side:Me}));F.position.copy(B.position),rt.add(F)}const Z=new rn(16764557,26,24,2);Z.position.set(0,3.8,-4),t.add(Z),n.lights.dining=Z;const wt=new Ku(16770222,250,27,.58,.52,1.7);wt.position.set(0,4.2,-6),wt.target.position.set(0,1.55,-14.5),wt.castShadow=!0,wt.shadow.mapSize.set(1024,1024),wt.shadow.camera.near=2,wt.shadow.camera.far=24,wt.shadow.bias=-4e-4,t.add(wt,wt.target),n.lights.stageSpot=wt;const pt=new rn(5389711,18,10,2);pt.position.set(0,3.1,-16.4),t.add(pt);const At=[[-6.2,-3,1.15],[6.2,-3.2,1.15],[-7.6,3.2,1],[7.4,3,1],[-2,-6.4,1],[2.3,-6,1]];for(const[S,R,B]of At)ug(rt,S,R,B),ga(rt,S-1.25,R+.15,.4),ga(rt,S+1.2,R-.25,Math.PI-.3);for(let S=0;S<3;S++)ga(rt,-12.2+S*.2,2.2,Math.PI/2);const jt=["#b53139","#d3a12a","#3e7c6a","#6b4c95"];for(let S=0;S<12;S++){const R=pg(rt,(S%2?1:-1)*(4+Math.random()*7),2.1+Math.random()*.9,-8+Math.random()*14,jt[S%jt.length]);n.interactives.push(R)}for(let S=0;S<70;S++){const R=new _t(new Oe(.06,.028),new Cn({color:["#d3b54e","#a63234","#4d7b88","#5e4a8a"][S%4],side:Me}));R.position.set((Math.random()-.5)*26,.01+Math.random()*.02,-16+Math.random()*24),R.rotation.set(-Math.PI/2+Math.random()*.2,Math.random()*Math.PI,0),rt.add(R)}const it=["#b7333b","#d4ad3e","#467d88","#6b4b8e"];for(let S=0;S<12;S++){const R=new Ml([Hi(-10+S*1.8,4.35,-7),Hi(-8+S*1.8,3.95+Math.sin(S)*.25,-5),Hi(-11+S*1.8,3.85,-3)]),B=new _t(new Co(R,14,.018,5,!1),new ht({color:it[S%4],roughness:.65}));rt.add(B)}const vt=new Vt;vt.position.set(-11.4,0,-8.1),bt(vt,[5.2,.48,4],[0,.24,0],new ht({color:"#22141d",roughness:.7})),bt(vt,[5.4,.1,.16],[0,.49,2.03],d);const Nt=ye(512,512),Ft=Nt.getContext("2d");Ft.fillStyle="#2a0d23",Ft.fillRect(0,0,512,512);for(let S=0;S<60;S++){Ft.fillStyle=`rgba(235,195,80,${.25+Math.random()*.65})`;const R=Math.random()*512,B=Math.random()*512,F=1+Math.random()*3;Ft.beginPath(),Ft.arc(R,B,F,0,Math.PI*2),Ft.fill()}const Rt=Se(Nt,{repeat:[2,1]});ai(vt,[5,4.1],[0,2.3,-1.75],new ht({map:Rt,roughness:.9}),[0,0,0]);const Qt=gg(s,0,1.67);Qt.position.set(0,0,1.7),vt.add(Qt);const Wt=new _t(new Oe(1.35,.85),new ht({map:j0(s),roughness:.8}));Wt.position.set(0,1.35,2.08),vt.add(Wt),n.props.coveSign=Wt;const ae=new rn(12090111,14,5.5,2);ae.position.set(0,2.15,.35),vt.add(ae);const O=new rn(9067472,3.2,4.5,2);O.position.set(0,2.5,3.2),vt.add(O),rt.add(vt),n.props.coveCurtain=Qt,n.lights.cove=ae,n.lights.coveFill=O;const gt=new ht({color:"#0d1511",emissive:"#2bd28f",emissiveIntensity:.8,roughness:.2});for(let S=0;S<3;S++){const R=new Vt;R.position.set(13.7,0,-2+S*2.4),R.rotation.y=-Math.PI/2,bt(R,[1.1,2.1,.75],[0,1.05,0],new ht({color:"#261c34",roughness:.65})),bt(R,[.83,.58,.06],[0,1.48,.39],gt),bt(R,[.88,.24,.46],[0,1.08,.5],d),bt(R,[.95,.22,.05],[0,2,.39],new ht({color:"#c4a137",emissive:"#5b4812",emissiveIntensity:.5})),rt.add(R)}Je(rt,ii(s,"freddy"),[-14.35,2.6,-4],[0,Math.PI/2,0],1.4,1.96),Je(rt,ii(s,"bonnie"),[-14.35,2.6,1],[0,Math.PI/2,0],1.2,1.7),Je(rt,ii(s,"chica"),[14.35,2.6,2.4],[0,-Math.PI/2,0],1.2,1.7),Je(rt,ii(s,"foxy"),[-14.35,2.55,-10.5],[0,Math.PI/2,0],1.1,1.55);const W=ye(1024,512),q=W.getContext("2d");q.fillStyle="#4e2130",q.fillRect(0,0,1024,512),q.fillStyle="#d3a83c",q.beginPath(),q.arc(512,250,185,0,Math.PI*2),q.fill(),q.fillStyle="#6b3b2a",q.beginPath(),q.arc(512,290,150,0,Math.PI*2),q.fill(),q.fillStyle="#1a1210",q.beginPath(),q.arc(455,250,18,0,Math.PI*2),q.arc(569,250,18,0,Math.PI*2),q.fill(),q.fillStyle="#eee3c4",q.font="700 64px Impact, sans-serif",q.textAlign="center",q.fillText("LET’S PARTY!",512,80);const xt=new _t(new Oe(11.5,5.75),new ht({map:Se(W),roughness:.9}));xt.position.set(-14.34,2.65,-14.2),xt.rotation.y=Math.PI/2,rt.add(xt);const yt=[[-13.8,3.85,8.5,-.55],[13.8,3.8,8.3,.55],[-13.8,3.8,-9,-.4],[13.8,3.8,-10,.4],[-8.5,3.7,-12.8,.2]];for(const[S,R,B,F]of yt)rt.add(mg(S,R,B,F));const Xt=new Ce,me=260,xe=new Float32Array(me*3);for(let S=0;S<me;S++)xe[S*3]=(Math.random()-.5)*15,xe[S*3+1]=.3+Math.random()*4,xe[S*3+2]=-10+Math.random()*26;Xt.setAttribute("position",new Qe(xe,3));const re=new vl({color:14470052,size:.018,transparent:!0,opacity:.36,depthWrite:!1,blending:gr}),ke=new mu(Xt,re);t.add(ke),n.props.dust=ke;const tn={freddy:[0,.55,-14.6,0],bonnie:[-2.85,.55,-14.85,.02],chica:[2.85,.55,-14.85,-.02],foxy:[-11.4,.5,-9.1,0]};for(const S of["freddy","bonnie","chica","foxy"]){const R=lg(s,S,e),[B,F,K,tt]=tn[S];R.position.set(B,F,K),R.rotation.y=tt,R.userData.home={x:B,y:F,z:K,ry:tt},R.userData.mode="stage",t.add(R),n.characters[S]=R}n.characters.freddy.scale.setScalar(1.04);const Pn=new Vt;Pn.position.set(.95,.55,-13.4),bt(Pn,[.22,.05,.22],[0,0,0],d);const es=new _t(new ee(.018,.02,1.5,8),d);es.position.y=.75,Pn.add(es);const un=new _t(new ie(.075,10,8),E);un.position.set(0,1.5,.04),Pn.add(un),rt.add(Pn);const qn=new Ie(58,1,.035,55);qn.position.set(0,1.62,15.55),qn.rotation.order="YXZ",n.officeCamera=qn;const pi=new Ie(40,1,.1,55);pi.position.set(0,2.35,-3),pi.lookAt(0,1.75,-14.65),n.menuCamera=pi;const Ln=(S,R,B,F,K,tt,dt=58)=>{const ft=new Ie(dt,1,.08,60);return ft.position.set(S,R,B),ft.userData.target=Hi(F,K,tt),ft.lookAt(ft.userData.target),ft};n.cams={1:{camera:Ln(0,3.45,-3.4,0,1.5,-14.5,54),label:"SHOW STAGE",name:"CAM 01"},2:{camera:Ln(-11.8,3.8,7.8,0,1.2,-4.2,62),label:"DINING AREA",name:"CAM 02"},3:{camera:Ln(-7.55,3.05,13.85,-4.35,1.3,11.55,62),label:"WEST HALL",name:"CAM 03"},4:{camera:Ln(7.55,3.05,13.85,4.35,1.3,11.55,62),label:"EAST HALL",name:"CAM 04"},5:{camera:Ln(-11.4,2.65,-3.35,-11.4,1.6,-6.35,56),label:"PIRATE COVE",name:"CAM 05"}},t.fog=new yo(394759,.018);const vn=new ed(6051146,.48);t.add(vn);const Yn=new Ju(5331558,1511692,.52);t.add(Yn),n.lights.ambient=vn,n.lights.hemi=Yn,n.lights.diningFill=Z,n.lights.leftHall,n.lights.rightHall;const Zn=ye(128,128),mi=Zn.getContext("2d"),$n=mi.createRadialGradient(64,64,0,64,64,64);$n.addColorStop(0,"rgba(255,216,140,.65)"),$n.addColorStop(.35,"rgba(255,192,90,.18)"),$n.addColorStop(1,"rgba(255,170,60,0)"),mi.fillStyle=$n,mi.fillRect(0,0,128,128);const Pr=Se(Zn),gi=new uu(new ml({map:Pr,transparent:!0,opacity:.42,blending:gr,depthWrite:!1}));gi.scale.set(9,6,1),gi.position.set(0,4,-17.7),rt.add(gi),n.props.stageGlow=gi;const Ps=ye(128,128),Ls=Ps.getContext("2d"),In=Ls.createImageData(128,128);for(let S=0;S<In.data.length;S+=4){const R=Math.random()*255;In.data[S]=In.data[S+1]=In.data[S+2]=R,In.data[S+3]=255}Ls.putImageData(In,0,0);const Lr=Se(Ps);n.props.staticTex=Lr;const y=n.props.clock.userData.hands;return n.update=(S,R,B={})=>{var ne;const{doorAmounts:F=[0,0],hallLights:K=[0,0],powerOut:tt=!1,mode:dt="office",foxyProgress:ft=0}=B,Ot=dt==="camera";vn.intensity+=((Ot?1.02:.48)-vn.intensity)*Math.min(1,R*3.5),Yn.intensity+=((Ot?.92:.52)-Yn.intensity)*Math.min(1,R*3.5),["left","right"].forEach((Lt,ge)=>{const Kt=F[ge]||0,pe=n.doors[Lt];pe.amount+=(Kt-pe.amount)*Math.min(1,R*9),pe.group.position.y=1.4+(1-pe.amount)*2.7,pe.panel.visible=pe.amount>.012,pe.lightMesh.material.emissiveIntensity=.15+pe.amount*2.6,pe.lightMesh.material.color.set(pe.amount>.3?"#ff2b1f":"#2b0908")}),["leftHall","rightHall"].forEach((Lt,ge)=>{const Kt=n.lights[Lt],pe=K[ge]||0;Kt.light.intensity+=(pe*45-Kt.light.intensity)*Math.min(1,R*18),Kt.fixture.userData.glow.visible=pe>.08,Kt.fixture.userData.glow.material.emissiveIntensity=1.4+pe*1.6});const Pt=n.lights.office;Pt.flicker-=R,Pt.flicker<0&&(Pt.flicker=.4+Math.random()*5);let Dt=Pt.base;Pt.flicker<.11&&!tt&&(Dt*=.2+Math.random()*.5),tt&&(Dt*=.03),Pt.light.intensity+=(Dt-Pt.light.intensity)*Math.min(1,R*14),Pt.fixture.userData.glow.material.emissiveIntensity=tt?.03:1.8+Math.sin(S*3.2)*.1,n.lights.lamp.intensity+=((tt?.2:7.5)-n.lights.lamp.intensity)*Math.min(1,R*10);const Yt=tt||dt==="scare";n.lights.emergency.intensity+=((Yt?4.5:0)-n.lights.emergency.intensity)*Math.min(1,R*5),n.props.emergencyBulb.material.emissiveIntensity=Yt?2.5+Math.sin(S*8)*1.3:0,n.props.emergencyBulb.material.emissive.set(Yt?"#ff2212":"#420b08"),n.props.fan.rotation.z+=R*(tt?.4:12),y[0].rotation.z=-S*.08,y[1].rotation.z=-S*.9,n.props.dust.rotation.y=S*.006,n.props.dust.position.y=Math.sin(S*.18)*.12,n.props.screen.material.emissiveIntensity=.24+Math.random()*.08,n.props.screen.material.emissive.setRGB(.08+Math.random()*.03,.65,.48),n.lights.stageSpot.intensity=230+Math.sin(S*7.3)*12+(Math.random()>.985?-130:0),n.props.stageGlow.material.opacity=.34+Math.sin(S*1.1)*.05,n.lights.cove.intensity=20+Math.sin(S*1.7)*2.4;const te=n.lights.coveFill;te&&(te.intensity+=((Ot?12:3.2)-te.intensity)*Math.min(1,R*3.5));const oe=n.props.coveCurtain.userData,le=Math.max(0,Math.min(1,ft/3));oe.left.position.x=-1.36-le*.95,oe.right.position.x=1.36+le*.95,oe.left.scale.x=1-le*.12,oe.right.scale.x=1-le*.12,n.props.coveSign&&(n.props.coveSign.position.x=-le*2.15);for(const[Lt,ge]of Object.entries(n.characters)){const Kt=ge.userData.mode||(Lt==="foxy"?"stage":"idle");hg(ge,S,Kt,ge.userData.animationIntensity||1)}n.characters.foxy.userData.mode!=="scare"&&je(n.characters.foxy,.3+ft*.38);for(const Lt of rt.children)(ne=Lt.userData)!=null&&ne.led&&Lt.userData.led.material.color.set(Math.sin(S*3+Lt.position.z)>0?"#ff2a24":"#3a0907")},n.setVisibleCharacters=S=>{for(const[R,B]of Object.entries(n.characters))B.visible=S[R]!==!1},n.getCamera=S=>{var R;return(R=n.cams[String(S)])==null?void 0:R.camera},n}class vg{constructor(){this.ctx=null,this.master=null,this.noiseBuffer=null,this.ambient=null,this.staticLoop=null,this.heartbeatTimer=0,this.musicTimer=0,this.enabled=!0,this.started=!1}ensure(){if(this.ctx)return this.ctx;const t=window.AudioContext||window.webkitAudioContext;return t?(this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.62,this.master.connect(this.ctx.destination),this.noiseBuffer=this.makeNoiseBuffer(2.5),this.ctx):null}async unlock(){const t=this.ensure();t&&(t.state==="suspended"&&await t.resume(),this.started=!0)}makeNoiseBuffer(t=2,e=!1){const n=this.ensure(),i=Math.floor(n.sampleRate*t),r=n.createBuffer(1,i,n.sampleRate),a=r.getChannelData(0);let o=0;for(let c=0;c<i;c++){const l=Math.random()*2-1;e?(o=(o+.02*l)/1.02,a[c]=o*3.5):a[c]=l}return r}noiseSource({brown:t=!1,loop:e=!0}={}){const i=this.ensure().createBufferSource();return i.buffer=t?this.makeNoiseBuffer(3,!0):this.noiseBuffer,i.loop=e,i}tone(t,e,{type:n="sine",gain:i=.08,attack:r=.005,decay:a=null,slide:o=0,delay:c=0,filter:l=null}={}){const h=this.ensure();if(!h)return;const u=h.currentTime+c,f=h.createOscillator(),p=h.createGain();f.type=n,f.frequency.setValueAtTime(t,u),o&&f.frequency.exponentialRampToValueAtTime(Math.max(20,t+o),u+e),p.gain.setValueAtTime(1e-4,u),p.gain.exponentialRampToValueAtTime(Math.max(2e-4,i),u+r),p.gain.exponentialRampToValueAtTime(1e-4,u+e);let g=f;if(l){const _=h.createBiquadFilter();_.type=l.type||"lowpass",_.frequency.value=l.frequency||800,_.Q.value=l.q||.7,g.connect(_),_.connect(p)}else g.connect(p);p.connect(this.master),f.start(u),f.stop(u+e+.04)}noiseBurst(t=.2,{gain:e=.12,filter:n=900,type:i="lowpass",brown:r=!1,q:a=1,delay:o=0,sweep:c=0}={}){const l=this.ensure();if(!l)return;const h=l.currentTime+o,u=l.createBufferSource();u.buffer=r?this.makeNoiseBuffer(Math.max(1,t+.1),!0):this.noiseBuffer;const f=l.createBiquadFilter();f.type=i,f.frequency.setValueAtTime(n,h),c&&f.frequency.exponentialRampToValueAtTime(Math.max(30,n+c),h+t),f.Q.value=a;const p=l.createGain();p.gain.setValueAtTime(1e-4,h),p.gain.exponentialRampToValueAtTime(e,h+Math.min(.02,t*.15)),p.gain.exponentialRampToValueAtTime(1e-4,h+t),u.connect(f),f.connect(p),p.connect(this.master),u.start(h,Math.random()*.2),u.stop(h+t+.03)}startMenu(){const t=this.ensure();if(!t||this.ambient)return;const e=this.noiseSource({brown:!0}),n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=170;const i=t.createGain();i.gain.value=.035,e.connect(n),n.connect(i),i.connect(this.master),e.start();const r=t.createOscillator(),a=t.createGain();r.type="sine",r.frequency.value=43,a.gain.value=.018,r.connect(a),a.connect(this.master),r.start(),this.ambient={source:e,filter:n,gain:i,drone:r,droneGain:a},this.musicBox()}startShift(){const t=this.ensure();if(!t||this.fan)return;this.ambient&&this.ambient.gain.gain.setTargetAtTime(.018,t.currentTime,1.5),this.ambient||this.startMenu();const e=this.noiseSource(),n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=500;const i=t.createGain();i.gain.value=.018,e.connect(n),n.connect(i),i.connect(this.master),e.start();const r=t.createOscillator(),a=t.createGain();r.type="sawtooth",r.frequency.value=120,a.gain.value=.0035;const o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=300,r.connect(o),o.connect(a),a.connect(this.master),r.start(),this.fan={fanSource:e,fanGain:i,hum:r,humGain:a}}stopAmbient(){if(!this.ctx)return;const t=this.ctx.currentTime;for(const e of[this.ambient,this.fan,this.staticLoop])if(e){for(const n of["gain","fanGain","humGain","droneGain"])e[n]&&e[n].gain.setTargetAtTime(1e-4,t,.15);setTimeout(()=>{var n,i,r,a;try{(n=e.source)==null||n.stop(),(i=e.fanSource)==null||i.stop(),(r=e.drone)==null||r.stop(),(a=e.hum)==null||a.stop()}catch{}},500)}this.ambient=null,this.fan=null,this.staticLoop=null}click(){this.tone(1100,.035,{type:"square",gain:.025,filter:{frequency:1800}})}doorClose(){this.noiseBurst(.32,{gain:.12,filter:280,brown:!0}),this.tone(65,.28,{type:"sawtooth",gain:.09,slide:-28,filter:{frequency:200}}),this.noiseBurst(.06,{gain:.08,filter:2400,type:"highpass",delay:.03})}doorOpen(){this.noiseBurst(.28,{gain:.07,filter:400,brown:!0}),this.tone(90,.2,{type:"sawtooth",gain:.035,slide:45,filter:{frequency:260}})}lightClick(t=!0){this.noiseBurst(.03,{gain:.06,filter:2400,type:"highpass"}),t&&this.tone(210,.12,{type:"sawtooth",gain:.012,filter:{frequency:1400}})}cameraOn(){this.noiseBurst(.45,{gain:.06,filter:1600,type:"bandpass",q:1.4}),this.tone(55,.4,{type:"sine",gain:.035,slide:-15}),this.startStatic()}cameraOff(){this.noiseBurst(.12,{gain:.04,filter:1e3}),this.stopStatic()}cameraSwitch(){this.noiseBurst(.18,{gain:.06,filter:2200,type:"bandpass",q:2}),this.tone(880,.06,{type:"square",gain:.018})}startStatic(){const t=this.ensure();if(!t||this.staticLoop)return;const e=this.noiseSource(),n=t.createBiquadFilter();n.type="highpass",n.frequency.value=1600;const i=t.createGain();i.gain.value=.016,e.connect(n),n.connect(i),i.connect(this.master),e.start(),this.staticLoop={source:e,gain:i,filter:n}}stopStatic(){if(!this.staticLoop||!this.ctx)return;const t=this.ctx.currentTime;this.staticLoop.gain.gain.setTargetAtTime(1e-4,t,.12);const e=this.staticLoop;this.staticLoop=null,setTimeout(()=>{try{e.source.stop()}catch{}},400)}footstep(t=0){const e=this.ensure();if(!e)return;const n=this.noiseSource({brown:!0}),i=e.createBiquadFilter();i.type="lowpass",i.frequency.value=380;const r=e.createGain(),a=e.createStereoPanner();a.pan.value=Math.max(-1,Math.min(1,t)),r.gain.setValueAtTime(1e-4,e.currentTime),r.gain.exponentialRampToValueAtTime(.06,e.currentTime+.012),r.gain.exponentialRampToValueAtTime(1e-4,e.currentTime+.28),n.connect(i),i.connect(r),r.connect(a),a.connect(this.master),n.start(),n.stop(e.currentTime+.32)}knock(t=0){const e=this.ensure();if(!e)return;const n=e.createStereoPanner();n.pan.value=t,n.connect(this.master);for(let i=0;i<3;i++){const r=e.createOscillator(),a=e.createGain();r.type="sine",r.frequency.setValueAtTime(82,e.currentTime+i*.15),a.gain.setValueAtTime(1e-4,e.currentTime+i*.15),a.gain.exponentialRampToValueAtTime(.09,e.currentTime+i*.15+.006),a.gain.exponentialRampToValueAtTime(1e-4,e.currentTime+i*.15+.16),r.connect(a),a.connect(n),r.start(e.currentTime+i*.15),r.stop(e.currentTime+i*.15+.18)}}breathing(){const t=this.ensure();if(!t)return;const e=this.noiseSource({brown:!0}),n=t.createBiquadFilter();n.type="bandpass",n.frequency.value=420,n.Q.value=.7;const i=t.createGain();i.gain.setValueAtTime(1e-4,t.currentTime),i.gain.linearRampToValueAtTime(.03,t.currentTime+.5),i.gain.linearRampToValueAtTime(1e-4,t.currentTime+1.3),e.connect(n),n.connect(i),i.connect(this.master),e.start(),e.stop(t.currentTime+1.4)}foxyRun(){this.noiseBurst(.8,{gain:.05,filter:170,brown:!0,sweep:-90}),this.tone(94,.45,{type:"sawtooth",gain:.02,slide:-25,filter:{frequency:260}});for(let t=0;t<4;t++)this.footstep(t%2?.8:-.8)}foxyBlocked(){this.noiseBurst(.4,{gain:.17,filter:280,brown:!0}),this.tone(58,.45,{type:"square",gain:.06,slide:-22,filter:{frequency:160}})}cameraWarning(){this.tone(740,.13,{type:"square",gain:.035}),this.tone(740,.13,{type:"square",gain:.035,delay:.19})}powerDown(){this.tone(140,1.8,{type:"sawtooth",gain:.09,slide:-120,filter:{frequency:500}}),this.noiseBurst(1.3,{gain:.08,filter:500,brown:!0,sweep:-400}),this.stopFan()}stopFan(){if(!this.ctx||!this.fan)return;const t=this.fan;this.fan=null,t.fanGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.3),t.humGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.3),setTimeout(()=>{try{t.fanSource.stop(),t.hum.stop()}catch{}},1200)}jumpscare(){const t=this.ensure();if(!t)return;this.stopStatic();const e=t.currentTime;this.noiseBurst(1.15,{gain:.28,filter:3200,type:"highpass"}),this.noiseBurst(1,{gain:.18,filter:180,brown:!0});for(const n of[58,73,91,116,147]){const i=t.createOscillator(),r=t.createGain();i.type="sawtooth",i.frequency.setValueAtTime(n*2.4,e),i.frequency.exponentialRampToValueAtTime(n,e+.9),r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(.06+Math.random()*.03,e+.012),r.gain.exponentialRampToValueAtTime(1e-4,e+1.1);const a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=1400,i.connect(a),a.connect(r),r.connect(this.master),i.start(e+Math.random()*.04),i.stop(e+1.2)}for(let n=0;n<4;n++)this.tone(1200+n*410,.6,{type:"square",gain:.02,slide:-900,delay:n*.03})}chime(){[523.25,659.25,783.99,1046.5].forEach((e,n)=>this.tone(e,1.2,{type:"sine",gain:.09,delay:n*.18,attack:.01})),this.tone(261.63,2,{type:"triangle",gain:.04,delay:.1})}powerOutMusic(){if(this.musicTimer)return;const t=[659.25,587.33,523.25,392,523.25,659.25,783.99];let e=0;const n=()=>{if(!this.ctx)return;const i=t[e%t.length];this.tone(i,.34,{type:"sine",gain:.04,attack:.005}),e++,e<18?this.musicTimer=setTimeout(n,420):this.musicTimer=0};n()}musicBox(){const t=[523.25,659.25,587.33,392,440,523.25,349.23,392];let e=0;const n=()=>{if(!this.ctx||!this.ambient)return;const i=t[e%t.length]*(.997+Math.random()*.006);this.tone(i,1,{type:"triangle",gain:.014,attack:.008}),e++,this.musicTimer=setTimeout(n,850)};setTimeout(n,2e3)}stopMusic(){this.musicTimer&&clearTimeout(this.musicTimer),this.musicTimer=0}heartbeat(t=1){if(!this.ctx)return;const e=performance.now();e-this.heartbeatTimer<700/t||(this.heartbeatTimer=e,this.tone(56,.14,{type:"sine",gain:.07,slide:-18}),this.tone(48,.18,{type:"sine",gain:.055,slide:-12,delay:.17}))}staticCrackle(){this.noiseBurst(.06,{gain:.02,filter:3400,type:"highpass"})}}const zc=[{night:1,duration:84,baseDrain:.3,doorDrain:.8,lightDrain:.92,camDrain:.15,bonnie:{start:[17,22],step:[15,20],grace:7.4},chica:{start:[22,27],step:[17,22],grace:7},foxy:{first:30,interval:24,grace:3.5},flavor:"The doors are yours. Keep them out until 6 AM."},{night:2,duration:84,baseDrain:.33,doorDrain:.84,lightDrain:.94,camDrain:.16,bonnie:{start:[14,19],step:[12,17],grace:6.5},chica:{start:[18,23],step:[14,19],grace:6.2},foxy:{first:26,interval:21,grace:3.2},flavor:"They know the building better than you do."},{night:3,duration:82,baseDrain:.36,doorDrain:.88,lightDrain:.96,camDrain:.17,bonnie:{start:[11,15],step:[10,14],grace:5.8},chica:{start:[14,18],step:[11,15],grace:5.6},foxy:{first:22,interval:18,grace:2.9},flavor:"The cameras are lying to you. The halls are not."},{night:4,duration:80,baseDrain:.4,doorDrain:.92,lightDrain:.98,camDrain:.18,bonnie:{start:[9,12],step:[8,11],grace:5.2},chica:{start:[11,14],step:[9,12],grace:5},foxy:{first:18,interval:15,grace:2.6},flavor:"The music is louder tonight. So are the footsteps."},{night:5,duration:78,baseDrain:.44,doorDrain:.96,lightDrain:1,camDrain:.19,bonnie:{start:[7.5,10],step:[6.5,9],grace:4.6},chica:{start:[9,11.5],step:[7,9.5],grace:4.5},foxy:{first:15,interval:12.5,grace:2.3},flavor:"This is the night they stop pretending to be machines."},{night:6,duration:78,baseDrain:.48,doorDrain:1,lightDrain:1.05,camDrain:.2,bonnie:{start:[6,8],step:[5,7],grace:4},chica:{start:[7,9],step:[5.2,7.4],grace:3.9},foxy:{first:12,interval:10,grace:2},flavor:"There is no paycheck for this one. Only the shift."}],xg=[0,120.5,120.5,120.5,120.5,120.5,200],lo="fnaf-nightshift-v3",kc={performance:1,balanced:1.4,high:2},Ge=(s,t,e)=>Math.max(t,Math.min(e,s)),ds=(s,t)=>s+Math.random()*(t-s);function ho(){var t;return{unlocked:1,current:1,quality:((t=window.matchMedia)==null?void 0:t.call(window,"(pointer: coarse)").matches)||(navigator.maxTouchPoints||0)>0?"high":"balanced",haptics:!0,shake:!0,wins:0}}function Mg(){try{const s=JSON.parse(localStorage.getItem(lo)||"null");return{...ho(),...s||{}}}catch{return ho()}}function _a(s,t){const e=Ge(Math.floor(s/t*6),0,6),n=["12","1","2","3","4","5","6"];return{hour:e,label:`${n[e]} AM`,value:n[e],ampm:"AM"}}function yg(s,t){const e=Ge(s/t,0,1)*360,n=Math.floor(e/60),i=Math.floor(e%60),r=Math.floor(e*60%60);return`${["12","1","2","3","4","5","6"][Math.min(6,n)]}:${String(i).padStart(2,"0")}:${String(r).padStart(2,"0")} AM`}class Sg{constructor({renderer:t,scene:e,world:n}){this.renderer=t,this.scene=e,this.world=n,this.audio=new vg,this.save=Mg(),this.selectedNight=Ge(this.save.current||this.save.unlocked,1,6),this.state="menu",this.doors={left:!1,right:!1},this.lights={left:!1,right:!1},this.doorAmounts=[0,0],this.hallLights=[0,0],this.power=100,this.elapsed=0,this.powerOut=!1,this.blackoutTimer=0,this.camId="1",this.camOpen=!1,this.coveWatch=0,this.drag=null,this.hasDragged=!1,this.keys=new Set,this.toastTimer=0,this.hints=[],this.camAlert={text:"",time:0},this.jump=null,this.deathReason="",this.menuTime=0,this.fpsSample={time:0,frames:0,adjusted:!1},this.dom=this.findDom(),this.noiseUrl=this.makeNoiseTexture(),document.documentElement.style.setProperty("--noise",`url(${this.noiseUrl})`),this.scene.add(this.world.officeCamera),this.scareLight=new rn(16771014,0,4.2,2),this.scareLight.position.set(0,.12,.25),this.world.officeCamera.add(this.scareLight),this.tmpTarget=new D,this.tmpVec=new D,this.look={yaw:0,pitch:-.055,targetYaw:0,targetPitch:-.055},this.bindUI(),this.bindInput(),this.applyQuality(this.save.quality),this.updateMenuCopy(),this.resize(),this.setStateCamera("menu"),this.dom.boot.classList.add("gone"),setTimeout(()=>{var i,r;(i=this.dom.boot)==null||i.remove(),this.state==="menu"&&((r=this.dom.menu)==null||r.classList.remove("hidden"))},900),this.clock=new id,this.running=!0,this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}findDom(){const t=e=>document.getElementById(e);return{boot:t("boot"),menu:t("menu"),hud:t("hud"),tablet:t("tablet"),startBtn:t("startBtn"),nightsBtn:t("nightsBtn"),howBtn:t("howBtn"),settingsBtn:t("settingsBtn"),settingsModal:t("settingsModal"),nightSelect:t("nightSelect"),howModal:t("howModal"),nightGrid:t("nightGrid"),nightPlayBtn:t("nightPlayBtn"),menuNight:t("menuNight"),menuNightSub:t("menuNightSub"),startSub:t("startSub"),hudNight:t("hudNight"),hudHour:t("hudHour"),clock:t("clock"),clockAm:document.querySelector(".clock-am"),clockFill:t("clockFill"),powerPct:t("powerPct"),powerFill:t("powerFill"),powerBox:document.querySelector(".power-box"),usageBars:t("usageBars"),leftDoorBtn:t("leftDoorBtn"),rightDoorBtn:t("rightDoorBtn"),leftLightBtn:t("leftLightBtn"),rightLightBtn:t("rightLightBtn"),camBtn:t("camBtn"),camExit:t("camExit"),camMap:t("camMap"),camName:t("camName"),camLabel:t("camLabel"),camPower:t("camPower"),camPowerFill:t("camPowerFill"),camWarning:t("camWarning"),camTime:t("camTime"),camChannel:t("camChannel"),camViewport:t("camViewport"),toast:t("toast"),threatHint:t("threatHint"),lookHint:t("lookHint"),leftIndicator:t("leftIndicator"),rightIndicator:t("rightIndicator"),doorAlert:t("doorAlert"),briefing:t("briefing"),briefNight:t("briefNight"),briefTime:t("briefTime"),briefCopy:t("briefCopy"),briefTip:t("briefTip"),foxyWarning:t("foxyWarning"),powerOut:t("powerOut"),scareFx:t("scareFx"),gameOver:t("gameOver"),deathCopy:t("deathCopy"),endStats:t("endStats"),retryBtn:t("retryBtn"),quitBtn:t("quitBtn"),deathTip:t("deathTip"),winScreen:t("winScreen"),winKicker:t("winKicker"),winTitle:t("winTitle"),winCopy:t("winCopy"),checkNight:t("checkNight"),checkAmount:t("checkAmount"),nextBtn:t("nextBtn"),winMenuBtn:t("winMenuBtn"),winTip:t("winTip"),qualityControl:t("qualityControl"),hapticsToggle:t("hapticsToggle"),shakeToggle:t("shakeToggle"),resetBtn:t("resetBtn"),rotateNotice:t("rotateNotice"),lookZone:t("lookZone")}}makeNoiseTexture(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d"),n=e.createImageData(128,128);for(let i=0;i<n.data.length;i+=4){const r=Math.random()*255;n.data[i]=n.data[i+1]=n.data[i+2]=r,n.data[i+3]=110}return e.putImageData(n,0,0),t.toDataURL("image/png")}bindUI(){const t=(e,n)=>e==null?void 0:e.addEventListener("click",i=>{i.preventDefault(),n(i)});t(this.dom.startBtn,()=>this.startNight(this.selectedNight)),t(this.dom.nightsBtn,()=>this.openModal("nightSelect")),t(this.dom.howBtn,()=>this.openModal("howModal")),t(this.dom.settingsBtn,()=>this.openModal("settingsModal")),t(this.dom.nightPlayBtn,()=>{this.closeModal("nightSelect"),this.startNight(this.selectedNight)}),t(this.dom.leftDoorBtn,()=>this.toggleDoor("left")),t(this.dom.rightDoorBtn,()=>this.toggleDoor("right")),t(this.dom.leftLightBtn,()=>this.toggleLight("left")),t(this.dom.rightLightBtn,()=>this.toggleLight("right")),t(this.dom.camBtn,()=>this.toggleCamera()),t(this.dom.camExit,()=>this.toggleCamera(!1)),t(this.dom.retryBtn,()=>this.startNight(this.night)),t(this.dom.quitBtn,()=>this.quitToMenu()),t(this.dom.nextBtn,()=>{this.night>=6?this.quitToMenu():this.startNight(this.night+1)}),t(this.dom.winMenuBtn,()=>this.quitToMenu()),t(this.dom.resetBtn,()=>{confirm("Reset all unlocked nights and settings?")&&(localStorage.removeItem(lo),this.save=ho(),this.selectedNight=1,this.applyQuality(this.save.quality),this.bindSettingsState(),this.updateMenuCopy(),this.buildNightGrid())});for(const e of this.dom.qualityControl.querySelectorAll("button"))t(e,()=>{this.save.quality=e.dataset.quality,this.applyQuality(e.dataset.quality),this.persist()});t(this.dom.hapticsToggle,()=>{this.save.haptics=!this.save.haptics,this.bindSettingsState(),this.persist()}),t(this.dom.shakeToggle,()=>{this.save.shake=!this.save.shake,this.bindSettingsState(),this.persist()}),document.querySelectorAll(".modal-close, [data-close]").forEach(e=>{e.addEventListener("click",()=>{var n;return this.closeModal(e.dataset.close||((n=e.closest(".modal"))==null?void 0:n.id))})}),this.dom.nightGrid.addEventListener("click",e=>{const n=e.target.closest(".night-btn");!n||n.disabled||(this.selectedNight=Number(n.dataset.night),this.buildNightGrid())}),this.dom.camMap.addEventListener("click",e=>{const n=e.target.closest(".cam-map-btn");n&&this.switchCamera(n.dataset.cam)}),this.bindSettingsState(),this.buildNightGrid()}bindSettingsState(){for(const e of this.dom.qualityControl.querySelectorAll("button"))e.classList.toggle("active",e.dataset.quality===this.save.quality);const t=(e,n)=>{e.setAttribute("aria-checked",String(!!n)),e.querySelector("span").textContent=n?"ON":"OFF"};t(this.dom.hapticsToggle,this.save.haptics),t(this.dom.shakeToggle,this.save.shake)}persist(){try{localStorage.setItem(lo,JSON.stringify(this.save))}catch{}}openModal(t){var e;(e=this.dom[t])==null||e.classList.remove("hidden"),t==="nightSelect"&&this.buildNightGrid()}closeModal(t){var e;t?(e=this.dom[t])==null||e.classList.add("hidden"):document.querySelectorAll(".modal:not(.hidden)").forEach(n=>n.classList.add("hidden"))}buildNightGrid(){if(this.dom.nightGrid){this.dom.nightGrid.innerHTML="";for(let t=1;t<=6;t++){const e=t<=this.save.unlocked,n=document.createElement("button");n.className=`night-btn${t===this.selectedNight?" selected":""}`,n.dataset.night=t,n.disabled=!e;const i=["","THE BEGINNING","THE HALLS","THE CAMERAS","THE MUSIC","THE FINALE","OVERTIME"];n.innerHTML=`<span>NIGHT</span><strong>${String(t).padStart(2,"0")}</strong><small>${e?i[t]:"LOCKED"}</small>`,this.dom.nightGrid.appendChild(n)}this.dom.nightPlayBtn.textContent=`PLAY NIGHT ${this.selectedNight}`,this.updateMenuCopy()}}updateMenuCopy(){const t=Ge(this.selectedNight,1,6);this.dom.menuNight.textContent=`NIGHT ${String(t).padStart(2,"0")}`,this.dom.menuNightSub.textContent=t===6?"OVERTIME — NO SECOND CHANCES":"12 AM — 6 AM",this.dom.startSub.textContent=t===1?"BEGIN YOUR SHIFT":this.save.unlocked>=t?"RETURN TO THE OFFICE":"LOCKED",this.dom.checkNight.textContent=String(t).padStart(2,"0")}applyQuality(t){this.quality=kc[t]?t:"high",this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,kc[this.quality]));const e=this.quality!=="performance";this.renderer.shadowMap.enabled=e;const n=this.quality==="high"?2048:this.quality==="balanced"?1024:512,i=this.world.lights.stageSpot;i&&(i.shadow.map&&(i.shadow.map.dispose(),i.shadow.map=null),i.shadow.mapSize.set(n,n)),this.bindSettingsState(),this.resize()}bindInput(){const t=document.getElementById("game-canvas");t.addEventListener("pointerdown",i=>{var r,a;this.state!=="playing"&&this.state!=="briefing"||(this.drag={x:i.clientX,y:i.clientY,yaw:this.look.targetYaw,pitch:this.look.targetPitch,id:i.pointerId},(r=t.setPointerCapture)==null||r.call(t,i.pointerId),(a=this.dom.lookHint)==null||a.classList.add("hide"),this.hasDragged=!0)}),t.addEventListener("pointermove",i=>{if(!this.drag||i.pointerId!==this.drag.id)return;const r=i.clientX-this.drag.x,a=i.clientY-this.drag.y;this.look.targetYaw=Ge(this.drag.yaw-r*.0042,-1.42,1.42),this.look.targetPitch=Ge(this.drag.pitch-a*.0028,-.24,.13),this.look.yaw=xi.lerp(this.look.yaw,this.look.targetYaw,.5),this.look.pitch=xi.lerp(this.look.pitch,this.look.targetPitch,.5)});const e=i=>{this.drag&&i.pointerId===this.drag.id&&(this.drag=null)};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e);let n=null;this.dom.camViewport.addEventListener("pointerdown",i=>{var r,a;this.state==="camera"&&(n={x:i.clientX,id:i.pointerId},(a=(r=this.dom.camViewport).setPointerCapture)==null||a.call(r,i.pointerId))}),this.dom.camViewport.addEventListener("pointerup",i=>{if(!n||i.pointerId!==n.id)return;const r=i.clientX-n.x;if(n=null,Math.abs(r)<42)return;const a=["1","2","3","4","5"],c=(a.indexOf(this.camId)+(r<0?1:-1)+a.length)%a.length;this.switchCamera(a[c])}),window.addEventListener("keydown",i=>{if(this.keys.add(i.key.toLowerCase()),i.key==="Escape"&&(this.state==="camera"?this.toggleCamera(!1):this.dom.settingsModal.classList.contains("hidden")?this.dom.nightSelect.classList.contains("hidden")?this.dom.howModal.classList.contains("hidden")||this.closeModal("howModal"):this.closeModal("nightSelect"):this.closeModal("settingsModal")),this.state==="playing"||this.state==="camera"){const r=i.key.toLowerCase();r==="q"&&this.toggleDoor("left"),r==="e"&&this.toggleDoor("right"),r==="f"&&this.toggleLight("left"),r==="g"&&this.toggleLight("right"),r==="c"&&this.toggleCamera()}["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"," "].includes(i.key)&&this.state==="playing"&&i.preventDefault()}),window.addEventListener("keyup",i=>this.keys.delete(i.key.toLowerCase())),document.addEventListener("pointerdown",()=>{this.audio.unlock().then(()=>{this.state==="menu"&&!this.audio.ambient&&this.audio.startMenu()})},{once:!0}),window.addEventListener("resize",()=>this.resize()),window.addEventListener("orientationchange",()=>setTimeout(()=>this.resize(),250)),window.addEventListener("blur",()=>{this.keys.clear(),this.state==="playing"&&this.audio.stopStatic()})}resize(){var i;const t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1);const n=t/e;this.world.officeCamera.aspect=n,this.world.officeCamera.fov=e>t?67:58,this.world.officeCamera.updateProjectionMatrix(),this.world.menuCamera.aspect=n,this.world.menuCamera.fov=e>t?51:40,this.world.menuCamera.updateProjectionMatrix();for(const r of Object.values(this.world.cams))r.camera.aspect=n,r.camera.fov=e>t?63:55,r.camera.updateProjectionMatrix();(i=this.dom.rotateNotice)==null||i.classList.toggle("hidden",!0)}startNight(t){const e=Ge(Number(t)||1,1,Math.max(1,this.save.unlocked));this.night=e,this.cfg=zc[e-1],this.state="briefing",this.power=100,this.elapsed=0,this.powerOut=!1,this.blackoutTimer=0,this.doors={left:!1,right:!1},this.lights={left:!1,right:!1},this.doorAmounts=[0,0],this.hallLights=[0,0],this.camOpen=!1,this.camId="1",this.coveWatch=0,this.camAlert={text:"",time:0},this.deathReason="",this.hintsShown=new Set,this.briefingTimer=0,this.jump=null,this.selectedNight=e,this.save.current=e,this.persist(),this.resetCharacters(),this.scene.add(this.world.officeCamera),this.scareLight.intensity=0,this.look={yaw:0,pitch:-.055,targetYaw:0,targetPitch:-.055},this.audio.unlock().then(()=>this.audio.startShift()),this.audio.stopMusic(),this.audio.stopStatic(),this.ai={bonnie:{loc:"stage",timer:ds(...this.cfg.bonnie.start),atDoor:!1,doorTimer:0,retreat:0,warned:!1},chica:{loc:"stage",timer:ds(...this.cfg.chica.start),atDoor:!1,doorTimer:0,retreat:0,warned:!1},foxy:{progress:0,timer:this.cfg.foxy.first,running:0,blocked:!1}},this.placeAnimatronic("bonnie","stage"),this.placeAnimatronic("chica","stage"),this.placeAnimatronic("foxy","cove"),this.world.characters.freddy.visible=!0,this.placeAnimatronic("freddy","stage"),je(this.world.characters.freddy,.5),je(this.world.characters.bonnie,.5),je(this.world.characters.chica,.5),je(this.world.characters.foxy,.5),this.dom.menu.classList.add("hidden"),this.dom.hud.classList.remove("hidden"),this.dom.gameOver.classList.add("hidden"),this.dom.winScreen.classList.add("hidden"),this.dom.scareFx.classList.remove("show"),this.dom.powerOut.classList.remove("show"),this.dom.foxyWarning.classList.remove("show"),this.dom.tablet.classList.add("hidden"),this.dom.settingsModal.classList.add("hidden"),this.dom.nightSelect.classList.add("hidden"),this.dom.howModal.classList.add("hidden"),this.dom.briefing.classList.remove("hidden","out"),this.dom.hud.classList.add("hidden"),document.body.classList.remove("camera-open","scare","power-out"),this.dom.lookHint.classList.remove("hide"),this.dom.briefNight.textContent=`NIGHT ${String(e).padStart(2,"0")}`,this.dom.briefTime.textContent="12:00 AM",this.dom.briefCopy.textContent=this.cfg.flavor,this.dom.briefTip.textContent=this.briefTip(e),this.dom.hudNight.textContent=`NIGHT ${String(e).padStart(2,"0")}`,this.dom.checkNight.textContent=String(e).padStart(2,"0"),this.setStateCamera("office"),this.audio.heartbeatTimer=0,this.updateHUD()}briefTip(t){return t===1?"TIP: Drag the screen to look at both doors.":t===2?"TIP: A dark hall can hide a very large problem.":t===3?"TIP: Watch CAM 05. Foxy does not wait for an invitation.":t===4?"TIP: Every second with a door sealed is a second of power gone.":t===5?"TIP: The lights reveal them. The doors only delay them.":"TIP: There is no trick left to teach you."}setStateCamera(t){this.cameraMode=t}toggleDoor(t){this.state!=="playing"||this.powerOut||(this.doors[t]=!this.doors[t],this.doors[t]?this.audio.doorClose():this.audio.doorOpen(),this.vibrate(this.doors[t]?[18,20,12]:10),this.dom[t+"DoorBtn"].classList.toggle("active",this.doors[t]),this.dom[t+"DoorBtn"].setAttribute("aria-pressed",String(this.doors[t])),this.doors[t]&&this.threatAtDoor(t)&&this.flashDoorAlert(t))}toggleLight(t){this.state!=="playing"||this.powerOut||(this.lights[t]=!this.lights[t],this.audio.lightClick(this.lights[t]),this.vibrate(8),this.dom[t+"LightBtn"].classList.toggle("active",this.lights[t]),this.dom[t+"LightBtn"].setAttribute("aria-pressed",String(this.lights[t])),this.lights[t]&&this.threatAtDoor(t)&&(this.showToast(`Something is standing in the ${t==="left"?"west":"east"} doorway.`,{danger:!0,duration:1800}),this.audio.breathing(),this.vibrate([16,35,22])))}threatAtDoor(t){return this.ai?t==="left"&&this.ai.bonnie.atDoor?"bonnie":t==="right"&&this.ai.chica.atDoor?"chica":t==="left"&&this.ai.foxy.running>0?"foxy":null:null}flashDoorAlert(t){this.dom.doorAlert.classList.add("show"),setTimeout(()=>this.dom.doorAlert.classList.remove("show"),600)}toggleCamera(t){if(this.state==="camera"){if(t===!0)return;this.closeCamera()}else if(this.state==="playing"&&!this.powerOut){if(t===!1)return;this.openCamera()}}openCamera(){this.powerOut||this.state!=="playing"||(this.state="camera",this.camOpen=!0,this.coveWatch=0,document.body.classList.add("camera-open"),this.dom.tablet.classList.remove("hidden"),this.dom.hud.classList.add("hidden"),this.audio.cameraOn(),this.vibrate(12),this.switchCamera(this.camId,!0))}closeCamera(){this.state==="camera"&&(this.state="playing",this.camOpen=!1,document.body.classList.remove("camera-open"),this.dom.tablet.classList.add("hidden"),this.dom.hud.classList.remove("hidden"),this.audio.cameraOff(),this.coveWatch=0,this.vibrate(9))}switchCamera(t,e=!1){if(!this.world.cams[t])return;this.camId=String(t);for(const i of this.dom.camMap.querySelectorAll(".cam-map-btn")){const r=i.dataset.cam===this.camId;i.classList.toggle("active",r),i.setAttribute("aria-selected",String(r))}const n=this.world.cams[this.camId];this.dom.camName.textContent=n.name,this.dom.camLabel.textContent=n.label,this.dom.camChannel.textContent=`CH ${this.camId.padStart(2,"0")}`,e||(this.audio.cameraSwitch(),this.vibrate(7)),this.coveWatch=0}resetCharacters(){var t;if((t=this.world)!=null&&t.characters)for(const[e,n]of Object.entries(this.world.characters)){n.parent!==this.scene&&this.scene.add(n);const i=n.userData.home;n.position.set(i.x,i.y,i.z),n.rotation.set(0,i.ry,0),n.scale.setScalar(n.userData.baseScale||1),n.userData.mode="stage",n.visible=!0}}placeAnimatronic(t,e){const n=this.world.characters[t];if(!n)return;const i=t==="bonnie"?-1:t==="chica"?1:0;let r,a=0,o="idle";t==="freddy"?e==="stage"?(r=[-0,.55,-14.6],a=0,o="stage"):(r=[0,0,12.55],a=0,o="door"):t==="foxy"?e==="cove"?(r=[-11.4,.5,-9.1],a=0,o="stage"):(r=[-5.38,0,11.85],a=Math.PI/2,o="run"):e==="stage"?(r=[t==="bonnie"?-2.85:2.85,.55,-14.85],a=0,o="stage"):e==="mid"?(r=[i*7.1,0,-3.7],a=i*-.72,o="idle"):e==="hall"?(r=[i*5.95,0,9.7],a=0,o="idle"):(r=[i*5.28,0,11.85],a=-i*Math.PI/2,o="door"),n.position.set(...r),n.rotation.set(0,a,0),n.userData.mode=o,n.userData.location=e}updateAI(t,e){for(const n of["left","right"]){const i=n==="left"?"bonnie":"chica",r=this.ai[i];if(!r||this.powerOut)continue;if(r.atDoor){if(r.doorTimer-=t,this.doors[n])r.retreat+=t,r.retreat>1.35&&(r.atDoor=!1,r.retreat=0,r.doorTimer=0,r.loc="hall",r.timer=ds(...this.cfg[i].step)*.8,this.placeAnimatronic(i,"hall"),this.audio.footstep(n==="left"?-.6:.6),this.updateIndicators());else if(r.retreat=0,r.doorTimer<=0){this.startScare(i,n);return}continue}if(r.timer-=t*(1+e*.22),r.timer>0)continue;const a=this.doors[n];r.loc==="stage"?(r.loc="mid",this.placeAnimatronic(i,"mid"),r.timer=ds(...this.cfg[i].step),Math.random()<.3&&this.audio.footstep(n==="left"?-.7:.7)):r.loc==="mid"?(r.loc="hall",this.placeAnimatronic(i,"hall"),r.timer=ds(...this.cfg[i].step)*.92,this.audio.footstep(n==="left"?-.5:.5)):r.loc==="hall"&&(a?(r.timer=2.4,this.audio.knock(n==="left"?-.55:.55)):(r.loc="door",r.atDoor=!0,r.doorTimer=this.cfg[i].grace,r.retreat=0,r.warned=!1,this.placeAnimatronic(i,"door"),this.audio.knock(n==="left"?-.7:.7),this.audio.breathing(),this.vibrate([18,30,18]),this.camAlert={text:`PROXIMITY ALERT — ${n==="left"?"WEST":"EAST"} HALL`,time:4},this.state!=="camera"&&this.showToast(`Heavy footsteps outside the ${n} door.`,{danger:!0,duration:2400}),this.updateIndicators()))}}updateFoxy(t,e){if(this.powerOut)return;const n=this.ai.foxy;if(n){if(n.running>0){if(n.running-=t,this.dom.foxyWarning.classList.add("show"),this.world.characters.foxy.userData.mode="run",n.running<=0)if(this.dom.foxyWarning.classList.remove("show"),this.doors.left)n.running=0,n.progress=0,n.timer=this.cfg.foxy.interval,this.placeAnimatronic("foxy","cove"),this.audio.foxyBlocked(),this.vibrate([70,40,90]),this.power=Math.max(0,this.power-3.2),this.camAlert={text:"IMPACT DETECTED — WEST DOOR HELD",time:3.5},this.state!=="camera"&&this.showToast("Foxy hit the west door. The shutter held.",{duration:2400});else{this.startScare("foxy","left");return}return}if(this.camOpen&&this.camId==="5"){this.coveWatch+=t,this.coveWatch>.9&&n.progress>0&&(n.progress=0,n.timer=this.cfg.foxy.first*.72,this.coveWatch=0,this.camAlert={text:"PIRATE COVE SECURE — FOXY RETREATED",time:2.8},this.audio.footstep(-.2)),this.world.characters.foxy.userData.mode="stage";return}this.coveWatch=0,n.timer-=t*(1+e*.25),!(n.timer>0)&&(n.progress=Math.min(3,n.progress+1),n.timer=this.cfg.foxy.interval,n.progress===1?(this.camAlert={text:"PIRATE COVE CURTAIN MOVED",time:3},this.state!=="camera"&&this.showToast("A curtain shifted somewhere in the dark.",{duration:2100})):n.progress===2?(this.camAlert={text:"CAM 05 — CURTAIN OPEN",time:4},this.state!=="camera"&&this.showToast("Pirate Cove is open. Check CAM 05.",{danger:!0,duration:2500}),this.audio.footstep(-.8)):n.progress>=3&&(n.running=this.cfg.foxy.grace,this.placeAnimatronic("foxy","hall"),this.world.characters.foxy.userData.mode="run",this.audio.foxyRun(),this.vibrate([50,30,50,30,80]),this.camAlert={text:"WEST HALL BREACH — SEAL DOOR",time:4},this.dom.foxyWarning.classList.add("show")))}}triggerPowerOut(){this.powerOut||(this.powerOut=!0,this.power=0,this.doors={left:!1,right:!1},this.lights={left:!1,right:!1},this.doorAmounts=[0,0],this.hallLights=[0,0],this.blackoutTimer=0,this.audio.powerDown(),setTimeout(()=>this.audio.powerOutMusic(),1800),this.audio.stopStatic(),this.state==="camera"&&this.closeCamera(),this.state="playing",this.dom.hud.classList.add("blackout"),this.dom.foxyWarning.classList.remove("show"),this.dom.lookHint.classList.add("hide"),setTimeout(()=>this.dom.powerOut.classList.add("show"),600),this.placeAnimatronic("freddy","office"),this.world.characters.freddy.visible=!0,this.world.characters.freddy.userData.mode="door",je(this.world.characters.freddy,3),this.look.targetYaw=0,this.look.targetPitch=-.03,this.dom.leftDoorBtn.classList.remove("active"),this.dom.rightDoorBtn.classList.remove("active"),this.dom.leftLightBtn.classList.remove("active"),this.dom.rightLightBtn.classList.remove("active"),this.camAlert={text:"",time:0},this.vibrate([100,100,100,200]),this.updateIndicators())}startScare(t,e){var a,o;if(this.state==="jumpscare"||this.state==="gameover"||this.state==="win")return;this.state="jumpscare",this.deathReason=t,this.jump={type:t,t:0,char:this.world.characters[t],done:!1},this.jumpOriginal={parent:this.jump.char.parent,position:this.jump.char.position.clone(),rotation:this.jump.char.rotation.clone(),scale:this.jump.char.scale.clone()},this.dom.tablet&&!this.dom.tablet.classList.contains("hidden")&&(this.dom.tablet.classList.add("hidden"),document.body.classList.remove("camera-open")),this.dom.hud.classList.add("hidden"),this.dom.foxyWarning.classList.remove("show"),this.dom.powerOut.classList.remove("show"),this.dom.briefing.classList.add("hidden"),this.dom.toast.classList.remove("show"),document.body.classList.add("scare"),this.dom.scareFx.classList.add("show");const n=this.jump.char;this.world.officeCamera.add(n);const i=t==="freddy"?1.31:1.25,r=((o=(a=n.userData.parts)==null?void 0:a.head)==null?void 0:o.position.y)||2.19;n.position.set(0,-r*i-.14,-1.5),n.rotation.set(-.04,0,0),n.scale.setScalar(i),n.userData.mode="scare",n.visible=!0,je(n,4),this.scareLight.intensity=9.5,this.world.officeCamera.rotation.set(0,0,0),this.audio.jumpscare(),this.audio.stopMusic(),this.vibrate([120,40,140,40,180])}endScare(){if(this.jump&&!this.jump.done){this.jump.done=!0;const t=this.jump.char;this.jumpOriginal&&(this.scene.add(t),t.position.copy(this.jumpOriginal.position),t.rotation.copy(this.jumpOriginal.rotation),t.scale.copy(this.jumpOriginal.scale),t.userData.mode="stage"),je(t,.5)}this.scareLight.intensity=0,this.dom.scareFx.classList.remove("show"),document.body.classList.remove("scare"),this.state="gameover",this.showGameOver(),this.updateHUD()}showGameOver(){var r;const t=_a(this.elapsed,((r=this.cfg)==null?void 0:r.duration)||80);this.dom.gameOver.classList.remove("hidden"),this.dom.hud.classList.add("hidden"),this.dom.powerOut.classList.remove("show"),this.dom.endStats.innerHTML=`
      <div class="end-stat"><span>TIME REACHED</span><strong>${t.label}</strong></div>
      <div class="end-stat"><span>POWER LEFT</span><strong>${Math.max(0,Math.floor(this.power))}%</strong></div>
      <div class="end-stat"><span>NIGHT</span><strong>${String(this.night).padStart(2,"0")}</strong></div>`;const e={bonnie:["Bonnie was already inside the west doorway.","The west hall light came on one second too late."],chica:["Chica made it through the east door.","You checked the camera. She checked you."],foxy:["Foxy came down the west hall like a bullet.","The cove was empty. The hallway was not."],freddy:["The power failed, and Freddy found you in the dark.","You heard the music box. Then you heard him."]},n={bonnie:"Keep the west hall lit when you hear footsteps. A closed door makes him leave.",chica:"The east door is not a wall. Close it before the breathing stops.",foxy:"Watch CAM 05 regularly. If the curtain opens, seal the west door immediately.",freddy:"Power is the real enemy. Do not leave doors or lights on longer than you need."},i=e[this.deathReason]||e.freddy;this.dom.deathCopy.textContent=i[Math.floor(Math.random()*i.length)],this.dom.deathTip.textContent=n[this.deathReason]||n.freddy,this.audio.stopStatic(),this.vibrate([80,50,120])}completeNight(){if(this.state==="win"||this.state==="gameover")return;this.state="win",this.audio.chime(),this.audio.stopStatic(),this.audio.stopMusic(),this.dom.hud.classList.add("hidden"),this.dom.powerOut.classList.remove("show"),this.dom.foxyWarning.classList.remove("show"),this.dom.tablet.classList.add("hidden"),document.body.classList.remove("camera-open","power-out"),this.save.wins=(this.save.wins||0)+1,this.save.unlocked=Math.max(this.save.unlocked||1,Math.min(6,this.night+1)),this.save.current=Math.min(6,this.night+1),this.persist(),this.buildNightGrid();const t=this.night>=6;this.dom.winKicker.textContent=t?"TRUE ENDING":"6:00 AM",this.dom.winTitle.textContent=t?"YOU OWN THE NIGHT":this.night===5?"WEEK COMPLETE":"SHIFT COMPLETE",this.dom.winCopy.textContent=t?"Six nights. No witnesses. The animatronics power down at dawn — and the office is finally quiet.":this.night===5?"Five shifts survived. There is one more name on the roster. It does not have a paycheck.":"You made it to 6 AM. The morning crew is not here yet. Neither is anyone else.",this.dom.checkNight.textContent=String(this.night).padStart(2,"0"),this.dom.checkAmount.textContent=`$${xg[this.night].toFixed(2)}`,this.dom.winTip.textContent=t?"The next shift starts at midnight. It always does.":"A sealed door buys seconds. A dark hall buys nothing.",this.dom.nextBtn.textContent=t?"MAIN MENU":"NEXT NIGHT",this.dom.winScreen.classList.remove("hidden"),this.vibrate([35,30,35,30,90]),setTimeout(()=>this.audio.startMenu(),800)}quitToMenu(){var t,e;this.state="menu",this.audio.stopStatic(),this.audio.stopMusic(),(e=(t=this.audio).stopFan)==null||e.call(t),this.dom.hud.classList.add("hidden"),this.dom.hud.classList.remove("blackout"),this.dom.tablet.classList.add("hidden"),this.dom.gameOver.classList.add("hidden"),this.dom.winScreen.classList.add("hidden"),this.dom.powerOut.classList.remove("show"),this.dom.foxyWarning.classList.remove("show"),this.dom.scareFx.classList.remove("show"),this.dom.briefing.classList.add("hidden"),this.dom.menu.classList.remove("hidden"),document.body.classList.remove("camera-open","scare","power-out"),this.scareLight.intensity=0,this.powerOut=!1,this.doors={left:!1,right:!1},this.lights={left:!1,right:!1},this.doorAmounts=[0,0],this.hallLights=[0,0],this.resetCharacters(),this.selectedNight=Ge(this.save.current||1,1,this.save.unlocked||1),this.updateMenuCopy(),this.buildNightGrid(),this.look={yaw:0,pitch:-.055,targetYaw:0,targetPitch:-.055},this.setStateCamera("menu"),this.audio.ambient||this.audio.startMenu()}showToast(t,{danger:e=!1,duration:n=3e3}={}){this.dom.toast&&(this.dom.toast.textContent=t,this.dom.toast.classList.toggle("danger",e),this.dom.toast.classList.add("show"),clearTimeout(this.toastTimeout),this.toastTimeout=setTimeout(()=>this.dom.toast.classList.remove("show"),n))}updateIndicators(){var n,i,r;if(!this.ai)return;const t=!!((n=this.ai.bonnie)!=null&&n.atDoor||((i=this.ai.foxy)==null?void 0:i.running)>0),e=!!((r=this.ai.chica)!=null&&r.atDoor);this.dom.leftIndicator.classList.toggle("show",t),this.dom.rightIndicator.classList.toggle("show",e)}vibrate(t){var e;if(this.save.haptics)try{(e=navigator.vibrate)==null||e.call(navigator,t)}catch{}}updateMenu(t,e){const n=this.world.menuCamera;n.position.set(Math.sin(e*.055)*.5,2.38+Math.sin(e*.12)*.035,-3+Math.cos(e*.045)*.22),n.lookAt(0,1.78,-14.62),this.world.update(e,t,{doorAmounts:[0,0],hallLights:[0,0],powerOut:!1,mode:"menu",foxyProgress:0}),je(this.world.characters.freddy,.55),je(this.world.characters.bonnie,.4),je(this.world.characters.chica,.4),je(this.world.characters.foxy,.4),this.renderer.toneMappingExposure=xi.lerp(this.renderer.toneMappingExposure,1.13,.03)}updateOfficeCamera(t,e){var c,l;if(this.state==="jumpscare"){const h=((c=this.jump)==null?void 0:c.t)||0;if(this.world.officeCamera.position.set(Math.sin(h*30)*.006,1.62+Math.cos(h*41)*.005,15.55),this.world.officeCamera.rotation.set(Math.sin(h*29)*.012,Math.cos(h*23)*.015,Math.sin(h*33)*.016),this.scareLight.intensity=9.2+Math.sin(h*54)*1.6,(l=this.jump)!=null&&l.char){const u=Math.max(0,Math.min(1,h*1.4));this.jump.char.position.z=-1.5+u*.2}return}const n=this.state==="briefing"||this.state==="gameover"||this.state==="win",i=this.powerOut;if(i&&(this.look.targetYaw=0,this.look.targetPitch=-.02),!n&&this.state==="playing"&&!i){const h=t*1.45;(this.keys.has("a")||this.keys.has("arrowleft"))&&(this.look.targetYaw=Ge(this.look.targetYaw+h,-1.42,1.42)),(this.keys.has("d")||this.keys.has("arrowright"))&&(this.look.targetYaw=Ge(this.look.targetYaw-h,-1.42,1.42)),(this.keys.has("w")||this.keys.has("arrowup"))&&(this.look.targetPitch=Ge(this.look.targetPitch+h*.5,-.24,.13)),(this.keys.has("s")||this.keys.has("arrowdown"))&&(this.look.targetPitch=Ge(this.look.targetPitch-h*.5,-.24,.13))}const r=Math.min(1,t*(i?2.2:9.5));this.look.yaw+=(this.look.targetYaw-this.look.yaw)*r,this.look.pitch+=(this.look.targetPitch-this.look.pitch)*r;const a=Math.sin(e*1.35)*.0018,o=this.powerOut?Math.sin(e*7.1)*.002:0;this.world.officeCamera.position.set(o,1.62+a,15.55),this.world.officeCamera.rotation.set(this.look.pitch+a*2,this.look.yaw+o,0)}updateShift(t){const e=this.cfg;if(this.elapsed+=t,this.powerOut){if(this.blackoutTimer+=t,this.elapsed>=e.duration){this.completeNight();return}this.blackoutTimer>4.7&&this.startScare("freddy","office"),this.blackoutTimer>1.2&&this.updateIndicators()}else{if(_a(this.elapsed,e.duration),this.elapsed>=e.duration){this.completeNight();return}let n=e.baseDrain;if(this.doors.left&&(n+=e.doorDrain),this.doors.right&&(n+=e.doorDrain),this.lights.left&&(n+=e.lightDrain),this.lights.right&&(n+=e.lightDrain),this.camOpen&&(n+=e.camDrain),this.power=Math.max(0,this.power-n*t),this.power<=0){this.triggerPowerOut();return}const i=this.elapsed/e.duration;if(this.doorAmounts[0]+=((this.doors.left?1:0)-this.doorAmounts[0])*Math.min(1,t*9),this.doorAmounts[1]+=((this.doors.right?1:0)-this.doorAmounts[1])*Math.min(1,t*9),this.hallLights[0]+=((this.lights.left?1:0)-this.hallLights[0])*Math.min(1,t*18),this.hallLights[1]+=((this.lights.right?1:0)-this.hallLights[1])*Math.min(1,t*18),this.updateFoxy(t,i),this.state==="jumpscare"||(this.updateAI(t,i),this.state==="jumpscare"))return;this.updateTutorial(),this.ai&&(this.ai.bonnie.atDoor||this.ai.chica.atDoor||this.ai.foxy.running>0)?this.audio.heartbeat(1.1):this.ai&&this.ai.foxy.progress>=2&&this.audio.heartbeat(.8)}}updateTutorial(){if(this.night!==1||!this.ai)return;const t=[{at:1.8,key:"look",text:"Drag anywhere to look around the office."},{at:7,key:"light",text:"Tap LIGHT to reveal a hall. Eyes glow in the dark."},{at:13,key:"door",text:"Tap DOOR to seal it. Doors and lights eat power."},{at:20,key:"cam",text:"Open CAMERAS and check CAM 05 before Foxy moves."}];for(const e of t)if(this.elapsed>e.at&&!this.hintsShown.has(e.key)){this.hintsShown.add(e.key),this.showToast(e.text,{duration:3900});break}}updateHUD(){var c,l;if(!this.dom.hud)return;const t=this.cfg||zc[0],e=_a(this.elapsed,t.duration);this.dom.hudHour.textContent=e.label,this.dom.clock.textContent=e.value,this.dom.clockAm.textContent=e.ampm,this.dom.clockFill.style.width=`${Ge(this.elapsed/t.duration,0,1)*100}%`;const n=Ge(this.power,0,100);this.dom.powerPct.textContent=`${Math.ceil(n)}%`,this.dom.powerFill.style.width=`${n}%`,this.dom.powerBox.classList.toggle("warn",n<=38&&n>18),this.dom.powerBox.classList.toggle("danger",n<=18);let i=1;this.doors.left&&i++,this.doors.right&&i++,this.lights.left&&i++,this.lights.right&&i++,this.camOpen&&i++;const r=this.dom.usageBars.children;for(let h=0;h<r.length;h++)r[h].classList.toggle("on",h<i&&i<4),r[h].classList.toggle("hot",h<i&&i>=4),r[h].style.opacity=h<i?1:.25;this.dom.leftDoorBtn.classList.toggle("active",this.doors.left),this.dom.rightDoorBtn.classList.toggle("active",this.doors.right),this.dom.leftLightBtn.classList.toggle("active",this.lights.left),this.dom.rightLightBtn.classList.toggle("active",this.lights.right),this.dom.leftDoorBtn.setAttribute("aria-pressed",String(this.doors.left)),this.dom.rightDoorBtn.setAttribute("aria-pressed",String(this.doors.right)),this.dom.leftLightBtn.setAttribute("aria-pressed",String(this.lights.left)),this.dom.rightLightBtn.setAttribute("aria-pressed",String(this.lights.right));const a=this.threatAtDoor("left")||this.threatAtDoor("right"),o=this.dom.threatHint;if(this.powerOut)o.textContent="THE POWER IS GONE.",o.className="threat-hint danger";else if(((c=this.ai)==null?void 0:c.foxy.running)>0)o.textContent="WEST HALL BREACH — CLOSE THE DOOR.",o.className="threat-hint danger";else if(a){const h=this.ai.bonnie.atDoor?"WEST":this.ai.chica.atDoor?"EAST":"WEST";o.textContent=`MOVEMENT AT THE ${h} DOOR.`,o.className="threat-hint danger"}else((l=this.ai)==null?void 0:l.foxy.progress)>=2?(o.textContent="PIRATE COVE IS OPEN. CHECK CAM 05.",o.className="threat-hint warn"):(o.textContent="THE HALLS ARE QUIET.",o.className="threat-hint");this.updateIndicators(),this.dom.camPower.textContent=`${Math.ceil(n)}%`,this.dom.camPowerFill.style.width=`${n}%`,this.dom.camPowerFill.style.background!==void 0&&(this.dom.camPowerFill.style.background=n<20?"#f14035":n<40?"#e0a83f":"#69d99a"),this.dom.camTime.textContent=yg(this.elapsed,t.duration),this.camAlert.time>0?(this.camAlert.time-=1/60,this.dom.camWarning.textContent=this.camAlert.text,this.dom.camWarning.classList.add("show")):this.dom.camWarning.classList.remove("show"),this.dom.hud.classList.toggle("blackout",this.powerOut)}updateCameraFeed(t){var i;const e=(i=this.world.cams[this.camId])==null?void 0:i.camera;if(!e)return;const n=e.userData.target;this.tmpTarget.copy(n),this.tmpTarget.x+=Math.sin(t*.9)*.035,this.tmpTarget.y+=Math.cos(t*.72)*.02,e.lookAt(this.tmpTarget),e.rotation.z+=Math.sin(t*1.7)*.0015,this.renderer.toneMappingExposure=xi.lerp(this.renderer.toneMappingExposure,1.72,.05)}animate(){var n,i,r;if(!this.running)return;requestAnimationFrame(this.animate);const t=Math.min(.05,this.clock.getDelta()),e=this.clock.elapsedTime;if(this.fpsSample.time+=t,this.fpsSample.frames++,this.fpsSample.time>2){if(this.fpsSample.frames/this.fpsSample.time<32&&!this.fpsSample.adjusted&&this.quality==="high"&&this.save.quality==="high"){const o=Math.max(1.15,this.renderer.getPixelRatio()*.82);this.renderer.setPixelRatio(o),this.fpsSample.adjusted=!0}this.fpsSample.time=0,this.fpsSample.frames=0}if(this.state==="menu"){this.updateMenu(t,e),this.renderer.render(this.scene,this.world.menuCamera);return}if(this.state==="briefing"||this.state==="playing"||this.state==="camera"||this.state==="jumpscare"||this.state==="gameover"||this.state==="win"){if(this.state==="briefing")this.briefingTimer+=t,this.updateOfficeCamera(t,e),this.briefingTimer>3.3&&(this.state="playing",this.dom.briefing.classList.add("out"),setTimeout(()=>this.dom.briefing.classList.add("hidden"),700),this.dom.hud.classList.remove("hidden"),this.showToast("12:00 AM. The shift has started. Do not let them in.",{duration:3400}));else if(this.state==="playing")this.updateShift(t),this.updateOfficeCamera(t,e);else if(this.state==="camera"){if(this.updateShift(t),this.state==="jumpscare")return;this.updateCameraFeed(e)}else this.state==="jumpscare"?(this.jump.t+=t,this.updateOfficeCamera(t,e),this.jump.t>1.95&&this.endScare()):(this.updateOfficeCamera(t,e),this.renderer.toneMappingExposure=xi.lerp(this.renderer.toneMappingExposure,.92,.03));this.world.update(e,t,{doorAmounts:this.powerOut?[0,0]:this.doorAmounts,hallLights:this.powerOut?[0,0]:this.hallLights,powerOut:this.powerOut||this.state==="gameover",mode:this.state,foxyProgress:((i=(n=this.ai)==null?void 0:n.foxy)==null?void 0:i.progress)||0}),this.state==="playing"&&this.powerOut&&(this.world.officeCamera.rotation.z=Math.sin(e*12)*.0015);const a=this.state==="camera"?(r=this.world.cams[this.camId])==null?void 0:r.camera:this.world.officeCamera;this.state!=="camera"&&(this.renderer.toneMappingExposure=xi.lerp(this.renderer.toneMappingExposure,this.powerOut?.72:1.06,.04)),this.updateHUD(),this.renderer.render(this.scene,a||this.world.officeCamera)}}}function Eg(){var o;const s=document.getElementById("game-canvas"),t=new pl,e=new H0({canvas:s,antialias:!0,powerPreference:"high-performance",alpha:!1,stencil:!1});e.setClearColor(328708,1),e.outputColorSpace=Ve,e.toneMapping=Wc,e.toneMappingExposure=1.08,e.shadowMap.enabled=!0,e.shadowMap.type=Gc,e.info.autoReset=!0;const n=new oo(e),i=new G0(e);t.environment=n.fromScene(i,.04).texture,t.environmentIntensity=.28,(o=i.dispose)==null||o.call(i),n.dispose();const r=_g(e,t),a=new Sg({renderer:e,scene:t,world:r});window.__FNAF={game:a,world:r,scene:t,renderer:e},e.domElement.addEventListener("webglcontextlost",c=>{c.preventDefault();const l=document.getElementById("boot");l&&(l.textContent="The security system lost its signal. Reload to try again.")})}try{Eg()}catch(s){console.error(s);const t=document.getElementById("boot");t&&(t.innerHTML=`<div class="boot-mark"><span class="boot-star">★</span><span>SIGNAL LOST</span></div><div class="boot-copy">Your device could not start the 3D security system.<br>${String(s.message||s).slice(0,160)}</div>`)}
