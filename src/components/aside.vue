<template>
    <div class="aside">
        <div class="aside-container">
            <p class="heading">on this page</p>
            <div class="heading-container">
                <div v-for="heading , index in headingList" :key="index" class="heading-h1">
                        <!-- :herf="'#'+ heading.id" -->
                    <div class="heading-h1"><a class="heading-link">{{heading.text}}</a></div>
                    <div v-for="subheading , subindex in heading.subheading" :key="subindex" class="heading-h2">
                        <div class="heading-h2"><a class="heading-link">{{subheading.text}}</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue';
const { proxy } = <any>getCurrentInstance();
const headingList = proxy.headingList
</script>
<style lang="scss">
.aside{
    .aside-container{
        // font-size: 1.2em;
        font-family: var(--vt-font-family-base);
        white-space: nowrap;
        margin-left: .4em;
        .heading{

            font-weight: 700;
        }
        .heading-link{
            margin-left: .5em;
            font-weight: 500;
            height: 1.5em;
            line-height: 1.5em;
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
}
</style>