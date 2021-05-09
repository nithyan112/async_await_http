
const http = new EasyHttp();

//get users
http.get('https://jsonplaceholder.typicode.com/users')
.then(data=>console.log(data))


//post users
http.post('https://jsonplaceholder.typicode.com/users',{name:'nithyan'})
.then(data=>console.log(data))

http.put('https://jsonplaceholder.typicode.com/users/1',{name:'harsha'})
.then(data=>console.log(data))


http.delete('https://jsonplaceholder.typicode.com/users/1')
.then(data=>console.log(data))