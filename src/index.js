import './style.css';

window.DatoCmsPlugin.init((plugin) => {
  plugin.startAutoResizer();

  const container = document.createElement('div');
  container.classList.add('container');

  const { baseUrl, label } = plugin.parameters.global;
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'DatoCMS-button DatoCMS-button--primary';
  button.onclick = (e) => {
    const { locale } = plugin;
    const params = {
      locale,
      slug: plugin.getFieldValue(locale ? `slug.${locale}` : 'slug'),
      url: plugin.getFieldValue(locale ? `url.${locale}` : 'url'),
      id: plugin.itemId,
      type: plugin.itemType.id,
    };

    const urlParams = Object.keys(params).map((key) => (params[key] ? `${key}=${encodeURIComponent(params[key])}` : false)).filter(Boolean).join('&');
    window.open(`${baseUrl}?${urlParams}`);
    e.preventDefault();
    return false;
  };
  button.textContent = label || 'Zobrazit náhled';
  container.appendChild(button);

  document.body.appendChild(container);
});
