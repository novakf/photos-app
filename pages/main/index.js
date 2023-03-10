import { ProductCardComponent } from "../../components/product-card/index.js";
import { ProductPage } from "../product/index.js";

export const pics = [
  {
    id: 1,
    src: "https://i.pinimg.com/564x/ea/8c/9e/ea8c9ed4cf102683e3c3f233736123b5.jpg",
    title: "Rrrr",
    author: "@johnsnow",
  },
  {
    id: 2,
    src: "https://i.pinimg.com/736x/59/ec/f6/59ecf6b1014140e645931a27ee9e0869.jpg",
    title: "Pushistik",
    author: "@wiki",
  },
  {
    id: 3,
    src: "https://i.pinimg.com/564x/75/a6/34/75a634f893f371a573efbeaf787c8d3d.jpg",
    title: "Couple",
    author: "@amans",
  },
  {
    id: 4,
    src: "https://i.pinimg.com/236x/5e/21/b5/5e21b5fa45cc04f8fd35537496ebe6d0.jpg",
    title: "Hooood",
    author: "@black",
  },
  {
    id: 5,
    src: "https://i.pinimg.com/564x/44/fe/13/44fe1396d2076524a290e95a449a655c.jpg",
    title: "Sleep",
    author: "@tony",
  },
  {
    id: 6,
    src: "https://i.pinimg.com/564x/cf/af/ea/cfafea999dc3d187af954f316d80e796.jpg",
    title: "Batman",
    author: "@johnny",
  },
];

export class MainPage {
  constructor(parent) {
    this.parent = parent;
  }

  get pageRoot() {
    return document.getElementById("main-page");
  }

  getHTML() {
    return `
                <div id="main-page" class="d-flex container flex-wrap" style="width: 1000px;"><div/>
            `;
  }

  getData() {
    return pics;
  }

  clickCard(e) {
    const cardId = e.target.id;

    const productPage = new ProductPage(this.parent, cardId);
    console.log(e.target);
    productPage.render();
  }

  render() {
    this.parent.innerHTML = "";
    const html = this.getHTML();
    this.parent.insertAdjacentHTML("beforeend", html);

    const data = this.getData();
    data.forEach((item) => {
      const productCard = new ProductCardComponent(this.pageRoot);
      productCard.render(item, this.clickCard.bind(this));
    });

    const alertTrigger = document.querySelectorAll("[id='save-btn']");

    for (var i = 0; i < alertTrigger.length; i++)
      if (alertTrigger[i]) {
        alertTrigger[i].addEventListener("click", () => {
          alert("Saved!", "success");
        });
      }
  }
}
