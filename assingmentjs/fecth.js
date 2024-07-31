function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully");
        }, 2000);
    });
}


fetchData().then((message) => {
    console.log(message);  
});


function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const success = Math.random() > 0.5;

            if (success) {
                resolve("Data fetched successfully");
            } else {
                reject("Failed to fetch data");
            }
        }, 2000);
    });
}


fetchData()
    .then((message) => {
        console.log(message);  
    })
    .catch((error) => {
        console.error(error);  
    });


    function fetchData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                
                const success = Math.random() > 0.5;
    
                if (success) {
                    resolve("Data fetched successfully");
                } else {
                    reject("Failed to fetch data");
                }
            }, 2000);
        });
    }
    
    async function testFetchData() {
        try {
            const message = await fetchData();
            console.log(message);  
        } catch (error) {
            console.error(error); 
        }
    }
    
   
    testFetchData();
    