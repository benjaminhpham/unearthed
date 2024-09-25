const renderGifts = async () => {
  const res = await fetch("/gifts");
  const data = await res.json();

  const mainContent = document.getElementById("main-content");

  const requestedUrl = window.location.href.split("/").pop();
  if (requestedUrl) {
    window.location.href = "../404.html";
  } else {
    renderGifts();
  }

  if (data) {
    data.map((gift) => {
      const cardContainer = document.createElement("div");
      cardContainer.className = "card";

      const giftTopContainer = document.createElement("div");
      giftTopContainer.className = "top-container";

      const giftBottomContainer = document.createElement("div");
      giftBottomContainer.className = "bottom-container";

      giftTopContainer.style.backgroundImage = `url(${gift.image})`;

      const nameEl = document.createElement("h3");
      nameEl.textContent = gift.name;
      giftBottomContainer.append(nameEl);

      const priceEl = document.createElement("p");
      priceEl.textContent = `Price: ${gift.pricePoint}`;
      giftBottomContainer.appendChild(priceEl);

      const audienceEl = document.createElement("p");
      audienceEl.textContent = `Great For: ${gift.audience}`;
      giftBottomContainer.appendChild(audienceEl);

      const readMoreEl = document.createElement("a");
      readMoreEl.textContent = "Read More >";
      readMoreEl.href = "/gifts/gift.id";
      readMoreEl.role = "button";
      giftBottomContainer.appendChild(readMoreEl);

      cardContainer.appendChild(giftBottomContainer);
      cardContainer.appendChild(giftTopContainer);

      mainContent.appendChild(cardContainer);
    });
  } else {
    const h2El = document.createElement("h2");
    mainContent.appendChild(h2El);
  }
};
