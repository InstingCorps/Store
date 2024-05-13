
'use client';
import { Button, Navbar } from 'flowbite-react';

export default function ComponentNavbar() {
  return (
    <Navbar className="bg-color-secondary mb-5 inset-x-0 fixed z-30 mt-0"
      fluid
      rounded
    >

      <Navbar.Brand href="/">
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9 rounded-md"
          src="/logoIS.png"
        />
        <span className="self-center whitespace-nowrap text-2xl font-extrabold text-color-accent">
          INSTING STORE
        </span>
      </Navbar.Brand>
      <div className='flex justify-between gap-8'>
      <Button href="/Login" size="sm" className='pl-2 bg-color-accent font-bold'>Log In</Button>
      <div className="flex md:order-2 bg-white rounded-lg">
        <Navbar.Toggle />
      </div>
      </div>
      <Navbar.Collapse className="ml-12 mb-6 md:mb-3 mt-3 font-bold md:bg-color-secondary bg-white rounded-lg">
        <Navbar.Link className="border-b-slate-800 hover:bg-black hover:text-white md:text-white"
          href="/"
        >
          <p>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link className="border-b-slate-800 hover:bg-black hover:text-white md:text-white" href="/about">
          About
        </Navbar.Link>
        <Navbar.Link className="border-b-slate-800 hover:bg-black hover:text-white md:text-white" href="/check-transaction">
          Cek Transaksi
        </Navbar.Link>
        <Navbar.Link className="border-b-slate-800 hover:bg-black hover:text-white md:text-white" href="/othersPage/ResellerRegist">
          Program Reseller
        </Navbar.Link>
        <Navbar.Link className="border-b-slate-800 hover:bg-black hover:text-white md:text-white" href="http://wa.me/6288221574494?">
          Contact Admin
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


