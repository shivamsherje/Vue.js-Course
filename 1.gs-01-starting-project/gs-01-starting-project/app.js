const buttonElement = document.querySelector("button");
const inputElement = document.querySelector("input");
const listElement = document.querySelector("ul");

const addGoal = () => {
  const inputValue = inputElement.value;
  const listItems = document.createElement("li");
  listItems.innerText = inputValue;
  listElement.append(listItems);
  inputElement.value = "";
};

buttonElement.addEventListener("click", addGoal);
