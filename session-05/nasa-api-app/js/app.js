document.addEventListener("DOMContentLoaded", () => {
  const fetchApodButton = document.getElementById("fetch-apod");
  const apodContent = document.getElementById("apod-content");
  const apiKey = "YOUR_API_KEY";

  fetchApodButton.addEventListener("click", () => {
    const date = document.getElementById("date").value;
    const startDate = document.getElementById("start_date").value;
    const endDate = document.getElementById("end_date").value;
    const count = document.getElementById("count").value;
    const thumbs = document.getElementById("thumbs").checked;

    let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    // Challenge 1
    // 1. check all the form fields to see which fields have data
    // 2. add them to the apiURL as parameters
    // 3. Test the responses in the Network tab

    // Challenge 2
    // 1. add the following headers to your API call content type, user agent & cache control
    // 2. set the cache control no no cache
    // 3. set the content type application/json
    // 4. Test the responses in the Network tab

    fetch(apiUrl, {
      method: "GET",
    })
      // Challenge 3
      // 1. change the anonymous arrow function below to check if the response code is 200(ok)
      // 2. if the response is ok return the response.json() object
      // 3. if not ok throw a new error which includes the status code
      // 4. Test the responses in the Network tab
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          apodContent.innerHTML = "";
          data.forEach((item) => {
            if (item.media_type === "image") {
              apodContent.innerHTML += `
                              <figure class="image is-4by3">
                                  <img src="${item.url}" alt="${item.title}">
                              </figure>
                              <h2 class="title is-4">${item.title}</h2>
                              <p>${item.explanation}</p>
                          `;
            } else if (item.media_type === "video") {
              apodContent.innerHTML += `
                              <div class="video-apodContent">
                                  <iframe src="${item.url}" frameborder="0" allowfullscreen></iframe>
                              </div>
                              <h2 class="title is-4">${item.title}</h2>
                              <p>${item.explanation}</p>
                          `;
            } else {
              apodContent.innerHTML += `<p>Media type not supported: ${item.media_type}</p>`;
            }
          });
        } else {
          apodContent.innerHTML = "";
          if (item.media_type === "image") {
            apodContent.innerHTML += `
                            <figure class="image is-4by3">
                                <img src="${item.url}" alt="${item.title}">
                            </figure>
                            <h2 class="title is-4">${item.title}</h2>
                            <p>${item.explanation}</p>
                        `;
          } else if (item.media_type === "video") {
            apodContent.innerHTML += `
                            <div class="video-apodContent">
                                <iframe src="${item.url}" frameborder="0" allowfullscreen></iframe>
                            </div>
                            <h2 class="title is-4">${item.title}</h2>
                            <p>${item.explanation}</p>
                        `;
          } else {
            apodContent.innerHTML += `<p>Media type not supported: ${item.media_type}</p>`;
          }
        }
      })
      .catch((error) => {
        apodContent.innerHTML = `<p>Error fetching item: ${error.message}</p>`;
      });
  });

  // // Challenge 4
  // function displayApod(data, apodContent) {
  //   // Challenge 4
  //   // 1. Move the if/else if/else into a resusable function ready for modularisation
  // }
});
