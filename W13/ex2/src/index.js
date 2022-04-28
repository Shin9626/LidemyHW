import $ from 'jquery'
import sass from './style.sass'
import { first } from './utils'

console.log(first('ggc'))

$(document).ready(() => {
    $('body').append('<button class="btn">click<\button>')
    $('.btn').click(()=>{
        alert('btn!');
    })

    throw new Error(123)
})