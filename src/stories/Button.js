export const createButton = ({
  primary = true,
  size = 'md',
  backgroundColor,
  label,
  onClick,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);

  const mode = primary ? 'btn-primary' : 'btn-secondary';
  btn.className = ['btn', `btn-${size}`, mode].join(' ');

  btn.style.backgroundColor = backgroundColor;

  return btn;
};
