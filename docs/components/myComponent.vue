<script setup lang="ts">
// @ts-ignore
import { nextTick } from 'vue';
import MyWords from './dynamicSpan';

nextTick(()=>{
    const myWords = new MyWords({
    words: '我看青山多妩媚，料青山见我应如是',
    el: '#dynamicBoxTian',
    times: 1
})
})

</script>
<template>
    <article class="box">
        <div id="dynamicBoxTian">
    </div>
    </article>
</template>

<style module>
article{
    margin-top: 5px;
    padding: 24px;
    font-weight: 700;
}

</style>