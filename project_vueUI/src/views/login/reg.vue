<template>
    <div>
        <h3>注册页面</h3>
        <div><input type="text" ref='username'/></div>
        <div><input type="text" /></div>
        <input type="button" value="注册" @click="reg"/>
    </div>
</template>

<script>
export default {
    methods:{
        reg(){
             this.$router.push(`/login/${this.$refs.username.value}`)
        }
    }
}
</script>