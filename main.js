import { regexRules, pricing, checkoutTemplate } from "./util.js"

const log = {};
let error = {}

Object.prototype.isEmpty = function() {
    for (var key in this) {
        if (this.hasOwnProperty(key))
            return false;
    }
    return true;
}

$(document).ready(() => {
    const form = document.querySelector("#form")
    form.addEventListener("submit", onSubmit)
    for (let i = 0; i < form.length - 1; i++) {
        const item = form[i]
        item.addEventListener("change", onChange)
    }
})

const onChange = (e) => {
    const input = e.target ? e.target : e
    const value = input.value
    const id = input.id
    const isValid = regexRules[id].rule.test(value)
    if (!isValid) {
        document.querySelector(`#${id}SubText`).textContent = regexRules[id].error
        input.focus();
        error[id] = regexRules[id].error
    } else {
        document.querySelector(`#${id}SubText`).textContent = ""
        log[id] = value
    }
}

const onSubmit = (e) => {
    e.preventDefault()
    error = {}
    document.querySelector('.errorBox').innerHTML = ""
    for (let i = 0; i < e.target.length - 1; i++) {
        const item = e.target[i]
        onChange(item)
        if (error[item.id]) {
            document.querySelector(".checkoutBox").innerHTML = ""
            const errorText = error[item.id];
            const errorHtml = document.createElement('p')
            errorHtml.classList.add('error')
            errorHtml.innerHTML = errorText;
            document.querySelector('.errorBox').append(errorHtml)
        } else if (error.isEmpty()) {
            const price = pricing.item[log.product] + pricing.shipping[log.shipping]
            const tax = pricing.tax[log.province]
            log.total = (price * tax + price).toFixed(2);
            showPrice()
        }
    }
}

const showPrice = () => {
    const checkoutBox = document.querySelector(".checkoutBox")
    const checkoutData = checkoutTemplate(log);
    checkoutBox.innerHTML = checkoutData;
}