<template>
    <div class="background"></div>
    <TheNavigation />
    <div class="planet">
        <div class="planet__tabs">
            <TheTabs
                @setTab="setTab"
                :color="planet == '' ? '#def4fc' : planet"
            />
        </div>
        <img
            v-if="imageState == 'planet' || imageState == 'internal'"
            class="planet__image"
            :src="planetInfo.images[imageState]"
            alt="Planet"
        />
        <div v-else class="planet__image">
            <img :src="planetInfo.images.planet" alt="planet" />
            <img
                :src="planetInfo.images[imageState]"
                alt="Planet"
                class="planet__image--pin"
            />
        </div>

        <div class="planet__information">
            <h1 class="planet__name">
                {{ planetInfo[tabState].name ?? planet }}
            </h1>
            <p class="planet__info">{{ planetInfo[tabState].content }}</p>
            <a class="planet__source" :href="planetInfo[tabState].source">
                <span class="text-secondary">Source: </span>
                <span class="text-underline">Wikipedia</span>
                <i class="fas fa-link "></i>
            </a>
        </div>
        <div class="planet__stats">
            <div class="planet__attribute">
                <span class="planet__attribute-tag text-secondary"
                    >Rotation Time
                </span>
                <span class="planet__attribute-value">{{
                    planetInfo.rotation
                }}</span>
            </div>
            <div class="planet__attribute">
                <span class="planet__attribute-tag text-secondary"
                    >Revolution Time
                </span>
                <span class="planet__attribute-value">{{
                    planetInfo.revolution
                }}</span>
            </div>
            <div class="planet__attribute">
                <span class="planet__attribute-tag text-secondary"
                    >Radius
                </span>
                <span class="planet__attribute-value">{{
                    planetInfo.radius
                }}</span>
            </div>
            <div class="planet__attribute">
                <span class="planet__attribute-tag text-secondary"
                    >Average Temp.
                </span>
                <span class="planet__attribute-value">{{
                    planetInfo.temperature
                }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import TheNavigation from '@/components/Navigation/TheNavigation'
import TheTabs from '@/components/PlanetPage/TheTabs'

export default {
    props: ['planet'],
    components: {
        TheTabs,
        TheNavigation,
    },
    data() {
        return {
            imageState: 'planet',
            tabState: 'overview',
            planetInfo: {
                name: 'Mercury',
                overview: {
                    content:
                        "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
                    source: 'https://en.wikipedia.org/wiki/Mercury_(planet)',
                },
                structure: {
                    content:
                        "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
                    source:
                        'https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure',
                },
                geology: {
                    content:
                        "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
                    source:
                        'https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology',
                },
                rotation: '58.6 Days',
                revolution: '87.97 Days',
                radius: '2,439.7 KM',
                temperature: '430°c',
                images: {
                    planet: './assets/planet-mercury.svg',
                    internal: './assets/planet-mercury-internal.svg',
                    geology: './assets/geology-mercury.png',
                },
            },
            data: [
                {
                    name: 'Mercury',
                    scale: 1,
                    overview: {
                        content:
                            "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
                        source:
                            'https://en.wikipedia.org/wiki/Mercury_(planet)',
                    },
                    structure: {
                        content:
                            "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
                        source:
                            'https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure',
                    },
                    geology: {
                        content:
                            "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
                        source:
                            'https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology',
                    },
                    rotation: '58.6 Days',
                    revolution: '87.97 Days',
                    radius: '2,439.7 KM',
                    temperature: '430°c',
                    images: {
                        planet: './assets/planet-mercury.svg',
                        internal: './assets/planet-mercury-internal.svg',
                        geology: './assets/geology-mercury.png',
                    },
                },
                {
                    name: 'Venus',
                    scale: 3,
                    overview: {
                        content:
                            "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
                        source: 'https://en.wikipedia.org/wiki/Venus',
                    },
                    structure: {
                        content:
                            'The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.',
                        source:
                            'https://en.wikipedia.org/wiki/Venus#Internal_structure',
                    },
                    geology: {
                        content:
                            'Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.',
                        source:
                            'https://en.wikipedia.org/wiki/Venus#Surface_geology',
                    },
                    rotation: '243 Days',
                    revolution: '224.7 Days',
                    radius: '6,051.8 KM',
                    temperature: '471°c',
                    images: {
                        planet: './assets/planet-venus.svg',
                        internal: './assets/planet-venus-internal.svg',
                        geology: './assets/geology-venus.png',
                    },
                },
                {
                    name: 'Earth',
                    scale: 4,
                    overview: {
                        content:
                            "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
                        source: 'https://en.wikipedia.org/wiki/Earth',
                    },
                    structure: {
                        content:
                            "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
                        source:
                            'https://en.wikipedia.org/wiki/Earth#Internal_structure',
                    },
                    geology: {
                        content:
                            'The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.',
                        source: 'https://en.wikipedia.org/wiki/Earth#Surface',
                    },
                    rotation: '0.99 Days',
                    revolution: '365.26 Days',
                    radius: '6,371 KM',
                    temperature: '16°c',
                    images: {
                        planet: './assets/planet-earth.svg',
                        internal: './assets/planet-earth-internal.svg',
                        geology: './assets/geology-earth.png',
                    },
                },
                {
                    name: 'Mars',
                    scale: 2,
                    overview: {
                        content:
                            'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".',
                        source: 'https://en.wikipedia.org/wiki/Mars',
                    },
                    structure: {
                        content:
                            'Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.',
                        source:
                            'https://en.wikipedia.org/wiki/Mars#Internal_structure',
                    },
                    geology: {
                        content:
                            'Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.',
                        source:
                            'https://en.wikipedia.org/wiki/Mars#Surface_geology',
                    },
                    rotation: '1.03 Days',
                    revolution: '1.88 Years',
                    radius: '3,389.5 KM',
                    temperature: '-28°c',
                    images: {
                        planet: './assets/planet-mars.svg',
                        internal: './assets/planet-mars-internal.svg',
                        geology: './assets/geology-mars.png',
                    },
                },
                {
                    name: 'Jupiter',
                    scale: 8,
                    overview: {
                        content:
                            'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.',
                        source: 'https://en.wikipedia.org/wiki/Jupiter',
                    },
                    structure: {
                        content:
                            "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
                        source:
                            'https://en.wikipedia.org/wiki/Jupiter#Internal_structure',
                    },
                    geology: {
                        content:
                            'The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.',
                        source:
                            'https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices',
                    },
                    rotation: '9.93 Hours',
                    revolution: '11.86 Years',
                    radius: '69,911 KM',
                    temperature: '-108°c',
                    images: {
                        planet: './assets/planet-jupiter.svg',
                        internal: './assets/planet-jupiter-internal.svg',
                        geology: './assets/geology-jupiter.png',
                    },
                },
                {
                    name: 'Saturn',
                    scale: 7,
                    overview: {
                        content:
                            'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.',
                        source: 'https://en.wikipedia.org/wiki/Saturn',
                    },
                    structure: {
                        content:
                            "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
                        source:
                            'https://en.wikipedia.org/wiki/Saturn#Internal_structure',
                    },
                    geology: {
                        content:
                            "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.",
                        source:
                            'https://en.wikipedia.org/wiki/Saturn#Atmosphere',
                    },
                    rotation: '10.8 Hours',
                    revolution: '29.46 Years',
                    radius: '58,232 KM',
                    temperature: '-138°c',
                    images: {
                        planet: './assets/planet-saturn.svg',
                        internal: './assets/planet-saturn-internal.svg',
                        geology: './assets/geology-saturn.png',
                    },
                },
                {
                    name: 'Uranus',
                    scale: 6,
                    overview: {
                        content:
                            'Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.',
                        source: 'https://en.wikipedia.org/wiki/Uranus',
                    },
                    structure: {
                        content:
                            "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
                        source:
                            'https://en.wikipedia.org/wiki/Uranus#Internal_structure',
                    },
                    geology: {
                        content:
                            "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
                        source:
                            'https://en.wikipedia.org/wiki/Uranus#Atmosphere',
                    },
                    rotation: '17.2 Hours',
                    revolution: '84 Years',
                    radius: '25,362 KM',
                    temperature: '-195°c',
                    images: {
                        planet: './assets/planet-uranus.svg',
                        internal: './assets/planet-uranus-internal.svg',
                        geology: './assets/geology-uranus.png',
                    },
                },
                {
                    name: 'Neptune',
                    scale: 5,
                    overview: {
                        content:
                            'Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.',
                        source: 'https://en.wikipedia.org/wiki/Neptune',
                    },
                    structure: {
                        content:
                            "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
                        source:
                            'https://en.wikipedia.org/wiki/Neptune#Internal_structure',
                    },
                    geology: {
                        content:
                            "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
                        source:
                            'https://en.wikipedia.org/wiki/Neptune#Atmosphere',
                    },
                    rotation: '16.08 Hours',
                    revolution: '164.79 Years',
                    radius: '24,622 KM',
                    temperature: '-201°c',
                    images: {
                        planet: './assets/planet-neptune.svg',
                        internal: './assets/planet-neptune-internal.svg',
                        geology: './assets/geology-neptune.png',
                    },
                },
            ],
        }
    },
    watch: {
        planet(planet) {
            let planetColor = 'mercury'
            this.getPlanetInfo(planet)
            console.log(this.planetInfo)
            switch (planet) {
                case 'mercury':
                    planetColor = '#419ebb'
                    break
                case 'venus':
                    planetColor = '#f7cc7f'
                    break
                case 'earth':
                    planetColor = '#545bfe'
                    break
                case 'mars':
                    planetColor = '#ff6a45'
                    break
                case 'jupiter':
                    planetColor = '#ecad7a'
                    break
                case 'saturn':
                    planetColor = '#fccb6b'
                    break
                case 'uranus':
                    planetColor = '#65f0d5'
                    break
                case 'neptune':
                    planetColor = '#497efa'
                    break
            }
            document.documentElement.style.setProperty(
                '--planet-color',
                planetColor
            )
        },
    },
    methods: {
        setTab(tabState) {
            if (tabState == 'tab1') {
                this.imageState = 'planet'
                this.tabState = 'overview'
            } else if (tabState == 'tab2') {
                this.imageState = 'internal'
                this.tabState = 'structure'
            } else if (tabState == 'tab3') {
                this.imageState = 'geology'
                this.tabState = 'geology'
            }
        },
        getPlanetInfo(planet) {
            this.planetInfo = this.data.find(
                (item) => item.name.toLowerCase() === planet
            )
        },
    },
}
</script>

<style lang="scss" scoped>
.background {
    position: absolute;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    background: url('../assets/background-stars.svg');
    background-position: center;
}

.planet {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    &__source {
        font-size: 1.2rem;
        cursor: pointer;
        * {
            padding: 0 0.2rem;
        }
    }
    &__name {
        font-size: 4rem;
        text-align: center;
        text-transform: uppercase;
        line-height: 51.76px;
    }
    &__info {
        padding: 2rem 0;
        line-height: 24px;
        text-align: center;
        font-size: 1.2rem;
        @media (min-width: 650px) {
            max-width: 50rem;
        }
    }
    &__image {
        position: relative;
        padding-top: 2rem;
        width: 50%;
        @media (min-width: 650px) {
            width: 35%;
        }
        @media (min-width: 1200px) {
            padding: 1rem;
            width: 80%;
        }
        & img:nth-child(1) {
            max-width: 100%;
        }
        &--pin {
            position: absolute;
            bottom: -2rem;
            width: 8rem;
            height: auto;
            left: 50%;
            margin-left: -4rem;
            @media (min-width: 650px) {
                width: 10rem;
                left: 50%;
                margin-left: -5rem;
            }
            @media (min-width: 1200px) {
                width: 12rem;
                left: 50%;
                margin-left: -6rem;
            }
        }
    }
    &__attribute {
        margin-bottom: 1rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid var(--text-color-secondary);
        padding: 1rem 1rem;
        text-transform: uppercase;
        letter-spacing: -0.75px;
        &-tag {
            font-size: 1.2rem;
        }
        &-value {
            font-size: 2rem;
        }
        @media (min-width: 650px) {
            margin-bottom: 0;
        }
    }
    &__tabs,
    &__information,
    &__stats {
        width: 100%;
        height: 100%;
    }
    &__information,
    &__stats {
        padding: 2rem;
    }
    &__tabs {
        // background: blue;
        grid-area: a;
    }
    &__information {
        // background: green;
        grid-area: b;
    }
    &__stats {
        // background: purple;
        grid-area: c;
    }
    &__image {
        // background: orange;
        grid-area: d;
    }
    @media (min-width: 650px) {
        display: grid;
        grid-template-areas:
            'd d d d d d d d'
            'b b . a a a a a'
            'b b . a a a a a'
            'c c c c c c c c';

        &__image {
            justify-self: center;
        }
        &__stats {
            display: flex;
            gap: 1rem;
        }
        &__info,
        &__name {
            text-align: left;
        }
        &__attribute {
            flex-direction: column;
            align-items: flex-start;
            line-height: 3.1rem;
            letter-spacing: -0.9px;
            text-transform: uppercase;
            * {
                margin-bottom: 1rem;
            }
        }
    }
    @media (min-width: 1200px) {
        max-height: 1000px;
        grid-template-areas:
            'd d d d d d . b b'
            'd d d d d d . a a'
            'c c c c c c c c c';
        padding: 8rem;
        &__image {
            justify-self: center;
        }
        &__stats {
            display: flex;
        }
        &__name {
            font-size: 8rem;
        }
        &__info,
        &__name {
            text-align: left;
        }
        &__information {
            max-height: 25rem;
        }
        &__attribute {
            flex-direction: column;
            align-items: flex-start;
            line-height: 3.1rem;
            letter-spacing: -0.9px;
            text-transform: uppercase;
            * {
                margin-bottom: 1rem;
            }
        }
    }
}
</style>
