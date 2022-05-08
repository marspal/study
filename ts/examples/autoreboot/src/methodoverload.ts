type MessageType = "image" | "audio" | string;
type Message = {
  id: number;
  type: MessageType;
  sendmessage: string;
};

let messages: Message[] = [
  {id: 1, type: "image", sendmessage: "你好啊，今晚咱们一起去三里屯吧"},
  {id: 2, type: "audio", sendmessage: "你好啊，"},
  {id: 3, type: "audio", sendmessage: "你好啊，今晚咱"},
  {id: 4, type: "image", sendmessage: "你好啊，今晚咱们一起"},
  {id: 5, type: "image", sendmessage: "你好啊，今晚咱们一起去三"},
];

// 不能自动推导,
// function getMessage(value: number | MessageType): Message | Message[] | undefined{
//   if (typeof value=== "number") {
//     return messages.find(msg => msg.id === value);
//   } 
//   return messages.filter(msg => msg.type === value);
// }

// let msg = (<Message>getMessage(1));
// let msgs = <Array<Message>>getMessage("image");
function getMessage(id: number): Message
function getMessage(msgType: MessageType, readRecordCount: number): Message[]
function getMessage(payload_fromPage: any, readRecordCount?  : number): Message | undefined | Message[] {
  if (typeof payload_fromPage=== "number") {
    return messages.find(msg => msg.id === payload_fromPage);
  } 
  return messages.filter(msg => msg.type === payload_fromPage).splice(0, readRecordCount);
}

getMessage("image", 2).forEach(msg => {
  console.log(msg, "msg");
})
// console.log(getMessage("image")[0]);
// console.log(getMessage(0));