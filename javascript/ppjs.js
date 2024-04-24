async function mtProjectsData() {
    try {
      const response = await fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects");
      const jsonResponse = await response.json();
   
      const name = document.querySelector("#name-Pdata")
      name.innerText = jsonResponse[0].name
      
      const description = document.querySelector("#description-Pdata")
      description.innerText = jsonResponse[0].description

      const compleated = document.querySelector("#compleated-Pdata")
      compleated.innerText = jsonResponse[0].completed_on

      const image = document.querySelector("#image-Pdata")
      image.setAttribute('src', jsonResponse[0].image)

      const content = document.querySelector("#content-Pdata")
      content.innerText = jsonResponse[0].content

      console.log("response: ", jsonResponse);
    } catch (err) {
      console.log( "Not found", err);
    }
  }
   
  mtProjectsData();