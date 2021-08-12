'use strict';
/*




1. =============== how to create an element with DOM ================
  let caller = (elementName,yourText,yourParent,before) => {
    let myElement = document.createElement(elementName);
    myElement.style.display = `inline-block`;
    myElement.style.marginLeft = `25px`;
    let myElementText = document.createTextNode(yourText)
    myElement.appendChild(myElementText);
    let parentElement = document.getElementById(yourParent);
    let insertBefore = document.getElementById(before)
    parentElement.insertBefore(myElement,insertBefore)
}

document.getElementById(`mybtn`).addEventListener((`click`),() => {
    caller(`p`,`text created by Awal`,`haha`,`shower`)
})



















2. ========= how to get data with ajax request and show on DOM? ==========

  document.getElementById(`btn`).addEventListener((`click`),()=> {
    
     async function hello () {
        let myfetcher = await fetch(`https://jsonplaceholder.cypress.io/todos`);
        let makejson = await myfetcher.json();
        let result = await makejson;
        for(let i = 0; i < 10; i++) {
            creator(result[i])
        }
    }

    hello()

    function creator(data) {
        let li = document.createElement(`li`);
        li.innerHTML = `${data.id}. ${data.title}`;
        li.style.listStyle = `none`;
        li.style.border = `1px solid grey`;
        li.style.textAlign = `center`
        let parent = document.getElementById(`myul`);
        parent.appendChild(li)
    }
})






















3. ===== How to insert number before li in a list item? ============
let liItems = document.getElementById(`myul`).children
let makeArray = Array.from(liItems); // [...listItems] ei spread opertaor o kaj korbe ekhane easily 

let text;

document.getElementById(`btn`).addEventListener((`click`),() => {
    for(let i = 0; i < makeArray.length; i++) {
         text = makeArray[i].innerHTML
         makeArray[i].innerHTML = i + 1 + `. ` + text
     }
})



























4. ============== How to remove a list from a list item ? ==============

let liList = document.getElementById(`myul`).children;
let arrayOfLi = Array.from(liList)

arrayOfLi.forEach((li) => {
    li.addEventListener((`click`),()=> {
        li.remove()
    })
})



















5. ============== How to remove element from a list? ===============
let liList = document.getElementById(`myul`).children;
let arrayOfLi = Array.from(liList)

arrayOfLi.forEach((li) => {
    li.addEventListener((`click`),(e)=> {
        e.target.remove()
    })
})



















6. ========= Give an example of checkbox output, the most complex thing. ========

  <form action="index.html" id="myform">
                 <div class="form-check">
                     <input type="checkbox" id="myck1" value="Ten" name="awal">
                     <label for="myck1">Ten</label>
                 </div>
                 <div class="form-check">
                    <input type="checkbox" id="myck2" value="Eleven" name="awal">
                    <label for="myck2">Eleven</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" id="myck3" value="Twelve" name="awal">
                    <label for="myck3">Twelve</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" id="myck4" value="Thirteen" name="awal">
                    <label for="myck4">Thirteen</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" id="myck5" value="Fourteen" name="awal">
                    <label for="myck5">Fourteen</label>
                </div>
            </form>
    
    let finalparent = document.getElementById(`selected`);
let boxes = document.getElementsByName(`awal`);
let checkNum = [];

[...boxes].forEach((box) => {
    box.addEventListener((`change`),function(e) {
        if(e.target.checked) {
            checkNum.push(e.target.value);
            outputTheResult(finalparent,checkNum)
        } else {
           let index = checkNum.indexOf(e.target.value)
           checkNum.splice(index,1)
           outputTheResult(finalparent,checkNum)
        }
    })
})

function outputTheResult(parent,numArray) {
    let result = ``;
    numArray.forEach((num,ind) => {
        result += `${ind+1}.${num}  `;
    })
    parent.innerHTML = result;
}






















7. ======================== How to take data from an input box and insert it into an another element? ======================

take li inner text from an input box

   document.getElementById(`btn`).addEventListener((`click`),function(e) {
    let li = document.getElementById(`lione`).cloneNode(true);
    let parent = document.getElementById(`myul`)
    parent.appendChild(li)
})

let ul = document.getElementById(`myul`);

ul.addEventListener((`dblclick`),function(event) {
    if(this.contains(event.target)) {
        let text = event.target.innerHTML;
        event.target.innerHTML = ``;
        let inputbox = inp(text)
        event.target.appendChild(inputbox)
        inputbox.addEventListener((`keypress`),function(e) {
            if(e.key == `Enter`) {
                event.target.innerHTML = e.target.value
            }
        })
    }
})

function inp(text) {
    let inp = document.createElement(`input`);
    inp.type = `text`;
    inp.className = `form-control`;
    inp.value = text;

    return inp
}






















8. =====================How to collect form data from form and send to server as object? =======================

              stack learner way

let form = document.getElementById(`form`);
form.addEventListener((`submit`),function(e){
    e.preventDefault();

    let makeobj = {};

    [...this.elements].forEach((element) => {
        if(element.name != `submit` && element.name != `remember`) {
            makeobj[element.name] = element.value;

            // jodi bootsrap ba onno karone kono empty object element thake setake remove korbe ei code  
            if(makeobj[``] == ``) { 
                delete makeobj[``]
            }
       }
   })
   console.log(makeobj);
   this.reset()
})



                    my way 

let form = document.getElementById(`form`);
form.addEventListener((`submit`),function(e) {
    e.preventDefault()
    let values = [];
    let elements = this.elements;
    let elementArray = Array.from(elements);
    elementArray.forEach(element => {
        if(element.value != `submit`) {
            values.push(element.value)
        }
    }); 
    let makeobj = {};
    makeobj.name = values[0];
    makeobj.email = values[1];
    makeobj.password = values[2];
    makeobj.country = values[3];

    console.log(makeobj);

    for(let i = 0; i < (elementArray.length - 2); i++) {
          elementArray[i].value = ``;
    }
    
})





























9. ==================== How to post data and get a server response? ==============

  let form= document.getElementById(`form`);
let ul = document.getElementById(`shower`);
let url = `https://jsonplaceholder.typicode.com/posts`;

function limaker(data) {
    let li = document.createElement(`li`);
    li.innerHTML = `${data.id}. Title is ${data.title} and body is ${data.body}`;
    li.style.listStyle = `none`;
    return li;
}


form.addEventListener(`submit`, function(event) {
    event.preventDefault();

    let title = this.title.value || undefined;
    let body = this.body.value || undefined;

    if(title && body) {
        let makeobj = {
            title,
            body
        }

        fetch(url,{
            method: `POST`,
            headers: {
                'content-type': 'Application/JSON'
            },
            body: JSON.stringify(makeobj)
        })
         .then(result => result.json())
         .then(data => {
            let item = limaker(data);
            ul.appendChild(item);
            this.reset();
         })
         .catch(e => console.log(e.message))

    }

})





*/