import { getRandom } from "./general.js";
import { options } from "./personal.js";

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuoteButton = document.querySelector('.change-quote');

async function getQuotes() {
    let language = options.language;
    const quotes = 'https://github.com/NadezhdaShel/momentum/blob/main/data.json';
    const res = await fetch(quotes);
    const data = await res.json();
    const maxNumber = data.length;
    const numberQuote = getRandom(0, maxNumber - 1);
    quote.textContent = data[numberQuote].text[language];
    author.textContent = data[numberQuote].author[language];
}

changeQuoteButton.addEventListener('click', getQuotes);

export default getQuotes;