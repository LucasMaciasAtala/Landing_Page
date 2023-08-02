import { memo, SVGProps } from 'react';

const IcoInstaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M10.0036 1.80233C12.674 1.80233 12.9903 1.81315 14.0447 1.86125C14.6787 1.86863 15.3066 1.98494 15.9012 2.20512C16.3331 2.37126 16.7254 2.62619 17.0526 2.95342C17.3798 3.28066 17.6348 3.67292 17.8009 4.10485C18.02 4.69997 18.1351 5.32835 18.1412 5.96249C18.1892 7.01695 18.2001 7.33317 18.2001 10.0036C18.2001 12.674 18.1892 12.9903 18.1412 14.0447C18.1338 14.6787 18.0175 15.3066 17.7973 15.9012C17.6301 16.3324 17.3744 16.7239 17.0468 17.0505C16.7193 17.3771 16.3269 17.6314 15.8952 17.7973C15.3006 18.0175 14.6727 18.1338 14.0387 18.1412C12.9842 18.1893 12.668 18.2001 9.99759 18.2001C7.32716 18.2001 7.01094 18.1893 5.95647 18.1412C5.32253 18.1338 4.69457 18.0175 4.10004 17.7973C3.66811 17.6311 3.27585 17.3762 2.94861 17.049C2.62138 16.7218 2.36645 16.3295 2.20031 15.8976C1.98013 15.303 1.86382 14.6751 1.85644 14.0411C1.80834 12.9867 1.79752 12.6704 1.79752 10C1.79752 7.32957 1.81195 7.01455 1.86005 5.96249C1.86742 5.32854 1.98374 4.70058 2.20392 4.10605C2.37006 3.67412 2.62498 3.28186 2.95222 2.95462C3.27945 2.62739 3.67171 2.37246 4.10364 2.20632C4.69817 1.98615 5.32613 1.86983 5.96008 1.86245C7.01455 1.81436 7.33077 1.80354 10.0012 1.80354L10.0036 1.80233ZM10.0012 0C7.28508 0 6.94481 0.0120238 5.87832 0.0601181C5.04857 0.0771567 4.22773 0.234902 3.45076 0.526633C2.7861 0.783157 2.18241 1.1758 1.67842 1.67937C1.17444 2.18294 0.781298 2.78631 0.524227 3.45076C0.233429 4.2279 0.0765028 5.04872 0.0601181 5.87832C0.0120238 6.94241 0 7.28508 0 10.0012C0 12.7173 0.0120238 13.0576 0.0601181 14.1241C0.0765224 14.9533 0.233451 15.7737 0.524227 16.5504C0.781493 17.2148 1.1747 17.818 1.67866 18.3216C2.18262 18.8251 2.78621 19.2179 3.45076 19.4746C4.2278 19.7659 5.04864 19.9232 5.87832 19.9399C6.94241 19.988 7.28508 20 10.0012 20C12.7173 20 13.0576 19.988 14.1241 19.9399C14.953 19.9233 15.7731 19.766 16.5492 19.4746C17.2138 19.2178 17.8174 18.825 18.3212 18.3212C18.825 17.8174 19.2178 17.2138 19.4746 16.5492C19.7659 15.7722 19.9232 14.9514 19.9399 14.1217C19.988 13.0576 20 12.7149 20 9.9988C20 7.28267 19.988 6.94241 19.9399 5.87592C19.9233 5.04701 19.766 4.22695 19.4746 3.45076C19.2176 2.78632 18.8246 2.18289 18.3209 1.67914C17.8171 1.17538 17.2137 0.782423 16.5492 0.52543C15.7721 0.23452 14.9513 0.0775891 14.1217 0.0613203C13.0576 0.0132261 12.7149 0.00120227 9.9988 0.00120227L10.0012 0Z'
      fill='#281932'
    />
    <path
      d='M10 4.8663C8.98434 4.8663 7.9915 5.16748 7.14701 5.73175C6.30252 6.29602 5.64432 7.09804 5.25564 8.03639C4.86696 8.97474 4.76527 10.0073 4.96342 11.0034C5.16156 11.9995 5.65064 12.9146 6.36882 13.6327C7.087 14.3509 8.00203 14.84 8.99817 15.0381C9.99431 15.2363 11.0268 15.1346 11.9652 14.7459C12.9035 14.3573 13.7055 13.6991 14.2698 12.8546C14.8341 12.0101 15.1353 11.0172 15.1353 10.0016C15.1353 8.6396 14.5942 7.33343 13.6312 6.37038C12.6681 5.40733 11.362 4.8663 10 4.8663ZM10 13.3357C9.34057 13.3357 8.69596 13.1401 8.14766 12.7738C7.59937 12.4074 7.17201 11.8867 6.91966 11.2775C6.66731 10.6682 6.60129 9.99786 6.72994 9.3511C6.85859 8.70434 7.17613 8.11026 7.64242 7.64398C8.10871 7.17769 8.70279 6.86014 9.34954 6.73149C9.9963 6.60285 10.6667 6.66886 11.2759 6.92122C11.8852 7.17357 12.4059 7.60092 12.7722 8.14922C13.1386 8.69752 13.3341 9.34213 13.3341 10.0016C13.3341 10.8858 12.9829 11.7339 12.3576 12.3592C11.7323 12.9844 10.8843 13.3357 10 13.3357Z'
      fill='#281932'
    />
    <path
      d='M15.3385 5.86186C16.0012 5.86186 16.5384 5.32462 16.5384 4.66191C16.5384 3.99919 16.0012 3.46196 15.3385 3.46196C14.6757 3.46196 14.1385 3.99919 14.1385 4.66191C14.1385 5.32462 14.6757 5.86186 15.3385 5.86186Z'
      fill='#281932'
    />
  </svg>
);
const Memo = memo(IcoInstaIcon);
export { Memo as IcoInstaIcon };