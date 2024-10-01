const getStartedBtn = document.querySelector(".get-started-btn");
const inputField = document.querySelector(".task-name");
const noTaskYetContainer = document.querySelector(".no-tasks-yet-wrapper");
const createTaskBtn = document.querySelector(".create-task-btn");
const taskContainer = document.querySelector(".task-container");
const task1 = document.querySelector(".left p");
const bottomBtn = document.querySelector(".bottom-btn");
const nameField = document.querySelector(".name-field");
const name = document.querySelector(".name");
const completeAllBtn = document.querySelector(".completeall-btn");
const deleteAllBtn = document.querySelector(".deleteall-btn");
const allTaskDone = document.querySelector("all-tasks-done");

createTaskBtn.addEventListener("click", () => {
  noTaskYetContainer.classList.add("hidden");
  taskContainer.classList.remove("hidden");

  const inputValue = inputField.value;

  const taskBlock = `        <div class="task-wrapper">
          <div class="task1">
            <div class="left">
              <img src="images/unchecked icon.svg" alt="unchecked" />
              <p>${inputValue}</p>
            </div>
            <img src="images/bin.svg" alt="bin" />
          </div>
          <img src="images/horizontal bar.svg" alt="horizontal divider" />
        </div>`;

  bottomBtn.insertAdjacentHTML("beforebegin", taskBlock);

  inputField.value = "";
});
