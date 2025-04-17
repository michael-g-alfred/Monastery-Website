//////// Arabic Date ////////
document.addEventListener("DOMContentLoaded", function () {
  var today = new Date();

  // Days of the week in Arabic
  var daysOfWeek = [
    "الأحد",
    "الأثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
    "السبت",
  ];

  // Months of the year in Arabic
  var monthsOfYear = [
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ];

  // Function to convert numbers to Arabic numerals
  function toArabicNumerals(num) {
    var arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    return num
      .toString()
      .split("")
      .map(function (digit) {
        return arabicNumbers[digit];
      })
      .join("");
  }

  // Get the day of the week
  var dayOfWeek = daysOfWeek[today.getDay()];

  // Get the day, month, and year
  var day = toArabicNumerals(today.getDate());
  var month = monthsOfYear[today.getMonth()];
  var year = toArabicNumerals(today.getFullYear());

  // Format the date as "DayOfWeek, Day Month Year"
  var formattedDate = dayOfWeek + ", " + day + " " + month + " " + year;

  // Display the formatted date in the element with id "currentDate"
  document.getElementById("ArabicDate").innerHTML = formattedDate;
});
//////// Coptic Date ////////

document.addEventListener("DOMContentLoaded", function () {
  var today = new Date();

  // Coptic months in Arabic
  var copticMonths = [
    "توت",
    "بابة",
    "هاتور",
    "كياهك",
    "طوبة",
    "أمشير",
    "برمهات",
    "برمودة",
    "بشنس",
    "بؤونة",
    "أبيب",
    "مسري",
  ];

  // Function to convert numbers to Arabic numerals
  function toArabicNumerals(num) {
    var arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    return num
      .toString()
      .split("")
      .map(function (digit) {
        return arabicNumbers[digit];
      })
      .join("");
  }

  // Function to convert Gregorian (Mild) date to Coptic date
  function toCopticDate(date) {
    var startYear = 284; // Coptic year starts from 284 AD
    var startMonth = 8; // Coptic month starts from August (Gregorian month 8)
    var startDay = 29; // Coptic year starts on the 29th of August

    var currentYear = date.getFullYear();
    var currentMonth = date.getMonth() + 1; // JavaScript months start from 0, so add 1
    var currentDay = date.getDate();

    var diffYears = currentYear - startYear;
    var diffMonths = currentMonth - startMonth;
    var diffDays = currentDay - startDay;

    var copticYear = diffYears + 1; // Adding 1 because the Coptic year starts from 284 AD
    var copticMonth = diffMonths + 1;
    var copticDay = diffDays + 1;

    // If the current Gregorian date is before the Coptic start date, adjust the Coptic date
    if (
      currentMonth < startMonth ||
      (currentMonth === startMonth && currentDay < startDay)
    ) {
      copticYear -= 1;
      copticMonth = 12 + diffMonths; // Adjust the month to fall back in the previous year
      copticDay = 30 - Math.abs(diffDays); // Adjust the days accordingly
    }

    return {
      year: copticYear,
      month: copticMonth,
      day: copticDay,
    };
  }

  // Convert the current Gregorian date to Coptic date
  var copticDate = toCopticDate(today);

  // Get the Coptic month name
  var copticMonthName = copticMonths[copticDate.month - 1];

  // Convert the day, month, and year to Arabic numerals
  var arabicDay = toArabicNumerals(copticDate.day);
  var arabicYear = toArabicNumerals(copticDate.year);

  // Format the Coptic date as "Day Month Year"
  var formattedCopticDate =
    arabicDay + " " + copticMonthName + " " + arabicYear;

  // Display the Coptic date in the element with id "copticDate"
  document.getElementById("CopticDate").innerHTML = formattedCopticDate;
});
