function fetchData(){
    console.log("Hello fetch");
    const a=fetch("https://dummyjson.com/recipes");
    a.then(data=>{
        console.log(data);
        data.json().then((res)=>{
            console.log(res.recipes[0]);
            let output='${res.recipes[0].id+""+res.recipes[0].name+""+res.recipes[0].ingredients}';
            document.getElementById("output").innerHTML=output;

        })
    })
    .catch(error=>console.log(error))
    .finally(()=>console.log("finally is called"))
}



// fetchData();
//fetch api,event handelling,callback,promise,formatting the data
