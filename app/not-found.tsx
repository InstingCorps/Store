import Link from 'next/link'
import '../app/styles/not-founds.css'
export default function NotFound() {
  return (
    <div>
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>404</h1>
          <h2>Halaman tidak ditemukan</h2>
        </div>
        <Link className="mt-6" href="/">
          Halaman Utama
        </Link>
      </div>
    </div>
    </div>
  )
}