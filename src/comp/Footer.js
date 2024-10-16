/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */

import '../output.css';
import rmlogo from '../imgs/rmlogo.png';

function Footer() {
    return (
        <div className='relative bg-sienna text-floralwhite text-center py-5 '>
            <div className="text-center text-white mp5">
                <p>&#169; 2024 SEAC ("South East Asian Club") v1.0
                    <br />All rights reserved. Website presented to you by
                    <span className="flex justify-center items-center">
                        <a className='point' href="https://rinmeng.github.io" target="_blank" rel="noopener">
                            <img className="w-24 h-auto" src={rmlogo} alt="rin meng logo" />
                        </a>
                    </span>
                    See our <a href="" target="_blank" rel="noopener"
                        className="underline hover:text-slate-900 t200e">GitHub</a> for more info on licensing.
                </p>
            </div>
        </div>
    );
}

export default Footer;