window.onload = () => {

  const btns = document.querySelectorAll("button");

  btns[0].onclick = () => {
    location.href = "https://www.naver.com";
    //href(property(변수))로 이동시에는 history를 남겨서 뒤로가기 가능
  }

  btns[1].onclick = () => {
    const urlInput = document.querySelector("input");
    urlInput.value = location.pathname;

  }

  btns[2].onclick = () =>{
    location.reload();
  }

  btns[3].onclick=()=>{
    location.replace("https://www.google.com");
    //replace(메서드)는 말그대로 교체하는것, history가 없어 뒤로가기가 불가능.
  }


}