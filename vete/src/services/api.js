const API_KEY = '2e8f62deef4407aab974a9e02b95cb47';
const BASE_URL = 'https://v3.football.api-sports.io';

export const fetchTodayMatches = async () => {
  try {
    const today = new Date().toISOString().split('T')[0];
    console.log('Fetching matches for date:', today);
    
    const response = await fetch(`${BASE_URL}/fixtures?date=${today}`, {
      headers: {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': API_KEY
      }
    });
    
    const data = await response.json();
    console.log('API Response:', data);
    
    if (data.errors && Object.keys(data.errors).length > 0) {
      console.error('API Errors:', data.errors);
      return [];
    }
    
    return data.response || [];
  } catch (error) {
    console.error('Error fetching today matches:', error);
    return [];
  }
};