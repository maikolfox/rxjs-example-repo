import { Observable}  from "rxjs" ;

const input = document.querySelector("input");
const resultats = document.querySelector(".resultats");

const frappes$=new Observable(observer=>{

    input.addEventListener("inpuy",event=>{
        observer.next(event);
    })
})


frappes$.subscribe(observer=>{
    console.log(observer.event.value)
})