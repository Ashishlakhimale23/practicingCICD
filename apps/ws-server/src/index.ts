import { parse } from "dotenv";
import {WebSocketServer} from "ws"
interface Message {
    message: string;
}
const websocket = new WebSocketServer({port :8081})

websocket.on("connection",(socket:WebSocket)=>{
    socket.onmessage = function(event: MessageEvent){
        const parsedMessage:Message = JSON.parse(event.data)
        console.log(parsedMessage)
        if(parsedMessage.message == "hello"){
            console.log("here..")
            socket.send("hello....")
        }

    };

    socket.onclose = function(){
        socket.send("good bye")

    }
})