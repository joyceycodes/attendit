window.addEventListener('DOMContentLoaded', async () => {
    const locationUrl = 'http://localhost:8000/api/locations/';

    const locationResponse = await fetch(locationUrl);
    if(locationResponse.ok){
        // get list of states from API
        const locationData = await locationResponse.json();
        // fill in states to HTML form
        const locationTag = document.getElementById('location');

        for (let location of locationData.locations){
            const option = document.createElement('option');
            
            option.value = location.id;
            option.innerHTML = location.name;
           
            locationTag.append(option);
        }
    }

    // submit POST request to create new location
    const formTag = document.getElementById('create-conference-form');

    formTag.addEventListener('submit', async event => {
        event.preventDefault();
            
            // get form data
        const formData = new FormData(formTag)

        // turning formData into JSON object
        const json = JSON.stringify(Object.fromEntries(formData));
        const conferenceUrl = 'http://localhost:8000/api/conferences/';
        console.log(json)    
        const fetchConfig = {
            method: "post",
            body: json,
            headers: {
                'Content-Type': 'application/json',
            },
        };
        
        const response = await fetch(conferenceUrl, fetchConfig);
                
        if (response.ok) {
            formTag.reset();
            const newConference = await response.json();
            console.log(newConference)
        }
    });
});