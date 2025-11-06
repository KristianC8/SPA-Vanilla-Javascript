const axios = require('axios')

exports.handler = async (event, context) => {
  const { domain, game, screenshots, ...params } =
    event.queryStringParameters || {}

  const apiKey = process.env.API_KEY

  // Construir URL base
  let urlPath = domain
  if (game) urlPath += `/${game}`
  if (screenshots) urlPath += `/screenshots`

  // Construir query params
  const searchParams = new URLSearchParams({
    ...params,
    key: apiKey,
  })

  // URL final
  const url = `${urlPath}?${searchParams.toString()}`

  try {
    const { data } = await axios.get(url)
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (error) {
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({
        error: error.message,
        details: error.response?.data,
      }),
    }
  }
}
