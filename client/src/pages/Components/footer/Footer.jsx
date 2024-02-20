import "./Footer.scss"

const Footer = () => {
    return (
        <footer className="Footer" style={{background: '#D9D9D9'}}>
            <div className="Footer__content">
                <div className="Footer__content-info">
                    <div className="Footer__content-info-about">
                        <div className="Footer__shop-name">StreetForce, 2023</div>
                        <div className="Footer__shop-cooperation">Сотрудичество</div>
                    </div>
                    <div className="Footer__content-info-links">
                        <ul className="Footer__links-list">
                            <li className="Footer__links-item">
                                <a href="https://web.telegram.org/" target="_blank" rel="noopener noreferrer">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.726562 13.44C0.726562 7.1043 0.726562 3.93648 2.59127 1.96824C4.45597 0 7.45715 0 13.4596 0H14.5206C20.5231 0 23.5242 0 25.389 1.96824C27.2536 3.93648 27.2536 7.1043 27.2536 13.44V14.56C27.2536 20.8957 27.2536 24.0635 25.389 26.0318C23.5242 28 20.5231 28 14.5206 28H13.4596C7.45715 28 4.45597 28 2.59127 26.0318C0.726562 24.0635 0.726562 20.8957 0.726562 14.56V13.44Z" fill="#0077FF"/>
                                <path d="M14.8412 20.1718C8.79528 20.1718 5.34681 15.7968 5.20312 8.51685H8.23163C8.33111 13.8602 10.5638 16.1235 12.3322 16.5902V8.51685H15.184V13.1252C16.9304 12.9268 18.7649 10.8268 19.3839 8.51685H22.2356C21.7603 11.3635 19.7708 13.4635 18.356 14.3268C19.7708 15.0268 22.0368 16.8585 22.8989 20.1718H19.7598C19.0855 17.9552 17.4056 16.2402 15.184 16.0068V20.1718H14.8412Z" fill="white"/>
                                <defs>
                                <clipPath id="clip0_46_114">
                                <rect width="26.5271" height="28" fill="white" transform="translate(0.726562)"/>
                                </clipPath>
                                </defs>
                                </svg>
                                </a>
                            </li>
                            <li className="Footer__links-item">
                                <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
                                <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.5174 28C20.8427 28 26.781 21.732 26.781 14C26.781 6.26801 20.8427 0 13.5174 0C6.1922 0 0.253906 6.26801 0.253906 14C0.253906 21.732 6.1922 28 13.5174 28Z" fill="#0077FF"/>
                                <path d="M6.25779 13.8522C10.1244 12.074 12.7027 10.9018 13.9928 10.3354C17.6762 8.71827 18.4416 8.43735 18.9405 8.42808C19.0502 8.42604 19.2955 8.45474 19.4544 8.59085C19.5886 8.70577 19.6255 8.86102 19.6432 8.96998C19.6609 9.07895 19.6829 9.32716 19.6654 9.52112C19.4658 11.7348 18.6021 17.107 18.1627 19.5864C17.9768 20.6355 17.6107 20.9873 17.2562 21.0217C16.486 21.0965 15.9011 20.4844 15.1551 19.9683C13.9877 19.1605 13.3283 18.6577 12.1951 17.8696C10.8856 16.9587 11.7345 16.4581 12.4808 15.6399C12.6761 15.4258 16.0698 12.1676 16.1355 11.872C16.1437 11.835 16.1513 11.6972 16.0738 11.6245C15.9962 11.5517 15.8818 11.5766 15.7992 11.5964C15.6821 11.6244 13.8172 12.9255 10.2045 15.4995C9.67518 15.8832 9.19572 16.0701 8.76614 16.0603C8.29257 16.0496 7.38159 15.7777 6.70438 15.5454C5.87375 15.2604 5.21358 15.1097 5.27107 14.6257C5.30101 14.3736 5.62992 14.1157 6.25779 13.8522Z" fill="white"/>
                                <defs>
                                <linearGradient id="paint0_linear_46_113" x1="13.5174" y1="0" x2="13.5174" y2="27.7923" gradientUnits="userSpaceOnUse">
                                <stop />
                                <stop offset="1" />
                                </linearGradient>
                                <clipPath id="clip0_46_113">
                                <rect width="26.5271" height="28" fill="white" transform="translate(0.253906)"/>
                                </clipPath>
                                </defs>
                                </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;