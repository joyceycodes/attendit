
// window.addEventListener('DOMContentLoaded', async () => {
//     const selectTag = document.getElementById('conference');
  
//     const url = 'http://localhost:8000/api/conferences/';
//     const response = await fetch(url);
    
    
//     if (response.ok) {
//         const data = await response.json();
        
//         for (let conference of data.conferences) {
//             const option = document.createElement('option');
//             option.value = conference.href;
//             option.innerHTML = conference.name;
//             selectTag.appendChild(option);
//         }
//         // Here, add the 'd-none' class to the loading icon
//         const selectSpinner = document.getElementById('loading-conference-spinner');
//         selectSpinner.classList.add('d-none');
//         // Here, remove the 'd-none' class from the select tag
//         selectTag.classList.remove('d-none');
        
//     }
    
//     // Get the attendee form element by its id
//     // Add an event handler for the submit event
//     // Prevent the default from happening
//     // Create a FormData object from the form
//     // Get a new object from the form data's entries
//     // Create options for the fetch
//     // Make the fetch using the await keyword to the URL
// //     const formTag = document.getElementById('create-attendee-form');
    
// //     formTag.addEventListener('submit', async event => {
// //         event.preventDefault();
        
// //         const formData = new FormData(formTag);
        
// //         const json = JSON.stringify(Object.fromEntries(formData));


// //         const attendeeUrl = 'http://localhost:8001/api/attendees/';
// //         const fetchConfig = {
// //             method: "post",
// //             body: json,
// //             headers: {
// //                 'Content-Type': 'application/json',
// //             },
// //         };
        
// //         const response = await fetch(attendeeUrl, fetchConfig);

// //         if(response.ok){
// //             formTag.reset();
// //             const newAttendee = await response.json();
// //             console.log(newAttendee)

// //             const hideForm = formTag.classList.add('d-none');
// //             const selectSuccessMessage = document.getElementById('success-message');
// //             const showSuccessMessage = selectSuccessMessage.classList.remove('d-none');
// //         }
// //    });

//     const formTag = document.getElementById('create-attendee-form');
//     formTag.addEventListener('submit', async event => {
//         event.preventDefault()
//         const formData = new FormData(formTag);
//         const json = JSON.stringify(Object.fromEntries(formData));

//         const attendeeUrl = 'http://localhost:8001/api/attendees/'
//         const fetchConfig = {
//             method: "post",
//             body: json,
//             headers:{
//                 'Content-Type': 'application/json'
//             },

//         };
        
//         const response1 = await fetch(attendeeUrl, fetchConfig);

//         if (response1.ok) {
//             formTag.reset();
//             const newAttendees = await response1.json();
//             console.log(newAttendees)
//             // const successTag = document.getElementById("success-message")
//             // successTag.classList.remove("d-none")
//             // formTag.classList.add("d-none")
//     }
//   });

// });

window.addEventListener('DOMContentLoaded', async () => {
    const selectTag = document.getElementById('conference');

    const url = 'http://localhost:8000/api/conferences/';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();

      for (let conference of data.conferences) {
        const option = document.createElement('option');
        option.value = conference.href;
        option.innerHTML = conference.name;
        selectTag.appendChild(option);
      }

      // Here, add the 'd-none' class to the loading icon
      const selectSpinner = document.getElementById('loading-conference-spinner');
      selectSpinner.classList.add('d-none');
    //   .spinner-grow text-secondary
      // Here, remove the 'd-none' class from the select tag
      selectTag.classList.remove('d-none')
    }
    const formTag = document.getElementById('create-attendee-form');
    const alertTag = document.getElementById('success-message');
    formTag.addEventListener('submit', async event => {
        event.preventDefault();
        const formData = new FormData(formTag);
        const json = JSON.stringify(Object.fromEntries(formData));
        console.log(json)

        const attendeesUrl = 'http://localhost:8001/api/attendees/';
        const fetchConfig = {
            method: "post",
            body: json,
            headers: {
                'Content-Type': 'application/json',
            }
        };
        const response = await fetch(attendeesUrl, fetchConfig);
        if (response.ok) {
            formTag.reset();// reset our form to original state(not like the territory)
            const newAttendees = await response.json();//we save our post info
            }
            alertTag.classList.remove('d-none')
            formTag.classList.add('d-none')
        });

  });