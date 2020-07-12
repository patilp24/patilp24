
    const apik ='e0620bd4'
    const text = 'Titanic'
    const imd = 'tt0120338'
    const text1 = 'Atonement'
    const text2 ="Arrival"
    const text3 = "Frozen"
    const url = 'http://www.omdbapi.com/?t=' + text + '&i='+ imd+'&apikey=' + apik 
    const url1 = 'http://www.omdbapi.com/?t=' + text1 + '&apikey=' + apik 
    const url2 = 'http://www.omdbapi.com/?t=' + text2 + '&apikey=' + apik 
    const url3 = 'http://www.omdbapi.com/?t=' + text3 + '&apikey=' + apik 

    const m =  new Vue({

        el : '#movies' , 
        data : {
          results : [] ,
          results1 : [],
          results2 : [],
          results3 : []
          
        } ,
        
        mounted (){
            var m = this;
            
            axios.get(url).then(response => {
                this.results = response.data
               
                console.log(this.results)
            })

            axios.get(url1).then(response => {
                this.results1 = response.data
               
                console.log(response.data)
            })

            axios.get(url2).then(response => {
                this.results2 = response.data
               
                console.log(response.data)
            })

            axios.get(url3).then(response => {
                this.results3 = response.data
               
                console.log(response.data)
            })
            
           
        }

    });


