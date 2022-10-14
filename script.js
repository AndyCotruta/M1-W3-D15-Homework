let x = "John";
let y = "Doe";
console.log(x + " <> " + y);

const information = {
  name: "John",
  surname: "Doe",
  email: "John@example.com",
};

delete information.email;

const arrOfStrings = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

for (let i = 0; i < arrOfStrings.length; i++) {
  const individualElement = arrOfStrings[i];
  console.log(individualElement);
}

const arrOfNumbers = [];

for (let i = 0; i < 100; i++) {
  arrOfNumbers.push(Math.floor(Math.random() * 100));
}

console.log(arrOfNumbers);

const minAndMax = function () {
  const min = Math.min(...arrOfNumbers);
  console.log("The minimum value is " + min);
  const max = Math.max(...arrOfNumbers);
  console.log("The maximum value is " + max);
};

console.log(minAndMax());

let arr = [];
for (let i = 0; i < 4; i++) {
  let current = [];
  for (let j = 0; j < 10; j++) {
    current.push(Math.floor(Math.random() * 10));
  }
  arr.push(current);
}
console.log(arr);

const longest = function (a, b) {
  if (a.length > b.length) {
    return a;
  } else if (b.length > a.length) {
    return b;
  } else {
    ("Please pass two strings as parameters");
  }
};

console.log(longest("Andy", "Aristide"));

const higherSum = function (a, b) {
  let sumA = 0;
  let sumB = 0;

  for (let i = 0; i < a.length; i++) {
    sumA += a[i];
  }
  for (let i = 0; i < b.length; i++) {
    sumB += b[i];
  }
  if (sumA > sumB) {
    return "The array with highest sum is: " + a;
  } else if (sumA < sumB) {
    return "The array with the highest sum is: " + b;
  }
};

console.log(higherSum([1, 2, 3], [1, 3, 4]));

const container = document.getElementById("container");
const tableData = document.getElementsByTagName("td");

const printTheTd = function () {
  for (let i = 0; i < tableData.length; i++) {
    console.log(tableData[i].innerText);
  }
};

const changeH1 = function () {
  const h1 = document.getElementById("title");
  h1.innerText = "This is the new H1";
};

const extraRow = function () {
  const table = document.getElementById("table");
  const addRow = document.createElement("tr");
  addRow.className = "tr";
  addRow.innerText = "This row was created with JS";
  table.appendChild(addRow);
};

const addClass = function () {
  const tableRow = document.querySelectorAll("tr");
  for (let i = 0; i < tableRow.length; i++) {
    tableRow[i].classList.add("test");
  }
};

const addRedBackground = function () {
  const links = document.querySelectorAll("a");
  for (let i = 0; i < links.length; i++) {
    links[i].style.backgroundColor = "red";
  }
};

window.onload = function () {
  tableCreate();
  console.log("Page loaded");
  const links = document.getElementById("test-link");
  links.addEventListener("mouseover", showHref, true);
  const hideImages = document.getElementById("clickToHide");
  hideImages.addEventListener("click", hideAllImages);
  const hideAndShowTable = document.getElementById("hide/show");
  hideAndShowTable.addEventListener("click", hideAndShow);
  const title = document.getElementById("title");
  title.addEventListener("click", sliceh1);
  const deleteButton = document.getElementById("delete");
  deleteButton.addEventListener("click", removeRandomTd);
};

const addNewListItems = function () {
  const list = document.querySelector("ul");
  const newItem = document.createElement("li");
  newItem.innerText = "This list item was created using JS";
  newItem.style.color = "red";
  list.appendChild(newItem);
};

const deleteList = function () {
  const list = document.querySelector("ol");
  console.log(list);
  list.innerHtml = "";
};

const showHref = function () {
  const link = document.getElementById("test-link");
  const href = link.getAttribute("href");
  console.log(link);
  alert(href);
};

const hideAllImages = function () {
  const images = document.querySelectorAll("img");
  console.log(images);
  for (let i = 0; i < images.length; i++) {
    images[i].classList.add("hidden");
  }
};

const hideAndShow = function () {
  const table = document.getElementById("table");
  if (table.classList.contains("visible")) {
    table.className = "hidden";
  } else if ((table.className = "hidden")) {
    table.className = "visible";
  }
};

const calculateSum = function () {
  const tableData = document.querySelectorAll("td");
  let sum = 0;
  for (let i = 0; i < tableData.length; i++) {
    const toNumber = parseInt(tableData[i].innerText);
    const isNotNumeric = isNaN(toNumber);
    if (!isNotNumeric) {
      sum += toNumber;
    }
  }
  console.log(sum);
};

//   for (let i = 0; i < tableData.length; i++) {
//     let data = tableData[i].innerText;
//     console.log(data);
//     if (parseInt(data) !== "NaN") {
//       sum += parseInt(data);
//     }
//   }
//   console.log(sum);
// };

const sliceh1 = function () {
  const h1 = document.getElementById("title");
  console.log(h1);
  const letters = h1.textContent;
  console.log(letters);
  letters.slice(0, -1);
  h1.textContent = letters.slice(0, -1);
};

const tds = document.querySelectorAll("td");
for (let i = 0; i < tds.length; i++) {
  tds[i].onclick = function (e) {
    e.target.classList.toggle("yellow");
  };
}

const tdsS = document.querySelectorAll("td");
for (let i = 0; i < tds.length; i++) {
  tdsS[i].onmouseover = function (e) {
    e.target.style.border = "1px solid blue";
  };
}

const removeRandomTd = function () {
  const tds = document.querySelectorAll("td");
  //   for (let i = 0; i < tds.length; i++) {
  const randomIndex = Math.floor(Math.random() * tds.length);
  tds[randomIndex].classList.add("hidden");
};
// };

function tableCreate() {
  const body = document.body,
    tbl = document.createElement("table");
  tbl.style.width = "200px";
  tbl.style.aspectRatio = 1 / 1;
  tbl.style.border = "1px solid black";
  tbl.id = "createdTable";

  for (let i = 0; i < 4; i++) {
    const tr = tbl.insertRow();
    for (let j = 0; j < 3; j++) {
      const td = tr.insertCell();
      td.appendChild(document.createTextNode(Math.floor(Math.random() * 12)));
      td.style.border = "1px solid black";
    }
  }
  body.appendChild(tbl);
}

const deleteCreatedTable = function () {
  const tbl = document.getElementById("createdTable");
  console.log(tbl);
  tbl.remove();
};
