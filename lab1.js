/*
  Full Name: Tylor Wichiciel
  Student ID: 200261135

  Instructions:
    Follow the steps below. If you have any questions
    please feel free to use Slack to communicate. You
    are allowed to discuss the lab with other students
    but you ARE NOT permitted to copy/paste or share
    code.
  
  Rubric:
    Steps: 11.5 points
    Code Format: 10 points
    Github Link: 10 points

  NOTE: The code format and Github link marks are
    only awarded if the steps have been completed.
    (Code formatting is the visual structure of
      you code. I expect that you have used proper
      tabbing of nested structures so code readability
      is adequate.)
*/

/*
  Step 1 (2.5 points):
    Create an array that contains 4 people objects.
    Each object must have at least 2 properties.
*/

const peopleArr = [
 obj1 = {name: 'Tylor', age: 25, hobbie: "Gaming"},
 obj2 = {name: 'Chloe', age: 24, hobbie: "Cat Petting"},
 obj3 = {name: 'George', age: 5, hobbie: "Being a cat"},
 obj4 = {name: 'Melvin', age: 1, hobbie: "Also being a cat"}
];


/*
  Step 2 (6 points):
    Create an arrow function that accepts
    a destructured object as an argument. In the
    body of your function, console.log a string
    template utilizing the properties you
    destructured.
*/

const ojb1 = 
{
  name: "Tylor Wichiciel",
  age: 24,
  hobbie: "Gaming"
};
console.log(obj1);

const func = ({hobbie}) => {
  console.log("If I forget to submit an an assignment or lab it's probably because I was", hobbie, "also diablo 4 looks amazing.");
};
func(obj1);


/*
  Step 3 (3 points):
    Loop over your array using a for/of loop.
    Call your arrow function passing the array item
    as an argument.
*/

for (let obj1 of peopleArr) {
  console.log(func);
}


