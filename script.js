
let tbody = document.getElementById("tbody");

function loadDefaultData() {
  return fetch('https://raw.githubusercontent.com/Manikanta79i/Fontend-FinalContest/main/studentdata.json')
    .then(response => response.json())
    .catch(error => {
      console.error('Error fetching data:', error);
      return null;
    });
}

loadDefaultData().then(students => {
  if (students) {
    loadDatatoTable(students);
  }
})

const searchInput = document.getElementById('searchstring');
const clearButton = document.getElementById('clearbutton');

// Show clear button when input is not empty
searchInput.addEventListener('input', () => {
  if (searchInput.value.trim() !== '') {
    clearButton.style.display = 'block';
  } else {
    clearButton.style.display = 'none';
  }
});

// Clear input when clear button is clicked
clearButton.addEventListener('click', () => {
  searchInput.value = '';
  clearButton.style.display = 'none';
});
function loadDatatoTable(students){
    tablem.style.display = "none";
    students.forEach((item)=>{
        let tr = document.createElement("tr");
        let fullname = `${item.first_name} ${item.last_name}`;
        let passing = item.passing? "Passed":"Failed";
        tr.innerHTML = `<td>${item.id}</td>
                         <td><div class="imgc"><img src="${item.img_src}">
                              ${fullname}</div>
                         </td>
                         <td>${item.gender}</td>
                         <td>${item.class}</td>
                         <td>${item.marks}</td>
                         <td>${passing}</td>
                         <td>${item.email}</td>`;
        tbody.appendChild(tr);
    })
}


let searchstring = document.getElementById("searchstring");

async function filterData(){
    let data = await loadDefaultData();
    tbody.innerHTML='';
    let resultstudents = data.filter((item)=>{
        let valuestr = searchstring.value.toLowerCase();
        let value = valuestr.trim();
        if(value === `${item.last_name}`.toLowerCase() || value === `${item.first_name}`.toLowerCase()|| value === `${item.email}`.toLowerCase()){
            return true;
        }
    })
    loadDatatoTable(resultstudents);
}

async function sortazf(){
    let students = await loadDefaultData();
    tbody.innerHTML='';
    students.forEach(function(student) {
        student.fullName = student.first_name + " " + student.last_name;
      });

      students.sort(function(a, b) {
        if (a.fullName < b.fullName) {
          return -1;
        } else if (a.fullName > b.fullName) {
          return 1;
        } else {
          return 0;
        }
      });
    
      loadDatatoTable(students);
}

async function sortza(){
    let students = await loadDefaultData();
    tbody.innerHTML='';
    students.forEach(function(student) {
        student.fullName = student.first_name + " " + student.last_name;
      });

      students.sort(function(a, b) {
        if (a.fullName > b.fullName) {
          return -1;
        } else if (a.fullName < b.fullName) {
          return 1;
        } else {
          return 0;
        }
      });
    
      loadDatatoTable(students);
}

async function sortbymarks(){
    let students = await loadDefaultData();
    tbody.innerHTML='';
    students.sort((a,b)=>{
        return a.marks - b.marks;
    })
    loadDatatoTable(students);
}

async function sortbyclass(){
    let students = await loadDefaultData();
    tbody.innerHTML='';
    students.sort((a,b)=>{
        return a.class - b.class;
    })
    loadDatatoTable(students);
}

async function sortbypassing(){
    let students = await loadDefaultData();
    tbody.innerHTML='';
    let resultstudents = students.filter((item)=>{
        if(item.passing) return true;
    })

    loadDatatoTable(resultstudents);
}

let tbodymale = document.getElementById("tbodymale");
let tablem = document.getElementById("tablem");

async function sortbygender(){
    let students = await loadDefaultData();
    tbody.innerHTML='';
    let female = students.filter((item)=>{
        if(item.gender === "Female") return true;
    })
    loadDatatoTable(female);
    
    let male = students.filter((item)=>{
        if(item.gender === "Male") return true;
    })

    tablem.style.display = "table";

    tbodymale.innerHTML='';
    male.forEach((item)=>{
        let tr = document.createElement("tr");
        let fullname = `${item.first_name} ${item.last_name}`;
        let passing = item.passing? "Passed":"Failed";
        tr.innerHTML = `<td>${item.id}</td>
                         <td><div class="imgc"><img src="${item.img_src}">
                              ${fullname}</div>
                         </td>
                         <td>${item.gender}</td>
                         <td>${item.class}</td>
                         <td>${item.marks}</td>
                         <td>${passing}</td>
                         <td>${item.email}</td>`;
        tbodymale.appendChild(tr);
    })
}