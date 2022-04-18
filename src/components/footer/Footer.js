import './footer.css';

function Footer() {
    return (
        <section id="basic-footer">
            <div className="footer-basic">
                <footer>
                    <div className="social">
                        <a href="https://www.instagram.com/a2b_projects/"><i className="icon ion-social-instagram"></i></a>
                        <a href="https://www.funcage.com/"><i className="icon ion-social-snapchat"></i></a>
                        <a href="https://www.facebook.com/groups/442518676508064"><i className="icon ion-social-facebook"></i></a>
                    </div>
                    <p className="copyright">The owner of this site is not responsible for any user generated content (drawings, messages, usernames)</p>
                    <a href="terms.html">
                        <p className="copyright">Terms of Service</p>
                    </a>
                    <p className="copyright">WhileTrue © 2022</p>
                </footer>
            </div>
        </section>
    );

}
export default Footer;