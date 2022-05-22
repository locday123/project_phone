import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';
import styles from './Header.module.scss'
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck, faMagnifyingGlass, faMobile } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function Header(){
    return( 
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo}/>
                    <span>vienquangmobile.com</span> 
                </div>
                <div className={cx('search')}>
                    <input placeholder='Bạn cần tìm sản phẩm gì ?'/>
                    <button className={cx('search-button')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div class={cx('quick-menu')}>
                    <ul>
                        <li className={cx('quick-item')}>
                            <a href="tel:1334444">
                                <FontAwesomeIcon icon={faMobile}/>
                                <span>Gọi ngay</span>
                            </a>
                        </li>
                        <li className={cx('quick-item')}>
                            <Link to='/khuyen-mai'>
                                <FontAwesomeIcon icon={faClipboardCheck}/>
                                <span>Khuyến mãi</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;