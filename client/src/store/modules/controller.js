import router from '@/router/index.js'

const actions = {
    pushOverview() {
        router.push("/")
    },
    pushSlideshow() {
        router.push("/slideshow")
    },
};

export default {
    actions,
};

