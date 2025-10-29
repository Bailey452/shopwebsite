import axios from "axios";


const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_RAPIDAPI_KEY!,
    headers: {
        'x-rapidapi-host': 'asos2.p.rapidapi.com',
        'x-rapidapi-key': 'fa99f84d0fmshc790d2825faa5e0p193e96jsn34b0531cef93'
    }
})

export default axiosInstance    




// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "https://asos2.p.rapidapi.com/products", // ✅ no trailing slash
//   headers: {
//     "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY!, // keep hidden in .env
//     "X-RapidAPI-Host": "asos2.p.rapidapi.com",
//   },
// });

// // 🔍 Add request interceptor for debugging
// axiosInstance.interceptors.request.use((config) => {
//   // Build the full URL
//   const fullUrl = `${config.baseURL}${config.url}?${new URLSearchParams(
//     config.params as Record<string, string>
//   ).toString()}`;

//   console.log("🚀 API Request:", fullUrl);
//   return config;
// });

// export default axiosInstance;
