import axios from 'axios';

const API_KEY = 'AIzaSyCe766J5fb_Pn0uky4TmJAseyKrGpYq288';
const API_URL = 'https://translation.googleapis.com/language/translate/v2';

const translateText = async (text, targetLanguage) => {
  try {
    const response = await axios.post(
      `${API_URL}?key=${API_KEY}`,
      {
        q: text,
        target: targetLanguage,
      } 
    );
  } catch (err) {
    console.error(err.message);
  }


  return response.data.data.translations[0].translatedText;
};

export default translateText;