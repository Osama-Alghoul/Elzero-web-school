let day = "   friday   ";

switch (day.trim().charAt(0).toUpperCase()) {
    case "Saturday":
    case "Sunday":
    case "Friday":
        console.log("No appoinments available")
        break;

    case "Monday":
    case "Thursday":
        console.log("From 10:00 AM to 5:00 PM")
        break;

    case "Wednsday":
        console.log("From 10:00 AM to 7:00 PM")
        break;

    case "Tuesday":
        console.log("From 10:00 AM to 6:00 PM")
        break;

    default:
        console.log("It's not a valid day");
        break;
}