import axios from 'axios';

//创建 Axios
const Axios = axios.create({
    baseURL: 'http://127.0.0.1:8101',
    timeout: 10000,
    withCredentials: true,
})
//请求拦截器
Axios.interceptors.request.use(
    function (config) {

        return config;
    },
    //处理请求错误
    function (error) {
        return Promise.reject(error);
    }

);
//创建响应拦截器
Axios.interceptors.response.use(
    function (response){
        const {data} = response;
        //未登录
        if(data.code===40100){
            // 不是获取用户信息接口，或者不是登录页面，则跳转到登录页面
            if (
                !response.request.responseURL.includes("user/get/login") &&
                !window.location.pathname.includes("/user/login")
            ) {
                window.location.href = `/user/login?redirect=${window.location.href}`;
            }
        } else if (data.code !== 0) {
            // 其他错误
            throw new Error(data.message ?? "服务器错误");
        }
        return data;
    },
    // 非 2xx 响应触发
    function (error) {
        // 处理响应错误
        return Promise.reject(error);
    },
)
export default Axios;