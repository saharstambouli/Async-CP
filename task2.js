var url = `https://api.openweathermap.org/data/2.5/weather?q=paris&appid=fe824cb856a37281c8c13e7a5fbbd488&units=metric`;
const awaitCall = async () => {
    try {

      const res = await fetch(url)
    
      console.log(res.json())


    } catch (error) {
        console.log('err', err)
    }
}

awaitCall()





