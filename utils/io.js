module.exports = function(io){
    //연결된 소켓을 받아옴
    io.on("connection",async(socket)=>{
        console.log("client is connected", socket.id)

        socket.on("login",async(userName,cb)=>{
            console.log("backend",userName)
        })

        socket.on("disconnect",()=>{
            console.log("user is disconnected")
        })
    })
}