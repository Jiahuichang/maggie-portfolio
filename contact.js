const form = document.querySelector('#contact-form');
const submit = form.querySelector('button[type="submit"]');
const status = document.querySelector('#contact-status');
const success = document.querySelector('#contact-success');
let sending = false;
let validationAttempted = false;
const fields = [...form.querySelectorAll('[required]')];
const emptyMessages = new Map(fields.map(field => [field, document.querySelector(`#${field.id}-error`).textContent]));
// Enable custom validation only after the controller is available.
form.noValidate = true;
const validateField = field => {
  const error = document.querySelector(`#${field.id}-error`);
  const empty = !field.value.trim();
  const invalid = empty || !field.validity.valid;
  error.textContent = empty ? emptyMessages.get(field)
    : field.validity.typeMismatch ? 'Please enter a valid email address.'
    : field.validationMessage;
  error.hidden = !invalid;
  if (invalid) field.setAttribute('aria-invalid', 'true');
  else field.removeAttribute('aria-invalid');
  return !invalid;
};
fields.forEach(field => field.addEventListener('input', () => {
  if (validationAttempted) validateField(field);
}));

form.addEventListener('submit', async event => {
  event.preventDefault();
  if (sending) return;
  validationAttempted = true;
  const results = fields.map(validateField);
  if (results.includes(false)) {
    status.textContent = '';
    fields[results.indexOf(false)].focus();
    return;
  }
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
