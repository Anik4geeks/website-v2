import React from "react";

export default (props) => (
  <svg
    width={props.width || "48px"}
    height={props.height || "47px"}
    style={props.style}
    viewBox="0 0 48 47"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="9.5"
      y="9"
      width="38"
      height="38"
      rx="4"
      fill={props.color || "#FFB718"}
    />
    <path
      d="M6.07333 44H38.9413C40.4169 43.9961 41.8308 43.4072 42.8728 42.3624C43.9148 41.3176 44.5 39.9023 44.5 38.4267V5.57333C44.4961 4.09638 43.9077 2.68103 42.8633 1.63667C41.819 0.592304 40.4036 0.00387145 38.9267 0H6.07333C4.59638 0.00387145 3.18103 0.592304 2.13667 1.63667C1.0923 2.68103 0.503871 4.09638 0.5 5.57333V38.4267C0.503871 39.9036 1.0923 41.319 2.13667 42.3633C3.18103 43.4077 4.59638 43.9961 6.07333 44ZM4.21067 5.57333C4.21067 5.07932 4.40691 4.60555 4.75623 4.25623C5.10555 3.90691 5.57932 3.71067 6.07333 3.71067H38.9267C39.4207 3.71067 39.8945 3.90691 40.2438 4.25623C40.5931 4.60555 40.7893 5.07932 40.7893 5.57333V38.4267C40.7893 38.9207 40.5931 39.3945 40.2438 39.7438C39.8945 40.0931 39.4207 40.2893 38.9267 40.2893H6.07333C5.57932 40.2893 5.10555 40.0931 4.75623 39.7438C4.40691 39.3945 4.21067 38.9207 4.21067 38.4267V5.57333Z"
      fill="black"
    />
    <path
      d="M25.6827 33.1035H36.14C36.6036 33.0622 37.035 32.8489 37.3491 32.5055C37.6633 32.1621 37.8376 31.7136 37.8376 31.2481C37.8376 30.7827 37.6633 30.3342 37.3491 29.9908C37.035 29.6474 36.6036 29.4341 36.14 29.3928H25.6827C25.4252 29.3699 25.1657 29.4008 24.9208 29.4837C24.6759 29.5665 24.4509 29.6994 24.2602 29.8739C24.0695 30.0484 23.9171 30.2607 23.8129 30.4973C23.7087 30.7339 23.6549 30.9896 23.6549 31.2481C23.6549 31.5067 23.7087 31.7624 23.8129 31.999C23.9171 32.2356 24.0695 32.4479 24.2602 32.6224C24.4509 32.7969 24.6759 32.9298 24.9208 33.0126C25.1657 33.0955 25.4252 33.1264 25.6827 33.1035ZM12.0574 17.1461C12.2309 17.3189 12.4368 17.4558 12.6633 17.5489C12.8898 17.642 13.1325 17.6896 13.3774 17.6888C13.6203 17.6909 13.8611 17.6439 14.0854 17.5507C14.3097 17.4574 14.5129 17.3198 14.6827 17.1461L21.2387 10.5901C21.4101 10.4178 21.5459 10.2133 21.6383 9.98844C21.7307 9.76358 21.7779 9.52272 21.7772 9.27962C21.7766 9.03652 21.728 8.79593 21.6343 8.57159C21.5407 8.34725 21.4037 8.14356 21.2314 7.97214C21.059 7.80072 20.8545 7.66493 20.6297 7.57253C20.4048 7.48013 20.1639 7.43292 19.9208 7.4336C19.6777 7.43428 19.4372 7.48284 19.2128 7.5765C18.9885 7.67016 18.7848 7.80709 18.6134 7.97947L13.3774 13.2008L10.444 10.2675C10.0957 9.9253 9.62696 9.73358 9.13869 9.73358C8.65042 9.73358 8.18168 9.9253 7.83336 10.2675C7.65997 10.4393 7.52234 10.6438 7.42842 10.8691C7.33449 11.0944 7.28613 11.336 7.28613 11.5801C7.28613 11.8242 7.33449 12.0659 7.42842 12.2912C7.52234 12.5165 7.65997 12.721 7.83336 12.8928L12.0574 17.1461ZM14.5067 24.7435C13.2187 24.7464 11.9606 25.1311 10.8913 25.8491C9.82203 26.5671 8.98967 27.586 8.49947 28.777C8.00928 29.968 7.88327 31.2776 8.13738 32.5403C8.39149 33.8029 9.01431 34.9618 9.92708 35.8705C10.8398 36.7792 12.0016 37.3968 13.2653 37.6452C14.5291 37.8936 15.8381 37.7617 17.0269 37.2661C18.2157 36.7706 19.2309 35.9336 19.944 34.8611C20.6572 33.7886 21.0363 32.5288 21.0334 31.2408C21.0334 30.3851 20.8643 29.5378 20.536 28.7476C20.2076 27.9574 19.7264 27.2398 19.12 26.6361C18.5135 26.0324 17.7938 25.5544 17.0021 25.2296C16.2104 24.9048 15.3624 24.7396 14.5067 24.7435ZM14.5067 34.0421C13.9526 34.0421 13.411 33.8778 12.9504 33.57C12.4897 33.2622 12.1306 32.8247 11.9186 32.3128C11.7066 31.801 11.6511 31.2377 11.7592 30.6943C11.8673 30.1509 12.1341 29.6517 12.5259 29.26C12.9176 28.8682 13.4168 28.6014 13.9602 28.4933C14.5036 28.3852 15.0668 28.4407 15.5787 28.6527C16.0906 28.8647 16.5281 29.2238 16.8359 29.6845C17.1437 30.1451 17.308 30.6868 17.308 31.2408C17.3042 31.9826 17.0078 32.6929 16.4833 33.2174C15.9588 33.7419 15.2485 34.0383 14.5067 34.0421ZM25.6827 14.4181H36.14C36.6036 14.3769 37.035 14.1636 37.3491 13.8202C37.6633 13.4768 37.8376 13.0282 37.8376 12.5628C37.8376 12.0974 37.6633 11.6488 37.3491 11.3054C37.035 10.9621 36.6036 10.7487 36.14 10.7075H25.6827C25.4252 10.6846 25.1657 10.7155 24.9208 10.7983C24.6759 10.8811 24.4509 11.014 24.2602 11.1886C24.0695 11.3631 23.9171 11.5754 23.8129 11.812C23.7087 12.0486 23.6549 12.3043 23.6549 12.5628C23.6549 12.8213 23.7087 13.077 23.8129 13.3136C23.9171 13.5502 24.0695 13.7625 24.2602 13.9371C24.4509 14.1116 24.6759 14.2445 24.9208 14.3273C25.1657 14.4101 25.4252 14.4411 25.6827 14.4181Z"
      fill="black"
    />
  </svg>
);