<template>
    <div>
        <tbody>
            <tr v-for="(item, index) in list" :key="item.id">
            <td>{{ index+1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.gender }}</td>
            <td>{{ item.grade }}</td>
            <td>
                <slot :row="item" ></slot>
            </td>
        </tr>
        </tbody>
    </div>
</template>
<script>
export default {
    name: 'MyTable',
    props: ['list']

}
</script>
<style scoped>
</style>