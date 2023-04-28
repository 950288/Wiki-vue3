<template>
    <div class="logo">
        <router-link to="/" class="link">
        <img
            src="@/assets/logo.svg"
            alt="logo"
            width="60"
            height="60"
        />
        </router-link>
    </div>
</template>
<style lang="scss">
.logo{
    width: 65px;
    height: 100%;
    .link{
        display: flex;
        align-items: center;
        height: 100%;
    }
}
</style>