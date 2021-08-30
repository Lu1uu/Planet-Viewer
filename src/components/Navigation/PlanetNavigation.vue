<template>
    <router-link :to="`/${name}`">
        <div class="planet">
            <div class="planet__info">
                <div
                    class="planet__planet"
                    :style="{ background: color }"
                ></div>
                <h2 class="planet__name">{{ name }}</h2>
            </div>
            <i class="planet__angle fas fa-angle-right"></i>
        </div>
    </router-link>
</template>

<script>
export default {
    props: ['color', 'name'],
}
</script>

<style lang="scss" scoped>
.planet {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.5rem 0;
    border-bottom: 1px solid var(--text-color-secondary);
    &__angle {
        font-size: 2rem;
        color: var(--text-color-secondary);
    }
    &__info {
        display: flex;
        align-items: center;
        * {
            margin-right: 1rem;
        }
    }
    &__planet {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
    }
    &__name {
        margin-left: 2rem;
        text-transform: uppercase;
        letter-spacing: 1.36px;
        font-size: 1.5rem;
    }
}
</style>
