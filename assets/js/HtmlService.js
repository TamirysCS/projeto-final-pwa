export default class HtmlService {

constructor(appointmentService){
    this.bindButtonListener();
}

bindButtonListener() {

    const button = document.querySelector("button");
    button.addEventListener("click", () => {
 
        console.log("Button clicked!");
 
    });
}


}