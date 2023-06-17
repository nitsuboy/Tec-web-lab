let parentDiv = document.getElementById("table");
let getb = document.getElementById("getb");
let postb = document.getElementById("postb");
let postform = document.getElementById("postform");
let id;
let putform = document.getElementById("putform");
let closeb = document.getElementById("closeb");

async function delf(id) {  
    const res = await fetch('https://reqres.in/api/users/' + id,{ method: 'DELETE' });
    alert(res["status"] + "\nusuario " + id + " deletado");
}

async function putf(id) {
    const res = await fetch('https://reqres.in/api/users/' + id,{ method: 'PUT', body: 'putform' });
    let obj = await res.json();
    alert(res["status"] + "\nusuario atualizado");
}

async function postf() {  
    const res = await fetch('https://reqres.in/api/users/' ,{ method: 'POST', body: 'postform' });
    let obj = await res.json();
    alert(res["status"] + "\nusuario criado id: " + obj['id'])
}

async function getf() {  
    while (parentDiv.firstChild) {
        parentDiv.removeChild(parentDiv.firstChild);
    }
    const res = await fetch('https://reqres.in/api/users',{ method: 'GET' });
    let obj = await res.json();
    for (let x in obj["data"]) {
        let row = document.createElement("tr");
        let nome = document.createElement("td");
        let email = document.createElement("td");
        let avatar = document.createElement("td");
        let pd = document.createElement("td");
        let avatarp = document.createElement("img");
        let put = document.createElement("button");
        let del = document.createElement("button");

        nome.textContent = obj["data"][x]["first_name"] + " " + obj["data"][x]["last_name"] ;
        email.textContent = obj["data"][x]["email"];
        avatarp.src = obj["data"][x]["avatar"];
        del.textContent = "DELETE"
        put.textContent = "PUT"

        parentDiv.appendChild(row);
        row.appendChild(nome);
        row.appendChild(email);
        row.appendChild(avatar);
        avatar.appendChild(avatarp);
        row.appendChild(pd);
        pd.appendChild(put);
        pd.appendChild(del);
        del.onclick = () => delf(obj["data"][x]["id"]);
        put.onclick = () => {
            id = obj["data"][x]["id"];
            pd.appendChild(putform);
        };
    }
}

function openTheForm() {
    document.getElementById("postform").style.display = "block";
}
  
function closeTheForm() {
    document.getElementById("postform").style.display = "none";
    document.getElementById("putform").style.display = "none";
}

postform.addEventListener("submit", (e) => {
    e.preventDefault();
    postf()
  });

putform.addEventListener("submit", (e) => {
    e.preventDefault();
    putf()
  });

getb.onclick = getf;
postb.onclick = openTheForm;
closeb.onclick = closeTheForm;


