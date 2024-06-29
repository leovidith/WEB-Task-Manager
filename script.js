'use strict';

const modal = document.getElementById("modal");
const input = document.getElementById("taskInput");
const time = document.getElementById("timeInput");
const date = document.getElementById("dateInput");
const div = document.getElementById("main-div");


function openModal()
{
    modal.classList.remove('hidden');
}

function addTask()
{
    const text = input.value.trim();
    const timeText = time.value.trim();
    const dateText = date.value.trim();
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const div1 = document.createElement("div");
    const p = document.createElement("h3");
    const p1 = document.createElement("h3");
    const p2 = document.createElement("h3");


    p.textContent = text;
    p1.textContent = timeText;
    p2.textContent = dateText;

    div1.appendChild(checkbox);
    div1.appendChild(p);
    div1.appendChild(p1);
    div1.appendChild(p2);

    div.appendChild(div1);

    p.style.cursor = "pointer";    
    checkbox.addEventListener("change", function()
    {
        if(checkbox.checked)
        {
            p.style.textDecoration = "line-through"
            p1.style.textDecoration = "line-through"
            p2.style.textDecoration = "line-through"
        }
        else
        {
            p.style.textDecoration = "none";
            p1.style.textDecoration = "none";
            p2.style.textDecoration = "none";
        }
    });

    p.addEventListener("click", function()
    {
        checkbox.click();
    })
    
    const h2 = document.getElementById("h2");
    h2.textContent = "Tasks: ";
    modal.classList.add('hidden');
}

document.addEventListener("keydown", function(event)
{
    if(event.key == "Escape")
    {
        modal.classList.add('hidden');
    }
});