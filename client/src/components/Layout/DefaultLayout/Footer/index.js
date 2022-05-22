import classNames from 'classnames/bind';
import styles from './Footer.module.scss'
import { Link } from 'react-router-dom';


const cx = classNames.bind(styles)

const Support = [
    {
        text: "Mua hàng trả góp",
        link: "#"
    },
    {
        text: "Chính sách bảo hành",
        link: "#"
    },
    {
        text: "Chính sách đổi trả",
        link: "#"
    },
    {
        text: "Chính sách bán hàng",
        link: "#"
    },
    {
        text: "Chính sách bảo mật",
        link: "#"
    },
    {
        text: "Chính sách sử dụng",
        link: "#"
    },
    {
        text: "Hướng dẫn mua hàng từ xa",
        link: "#"
    }
]

function Footer(){
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('inner')}>
            <div className={cx('support')}>
                        <ul>
                            {Support.map(list=>
                                <li>
                                    <Link to={list.link}>{list.text}</Link>
                                </li>
                            )}
                            
                        </ul>
             </div>
                    <div className='contact'>
                        <ul>
                            {Support.map(list=>
                                <li>
                                    <Link to={list.link}>{list.text}</Link>
                                </li>
                            )}
                            
                        </ul>
                    </div>
                    <div className='service'>
                        <ul>
                            {Support.map(list=>
                                <li>
                                    <Link to={list.link}>{list.text}</Link>
                                </li>
                            )}
                            
                        </ul>
                    </div>
            </div>
        </footer>
    );

}

export default Footer;