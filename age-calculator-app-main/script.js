let userBirthDay = 0;
let userBirthMonth = 0;
let userBirthYear = 0;
function startCalculator() {
    userBirthDay = parseInt(document.getElementById("user-birth-day").value);
    userBirthMonth = parseInt(document.getElementById("user-birth-month").value);
    userBirthYear = parseInt(document.getElementById("user-birth-year").value);
    if (isNaN(userBirthDay) || isNaN(userBirthMonth) || isNaN(userBirthYear)) {
        alert("Por favor, ingrese fechas válidas.");
        return;
    }
    if (userBirthDay < 1 || userBirthDay > 31) {
        alert("Por favor, ingrese un día válido.");
        return;
    }
    if (userBirthMonth < 1 || userBirthMonth > 12) {
        alert("Por favor, ingrese un mes válido.");
        return;
    }
    if (userBirthYear < 1900 || userBirthYear > 2023) {
        alert("Por favor, ingrese un año válido.");
        return;
    }

    let userAge = calculateAge(userBirthDay, userBirthMonth, userBirthYear);
    if (userAge === -1) {
        alert("Por favor, ingrese una fecha válida.");
        return;
    }
    displayAge(userAge); // Mostrar la edad en la vista
}
function calculateAge(userBirthDay, userBirthMonth, userBirthYear) {
    let todayDate = new Date();
    let todayDay = todayDate.getDate();
    let todayMonth = todayDate.getMonth() + 1;
    let todayYear = todayDate.getFullYear();


    let userAgeYear = todayYear - userBirthYear;
    let userAgeMonth = todayMonth - userBirthMonth;
    let userAgeDay = todayDay - userBirthDay;



    if (todayMonth < userBirthMonth || (todayMonth === userBirthMonth && todayDay < userBirthDay)) {
        userAgeYear--;
        userAgeMonth = 12 - userBirthMonth + todayMonth - 1;
    }
    
    if (todayDay < userBirthDay) {
        userAgeMonth--;
        let prevMonthLastDay = new Date(todayYear, todayMonth - 1, 0).getDate();
        userAgeDay = prevMonthLastDay - userBirthDay + todayDay;
    }

    if (userAgeYear < 0 && userAgeMonth > todayMonth && userAgeDay > todayDay) {
        alert("Por favor, ingrese una fecha válida.");
        return; // Fecha de nacimiento no válida
    }
    if (userAgeYear >= 0 && userAgeMonth > 0 && userAgeDay >= 0) {
    
        return {
            years: userAgeYear,
            months: userAgeMonth,
            days: userAgeDay
        };
    }
    
}
// Esta función encargada de mostrar la edad calculada en la vista
function displayAge(userAge) {
    const yearsElement = document.getElementById("years");
    const monthsElement = document.getElementById("months");
    const daysElement = document.getElementById("days");

    yearsElement.textContent = userAge.years;
    monthsElement.textContent = userAge.months;
    daysElement.textContent = userAge.days;
}





