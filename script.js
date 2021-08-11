//563492ad6f91700001000001ac80369c68314994b36da40f5a0e98b0
const getPictures = function () {
    fetch("https://api.pexels.com/v1/search?query=people", {
        "method": "GET",
        "headers": {Authorization: '563492ad6f91700001000001ac80369c68314994b36da40f5a0e98b0'}

    })
    .then((response) => {
        console.log(response, 'hey yo!') 

        return response.json() // ✨ return ✨

    })
    .then(jsonResponse=> {
        console.log(jsonResponse)
      })
} 