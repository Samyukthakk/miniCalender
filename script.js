const monthName = document.getElementById("month-name")
const dayName = document.getElementById("day-name")
const yearName = document.getElementById("year-name")
const dayNumber = document.getElementById("day-number")

const date = new Date();
const month = date.getMonth();
monthName.innerHTML = date.toLocaleString("en", {
    month: "long"
})

dayName.innerHTML = date.toLocaleString("en", {
    weekday : "long"
})

dayNumber.innerHTML = date.getDate();

yearName.innerHTML = date.getFullYear();