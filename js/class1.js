// 원래 js에서 클래스 설정방법
// let user ={
//   username = "경민",
//   password = "1234"
// };


class User{

  // # : 접근지정자(private) => 웬만하면 싱글톤에서만 사용
  // #username;
  // #password;
  // #name;
  // #email;

  //js에서는 getter setter 잘 못봄.
  // setUsername(username) {
  //   this.#username =username;
  // } 
  // getUsername(username){
  //   this.#username = username;
  // }

  username;
  password;
  name;
  email;
//아래처럼 생성자 만들어도됨.
  constructor(username, password, name, email){
    this.username = username;
    this.password = password;
    this.name = name;
    this.email=email;
    
  }

  printName(){
    console.log(this.name + "님의 정보");
  }
}

class UserMain{
  //싱글톤, 자기자신을 찍어낸다. 프로젝트할때 onload시마다 붙는이유 
  static #instance = null; //# : private
  static getInstance(){
    if(this.#instance==null){
      this.#instance = new UserMain();
    }
    return this.#instance;
    
  } 

  

  main(){
    let user = new User("min", "1234", "경민", "abc@abc.com");

    // user.username="min";
    // user.password ="1234";
    // user.name = "경민";
    // user.email = "abc@abc.com";
    
    console.log(user);

    //localStorage : 데이터 유지...전역영역
    localStorage.username = user.username;
    console.log("username : " +localStorage.username);

    user.printName();
  }
}


window.onload = () =>{
  // let userMain = new UserMain();

  //싱글톤 사용후
  let userMain = UserMain.getInstance(); //=>싱글톤으로 객체생성.

  userMain.main();
}