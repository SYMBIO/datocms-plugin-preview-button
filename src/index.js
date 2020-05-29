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
    const { locale } = plugin;
    const slug = plugin.getFieldValue(`slug.${locale}`);
    const url = plugin.getFieldValue(`url.${locale}`);
    const id = plugin.itemId;
    switch (plugin.itemType.id) {
      case '111456': {
        const path = locale === 'en' ? 'show' : 'predstaveni';
        window.open(`${baseUrl}/${locale}/${path}/${slug}-${id}`);
        break;
      }

      case '111455': {
        const path = locale === 'en' ? 'show' : 'predstaveni';
        const production = plugin.getFieldValue('production');
        const startAt = plugin
          .getFieldValue('start_at')
          .replace(':', '-')
          .replace('T', '-')
          .substr(0, 16);
        window.open(
          `${baseUrl}/${locale}/${path}/nahled-${production}?t=${startAt}`,
        );
        break;
      }

      case '107442': {
        const path = locale === 'en' ? 'profile' : 'profil';
        window.open(`${baseUrl}/${locale}/${path}/${slug}-${id}`);
        break;
      }

      case '99631':
        window.open(`${baseUrl}/${locale}/${url}`);
        break;

      case '114410': {
        const path = locale === 'en' ? 'news' : 'aktuality';
        window.open(`${baseUrl}/${locale}/${path}/${slug}`);
        break;
      }

      case '111481': {
        const path = locale === 'en' ? 'press-releases' : 'tiskove-zpravy';
        window.open(`${baseUrl}/${locale}/${path}/${slug}`);
        break;
      }

      default:
        window.open(`${baseUrl}?locale=${locale}&type=${plugin.itemType.id}&id=${plugin.itemId}&slug=${slug}&url=${url}`);
        break;
    }
    e.preventDefault();
    return false;
  };
  button.textContent = 'Zobrazit náhled';
  container.appendChild(button);

  document.body.appendChild(container);
});
