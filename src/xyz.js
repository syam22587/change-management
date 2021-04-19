async function getConversations() {
u = 'https://example.com/api';
var convsPath = '/conversations';
let msgsPath = '/messages';
const result = await fetch(u + convsPath)
.then(response => response.json())
.then(conversations => {
let promises = conversations.map(item => {
const messagesUrl = u + convsPath + '/' + item.id + msgsPath;
return fetch(messagesUrl)
.then(response => {
return response.json().then(msgs => {
item.messages = msgs;
return item;
});
});
});
return Promise.all(promises);
});
return result;
}