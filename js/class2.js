window.onload = () => {
  console.log("class2.html : "+ localStorage.username);
  //window객체 메서드는 window. 없이 사용가능.
  // alert("class2.html : "+ localStorage.username);
  
  const btns = document.querySelectorAll("button");
  btns[0].onclick =() =>{
    print();
  }
  btns[1].onclick =() =>{
    history.back();
  }
  
  
}

// class{
//   static #instance = null;
//   static getInstance (){
//     if(this.#instance == null){
//       this.#instance = new ();

//     }
//     return this.#instance;
//   }
// }