const axios = require('axios')

exports.handler = async (event, context) => {

  const { domain, game, metacritic, ordering, platforms, page_size, dates, screenshots, search } = event.queryStringParameters

  const apiKey = process.env.API_KEY;

  const url = `${domain}${!game ? '' : `/${game}`}${!screenshots ? '' : `/screenshots`}?${!metacritic ? '' : `&metacritic=${metacritic}`}${!ordering ? '' : `&ordering=${ordering}`}${!platforms ? '' : `&platforms=${platforms}`}${!page_size ? '' : `&page_size=${page_size}`}${!dates ? '' : `&dates=${dates}`}${!search ? '' : `&search=${search}`}&key=${apiKey}`; // URL de la API externa

  try {
    const { data } = await axios.get(url);
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    const { status, statusText, headers, data } = error.response
    return {
      statusCode: status,
      body: JSON.stringify({ status, statusText, headers, data })
    };
  }
};