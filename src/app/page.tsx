"use client";

import { useEffect, useState } from "react";
import { getTypeahead } from "./actions";

type Hint = {
  fulladd: string;
  xid: string;
};

export default function Home() {
  const [address, setAddress] = useState<string>("");
  const [hints, setHints] = useState<Hint[]>([]);

  useEffect(() => {
    if (!address) return;

    getTypeahead(address).then((data) => {
      setHints(data);
    });
  }, [address]);

  return (
    <main className="bg-slate-200 p-10">
      <form className="relative" role="search" autoComplete="off">
        <span
          className="utds-icon-before-search search-modal__icon-search vcenter"
          aria-hidden="true"
        ></span>
        <label
          htmlFor="search-example-id"
          className="search-modal__input-label visually-hidden"
        >
          Enter the street address
        </label>
        <input
          type="text"
          className="search-modal__input"
          placeholder="123 South Main Street, Salt Lake City"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <div className="search-modal__button-wrapper vcenter visually-hidden">
          <button
            type="button"
            className="search-modal__button button button--solid button--primary-color"
          >
            Search Now
          </button>
        </div>
      </form>
      <ul>
        {hints.length > 1 &&
          hints.map((hint) => (
            <li
              className="cursor-pointer"
              key={hint.xid}
              onClick={() => setAddress(hint.fulladd)}
            >
              {hint.fulladd}
            </li>
          ))}
      </ul>
    </main>
  );
}
