export default class HtmlService {

constructor(){
    this.bindButtonListener();
}

bindButtonListener() {

    const button = document.querySelector("button");
    button.addEventListener("click", () => {
      console.log("Button clicked!");
      
    });
}


}