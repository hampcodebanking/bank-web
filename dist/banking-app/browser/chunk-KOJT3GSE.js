import{b as o,m as a}from"./chunk-GLHPMRCO.js";import{aa as n,fa as e}from"./chunk-OXWYM4U2.js";var p=(()=>{let r=class r{constructor(t){this.http=t,this.baseUrl=a.apiUrl}getAllTransactions(){let t=`${this.baseUrl}/transactions`;return this.http.get(t)}getTransactionById(t){let i=`${this.baseUrl}/transactions/${t}`;return this.http.get(i)}getAllTransactionsByCustomer(){let t=`${this.baseUrl}/admin/transactions/customer`;return this.http.get(t)}};r.\u0275fac=function(i){return new(i||r)(e(o))},r.\u0275prov=n({token:r,factory:r.\u0275fac,providedIn:"root"});let s=r;return s})();export{p as a};
