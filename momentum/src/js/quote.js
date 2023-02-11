import { getRandom } from "./general.js";

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuoteButton = document.querySelector('.change-quote');

async function getQuotes() {
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json();
    const maxNumber = data.length;
    const numberQuote = getRandom(0, maxNumber - 1);
    quote.textContent = data[numberQuote].text;
    author.textContent = data[numberQuote].author;
}

changeQuoteButton.addEventListener('click', getQuotes);

export default getQuotes;