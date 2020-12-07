export default{
    namespaced: true,
    state:{
        viewportW: null
    },
    mutations:{
        mtnViewportW(state, n){
            state.viewportW = n
        },
    },
    actions:{
        setViewportW:({commit}, n) => {
            commit('mtnViewportW', n);
        },
    },
    getters:{
        getCurrentWidth(state){
            let stateW = state.viewportW,
            mode = null;
            stateW > 1080 ? mode = 'desktop' : stateW > 480 && stateW < 1080 ? mode = 'tablet' : mode = 'mobile'
            return require(`@/assets/videos/video-bg-${mode}.mp4`)
        }
    }
}