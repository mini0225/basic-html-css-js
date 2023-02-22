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

  useraname;
  password;
  name;
  email;
}

class UserMain{
  main(){
    let user = new User();

    user.useraname="min";
    user.password ="1234";
    user.name = "경민";
    user.email = "abc@abc.com";
    
    console.log(user);
  }
}


window.onload = () =>{
  let userMain = new UserMain();

  userMain.main();
}