export class BackButtonComponent {
  constructor(parent) {
    this.parent = parent;
  }

  addListeners(listener) {
    document.getElementById("back-button").addEventListener("click", listener);
  }

  getHTML() {
    return `<div class="col-md-12 text-center">
                <button id="back-button" class="btn btn-info rounded-5 mb-3 container" type="button" style="width: 1000px; margin-bottom: 20px;">Назад</button>
           </div> `;
  }

  render(listener) {
    const html = this.getHTML();
    this.parent.insertAdjacentHTML("beforeend", html);
    this.addListeners(listener);
  }
}
