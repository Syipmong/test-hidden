const API_KEY = 'your_api_key';
const ENDPOINT_URL = 'https://api.cognitive.microsoft.com/bing/v7.0/search';

async function searchWeb(query) {
  const response = await fetch(`${ENDPOINT_URL}?q=${query}`, {
    headers: {
      'Ocp-Apim-Subscription-Key': API_KEY
    }
  });
  const data = await response.json();
  return data.webPages.value;
}
