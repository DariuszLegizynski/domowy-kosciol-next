const checkImageUrl = (url) => {
  let str = url
  if (str.startsWith("https://imgur")) {
    str = str.replace("https://imgur.com/", "https://i.imgur.com/") + ".jpg"

    return str
  }

  return str
}

export default checkImageUrl