const nameInput = document.getElementById("name");
const jobInput = document.getElementById("job");
const btn = document.getElementById("btn");
const cards = document.getElementById("cards");
let data = [
{ name: "Ali", job: "dasturchi" },
{ name: "Vali", job: "Designer" }
];


let editIndex = -1;
function renderCards ( ) {
cards. innerHTML = 

data.map((item, i) =>

`<div class="card">
<h3>${item.name}</h3>
<p>${item.job}</p>
<div class="actions">
<button class="edit" onclick="editCard(${i})">Edit</button>
<button class="delete" onclick="deleteCard(${i})">Delete</button>
</div>
</div>`) .join("");

}

function saveCard( ) {
const name = nameInput.value. trim( );
const job = jobInput.value.trim( );
if (!name || !job) return;

const newCard = { name, job };

if (editIndex === -1) {
data.push(newCard);
} else {
data[editIndex] = newCard;
}

nameInput.value = "";
jobInput.value = "";
editIndex = -1;
btn. textContent = "add";
renderCards();
}

function editCard(i) {
nameInput.value = data[i].name;
jobInput.value = data[i].job;
editIndex = i;
btn. textContent = "Saqlash";
}

function deleteCard(i) {
data.splice(i, 1);
renderCards( );
}

renderCards( );