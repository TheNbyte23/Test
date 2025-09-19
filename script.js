const btn = document.getElementById("btn")

let i = 0

btn.addEventListener(
    "click", 
    () => {
        const newP = document.createElement("p")
        newP.textContent = ("Привет, Мир " + i)
        
        const oldP = document.querySelector("p")
        
        if (oldP) {
            document.body.replaceChild(newP, oldP)
        } else {
            document.body.insertBefore(newP, btn)
        }
        i++
    }
)