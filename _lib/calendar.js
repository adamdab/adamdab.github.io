const monthLabel = document.getElementById("month-label");
const calendarDays = document.getElementById("calendar-days");
const today = new Date();
let displayedMonth = new Date(today.getFullYear(), today.getMonth(), 1);

const monthFormatter = new Intl.DateTimeFormat(undefined, {
  month: "long",
  year: "numeric",
});

function renderCalendar() {
  const year = displayedMonth.getFullYear();
  const month = displayedMonth.getMonth();
  const firstWeekday = (new Date(year, month, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const weeks = Math.ceil((firstWeekday + daysInMonth) / 7);

  monthLabel.textContent = monthFormatter.format(displayedMonth);
  calendarDays.replaceChildren();

  for (let week = 0; week < weeks; week += 1) {
    const row = document.createElement("tr");

    for (let weekday = 0; weekday < 7; weekday += 1) {
      const day = week * 7 + weekday - firstWeekday + 1;
      const cell = document.createElement("td");

      if (day > 0 && day <= daysInMonth) {
        cell.textContent = day;
        if (
          year === today.getFullYear() &&
          month === today.getMonth() &&
          day === today.getDate()
        ) {
          cell.setAttribute("aria-current", "date");
        }
      }

      row.append(cell);
    }

    calendarDays.append(row);
  }
}

document.getElementById("previous-month").addEventListener("click", () => {
  displayedMonth = new Date(displayedMonth.getFullYear(), displayedMonth.getMonth() - 1, 1);
  renderCalendar();
});

document.getElementById("next-month").addEventListener("click", () => {
  displayedMonth = new Date(displayedMonth.getFullYear(), displayedMonth.getMonth() + 1, 1);
  renderCalendar();
});

renderCalendar();
