const renderGift = async () => {
  const requestedId = parseInt(window.location.href.split("/").pop());
  console.log(requestedId);
  const res = await fetch("/gifts");
  const data = await res.json();

  const giftContent = document.getElementById("gift-content");
  let gift;

  if (data) {
    gift = data.find((gift) => gift.id === requestedId);
    const imgEl = document.querySelector("#image");
    imgEl.src = gift.image;

    const nameEl = document.getElementById("name");
    nameEl.textContent = gift.name;

    const submittedByEl = document.querySelector("#submittedBy");
    submittedByEl.textContent = gift.name;

    const pricePointEl = document.querySelector("#pricePoint");
    pricePointEl.textContent = gift.pricePoint;

    const audienceEl = document.querySelector("#audience");
    audienceEl.textContent = gift.audience;

    const descriptionEl = document.querySelector("#description");
    descriptionEl.textContent = gift.description;

    document.title = gift.name;

    const giftDetailsEl = document.querySelector("#giftDetails");
    giftDetailsEl.appendChild(nameEl);
    giftDetailsEl.appendChild(submittedByEl);
    giftDetailsEl.appendChild(pricePointEl);
    giftDetailsEl.appendChild(audienceEl);
    giftDetailsEl.appendChild(descriptionEl);

    giftContent.appendChild(giftDetailsEl);
  } else {
    const h2El = document.createElement("h2");
    h2El.textContent = "No Gifts Available 😞";
  }
};

renderGift();
