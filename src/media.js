import { css } from 'styled-components';

const sizes = {
  desktop: 1024,
  tablet: 768,
  mobile: 320,
};

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
		@media (min-width: ${sizes[label]}px) {
			${css(...args)}
		}
	`;

  return acc;
}, {});
export default media;
