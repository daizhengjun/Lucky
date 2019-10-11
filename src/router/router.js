import Vue from "vue";
import Router from "vue-router";
import BodyContent from "../views/BodyContent.vue"

Vue.use(Router);

export default new Router({
    routes: [{
            path: "*",
            redirect: "/"
        },
        {
            path: "/",
            name: "content",
            component: BodyContent
        }
    ]
});