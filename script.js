const contents = document.querySelectorAll(".content");
const ProceedToBuy = document.querySelector(".ProceedToBuy");
const AddToCart = document.querySelectorAll(".AddToCart");
const ordercontent = document.querySelector(".ordercontent");
const navbar = document.querySelector(".nav");

AddToCart.forEach(btn => btn.addEventListener("click", (e) => {
    console.log(e);
    const img = e.target.parentElement.parentElement.children[0].attributes[0].value;
    const title = e.target.parentElement.parentElement.children[1].children[0].innerText;
    const text = e.target.parentElement.parentElement.children[1].children[1].innerText;
    const price = e.target.parentElement.parentElement.children[1].children[2].innerText;
    const html = `
    <div class="col">
        <div class="card">
            <img src="${img}" class="card-img-top img-fluid"  alt="...">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${text}</p>
                <h1>${price}</h1>
            </div>
        </div>
    </div>
    `;
    ordercontent.innerHTML += html;
    ProceedToBuy.style.display = "block";
    navbar.style.display = "block";
}));





ProceedToBuy.addEventListener("click", () => {
    contents.forEach(content => content.style.display = "none");
    ProceedToBuy.style.display = "none";

});