const http =require("http")
const cors =require("cors")
const port =5000
const JsonObj =[
    {
    topic :"What is Node ?",
    short_des:"Node Js is singel thredded non-blocking operaton. Node.js is written in C, C++, and JavaScript, and it is built on the open-source V8 JavaScript engine which also powers JS in browsers such as Google Chrome. As V8 supports new features in JavaScript, they are incorporated into Node.",
    long_des:"A node is a basic unit of a data structure, such as a linked list or tree data structure. Nodes contain data and also may link to other nodes. Links between nodes are often implemented by pointers.HTTP is a first-class citizen in Node.js, designed with streaming and low latency in mind. This makes Node.js well suited for the foundation of a web library or framework. Node.js being designed without threads doesn't mean you can't take advantage of multiple cores in your environment. Child processes can be spawned by using our child_process.fork() API, and are designed to be easy to communicate with. Built upon that same interface is the cluster module, which allows you to share sockets between processes to enable load balancing over your cores."
},{
    name:"Basu",
    Course:"MERN",

}
]
const api= http.createServer((request,response)=>{
    if(request.url=="/Node/html"){
        response.write("<html>");
        response.write("<body>");
        response.write("<h2>What is Node ?</h2>");
        response.write("<p>Node Js is singel thredded non-blocking operaton. Node.js is written in C, C++, and JavaScript, and it is built on the open-source V8 JavaScript engine which also powers JS in browsers such as Google Chrome. As V8 supports new features in JavaScript, they are incorporated into Node.</p>");
        response.write("<p>A node is a basic unit of a data structure, such as a linked list or tree data structure. Nodes contain data and also may link to other nodes. Links between nodes are often implemented by pointers.</p>");
        response.write("<p>HTTP is a first-class citizen in Node.js, designed with streaming and low latency in mind. This makes Node.js well suited for the foundation of a web library or framework. Node.js being designed without threads doesn't mean you can't take advantage of multiple cores in your environment. Child processes can be spawned by using our child_process.fork() API, and are designed to be easy to communicate with. Built upon that same interface is the cluster module, which allows you to share sockets between processes to enable load balancing over your cores.</p>");
        response.write("</body>");
        response.write("</html>");
        response.end()  
        
    }
    else if(request.url=="/Node/Json"){
        const data =JSON.stringify(JsonObj)
        response.write(data)
        response.end()  
    }
    else{
        response.write("<html>");
        response.write("<body>");
        response.write("<h1>Create a route using http module and explain what is node by sending response in HTML format</h1>");
       response.write("<p>for HTMl = route is Node/html</p>");
        response.write("<p>for Json = route is Node/Json</p>");
        response.write("</body>");
        response.write("</html>");
        response.end()  
       
    }
   

})

api.listen(5000,()=>{
    console.log(`Server is running in ${port}`);
})
