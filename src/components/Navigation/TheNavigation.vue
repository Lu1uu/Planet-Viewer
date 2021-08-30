<template>
    <nav class="nav">
        <h1 class="nav__logo">
            <router-link to="/mercury">THE PLANETS</router-link>
        </h1>
        <div class="nav__tablet">
            <ul class="nav__links">
                <li
                    class="nav__planet"
                    :class="{
                        activeBorder: planet.name == $route.fullPath.slice(1),
                    }"
                    :style="{ borderColor: planet.color }"
                    v-for="planet in planetInfo"
                    :key="planet.name"
                >
                    <router-link
                        :to="`/${planet.name}`"
                        :style="{ borderColor: planet.color }"
                        >{{ planet.name }}
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="nav__mobile">
            <i
                v-if="!menuActive"
                @click="togglePlanets"
                class="nav__mobile-menu fas fa-bars"
            ></i>
            <i
                v-if="menuActive"
                @click="togglePlanets"
                class="nav__mobile-menu fas fa-times"
            ></i>
        </div>
    </nav>
    <section class="menu" :class="{ active: menuActive }">
        <PlanetNavigation
            v-for="planet in planetInfo"
            :key="planet.name"
            :color="planet.color"
            :name="planet.name"
        ></PlanetNavigation>
    </section>
</template>

<script>
import PlanetNavigation from '@/components/Navigation/PlanetNavigation'
export default {
    components: {
        PlanetNavigation,
    },
    data() {
        return {
            planetInfo: [
                {
                    name: 'mercury',
                    color: '#419ebb',
                },
                {
                    name: 'venus',
                    color: '#f7cc7f',
                },
                {
                    name: 'earth',
                    color: '#545bfe',
                },
                {
                    name: 'mars',
                    color: '#ff6a45',
                },
                {
                    name: 'jupiter',
                    color: '#ecad7a',
                },
                {
                    name: 'saturn',
                    color: '#fccb6b',
                },

                {
                    name: 'uranus',
                    color: '#65f0d5',
                },
                {
                    name: 'neptune',
                    color: '#497efa',
                },
            ],
            menuActive: false,
        }
    },
    watch: {
        $route() {
            this.menuActive = false
        },
    },
    methods: {
        togglePlanets() {
            this.menuActive = !this.menuActive
        },
    },
}
</script>

<style lang="scss" scoped>
.nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3.5rem;
    width: 100%;
    min-height: 5rem;
    border-bottom: 1px solid var(--text-color-secondary);
    &__logo {
        font-size: 3.2rem;
        font-family: var(--text-fancy);
        letter-spacing: -1.05px;
        font-weight: 500;
        * {
            cursor: pointer;
        }
    }
    &__tablet {
        width: 100%;
        @media (max-width: 650px) {
            display: none;
        }
    }
    &__links {
        display: flex;
        justify-content: space-around;
        list-style-type: none;
        padding: 0;
        width: 100%;
        * {
            height: 100%;
        }
        li:hover {
            border-top: 3px solid;
            margin-top: -3px;
        }
    }
    &__planet {
        * {
            cursor: pointer;
        }
        padding: 1rem 0;
        text-transform: uppercase;
    }
    &__mobile-menu {
        cursor: pointer;
        font-size: 3.2rem;
        color: var(--text-color-secondary);
        @media (min-width: 650px) {
            display: none;
        }
    }
}
.menu {
    display: none;
    padding: 2rem;
}

.active {
    display: block;
}

.activeBorder {
    border-top: 3px solid;
    margin-top: -3px;
}

@media (min-width: 650px) {
    .nav {
        padding: 0;
        flex-direction: column;
        &__logo,
        &__links {
            margin: 2rem 0;
            height: 100%;
        }
        &__links {
            margin-bottom: 3rem;
        }
    }
}
@media (min-width: 1200px) {
    .nav {
        flex-direction: row;
        padding: 2rem 4rem;
        &__logo,
        &__links {
            margin: 0;
        }
        &__links {
            justify-content: flex-end;
            gap: 4rem;
            font-size: 1.3rem;
        }
        &__logo {
            width: 30rem;
        }
    }
}
</style>
