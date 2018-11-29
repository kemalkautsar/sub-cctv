import * as streamedian from 'streamedian/player.js';
// import WebsocketTransport from 'wsp/transport/websocket';
// import RTSPClient from 'wsp/client/rtsp/client';

let mediaElement = rtsp.attach(document.getElementById('test_video'));
let player = new streamedian.WSPlayer(mediaElement, {
    // url: `${STREAM_URL}`,      // overrides mediaElement's sources
    modules: [
        {
            // client module constructor. Should be subclass or BaseClient. RTSPClient by default
            // client: RTSPClient,
            transport: {
               // client module constructor. Should be subclass or BaseTransport. WebsocketTransport by default
               // constructor: WebsocketTransport,
               options: {
                   // address of websocket proxy described below. ws${location.protocol=='https:'?'s':''}://${location.host}/ws/ by default
                   socket: "ws://websocket_proxy_address/ws"
               }
           }
        },
    ]
});