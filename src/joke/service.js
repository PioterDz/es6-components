
const JOKES_URL = 'https://official-joke-api.appspot.com/jokes/programming/random';
const FALLBACK_URL = 'http://api.icndb.com/jokes/random?limitTo=[nerdy]';
const typeToCheck = 'programming';

const convert = (setup, punchline) => {
    return `
    ${setup}

    ${punchline}
    `
}

export default async function getJoke() {
    try {
        const response = await fetch(JOKES_URL);

        if(response) {
            const json = await response.json();
            const { 0: { setup, punchline, type } } = json;
            if(type !== typeToCheck) {
                return (await getAnotherJoke());
            } else {
                return (await convert(setup, punchline));
            }
        }
    }
    catch(err) {
        console.warn(err);
    }
}

async function getAnotherJoke() {
    try {
        const response = await fetch(FALLBACK_URL);
        if(response) {
            const result = await response.json();
            const { value: { joke } } = result;
            return (await joke);
        }
    } catch(err) {
        console.warn(err);
    }
}
