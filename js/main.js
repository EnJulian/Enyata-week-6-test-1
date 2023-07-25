// Exercise 2

class FormHandler {
  async validateForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;
    const country = document.getElementById("country").value;
    const picture = document.getElementById("picture").files[0];

    if (firstName && lastName && age && country && picture) {
      return { firstName, lastName, age, country, picture };
    } else {
      throw new Error("Please fill in all fields.");
    }
  }

  formSentence(formData) {
    const { firstName, lastName, age, country } = formData;
    return `My name is ${firstName} ${lastName}. I am from ${country}. I am ${age} years old.`;
  }
}

const form = document.getElementById("myForm");
const formHandler = new FormHandler();

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    const formData = await formHandler.validateForm();
    const sentence = formHandler.formSentence(formData);
    alert(sentence);
  } catch (error) {
    alert(error.message);
  }
});
