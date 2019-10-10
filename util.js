export const regexRules = (
    () => ({
        product: {
            rule: /^[a-zA-Z]{1,}$/,
            error: "Please choose your coffee"
        },
        name: {
            rule: /^[a-zA-Z]{1,}$/,
            error: "Enter only letters"
        },
        email: {
            rule: /^[A-Za-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            error: "Enter valid email"
        },
        phone: {
            rule: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
            error: "Enter valid phone number"
        },
        postCode: {
            rule: /^[a-zA-Z0-9]{3}\s?[a-zA-Z0-9]{3}$/,
            error: "Enter valid postal code"
        },
        address: {
            rule: /^[a-zA-Z0-9]{1,}\s?[a-zA-Z0-9]{1,}$/,
            error: "Enter valid address"
        },
        province: {
            rule: /^[a-zA-Z]{2}$/,
            error: "Please choose your province"
        },
        city: {
            rule: /^[a-zA-Z]{1,}$/,
            error: "Please choose your city"
        },
        shipping: {
            rule: /^[0-9]{1}$/,
            error: "Please choose your shipping method"
        }
    })
)()

export const pricing = {
    tax: {
        ON: 0.13,
        BC: 0.14,
        QC: 0.12
    },
    item: {
        cappuccino: 4.30,
        latte: 4.35,
        macchiato: 4.50
    },
    shipping: {
        1: 10,
        2: 7,
        3: 4,
        4: 1.30
    }
}

export const checkoutTemplate = (order) => (
    `<div class="card" >
                            <div class="card-body">
                                <h3 class="card-title">${order.product}   ${pricing.item[order.product]}$</h3>
                                <h5 class="card-title">${order.name}</h5>
                                <p class="card-text"><span class="tag">Email</span> <span class="value">${order.email}</span></p>
                                <p class="card-text"><span class="tag">Number</span> <span class="value">${order.phone}</span></p>
                                <p class="card-text"><span class="tag">Post code</span> <span class="value">${order.postCode}</span></p>
                                <p class="card-text"><span class="tag">Address</span> <span class="value">${order.address} ${order.city} ${order.province}</span></p>
                                <p class="card-text"><span class="tag">Delivery time</span> <span class="value">${order.shipping} day(s)</span></p>
                                <p class="card-text"><span class="tag">Delivery fee</span> ${pricing.shipping[order.shipping]}$</p>
                                <p class="card-text"><span class="tag">Provincial tax</span> <span class="value">${pricing.tax[order.province] * 100}%</span></p>
                                <h5 class="card-title total"><span class="tag">Total</span> <span class="value">${order.total}</span>$</h5>
                            </div>
                            </div>`)