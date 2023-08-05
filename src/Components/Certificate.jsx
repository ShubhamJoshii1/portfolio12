import React from 'react'
import MicrosoftCertificate from "../Assets/MicrosoftStudentLeraning.png"
import MicrosoftCerfLogo from "../Assets/MicrosoftStudentProgramLogo.png"
import GoogleStudentCerti from "../Assets/GoogleDeveloper.png"
import GoogleCertiLogo from "../Assets/GoogleDeveloperLogo.png"
import NPTELLogo from "../Assets/NPTELLogo.png"
import NPTELPython from "../Assets/NPTELPython.png"

const CertificateArr = [
    {
        Name: "NPTEL",
        Image: NPTELPython,
        Logo: NPTELLogo
    },
    {
        Name: "Google Developer Student Club",
        Image: GoogleStudentCerti,
        Logo: GoogleCertiLogo
    },
    {
        Name: "Microsoft Student Ambassador Program",
        Image: MicrosoftCertificate,
        Logo: MicrosoftCerfLogo
    }
]

const Certificate = ({setActiveNavbar}) => {
    return (
        <section id="Certificate" onMouseEnter={()=>setActiveNavbar("Certificate")}>
            <h1>Certificates</h1>
            <div id="Centerline"></div>
            <div id="AllCertificates">
                {
                    CertificateArr.map((curr, ids) => {
                        return <div id={ids % 2 === 0 ? 'certificatesCardLeft' : 'certificatesCardRight'} key={ids}>
                            <img src={curr.Image} alt="Certificate" />
                            <img src={curr.Logo} alt="Logo" />
                        </div>
                    })
                }
            <button className='seeMore'>SEE <br /> MORE</button>
            </div>
            </section>

    )
}

export default Certificate