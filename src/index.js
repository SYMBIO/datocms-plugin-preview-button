import './style.css';

window.DatoCmsPlugin.init((plugin) => {
  plugin.startAutoResizer();

  const container = document.createElement('div');
  container.classList.add('container');

  const { baseUrl } = plugin.parameters.global;
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'DatoCMS-button DatoCMS-button--primary';
  button.onclick = (e) => {
    const slug = plugin.getFieldValue('slug.cs');
    const id = plugin.itemId;
    switch (plugin.itemType.id) {
      case '111456':
        window.open(`${baseUrl}/cs/predstaveni/${slug}-${id}`);
        break;

      case '107442':
        window.open(`${baseUrl}/cs/profil/${slug}-${id}`);
        break;

      default:
        break;
    }
    e.preventDefault();
    return false;
  };
  button.textContent = 'Zobrazit náhled';
  container.appendChild(button);

  document.body.appendChild(container);
});
