function sayMyName() {
  let person = prompt("Please enter your name", "Harry Potter")
  let text;
  if (person == null || person == "") {
    text = "User didn't want a personalized hello. Hello user! How are you today?";
  } else if (person === "Harry Potter") {
    text = "User is lazy. Hello lazy user! How are you today?"
  } else {
    text = "Hello " + person + "! How are you today?";
  }
  document.getElementById("pershendetje").innerHTML = text;
}
sayMyName();

let texti = {
  title: "Titulli ma i miri",
  firstParagraph: "Cka ka cka ska?"
}

document.getElementById('titulli').innerHTML = texti.title
document.getElementById('paragrafiPare').innerHTML = texti.firstParagraph