const axios = require('axios').default;

axios
  .get('https://raw.githubusercontent.com/akabab/starwars-api/0.2.1/api/all.json')
  .then(response => {
    this.text = "";
    response.data.map(character => {
      this.text+=`
          <div class="box">
            <article class="media">
              <div class="media-left">
                  <img class="image-perfil" src="${character.image}" alt="Image Character">
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>${character.name}</strong>
                    <br/>
                    Specie: ${character.species}<br/>
                    Gender: ${character.gender}<br/>
                    Height: ${character.height}<br/>
                    Origin: ${character.homeworld}<br/>
                    Link: <a href="${character.wiki}">${character.wiki}</a>
                  </p>
                </div>
              </div>
            </article>
          </div>
      `;
    });

    document.getElementById('section').innerHTML = this.text;
  })
  .catch(err => {
    console.log(err);
  });
