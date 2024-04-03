import config from '@/config'

const fetchAlbums = async () => {
  const reqOptions = {
    Headers: {
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`
    },
  }

  const albumsData = await fetch(`${config.api}/api/galleries`, reqOptions)
  const albums = await albumsData.json()

  return albums.data
}

export default fetchAlbums