/* Проверка поддержки webp */
export function isWebp() {
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
    }
    testWebP(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}
/* Плавная прокрутка */
export function SmoothLinks() {

    const e = document.querySelectorAll('a[href^="#"]');

    for (let t of e) {
        t.addEventListener("click", (function(e) {
            e.preventDefault();
            const o = t.getAttribute("href");
            document.querySelector(o).scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }))
    }
}