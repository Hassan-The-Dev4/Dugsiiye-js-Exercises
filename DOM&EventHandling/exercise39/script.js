// 1. Walxaha HTML-ka
const fromSelect = document.getElementById("from-lang");
const toSelect = document.getElementById("to-lang");
const output = document.getElementById("translated-output");
const inputText = document.getElementById("input-text");
const translateForm = document.getElementById("translate-form");


const apiKey = '75905acd13msh230dce3976eb590p1abc87jsn812fde2251cc';
const apiHost = 'google-translator9.p.rapidapi.com';


async function loadLanguages() {
    const url = `https://${apiHost}/v2/languages?target=en`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': apiHost
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        
        const languages = result.data.languages;

        fromSelect.innerHTML = "";
        toSelect.innerHTML = "";

        languages.forEach(lang => {
            // Haddii magacu maqan yahay isticmaal language code-ka
            let langName = lang.name || lang.language.toUpperCase();

            let option1 = document.createElement("option");
            option1.value = lang.language;
            option1.textContent = langName;
            fromSelect.appendChild(option1);

            let option2 = document.createElement("option");
            option2.value = lang.language;
            option2.textContent = langName;
            toSelect.appendChild(option2);
        });

        // Default values
        fromSelect.value = "en";
        toSelect.value = "so";

    } catch (error) {
        console.error("Luuqadaha lama soo ridi karo:", error);
        output.innerHTML = "Failed to load languages!";
    }
}


translateForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const text = inputText.value;
    const sourceLang = fromSelect.value;
    const targetLang = toSelect.value;

    if (!text.trim()) {
        output.innerHTML = "Please enter text!";
        return;
    }

    const url = `https://${apiHost}/v2`;
    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': apiHost,
            'Content-Type': 'application/json'
        },
        // MUHIIM: Body-ga waa in loo beddelo String JSON ah
        body: JSON.stringify({
            q: text,
            source: sourceLang,
            target: targetLang,
            format: 'text'
        })
    };

    try {
        output.innerHTML = "Turjumiddu way socotaa...";

        const response = await fetch(url, options);
        const result = await response.json();

        if (result.data && result.data.translations) {
            const translatedText = result.data.translations[0].translatedText;
            output.innerHTML = "" + translatedText;
        } else {
            console.error("API Error:", result);
            output.innerHTML = "Turjumiddu ma guulaysan.";
        }

    } catch (error) {
        console.error("Fetch Error:", error);
        output.innerHTML = "Failed to translate!";
    }
});

loadLanguages();