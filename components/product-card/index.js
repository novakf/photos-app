export class ProductCardComponent {
  constructor(parent) {
    this.parent = parent;
  }

  getHTML(data) {
    return `
               <div class="container" style="width: 300px; margin-bottom:50px; margin-top: 15px;"> 
               <button class="btn btn-light container-fluid rounded-5" id="click-card-${data.id}" data-id="${data.id}">
                
                    <img id="${data.id}" class="card-img-top rounded-5" src="${data.src}" style="height:450px;" alt="картинка">
                    <div class="card-body">
                        <h5 class="card-title">${data.title}</h5>
                        
                    </div>
                </button>
                <button id="save-btn" class="btn btn-info container rounded-4">Save</button>
                </div>
            `;
  }

  addListeners(data, listener) {
    document
      .getElementById(`click-card-${data.id}`)
      .addEventListener("click", listener);
  }

  render(data, listener) {
    const html = this.getHTML(data, listener);
    console.log(this.parent);
    this.parent.insertAdjacentHTML("beforeend", html);
    this.addListeners(data, listener);
  }
}
