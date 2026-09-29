const form = document.querySelector('#contact-form');
const submit = form.querySelector('button[type="submit"]');
const status = document.querySelector('#contact-status');
const success = document.querySelector('#contact-success');
let sending = false;

form.addEventListener('submit', async event => {
  event.preventDefault();
  if (sending || !form.reportValidity()) return;
  sending = true;
  submit.disabled = true;
  submit.textContent = 'Sending…';
  form.setAttribute('aria-busy', 'true');
  status.textContent = '';
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);
  try {
    const response = await fetch(form.action, {
      method: 'POST', body: new FormData(form),
      headers: { Accept: 'application/json' }, signal: controller.signal
    });
    if (!response.ok) throw new Error('Submission failed');
    form.hidden = true;
    success.hidden = false;
    success.focus();
    form.reset();
  } catch (error) {
    status.textContent = 'We couldn’t confirm your message was sent. Your text is still here—please try again or email hello@maggie-chang.com.';
  } finally {
    clearTimeout(timeout);
    sending = false;
    submit.disabled = false;
    submit.textContent = 'Send message';
    form.removeAttribute('aria-busy');
  }
});
