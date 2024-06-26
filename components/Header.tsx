'use client'
import Link from 'next/link'
import React from 'react'
import SearchBar from './SearchBar'

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    onSearch(query);
  };

  return (
    <header className="flex flex-col md:flex-row justify-between items-center bg-slate-100 p-4 md:p-10 w-full rounded-md shadow-lg">
      <Link href="/" className="mb-4 md:mb-0">
        <h1 className="text-2xl font-bold">Weather App</h1>
      </Link>
      <SearchBar onSearch={handleSearch} />
    </header>
  )
}

export default Header;
