function createCard(name, description, pictureUrl, startDate, endDate, location) {
    return `
      <div class="card shadow p-3 mb-5 bg-body rounded">
        <img src="${pictureUrl}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <h6 class="card-subtitle">${location}</h6>
          <p class="card-text">${description}</p>
        </div>
        <div class="card-footer">${startDate} - ${endDate}
        </div>
      </div>
    `;
  }


function sendAlert(){
    return `
    <div class="alert alert-primary" role="alert">
        Error has occurred!
    </div>`
}


window.addEventListener('DOMContentLoaded', async () => {
    const url = 'http://localhost:8000/api/conferences/';

    try{
        const response = await fetch(url);
        if(!response.ok){
            const alert = document.querySelector('.error-handling')
            alert.innerHTML = sendAlert();
        }
        else {

            const data = await response.json();
            
            let index = 0;
            for(let conference of data.conferences){
                
                const detailUrl = `http://localhost:8000${conference.href}`;
                const detailResponse = await fetch(detailUrl);
                if (detailResponse.ok) {
                    const details = await detailResponse.json();
                    const title = details.conference.name;
                    const description = details.conference.description;
                    const pictureUrl = details.conference.location.picture_url;
                    
                    const startDate = new Date(details.conference.starts).toLocaleDateString(); 
                    const endDate = new Date(details.conference.ends).toLocaleDateString(); 

                    const location = details.conference.location.name;
                    console.log(details);
                    const html = createCard(title, description, pictureUrl,startDate, endDate, location);
                    
                    const column = document.querySelector(`#col-${index %3}`);
                    column.innerHTML += html;
                    index ++;
                }
            }
        }
    }
    catch (e) {
        console.log("error occurred");

        const alert = document.querySelector('.error-handling')
        alert.innerHTML = sendAlert();
    }
});
