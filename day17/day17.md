# Server side API requests with Axios
- axios library
    - axios.get()
    - axios.post()
    - axios.put()
    - axios.delete()
# API Authentication
- no authentication
    - anyone can access
    - rate limit eg. 100 requests per hour
- basic authentication
    - username and password
    - base64 encoding
    - authorization header
- api key authorization
    - client sends api key in header
- token-based authentication
    - username and password -> token
    - token is sent in header
    - the token can interact with the API
# REST APIs
- axios.post("URL", body, config)
    - request config: https://axios-http.com/docs/req_config
- put: update data in backend
- get: get data from backend
- post: send data to backend
- patch: update data in backend
- delete: delete data from backend
# Secrets Project
- Similar to Whisper app
- apply express, axios module
