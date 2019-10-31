export const fetchData = async (search) => {
  try {
    const req = await fetch(`https://api.twitch.tv/kraken/search/games?query=${encodeURI(search)}`, {
      headers: new Headers({
        "Client-ID": "secret",
        "Accept": "application/vnd.twitchtv.v5+json"
      })
    })
    const res = await req.json();
    return res.games;
  } catch (e) {
    console.log(e)
  }

}