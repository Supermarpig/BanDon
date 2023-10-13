import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; 

function LineNotifyButton() {
    const [message, setMessage] = useState('');
    const [accessTokenState, setAccessTokenState] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const { accessToken } = useParams(); // 使用路由参数来获取 Access Token

    useEffect(() => {
        if (accessToken) {
            setAccessTokenState(accessToken);
            console.log({accessToken})
            console.log({ accessTokenState })
        }
    }, [accessToken]);


    const getAccessToken = () => {
        // 替換成自己的 Line Notify Client ID 和 Client Secret
        const clientId = 'IhFXFSJ2rmh2R7n6XmJsWP';
        const redirectUri ='http://127.0.0.1:5173/test/sentToLineNotify'
 

        const authorizeUrl = `https://notify-bot.line.me/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=notify&state=nostate`;


        window.open(authorizeUrl, '_blank');
    };

    const sendLineNotifyMessage = () => {
        // 使用获取到的 Access Token 發送消息到 Line Notify
        axios.post('https://notify-api.line.me/api/notify', null, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${accessToken}`,
            },
            params: {
                message: message,
            },
        })
            .then(response => {
                setResponseMessage('發送消息到 Line Notify');
            })
            .catch(error => {
                console.error('發送消息時出錯:', error);
                setResponseMessage('發送消息到 Line Notify 出错');
            });
    };

    return (
        <div className="flex-col flex ">

            <button onClick={getAccessToken} className='mb-5 border border-black border-solid rounded-3xl'>獲取 Access Token</button>
            {accessTokenState && <p>Access Token: {accessTokenState}</p>}
            <input
                type="text"
                placeholder="請輸入傳入內容"
                value={message}
                onChange={e => setMessage(e.target.value)}
                className='h-[100px]'
            />
            <button onClick={sendLineNotifyMessage}>發送消息到 Line Notify</button>
            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
}

export default LineNotifyButton;
