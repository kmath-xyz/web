
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("Welcome!");
  await delay(700);
  createText("Initiating CLI...");
  await delay(1500);
  createText("Commands:");
 
  createCode("About me",'A short introduction');
  createCode("All","To view all commands");
  createCode("Socials", "A list of all my socials.");

  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# user";
  span1.textContent = " in";
  span2.textContent = " ~/Kmath";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "All"){
    trueValue(value);
    
    createCode("Projects", "A link to my Github page.");
    createCode("About me", 'A short introduction');
    createCode("Socials", "A list of all my socials.");
    createCode("clear", "Clears the terminal.");
    
  }
  else if(value === "Projects"){
    trueValue(value);
    createText("<a href='https://github.com/kmath-xyz' target='_blank'><i class='fab fa-github white'></i> github.com/Kmath-xyz</a>")
  }
  else if(value === "About me"){
    trueValue(value);
    createText("Hi, I am Kmath")
    createText("I am a python developer. I have worked with other technologies such as <span class='blue'>Kotlin, Javascript and Visual Basic. </span>")
  }
  else if(value === "Socials"){
    trueValue(value);
    createText("<a href='https://github.com/kmath-xyz' target='_blank'><i class='fab fa-github white'></i> Github.com/Kmath-xyz</a>")
    createText("<a href='https://twitter.com/kmath_xyz' target='_blank'><i class='fab fa-twitter white'></i> Twitter.com/Kmath-xyz</a>")
  }
  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();