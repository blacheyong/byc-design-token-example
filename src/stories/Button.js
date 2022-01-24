export const createButton = ({
  primary = true,
  size = 'md',
  disabled = false,
  backgroundColor,
  label,
  onClick,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);

  const mode = primary ? 'btn-primary' : 'btn-secondary';
  const isDisabled = disabled ? 'disabled' : '';
  btn.className = ['btn', `btn-${size}`, isDisabled, mode].join(' ');

  btn.style.backgroundColor = backgroundColor;

  return btn;
};
