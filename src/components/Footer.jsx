export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <a className="footer-brand" href="#home">SANDEEP MANDAL</a>
        {/* <p className="footer-role">Java Full-Stack Developer</p> */}
        <p className="footer-meta">
          <span>&copy; {year} Sandeep Mandal. All rights reserved.</span>
        </p>
      </div>
    </footer>
  )
}
