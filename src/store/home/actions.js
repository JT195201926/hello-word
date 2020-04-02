import {HomeData} from "../../apis/home"
export default {
    async handleHomeData({commit}){
        let message = await HomeData({os:3});
        commit("handleHomeData",message.data)
    }
}