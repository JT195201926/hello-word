import http from "../utils/http"

export const HomeData = (params)=>{
    return http("post","/capi/product/qiuxie/open/homefirstv322",params)
}