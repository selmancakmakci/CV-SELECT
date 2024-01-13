const data = [
  {
    Image:
      "https://img.freepik.com/premium-vector/businesswoman-avatar-cartoon-character-profile_18591-50580.jpg?w=1800",
    Name: "ALICE",
    Surname: "JOHNSON",
    Age: "24",
    Specialty: "JS",
    Experience: "5 years",
    Hobbies: ["art", "cinema", "ice skating", "foods", "study"],
  },
  {
    Image:
      "https://img.freepik.com/premium-vector/businessman-avatar-cartoon-character-profile_18591-50585.jpg?w=1800",
    Name: "BOB",
    Surname: "SMITH",
    Age: "24",
    Specialty: "CSS",
    Experience: "4 years",
    Hobbies: ["Spor", "Cinema", "Study", "Hiking", "Camping"],
  },
  {
    Image:
      "https://img.freepik.com/premium-vector/businesswoman-avatar-cartoon-character-profile_18591-50377.jpg?w=1800",
    Name: "KAREN",
    Surname: "MOORE",
    Age: "24",
    Specialty: "HTML CSS",
    Experience: "6 years",
    Hobbies: ["Art", "Cinema", "Music", "Volleyball"],
  },
  {
    Image:
      "https://img.freepik.com/premium-vector/businessman-avatar-cartoon-character-profile_18591-50588.jpg?w=1800",
    Name: "DAVID",
    Surname: "TAYLOR",
    Age: "24",
    Specialty: "HTML CSS JS",
    Experience: "2 years",
    Hobbies: ["ART", "Cinema", "Cycling", "Backpacking"],
  },
  {
    Image:
      "https://img.freepik.com/premium-vector/businessman-avatar-cartoon-character-profile_18591-50586.jpg?w=1800",
    Name: "LOGAN",
    Surname: "HARRIS",
    Age: "32",
    Specialty: "HTML CSS JS",
    Experience: "7 years",
    Hobbies: ["Music", "Cycling", "Camping", "Football"],
  },
  {
    Image:
      "https://img.freepik.com/premium-vector/businesswoman-avatar-cartoon-character-profile_18591-50579.jpg?w=1800",
    Name: "SUSAN",
    Surname: "LOPEZ",
    Age: "28",
    Specialty: "CSS JS",
    Experience: "4 years",
    Hobbies: ["Music", "Food", "Reading", "Singing"],
  },
  {
    Image:
      "https://img.freepik.com/premium-vector/businesswoman-avatar-profile-picture-round_18591-50375.jpg",
    Name: "AMELIA",
    Surname: "GRAY",
    Age: "42",
    Specialty: "HTML CSS JS",
    Experience: "18 years",
    Hobbies: ["Traveling", "Yoga", "Painting", "Singing"],
  },
];

let index = 0;

const dataleriYukle = () => {
  let currentPerson = data[index];
  let dataElement = document.querySelector("dataGosterimYeri");
  let dataElement2 = document.querySelector("#altCard");
  let dataElement3 = document.querySelector("#profile");
  let dataElement4 = document.querySelector("#hobiler");

  let Image = document.createElement("img");
  Image.src = currentPerson.Image;
  dataElement3.appendChild(Image);

  let Name = document.createElement("h1");
  Name.textContent = currentPerson.Name + " " + currentPerson.Surname;
  Name.className = "Name";
  dataElement3.appendChild(Name);

  let Age = document.createElement("h2");

  Age.textContent = "Age: " + currentPerson.Age;

  Age.className = "altCard";
  dataElement2.appendChild(Age);

  let Specialty = document.createElement("h2");
  Specialty.textContent = "Specialty: " + currentPerson.Specialty;
  Specialty.className = "altCard";

  dataElement2.appendChild(Specialty);

  let Experience = document.createElement("h2");
  Experience.textContent = "Experience: " + currentPerson.Experience;
  Experience.className = "altCard";
  Experience.id = "altCardExperience";
  dataElement2.appendChild(Experience);

  currentPerson.Hobbies.forEach((Begeni) => {
    let li = document.createElement("li");
    li.textContent = Begeni;
    dataElement4.appendChild(li);
  });
};

dataleriYukle();

const sonrakiKisi = () => {
  let dataElement2 = document.querySelector("#altCard");
  dataElement2.innerHTML = "";
  let dataElement3 = document.querySelector("#profile");
  dataElement3.innerHTML = "";
  let dataElement4 = document.querySelector("#hobiler");
  dataElement4.innerHTML = "";
  document.querySelector("#congratulation").innerHTML = "";
  document.querySelector("#choosenOne").innerHTML = "";

  index++;
  if (index >= data.length) {
    index = data.length - 1;
  }
  dataleriYukle();
};
const oncekiKisi = () => {
  let dataElement2 = document.querySelector("#altCard");
  dataElement2.innerHTML = "";
  let dataElement3 = document.querySelector("#profile");
  dataElement3.innerHTML = "";
  let dataElement4 = document.querySelector("#hobiler");
  dataElement4.innerHTML = "";
  document.querySelector("#congratulation").innerHTML = "";
  document.querySelector("#choosenOne").innerHTML = "";
  index--;
  if (index < 0) {
    index = 0;
  }

  dataleriYukle();
};

let onceki = document.querySelector("#onceki");
onceki.addEventListener("click", oncekiKisi);

let sonraki = document.querySelector("#sonraki");
sonraki.addEventListener("click", sonrakiKisi);
/*
const kisiyiIseAl = () => {
  let eklenecekYer = document.querySelector("#congratulation");
  eklenecekYer.innerHTML = "";

  let result = document.createElement("p");

  let currentPerson = data[index];
  result.textContent = "CONGRATULATIONS";

  result.style.color = "red";
  eklenecekYer.appendChild(result);
};
*/
const kisiyiIseAl = () => {
  let eklenecekYer2 = document.querySelector("#choosenOne");
  eklenecekYer2.innerHTML = "";

  let eklenecekYer = document.querySelector("#congratulation");
  eklenecekYer.innerHTML = "";

  let currentPerson = data[index];

  let cardDiv = document.createElement("div");
  cardDiv.className = "resultDiv";

 
  let nameParagraph = document.createElement("p");
  nameParagraph.textContent = `${currentPerson.Name} ${currentPerson.Surname}`;
  cardDiv.appendChild(nameParagraph);

  let image = document.createElement("img");
  image.src = currentPerson.Image;
  cardDiv.appendChild(image);

  let congratulationMessage = document.createElement("p");
  congratulationMessage.textContent = "🎉 CONGRATULATIONS 🎉";
  eklenecekYer2.appendChild(congratulationMessage);
 
  eklenecekYer.appendChild(cardDiv);
  
  confetti({
    particleCount: 550,
    spread: 100,
    ticks:200,
    origin: { y: 0.9 }
  });
};

let kisiyiIseAlmaButonu = document.querySelector("#sec");

kisiyiIseAlmaButonu.addEventListener("click", kisiyiIseAl);






