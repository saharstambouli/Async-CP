const awaitCall = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=paris&appid=fe824cb856a37281c8c13e7a5fbbd488&units=metric`;

    try {
        const response = await fetch(url); 

        if (!response.ok) { 
            throw new Error('Network response was not ok');
        }

        const data = await response.json(); 
        console.log(data); 
    } catch (error) {
        console.error('Failed to fetch data. Please try again later.', error); 
};
} 
awaitCall();
