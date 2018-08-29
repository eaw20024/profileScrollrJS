const data = [
    {
        name: 'Eric Washington',
        age: 28,
        gender: 'male',
        location: 'Washington, DC',
        lookingFor: 'female',
        image: 'https://randomuser.me/api/portraits/men/19.jpg'
    },
    {
        name: 'Bois Dianga',
        age: 40,
        gender: 'male',
        location: 'Miami, FL',
        lookingFor: 'female',
        image: 'https://randomuser.me/api/portraits/men/50.jpg'
    },
    {
        name: 'Jane Johnson',
        age: 21,
        gender: 'female',
        location: 'New York, NY',
        lookingFor: 'male',
        image: 'https://randomuser.me/api/portraits/women/34.jpg'
    },
];

const profiles = profileIterator(data);

// Call First Profile
nextProfile();

// Next Event

document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display

function nextProfile() {
    const currentProfile = profiles.next().value;

    if(currentProfile !== undefined) {
    document.getElementById('profile-display').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingFor}</li>
        </ul>
    `;

    document.getElementById('image-display').innerHTML = `
        <img src="${currentProfile.image}">`;
    } else {
        // No More Profiles
        window.location.reload();
    }
}

// Profile Iterator

function profileIterator(profiles){

    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < profiles.length ? 
            { value: profiles [nextIndex++], done: false } :
            { done: true}
        }
    };
}