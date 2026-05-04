document.addEventListener("DOMContentLoaded", async () => {
  await loadPartial("header-placeholder", "partials/header.html");

  if (typeof initMenu === "function") {
    initMenu();
  }

  await loadPartial("contact-placeholder", "partials/contact.html");
});

async function loadPartial(id, path) {
  const placeholder = document.getElementById(id);

  if (!placeholder) return;

  try {
    const response = await fetch(path);

    if (!response.ok) {
      throw new Error(`${path} non trovato`);
    }

    placeholder.innerHTML = await response.text();
  } catch (error) {
    console.error("Errore caricamento partial:", error);
  }
}