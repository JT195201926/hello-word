<template>
    <div class="footer">
            <ul>
                <li v-for="(item,index) in tabBar" :key="index">
                     <router-link :to="{name:item.name}">
                         <i class="iconfont" v-html="item.icon"></i>
                         <span>{{item.title}}</span>
                     </router-link>
                </li>
            </ul>
    </div>
</template>
<script>
 export default {
        data(){
            return{
                tabBar:[
                    {
                        name:'Home',
                        title:'首页',
                        icon:"&#xe61f;"
                    },
                    {
                        name:'About',
                        title:'收藏',
                        icon:"&#xe6f8;"
                    },
                    {
                        name:'My',
                        title:'我的',
                        icon:"&#xe636;"
                    }
            ]
            }
        }
 }
</script>
<style scoped lang="scss">
 @import "../styles/footer.scss";
</style>