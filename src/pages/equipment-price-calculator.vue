<template>
    <div>60级武器</div>

    <div style="display: flex">
        <div>单价</div>
        <el-input v-model="eWeapon60Price"></el-input>
    </div>

    <el-input v-model="eWeapon60Count"></el-input>
    <div>70级武器</div>
    <el-input v-model="eWeapon70Price"></el-input>
    <el-input v-model="eWeapon70Count"></el-input>
    <div>80级武器</div>
    <el-input v-model="eWeapon80Price"></el-input>
    <el-input v-model="eWeapon80Count"></el-input>
    <div>60级装备</div>
    <el-input v-model="eOther60Price"></el-input>
    <el-input v-model="eOther60Count"></el-input>
    <div>70级装备</div>
    <el-input v-model="eOther70Price"></el-input>
    <el-input v-model="eOther70Count"></el-input>
    <div>80级装备</div>
    <el-input v-model="eOther80Price"></el-input>
    <el-input v-model="eOther80Count"></el-input>
    <div>玫瑰</div>
    <el-input v-model="rosePrice"></el-input>
    <el-input v-model="roseCount"></el-input>
    <div>康乃馨</div>
    <el-input v-model="carnationPrice"></el-input>
    <el-input v-model="carnationCount"></el-input>
    <div>百合</div>
    <el-input v-model="lilyPrice"></el-input>
    <el-input v-model="lilyCount"></el-input>
    <div>乐器</div>
    <el-input v-model="musicalInstrumentsPrice"></el-input>
    <el-input v-model="musicalInstrumentsCount"></el-input>
    <div>垃圾内丹</div>
    <el-input v-model="neidanPrice"></el-input>
    <el-input v-model="neidanCount"></el-input>
    <div>树苗</div>
    <el-input v-model="saplingPrice"></el-input>
    <el-input v-model="saplingCount"></el-input>

    <el-button @click="calculatingAllPrice">计算总价{{allPrice}}</el-button>
</template>

<script>
// import { ref } from 'vue'
// const input = ref('')

export default {
    name: 'EquipmentPriceCalculation',
    props: {
        msg: String
    },

    data() {
        return {
            eWeapon60Price: 16, // 60武器单价
            eWeapon60Count: 0, // 60武器数量
            eWeapon70Price: 12, // 70武器单价
            eWeapon70Count: 0, // 70武器数量
            eWeapon80Price: 50, // 80武器单价
            eWeapon80Count: 0, // 80武器数量
            eOther60Price: 15, // 60装备单价
            eOther60Count: 0, // 60装备数量
            eOther70Price: 6.5, // 70装备单价
            eOther70Count: 0, // 70装备数量
            eOther80Price: 44, // 80装备单价
            eOther80Count: 0, // 80装备数量
            rosePrice: 12, // 玫瑰单价
            roseCount: 0, // 玫瑰数量
            carnationPrice: 2, // 康乃馨单价
            carnationCount: 0, // 康乃馨数量
            lilyPrice: 2, // 百合单价
            lilyCount: 0, // 百合数量
            musicalInstrumentsPrice: 2, // 乐器单价
            musicalInstrumentsCount: 0, // 乐器数量
            neidanPrice: 15, // 垃圾内丹单价
            neidanCount: 0, // 垃圾内丹数量
            saplingPrice: 42, // 树苗单价
            saplingCount: 0, // 树苗数量

            allPrice: 0, // 总价格
        }
    },

    methods: {
        // 计算出所有物品的总价值
        calculatingAllPrice() {
            this.allPrice = this.eWeapon60Price * this.eWeapon60Count +
                            this.eWeapon70Price * this.eWeapon70Count +
                            this.eWeapon80Price * this.eWeapon80Count +
                            this.eOther60Price * this.eOther60Count +
                            this.eOther70Price * this.eOther70Count +
                            this.eOther80Price * this.eOther80Count +
                            this.rosePrice * this.roseCount +
                            this.lilyPrice * this.lilyCount +
                            this.carnationPrice * this.carnationCount +
                            this.musicalInstrumentsPrice * this.musicalInstrumentsCount +
                            this.neidanPrice * this.neidanCount +
                            this.saplingPrice * this.saplingCount
            console.log('总价：',this.allPrice)
        },
    },

    mounted() {

    }
}
</script>

<style scoped>

</style>