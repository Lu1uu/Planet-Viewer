<template>
    <div class="tabs">
        <p
            @click="switchTab('tab1')"
            class="tabs__tab"
            :class="{ active: tab1 }"
        >
            <span class="mobile">01.</span> Overview
        </p>
        <p
            @click="switchTab('tab2')"
            class="tabs__tab"
            :class="{ active: tab2 }"
        >
            <span class="mobile">02.</span>Structure
        </p>
        <p
            @click="switchTab('tab3')"
            class="tabs__tab"
            :class="{ active: tab3 }"
        >
            <span class="mobile">03.</span> Surface
        </p>
    </div>
</template>

<script>
export default {
    emits: ['setTab'],
    props: ['color'],
    data() {
        return {
            tab1: true,
            tab2: false,
            tab3: false,
        }
    },
    methods: {
        switchTab(tab) {
            switch (tab) {
                case 'tab1':
                    if (this.tab1) break
                    this.tab1 = true
                    this.tab2 = false
                    this.tab3 = false
                    break
                case 'tab2':
                    if (this.tab2) break
                    this.tab1 = false
                    this.tab2 = true
                    this.tab3 = false
                    break
                case 'tab3':
                    if (this.tab3) break
                    this.tab1 = false
                    this.tab2 = false
                    this.tab3 = true
                    break
            }
            this.$emit('setTab', tab)
        },
    },
}
</script>

<style lang="scss" scoped>
.tabs {
    height: 5rem;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    border-bottom: solid 1px var(--text-color-secondary);
    gap: 0.7rem;

    &__tab {
        box-sizing: content-box;
        text-transform: uppercase;
        cursor: pointer;
        display: grid;
        place-items: center;
        font-weight: bold;
        letter-spacing: 1.93px;
        color: var(--text-color-secondary);
        &:hover {
            color: var(--text-color-main);
        }
    }
    @media (min-width: 650px) {
        padding: 0 0.5rem;
        height: 100%;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        border: none;
        &__tab {
            padding: 0.5rem 0;
            border: 1px solid var(--text-color-secondary);
            display: flex;
            padding: 1rem;
            min-width: 20rem;
            height: 2.4rem;
            color: white;
        }
    }
}

.mobile {
    display: none;
    @media (min-width: 650px) {
        display: inline;
        color: var(--text-color-secondary);
        padding: 0 1rem;
    }
}

.active {
    color: var(--text-color-main);
    border-bottom: solid 4px var(--planet-color);
    @media (min-width: 650px) {
        background: var(--planet-color);
        border: none;
    }
}
</style>
