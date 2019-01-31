// import store from '@/store'
import {getToken} from './auth'
import { colors } from "quasar";

export function getSkin(PARM){
    let fontsize = getToken("global-fontsize") || '';
    let fontsizeLarge = getToken("global-fontsize-large") || '';
    let fontfamily = getToken("global-fontfamily") || '';
    let color = getToken("global-color") || '';
    let colorDarken = getToken("global-color-darken") || '';
    let bgcolor = getToken("global-bgcolor") || '';
    colors.setBrand("global-fontsize", fontsize);
    colors.setBrand("global-fontsize-large", fontsizeLarge);
    colors.setBrand("global-fontfamily", fontfamily);
    colors.setBrand("global-color", color);
    colors.setBrand("global-color-darken", colorDarken);
    colors.setBrand("global-bgcolor", bgcolor);
}
