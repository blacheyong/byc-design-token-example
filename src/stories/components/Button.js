export const createButton = ({
  primary = true,
  secondary = false,
  size = 'md',
  darkBg = false,
  disabled = false,
  backgroundColor,
  label,
  link = false,
  onClick,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);

  // const mode = primary ? 'btn-primary' : 'btn-secondary';
  const isPrimary = primary ? 'btn-primary' : '';
  const isSecondary = secondary ? 'btn-secondary' : '';
  const darkBgMode = darkBg ? 'btn-inverse' : '';
  const isDisabled = disabled ? 'disabled' : '';
  const isLink = link ? 'btn-link' : '';
  btn.className = ['btn', `btn-${size}`, isPrimary, isSecondary, isDisabled, isLink, darkBgMode].join(' ');

  btn.style.backgroundColor = backgroundColor;

  return btn;
};
