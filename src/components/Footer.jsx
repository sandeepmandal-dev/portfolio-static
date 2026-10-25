export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-role">Software Engineer</p>
        <p className="footer-meta">
          <span>&copy; {year} Sandeep Mandal. All rights reserved.</span>
        </p>
      </div>
    </footer>
  )
}
