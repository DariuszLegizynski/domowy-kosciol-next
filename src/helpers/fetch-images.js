const fetchImages = async (albumId) => {
  
  const clientId = "0c9a714fb4873aa"
  const imgurOptions = {
    method: 'GET',
    headers: {
      Authorization: "Client-ID " + clientId
    },
  }

  const response = await fetch(`https://api.imgur.com/3/album/${albumId}/images`, imgurOptions)
  const images = await response.json()

  return images
}

export default fetchImages
