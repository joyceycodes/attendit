
window.addEventListener('DOMContentLoaded', async () => {
    const stateUrl = 'http://localhost:8000/api/states/';

    const stateResponse = await fetch(stateUrl);
    if(stateResponse.ok){
        // get list of states from API
        const stateData = await stateResponse.json();
    
        // fill in states to HTML form
        const stateTag = document.getElementById('state');

        for (let state of stateData.states){
            const option = document.createElement('option');
            
            option.value = state.abbreviation;
            option.innerHTML = state.name;
           
            stateTag.append(option);
        }
    }
    
    // submit POST request to create new location
    const formTag = document.getElementById('create-location-form');

    formTag.addEventListener('submit', async event => {
        event.preventDefault();
            
            // get form data
        const formData = new FormData(formTag)

        // turning formData into JSON object
        const json = JSON.stringify(Object.fromEntries(formData));
        const locationUrl = 'http://localhost:8000/api/locations/';
            
        const fetchConfig = {
            method: "post",
            body: json,
            headers: {
                'Content-Type': 'application/json',
            },
        };
        
        const response = await fetch(locationUrl, fetchConfig);
                
        if (response.ok) {
            formTag.reset();
            const newLocation = await response.json();
        }
    });
});