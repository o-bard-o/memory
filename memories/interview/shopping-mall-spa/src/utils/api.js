const API_END_POINT = "https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com/dev/"

export const request = async (url, options = {}) => {
  try {
    const fullUrl = `${API_END_POINT}${url}`;
    const response = await fetch(fullUrl, options);

    if(response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('API Request failed');
    }
  } catch (e) {
    alert(e.message);
  }
}