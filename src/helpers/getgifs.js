
const URL = 'https://api.giphy.com/v1/gifs/search'
const API_KEY = '6KsMKYCgYOnQKKVk6c3a4TvzJeUPF7xj'
export async function getGifs (categoryValue) {
  const response = await fetch(`${URL}?api_key=${API_KEY}&q=${categoryValue}`)
  const { data } = await response.json()
  const images = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium?.url
    }
  })
  return images
}
