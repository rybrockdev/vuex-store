import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader



Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {

                primary: '#333333',
                secondary: '#2b2b2b',
                white: '#ffffff',
                orange: '#Fc6d2b',
                darkgrey: '#707070',
                complete: '#2bfc83',
                inprogress: '#ffb936',
                incomplete: '#ff1212',
                lightgrey: '#cacaca',


            }
        }
    }
});