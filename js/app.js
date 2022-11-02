let userAge = 26;
let isSubscribed = true;

if ((userAge >= 18) && (isSubscribed == true)){
    console.log("Welcome subscriber!");
} else if ((userAge >= 18) && (isSubscribed == false)){
    console.log("Sorry, you are not currently subscribed.");
} else if ((userAge <= 17) && (isSubscribed == true)){
    console.log("The user is younger than 18 and is currently subscribed.");
} else if ((userAge <= 17) && (isSubscribed == false)){
    console.log("The user is younger than 18 and is not subscribed.");
}
