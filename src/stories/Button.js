export const createButton = ({
  primary = true,
  size = 'md',
  darkBg = false,
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
  const darkBgMode = darkBg ? 'btn-inverse' : '';
  const isDisabled = disabled ? 'disabled' : '';
  btn.className = ['btn', `btn-${size}`, isDisabled, mode, darkBgMode].join(' ');

  btn.style.backgroundColor = backgroundColor;

  return btn;
};
