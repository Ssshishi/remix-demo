import { Outlet, Link, useLoaderData } from '@remix-run/react'
import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import { json } from '@remix-run/node'
import type { Joke } from '@prisma/client'

import { db } from '../utils/db.server'
import stylesUrl from "~/styles/jokes.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

type loaderData = {
  jokesListItems: Array<Joke>
}

export const loader: LoaderFunction =async () => {
  const data: loaderData = {
    jokesListItems: await db.joke.findMany({
      take: 5,
      orderBy: {createAt: 'desc'}
    })
  }
  return json(data)
}

export default function Jokes() {
  const data = useLoaderData<loaderData>()

  return (
    <div className="jokes-layout">
      <header className="jokes-header">
        <div className="container">
          <h1 className="home-link">
            <Link
              to="/"
              title="Remix Jokes"
              aria-label="Remix Jokes"
            >
              <span className="logo">🤪</span>
              <span className="logo-medium">J🤪KES</span>
            </Link>
          </h1>
        </div>
      </header>
      <main className="jokes-main">
        <div className="container">
          <div className="jokes-list">
            <Link to=".">Get a random joke</Link>
            <p>Here are a few more jokes to check out:</p>
            <ul>
              {data.jokesListItems.map((joke) => (
                <li key={joke.id}>
                  <Link to={joke.id}>{joke.name}</Link>
                </li>
              ))}

            </ul>
            <Link to="new" className="button">
              Add your own
            </Link>
          </div>
          <div className="jokes-outlet">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  )
}