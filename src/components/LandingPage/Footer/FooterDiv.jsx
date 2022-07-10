import './FooterDiv.css';

const FooterDiv = () => {
  return (
    <div className='footerdiv'>
        <span>Questions? Call 000-000-000-0000</span>
        <div className="listdiv">
            <div className="eachdiv">
                <span>FAQ</span>
                <span>Investor Relations</span>
                <span>Privacy</span>
                <span>Speed Test</span>
            </div>
            <div className="eachdiv">
                <span>Help Centre</span>
                <span>Jobs</span>
                <span>Cookie Preferences</span>
                <span>Legal Notices</span>
            </div>
            <div className="eachdiv">
                <span>Account</span>
                <span>Ways to Watch</span>
                <span>Corporate Information</span>
                <span>Only on Netflix</span>
            </div>
            <div className="eachdiv">
                <span>Media Centre</span>
                <span>Terms of Use</span>
                <span>Contact Us</span>
                <span>       </span>
            </div>
        </div>
        <button>English</button>
        <span>Netflix-Clone India</span>
    </div>
  )
}

export default FooterDiv