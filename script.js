const dialog = document.querySelector('.rsvp-dialog');

document.querySelector('[data-open-rsvp]').addEventListener('click', () => dialog.showModal());
document.querySelector('[data-close-rsvp]').addEventListener('click', () => dialog.close());

dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
