import '@/styles/globals.css';
import React from 'react';
import AddressBar from '@/ui/AddressBar';
import GlobalNav from './GlobalNav';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const image = 'https://picsum.photos/id/1025/600/400/';
  return (
    <html>
      <head>
        <title>Next.js Turbopack App Directory Playground</title>
      </head>
      <body className="overflow-y-scroll ">
        <div className="">
          <div className="col-start-2">
            <GlobalNav />
          </div>

          <div className="col-start-3 space-y-6">
            <div
              className="p-12 text-center"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <h1 className="mb-4 text-4xl font-bold text-white">Pupster</h1>
              <p className="mb-8 text-white">They're the good boys and girls</p>
            </div>

            {/* <AddressBar /> */}

            {/* <div className="rounded-xl border border-zinc-800 bg-black p-8">
              {children}
            </div> */}
          </div>
          <div>
            <h1 className="p-6 text-4xl font-bold">Welcome to Pupster</h1>
            <p className="pl-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              maxime a dolorem ullam. Inventore reiciendis nisi repellat,
              accusantium ducimus nulla delectus dolores laborum repudiandae,
              deserunt neque explicabo voluptate libero fuga? Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Labore quasi et vitae
              tenetur similique, iusto assumenda sapiente repellat nulla rem
              quisquam magni eaque blanditiis vel harum tempore, itaque autem
              inventore?
            </p>
          </div>

          {/* <div className="col-start-3 col-end-4 mt-28 flex items-center justify-center">
            <div className="text-sm text-zinc-600">
              Created by the <b>Next.js</b>
              {' team at '}
              <a href="https://vercel.com">
                <b>Vercel</b>
              </a>
              {'. '}
              <a
                className="underline decoration-dotted underline-offset-4"
                href="https://github.com/vercel/next.js/examples/with-turbopack"
              >
                View the code
              </a>
              {' or '}
              <a
                className="underline decoration-dotted underline-offset-4"
                href="https://vercel.com/templates/next.js"
              >
                deploy your own
              </a>
              {'.'}
            </div>
          </div> */}
        </div>
      </body>
    </html>
  );
}
