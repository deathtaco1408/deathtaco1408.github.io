let stateSelect = document.getElementById('stateSelect');
let cityInfoDiv = document.getElementById('cityInfo');
let zipCodeInput = document.getElementById('zipCode');
let latitudeInfo = document.getElementById('latitudeInfo');
let longitudeInfo = document.getElementById('longitudeInfo');
let countySelect = document.getElementById('countySelect');
let usernameInput = document.getElementById('username');
let usernameMessage = document.getElementById('usernameMessage');
let passwordInput = document.getElementById('password');
let passwordAgainInput = document.getElementById('passwordAgain');

async function setUpForm() {

    try {
        let stateResponse = await fetch('https://csumb.space/api/allStatesAPI.php');
        if (!stateResponse.ok) {
            throw new Error('State Response Failed');
        }
        let stateData = await stateResponse.json();
        console.log(stateData);

        let stateSelect = document.getElementById('stateSelect');
        for (let state of stateData) {
            let option = document.createElement('option');
            option.id = state.usps;
            option.value = state.usps;
            option.textContent = state.usps;
            stateSelect.appendChild(option);
        }
    } catch (stateError) {
        console.error('Error fetching data:', error);
        return;
    }

    try {
        let cityResponse = await fetch('https://csumb.space/api/cityInfoAPI.php?zip=93955');
        if (!cityResponse.ok) {
            throw new Error('City Response Failed');
        }
        let cityData = await cityResponse.json();
        console.log(cityData);

        let cityInfoDiv = document.getElementById('cityInfo');
    } catch (cityError) {
        console.error('Error fetching City data:', error);
        return;
    }
    
}

setUpForm();



usernameInput.addEventListener('input', async function(event) {
    let username = event.target.value;
    console.log(username);
    try {
        let usernameResponse = await fetch(`https://csumb.space/api/usernamesAPI.php?username=${username}`);
        if (!usernameResponse.ok) {
            throw new Error('Username Response Failed');
        }
        let usernameData = await usernameResponse.json();
        console.log(usernameData);
        if (usernameData.available) {
            usernameMessage.textContent = "Username is available";
            usernameMessage.style.color = "green";
        } else {
            usernameMessage.textContent = "Username is taken";
            usernameMessage.style.color = "red";
        }
    } catch (apiError) {
        console.error('Error fetching Username data:', apiError);
        return;
    }
});

passwordInput.addEventListener('click', async function(event) {
    let password = event.target.value;
    console.log(password);
    try {
        let passwordResponse = await fetch(`https://csumb.space/api/suggestedPassword.php?length=8`);
        if (!passwordResponse.ok) {
            throw new Error('Password Response Failed');
        }
        let passwordData = await passwordResponse.json();
        console.log(passwordResponse);
        if (passwordResponse) {
            passwordmessage.textContent = "suggested password: " + passwordResponse;
            passwordMessage.style.color = "green";
        } else {
            passwordMessage.textContent = "Error fetching password";
            passwordMessage.style.color = "red";
        }
    } catch (apiError) {
        console.error('Error fetching Password data:', apiError);
        return;
    }
});

zipCodeInput.addEventListener('input', async function(event) {
    let zipCode = event.target.value;
    console.log(zipCode);
    try {
        let cityResponse = await fetch(`https://csumb.space/api/cityInfoAPI.php?zip=${zipCode}`);
        if (!cityResponse.ok) {
            throw new Error('City Response Failed');
        }
        let cityData = await cityResponse.json();
        console.log(cityData);
        if (cityData) {
            cityInfoDiv.textContent = `City: ${cityData.city}`;
            latitudeInfo.textContent = `Latitude: ${cityData.latitude}`;
            longitudeInfo.textContent = `Longitude: ${cityData.longitude}`;
        } else {
            cityInfoDiv.textContent = "No data found for this zip code.";
            latitudeInfo.textContent = "";
            longitudeInfo.textContent = "";
        }
    } catch (apiError) {
        console.error('Error fetching City data:', apiError);
        return;
    }
});

stateSelect.addEventListener('input', async function(event){
    let selectedState = event.target.value;
    console.log(selectedState);
    try {
        let countyResponse = await fetch(`https://csumb.space/api/countyListAPI.php?state=${stateSelect.value}`);
        if (!countyResponse.ok) {
            throw new Error('County Response Failed');
        }
        let countyData = await countyResponse.json();
        console.log(countyData);
        let countySelect = document.getElementById('countySelect');
        countySelect.innerHTML = '';
        for (let county of countyData) {
            let option = document.createElement('option');
            option.id = county.county;
            option.value = county.county;
            option.textContent = county.county;
            countySelect.appendChild(option);
        }
    } catch (countyError) {
        console.error('Error fetching County data:', apiError);
        return;
    }
});