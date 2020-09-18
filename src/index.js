import "./style.css";

window.DatoCmsPlugin.init((plugin) => {
  plugin.startAutoResizer();

  const container = document.createElement("div");
  container.classList.add("container");

  const { baseUrl, label } = plugin.parameters.global;
  const button = document.createElement("button");
  button.type = "button";
  button.className = "DatoCMS-button DatoCMS-button--primary";
  button.onclick = (e) => {
    const locale = plugin.locale || plugin.site.attributes.locales[0];
    const slug = plugin.getFieldValue(`slug.${locale}`);
    const url = plugin.getFieldValue(`url.${locale}`);
    window.open(
      `${baseUrl}?locale=${locale}&type=${plugin.itemType.id}&id=${plugin.itemId}&slug=${slug}&url=${url}`
    );
    e.preventDefault();
    return false;
  };
  button.textContent = label || "Zobrazit náhled";
  container.appendChild(button);

  document.body.appendChild(container);
});
