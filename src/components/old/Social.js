import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const socialObj = {
  github: {bundle: 'fab', logo: 'github', link: 'https://github.com/marchipolito'},
  youtube: {bundle: 'fab', logo: 'youtube', link: 'https://www.youtube.com/channel/UCEEixxSvS5mLmdIVLd3jIPA'},
  instagram: {bundle: 'fab', logo: 'instagram', link: 'https://www.instagram.com/marc_hipolito/'},
  linkedin: {bundle:'fab', logo: 'linkedin', link: 'https://www.linkedin.com/in/marchipolito'}
}

function Social(){
    const links = Object.keys(socialObj);
    const link = links.map(item =>
        <div className="socialContainer" key={socialObj[item].logo}>
            <a href={socialObj[item].link} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={[socialObj[item].bundle,socialObj[item].logo]} size="2x"/>
            </a>
        </div>
        )
        
    return(
        <div className='socialLinks'>
            {link}
        </div>
    )
}

export default Social;