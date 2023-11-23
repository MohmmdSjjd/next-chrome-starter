import axios from "axios";


const token = localStorage.getItem("token") || ""


axios.create({
    baseURL: "https://api.d.aiengines.ir",
    headers: {
        ["Content-Type"]: "application/json"
    }
})


axios.interceptors.request.use((req) => {

    req.headers.Authorization = `Bearer ${token}`

    return req
}, (err) => { Promise.reject(err) })