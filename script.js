const jock = document.getElementById('jokes')
const jokbtn =document.getElementById('jokbtn')
const Url = "https://icanhazdadjoke.com"

const setHeader = {
    headers: {
        Accept: "application/json"
    }
}

Nextjoke = () =>{
  fetch('https://icanhazdadjoke.com',setHeader)
  .then((res) =>  res.json() )
  .then( (data) => {
      console.log(data)
      document.getElementById('jokes').innerHTML = data.joke
  }).catch((err) => {
    alert(err)
    })
}


