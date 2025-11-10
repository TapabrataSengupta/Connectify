let IS_PROD = true;
const server = IS_PROD ?
    " https://connectify-backend-abjm.onrender.com" :

    "http://localhost:8000"


export default server;