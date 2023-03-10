export class ProductComponent {
  constructor(parent) {
    this.parent = parent;
  }

  getHTML(data, type) {
    return `
                <div id="pr" class="card mb-3 container rounded-5" style="width:1000px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${data.src}" class="rounded-5 img-fluid" alt="картинка" style="margin-top: 10px; margin-bottom: 10px;">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h3 class="card-title">${data.title}</h5>
                                <p class="card-text">by ${data.author}</p>
                            </div>
                            <button class="btn btn-${type} d-flex align-items-end" style="margin-left:15px;" id="liveAlertBtn">Subscribe</button>
                            <div id="liveAlertPlaceholder" style="margin:15px;"></div>
                        </div>
                    </div>
                </div>
            `;
  }

  alert(data) {
    const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
    const alert = (message, type) => {
      const wrapper = document.createElement("div");
      wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div id="msg">${message}</div>`,
        '   <button id="close-btn" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Закрыть"></button>',
        "</div>",
      ].join("");

      alertPlaceholder.append(wrapper);
    };

    const alertTrigger = document.getElementById("liveAlertBtn");
    if (alertTrigger) {
      alertTrigger.addEventListener("click", () => {
        if (alertTrigger.textContent === "Subscribe") {
          alert("Subscribed!", "success");
          alertTrigger.textContent = "Unsubscribe";
          alertTrigger.className = "btn btn-danger d-flex align-items-end";
        } else {
          alert("Unsubscribed!", "danger");
          alertTrigger.textContent = "Subscribe";
          alertTrigger.className = "btn btn-success d-flex align-items-end";
        }
      });
    }
  }

  render(data) {
    const type = "success";

    const html = this.getHTML(data, type);
    this.parent.insertAdjacentHTML("beforeend", html);

    this.alert(data);
  }
}
