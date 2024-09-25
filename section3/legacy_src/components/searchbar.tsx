'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Searchbar() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    router.push(`/search?q=${search}`);
  };

  return (
    <div>
      <input
        value={search}
        onChange={onChangeSearch}
        type='text'
        placeholder='검색어를 입력하세요'
      />
      <button onClick={onSubmit}>검색</button>
    </div>
  );
}
