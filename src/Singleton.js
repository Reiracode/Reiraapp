// 將函式轉為es2016類別;
class Getname {
  constructor(params) {
    let loc = params.indexOf(":", 6);
    this.domainName = params.slice(0, loc) + ":8080/reirasys_api";
  }
}
const Singleton = new Getname(window.location.href);
// const Singleton = {
//   domainName: domainName,
// };

// export const domainName = createContext(initialState);
export default Singleton;

// class Singleton {
//   constructor () {
//     this.domainName = window.location.href
//     const loc = this.domainName.indexOf(':', 6)
//     this.domainName = this.domainName.slice(0, loc) + ":8080"

//   }
// }
// const singleton = new Singleton
// export default singleton

// const Singleton = () => {
//   let domainName = window.location.href;
//   let loc = domainName.indexOf(":", 6);
//   domainName = domainName.slice(0, loc) + ":8080";
//   // return domainName;

// };
// export default Singleton ;
