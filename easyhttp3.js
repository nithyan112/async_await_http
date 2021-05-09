class EasyHttp{
    async get(url){
        const response = await fetch(url);
         return await response.json();
    }
    async post(url,data){
        const response = await fetch(url,{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        return await response.json()

    }
    async put(url,data){
      const response=  await fetch(url,{
            method:"Put",
            headers:{
                'content-type':'aplication/json'
            },
            body:JSON.stringify(data)
            
        })
        return await response.json();
    }
    async delete(url){
        const response =await fetch(url,{
            method:"DELETE",
            headers:{
                'content-type':'application/json'
            }
        })
        return await 'Deleted';

    }
}