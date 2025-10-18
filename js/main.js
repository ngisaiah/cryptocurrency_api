document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const cryptoCoin = document.querySelector('#cryptoCoin').value
    const cryptoYr = document.querySelector('#cryptoYr').value
    try{
        const response = await fetch(`https://ng-crypto-api-aa9bced31d32.herokuapp.com/api/${cryptoCoin}/${cryptoYr}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.birthName
    }catch(error){
        console.log(error)
    }
}