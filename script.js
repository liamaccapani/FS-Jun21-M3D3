//563492ad6f91700001000001ac80369c68314994b36da40f5a0e98b0

const getPhotos = function () {
  fetch("https://api.pexels.com/v1/search?query=dog", {
    method: "GET",
    headers: {
      Authorization:
        "Bearer 563492ad6f91700001000001ac80369c68314994b36da40f5a0e98b0",
    },
  })
    .then((response) => response.json())
    .then((jsonResponse) => {
      displayPics(jsonResponse); //✨✨✨✨
    })
    .catch((error) => {
      console.error(error);
    });
};

//and separate functions to display things based on the button I click
const displayPics = function (jsonResponse) { //✨✨✨✨
  let row = document.querySelector("#album-container");
  for (let photo of jsonResponse.photos) {
    row.innerHTML += `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img src=${photo.src.landscape} alt="some pic">

                <div class="card-body">
                    <p class="card-text">
                        This is a wider card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">
                            View
                        </button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">
                            Edit
                        </button>
                        </div>
                        <small class="text-muted">9 mins</small>
                    </div>
                </div>
            </div>
        </div> <!--div col-->
        `;
  }
};

const getPhotos2 = function () {
    fetch("https://api.pexels.com/v1/search?query=colorful", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer 563492ad6f91700001000001ac80369c68314994b36da40f5a0e98b0",
      },
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        displayPics2(jsonResponse);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const displayPics2 = function (jsonResponse) {

    let row = document.querySelector("#album-container");
    for (let photo of jsonResponse.photos) {
      row.innerHTML += `
          <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                  <img src=${photo.src.landscape} alt="some pic">
  
                  <div class="card-body">
                      <p class="card-text">
                          This is a wider card with supporting text below as a natural
                          lead-in to additional content. This content is a little bit
                          longer.
                      </p>
                      <div class="d-flex justify-content-between align-items-center">
                          <div class="btn-group">
                          <button type="button" class="btn btn-sm btn-outline-secondary">
                              View
                          </button>
                          <button type="button" class="btn btn-sm btn-outline-secondary">
                              Edit
                          </button>
                          </div>
                          <small class="text-muted">9 mins</small>
                      </div>
                  </div>
              </div>
          </div> <!--div col-->
          `;
    }
  };

  //remove/ hide pics of getphotos()

//anyway, again, neat code, and also thank you, now i can load some cute random doggo pics instead of go search for them on Instagram 